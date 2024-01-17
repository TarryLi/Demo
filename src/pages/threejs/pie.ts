import {
  MeshLambertMaterial, Mesh, ExtrudeGeometry, Shape, ArcCurve,
  CircleGeometry, MeshBasicMaterial, RingGeometry
} from 'three';

interface Size {
  radius?: number;
  angle: number;
  height: number;
  color?: number;
  separation?: number;
}

interface Manifest {
  ladder?: boolean; // 阶梯
  separation?: boolean; // 分隔
  loop?: boolean; // 暂时没用
  cylinder?: boolean; // 柱状图 圆柱
  heap?: boolean; // 堆叠
  smooth?: boolean; // 平滑曲线
  noLine?: boolean;
  concentric?: boolean;
  concentricLoop?: boolean;
  concentricLoopSame?: boolean;
  innerRadiusRatio?: number;
  radius?: number;
}

export default class PieChart {
  public group: Mesh;

  private ladder: boolean;

  private separation: boolean;

  private loop: boolean;

  private concentric: boolean;

  private concentricLoop: boolean;

  private concentricLoopSame: boolean;

  private innerRadiusRatio: number;

  constructor(data: Size[] = [], manifest: Manifest) {
    const sumAngleArr = this.getSumAngle(data);
    const {
      ladder, separation, loop, concentric, concentricLoop,
      radius = 0.5, innerRadiusRatio, concentricLoopSame = true
    } = manifest;
    this.ladder = (ladder as boolean);
    this.separation = (separation as boolean);
    this.loop = (loop as boolean);
    this.concentric = (concentric as boolean);
    this.concentricLoop = (concentricLoop as boolean);
    this.concentricLoopSame = (concentricLoopSame as boolean);
    this.innerRadiusRatio = (innerRadiusRatio as number) || 1.5;
    this.group = new Mesh();
    data.forEach((item, index) => {
      const circleMesh = this.drawCircle({ radius, ...item }, sumAngleArr[index], index);
      if (this.concentric) {
        circleMesh.position.y += index * 0.2;
      }
      this.group.add(circleMesh);
      this.group.position.z = 0.5;
    });

    const Background = this.drawBackground(radius);
    Background.forEach(backgroundMesh => {
      this.group.add(backgroundMesh);
    });
  }

  private drawBackground(radius: number) {
    const bgGroup: Mesh[] = [];

    const circleMesh = [
      {
        radius: radius / this.innerRadiusRatio,
        Material: { color: '#3CF0E1', transparent: true, opacity: 0.2, depthTest: true }
      },
      {
        radius: radius / this.innerRadiusRatio / 3,
        Material: { color: '#3CF0E1', transparent: true, opacity: 0.2, depthTest: true },
        positionY: 0.01
      },
      {
        radius: radius / this.innerRadiusRatio / 3 * 2,
        Material: { color: '#3CF0E1', transparent: true, opacity: 0.2, depthTest: true },
        positionY: 0.02
      },
      {
        radius: radius / this.innerRadiusRatio / 3 * 1.5,
        Material: { color: '#3CF0E1', transparent: true, opacity: 0.2, depthTest: true },
        isBlur: true,
        positionY: -radius / 1.5,
        bloom: false
      }
    ];

    const ringMesh = [
      {
        radius: radius / this.innerRadiusRatio / 3,
        Material: { color: '#3CF0E1', depthTest: true },
        positionY: 0.01
      },
      {
        radius: radius / this.innerRadiusRatio / 3 * 2,
        Material: { color: '#3CF0E1', depthTest: true },
        positionY: 0.02
      },
      {
        radius: radius / this.innerRadiusRatio / 3 * 1.5,
        Material: { color: '#3CF0E1', depthTest: true, emissive: '#ffffff' },
        positionY: -radius / 1.5,
        bloom: true
      }
    ];

    circleMesh.forEach((item) => {
      const geometry = new CircleGeometry(item.radius, 64);
      const material = new MeshBasicMaterial(item.Material);
      const circle = new Mesh(geometry, material);
      circle.rotation.x = -Math.PI / 2;
      circle.position.y = item.positionY || 0;
      item.bloom && circle.layers.enable(2);
      bgGroup.push(circle);
    });

    ringMesh.forEach((item) => {
      const geometry = new RingGeometry(item.radius, item.radius + 0.01, 256);
      const material = new MeshBasicMaterial(item.Material);
      const ring = new Mesh(geometry, material);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = item.positionY || 0;
      item.bloom && ring.layers.enable(2);
      bgGroup.push(ring);
    });

    return bgGroup;
  }

  // 获取绕y轴偏转角度
  private getSumAngle(data: Size[]): number[] {
    const angleArr = data.map((item) => item.angle);
    const rotationAngle = angleArr.reduce((acc: number[], cur, index) => {
      if (index === 0) {
        acc.push(cur);
      } else {
        acc.push(cur + acc[index - 1]);
      }
      return acc;
    }, []);
    rotationAngle.pop();
    rotationAngle.unshift(0);
    return rotationAngle;
  }

  /**
       * @description 画蛋糕
       * @param item
       * @param preRotation
       * @returns
       */
  private drawCircle(item: Size, preRotation: number, index: number) {
    const { radius = 0.5, angle, height, color } = item;
    let shape = new Shape();
    let h = height;
    if (this.loop) {
      shape = this.drawLoopShape(shape, radius, angle);
    } else if (this.concentric) {
      h = 0.2;
      shape = this.drawConcentricShape(shape, radius, angle);
    } else if (this.concentricLoop) {
      shape = this.drawConcentricLoopShape(shape, radius, angle, index, preRotation);
    } else {
      shape = this.drawNormalShape(shape, radius, angle);
    }
    const extrudeSettings = {
      curveSegments: 1000,
      steps: 1,
      depth: this.ladder ? h : 0.12,
      // depth: 0,
      bevelEnabled: false,
      bevelThickness: 0,
      bevelSize: 0,
      bevelOffset: 0,
      bevelSegments: 0
    };

    const geometry = new ExtrudeGeometry(shape, extrudeSettings);
    const material = new MeshLambertMaterial({ color, transparent: true, opacity: 0.9, depthTest: true });
    const mesh = new Mesh(geometry, material);

    mesh.rotation.x = -Math.PI / 2;
    if (!(this.concentricLoop && this.concentricLoopSame)) {
      mesh.rotation.z = preRotation;
    }

    return mesh;
  }

  private drawLoopShape(shape: Shape, radius: number, angle: number) {
    let originPoint = [0, 0];
    if (this.separation) {
      originPoint = [0.04, 0.04];
    }
    shape.moveTo(originPoint[0], originPoint[1]);
    const curOuter = new ArcCurve(originPoint[0], originPoint[1], radius, 0, angle, false);
    const curInner = new ArcCurve(originPoint[0], originPoint[1], radius / this.innerRadiusRatio, 0, angle, false);

    const pointsOuter = curOuter.getPoints(50).reverse();
    const pointsInner = curInner.getPoints(50);

    shape.moveTo(radius / this.innerRadiusRatio + originPoint[0], originPoint[1]);
    for (const i of pointsInner) {
      shape.lineTo(i.x, i.y);
    }
    shape.lineTo(radius * Math.cos(angle) + originPoint[0], radius * Math.sin(angle) + originPoint[1]);
    for (const i of pointsOuter) {
      shape.lineTo(i.x, i.y);
    }
    shape.lineTo(radius / this.innerRadiusRatio + originPoint[0], originPoint[1]);
    return shape;
  }

  private drawNormalShape(shape: Shape, radius: number, angle: number) {
    let originPoint = [0, 0];
    if (this.separation) {
      originPoint = [0.04, 0.04];
    }
    shape.moveTo(originPoint[0], originPoint[1]);
    shape.arc(0, 0, radius, 0, angle, false);
    if (this.separation) {
      shape.lineTo(0.04, 0.04);
    } else {
      shape.lineTo(0, 0);
    }
    return shape;
  }

  private drawConcentricShape(shape: Shape, radius: number, angle: number) {
    shape.arc(0, 0, radius / 2 * angle, 0, Math.PI * 2, false);
    return shape;
  }

  private drawConcentricLoopShape(shape: Shape, radius: number, angle: number, index: number, preRotation: number) {
    const r = radius / 3;
    const deg = angle * 2;
    const curOuter = new ArcCurve(0, 0, r * deg + 0.1, 0, deg, false);
    const curInner = new ArcCurve(0, 0, r * deg, 0, deg, false);

    const pointsOuter = curOuter.getPoints(50).reverse();
    const pointsInner = curInner.getPoints(50);

    shape.moveTo(r * deg, 0);
    for (const i of pointsInner) {
      shape.lineTo(i.x, i.y);
    }
    shape.lineTo((r * deg + 0.1) * Math.cos(deg), (r * deg + 0.1) * Math.sin(deg));
    for (const i of pointsOuter) {
      shape.lineTo(i.x, i.y);
    }
    shape.lineTo(r * deg + 0.1, 0);

    // index
    return shape;
  }
}
