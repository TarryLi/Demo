import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  GridHelper,
  AxesHelper,
  SpotLight,
  Mesh,
  SpotLightHelper,
  AmbientLight,
  SphereGeometry,
  BoxHelper,
  MeshBasicMaterial,
  CameraHelper,
  PolarGridHelper,
  Vector2,
  ShaderMaterial,
  Layers
} from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

interface LightOpt {
  x: number;
  y: number;
  z: number;
}

interface CameraOpt {
  position?: LightOpt;
  fov?: number; width?: number;
  height?: number;
  near?: number;
  far?: number;
}

export default class LChart {
  private dom: Document;

  private scene: Scene;

  private camera: PerspectiveCamera;

  private renderer: WebGLRenderer;

  private lightOpt: LightOpt = { x: 0, y: 3, z: 2 };

  private cameraOpt: LightOpt = { x: 1, y: 2, z: 4 };

  private bloomComposer;

  private finalComposer;

  private params = {
    threshold: 0,
    strength: 1.7,
    radius: 1,
    exposure: 0.5
  };

  private BLOOM_SCENE = 2;

  private bloomLayer;

  private darkMaterial;

  private materials: Record<string, any> = {};

  constructor(dom: Document, lightOpt: LightOpt, cameraOpt: CameraOpt) {
    this.lightOpt = Object.assign(this.lightOpt, lightOpt);
    this.cameraOpt = Object.assign(this.cameraOpt, cameraOpt?.position);
    const { fov = 30, width = 500, height = 500, near = 1, far = 1000 } = cameraOpt;
    this.dom = dom;
    // 添加场景
    this.scene = new Scene();

    // 添加相机
    this.camera = new PerspectiveCamera(fov, width / height, near, far);
    // 设置相机位置
    this.setCamera();
    // 开灯
    this.setLight();
    // 渲染器
    this.renderer = new WebGLRenderer({
      antialias: true,
      alpha: true
    });
    // 设置背景色
    this.renderer.setClearColor('#062C5C', 0);
    // 设置可视区域
    this.renderer.setSize(width, height);

    // 获取dom节点，并将渲染结果插入dom
    this.dom.appendChild(this.renderer.domElement);
    // 渲染
    this.renderer.render(this.scene, this.camera);

    // 光
    this.darkMaterial = new MeshBasicMaterial({ color: 'black' });

    this.bloomLayer = new Layers();
    this.bloomLayer.set(this.BLOOM_SCENE);

    const renderScene = new RenderPass(this.scene, this.camera);

    const bloomPass = new UnrealBloomPass(new Vector2(width, height), 1.5, 0.4, 0.85);
    bloomPass.threshold = this.params.threshold;
    bloomPass.strength = this.params.strength;
    bloomPass.radius = this.params.radius;

    this.bloomComposer = new EffectComposer(this.renderer);
    this.bloomComposer.renderToScreen = false;
    this.bloomComposer.addPass(renderScene);
    this.bloomComposer.addPass(bloomPass);

    const mixPass = new ShaderPass(
      new ShaderMaterial({
        uniforms: {
          baseTexture: { value: null },
          bloomTexture: { value: this.bloomComposer.renderTarget2.texture }
        },
        vertexShader: 'varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}',
        fragmentShader: 'uniform sampler2D baseTexture;uniform sampler2D bloomTexture;varying vec2 vUv;void main() {gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );}',
        defines: {}
      }), 'baseTexture'
    );
    mixPass.needsSwap = true;

    const outputPass = new OutputPass();

    this.finalComposer = new EffectComposer(this.renderer);
    this.finalComposer.addPass(renderScene);
    this.finalComposer.addPass(mixPass);
    this.finalComposer.addPass(outputPass);

    this.bloomComposer.render();
    this.finalComposer.render();

    // 辅助措施
    // 添加坐标系帮助
    this.buildAuxSystem();
    // 相机帮助
    // this.buildCamera();
    // 添加可视区域盒子辅助
    // this.buildBox();
    // 灯光帮助
    // this.buildLight();
    // this.buildGrid();
  }

  /**
   * @description 画饼图
   * @param data
   * @param ladder
   * @param separation
   */
  public setChartData(mesh: Mesh) {
    const darkenNonBloomed = (obj: any) => {
      if (obj.isMesh && this.bloomLayer.test(obj.layers) === false) {
        this.materials[obj.uuid] = obj.material;
        obj.material = this.darkMaterial;
      }
    };

    const restoreMaterial = (obj: any) => {
      if (this.materials[obj.uuid]) {
        obj.material = this.materials[obj.uuid];
        delete this.materials[obj.uuid];
      }
    };

    this.scene.add(mesh);
    this.renderer.render(this.scene, this.camera);

    this.scene.traverse(darkenNonBloomed);
    this.bloomComposer.render();
    this.scene.traverse(restoreMaterial);
    this.finalComposer.render();
  }

  /**
   * @description 开灯
   */
  private setLight() {
    const ambientLight = new AmbientLight(0xFFFFFF);
    this.scene.add(ambientLight);
    const { x, y, z } = this.lightOpt;
    const spotLight = new SpotLight(0xFFFFFF, 10);
    spotLight.position.set(x, y, z);
    this.scene.add(spotLight);
  }

  /**
   * @description 设置相机位置
   */
  private setCamera() {
    const { x, y, z } = this.cameraOpt;
    this.camera.position.set(x, y, z);
    this.camera.lookAt(this.scene.position);
  }

  /**
         * @description 相机帮助
         */
  private buildCamera() {
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const helper = new CameraHelper(camera);
    this.scene.add(helper);
  }

  /**
         * @description 灯光帮助
         */
  private buildLight() {
    const { x, y, z } = this.lightOpt;
    const spotLight = new SpotLight(0xffffff);
    spotLight.position.set(x, y, z);
    this.scene.add(spotLight);
    const spotLightHelper = new SpotLightHelper(spotLight);
    this.scene.add(spotLightHelper);

    // const pointLight = new PointLight( 0xff0000, 1, 100 );
    // pointLight.position.set( x, y, z );
    // this.scene.add( pointLight );
    // const sphereSize = 1;
    // const pointLightHelper = new PointLightHelper( pointLight, sphereSize );
    // this.scene.add( pointLightHelper );
  }

  /**
         * @description 设置坐标系辅助线
         */
  private buildAuxSystem() {
    const gridHelper = new GridHelper(320, 32);
    const axesHelper = new AxesHelper(320);
    this.scene.add(gridHelper);
    this.scene.add(axesHelper);
  }

  /**
         * @description 构建可视区域盒子
         */
  private buildBox() {
    const sphere = new SphereGeometry();
    const object = new Mesh(sphere, new MeshBasicMaterial());
    const box = new BoxHelper(object, 0xffff00);
    this.scene.add(box);

    // const box = new Box3();
    // box.setFromCenterAndSize( new Vector3( 1, 1, 1 ), new Vector3( 2, 1, 3 ) );

    // const helper = new Box3Helper( box );
    // this.scene.add( helper );
  }

  /**
         * @description 网格线帮助
         */
  private buildGrid() {
    // const size = 10;
    // const divisions = 10;

    // const gridHelper = new GridHelper( size, divisions );
    // this.scene.add( gridHelper );

    const radius = 10;
    const radials = 16;
    const circles = 8;
    const divisions = 64;

    const helper = new PolarGridHelper(radius, radials, circles, divisions);
    this.scene.add(helper);
  }

}
