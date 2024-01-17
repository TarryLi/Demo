/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import style from './index.module.less';

export default () => {
  const ref = useRef();
  useEffect(() => {
    const BLOOM_SCENE = 2;

    const bloomLayer = new THREE.Layers();
    bloomLayer.set(BLOOM_SCENE);

    const params = {
      threshold: 0,
      strength: 1,
      radius: 0.5,
      exposure: 1
    };

    const darkMaterial = new THREE.MeshBasicMaterial({ color: 'black' });
    const materials = {};

    function darkenNonBloomed(obj) {
      if (obj.isMesh && bloomLayer.test(obj.layers) === false) {
        materials[obj.uuid] = obj.material;
        obj.material = darkMaterial;
      }
    }

    function restoreMaterial(obj) {
      if (materials[obj.uuid]) {
        obj.material = materials[obj.uuid];
        delete materials[obj.uuid];
      }
    }

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    // renderer.setClearColor('blue', 0);
    ref.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, ref.current.clientWidth / ref.current.clientHeight, 1, 200);
    camera.position.set(0, 2, 4);
    camera.lookAt(scene.position);

    const renderScene = new RenderPass(scene, camera);

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(ref.current.clientWidth, ref.current.clientHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = params.threshold;
    bloomPass.strength = params.strength;
    bloomPass.radius = params.radius;

    const bloomComposer = new EffectComposer(renderer);
    bloomComposer.renderToScreen = false;
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);

    const mixPass = new ShaderPass(
      new THREE.ShaderMaterial({
        uniforms: {
          baseTexture: { value: null },
          bloomTexture: { value: bloomComposer.renderTarget2.texture }
        },
        vertexShader: 'varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}',
        fragmentShader: 'uniform sampler2D baseTexture;uniform sampler2D bloomTexture;varying vec2 vUv;void main() {gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );}',
        defines: {}
      }), 'baseTexture'
    );
    mixPass.needsSwap = true;

    const outputPass = new OutputPass();

    const finalComposer = new EffectComposer(renderer);
    finalComposer.addPass(renderScene);
    finalComposer.addPass(mixPass);
    finalComposer.addPass(outputPass);

    function render() {
      scene.traverse(darkenNonBloomed);
      bloomComposer.render();
      scene.traverse(restoreMaterial);

      finalComposer.render();
    }

    function disposeMaterial(obj) {
      if (obj.material) {
        obj.material.dispose();
      }
    }

    function setupScene() {
      scene.traverse(disposeMaterial);
      // scene.children.length = 0;

      const sphere1 = new THREE.Mesh(
        new THREE.RingGeometry(0.5, 0.52, 256),
        new THREE.MeshBasicMaterial({ color: '#3CF0E1', transparent: true, opacity: 0.2 })
      );
      sphere1.rotation.x = -Math.PI / 2;
      sphere1.position.y = -1;
      sphere1.position.x = -1;
      sphere1.layers.enable(BLOOM_SCENE);
      scene.add(sphere1);

      const sphere2 = new THREE.Mesh(
        new THREE.RingGeometry(0.5, 0.52, 256),
        new THREE.MeshBasicMaterial({ color: 'red', transparent: true, opacity: 0.2 })
      );
      sphere2.rotation.x = -Math.PI / 2;
      sphere2.position.y = -1;
      sphere2.position.x = 1;
      // sphere2.layers.enable(BLOOM_SCENE);
      scene.add(sphere2);

      render();
    }

    function guiG() {
      const gui = new GUI();

      const bloomFolder = gui.addFolder('bloom');

      bloomFolder.add(params, 'threshold', 0.0, 1.0).onChange(function (value) {
        bloomPass.threshold = Number(value);
        render();
      });

      bloomFolder.add(params, 'strength', 0.0, 3).onChange(function (value) {
        bloomPass.strength = Number(value);
        render();
      });

      bloomFolder.add(params, 'radius', 0.0, 1.0).step(0.01).onChange(function (value) {
        bloomPass.radius = Number(value);
        render();
      });

      const toneMappingFolder = gui.addFolder('tone mapping');

      toneMappingFolder.add(params, 'exposure', 0.1, 2).onChange(function (value) {
        renderer.toneMappingExposure = Math.pow(value, 4.0);
        render();
      });

      const gridHelper = new THREE.GridHelper(320, 32);
      const axesHelper = new THREE.AxesHelper(320);
      scene.add(gridHelper);
      scene.add(axesHelper);
    }

    guiG();
    setupScene();
  }, []);

  return <div className={style.wrap} ref={ref}>

  </div>;
};
