"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function ThreeModel() {
  const mountRef = useRef(null);
  const [showBadges, setShowBadges] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    let model = null;
    let gavel = null;

    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      50,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 10);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    mountRef.current.appendChild(renderer.domElement);

    // LIGHTING
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const goldLight = new THREE.PointLight(0xd4af37, 3);
    goldLight.position.set(-3, 3, 3);
    scene.add(goldLight);

    // // CONTROLS
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.enableZoom = false;

    // LOADER
    const loader = new GLTFLoader();

    // LOAD SCALE
    loader.load("/models/scales.glb", (gltf) => {
      model = gltf.scene;

      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      model.position.set(-center.x, -center.y -1, -center.z);
      const scale = 3 / Math.max(size.x, size.y, size.z);
      model.scale.setScalar(scale);

      scene.add(model);
    });

    // LOAD GAVEL
    loader.load("/models/judges_gavel.glb", (gltf) => {
      gavel = gltf.scene;
      gavel.position.set(0, -2.5, 0);
      gavel.scale.set(3, 3, 3);
      scene.add(gavel);
    });

    // ANIMATION
    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      if (model) {
        model.rotation.y += 0.007;
        model.position.y = 1 + Math.sin(time) * 0.08;
      }

      if (gavel) {
        gavel.rotation.y += 0.002;
      }

      // controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // RESIZE
    const handleResize = () => {
      if (!mountRef.current) return;

      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // CLEANUP
    return () => {
      window.removeEventListener("resize", handleResize);
      // controls.dispose();
      renderer.dispose();

      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="container">
      {/* 3D CANVAS */}
      <div
        ref={mountRef}
        className="canvas"
        onMouseEnter={() => setShowBadges(true)}
        onMouseLeave={() => setShowBadges(false)}
        onClick={() => setShowBadges(true)}
      />

      {/* BADGES (ONLY ON HOVER) */}
      <div className={`left-badge ${showBadges ? "show" : ""}`}>
        15+ years of expertise in taxation
      </div>

      <div className={`right-badge ${showBadges ? "show" : ""}`}>
        Trusted by Professionals
      </div>

      {/* CSS */}
      <style jsx>{`
        .container {
          position: relative;
          width: 100%;
          height: 1000px;
          overflow: hidden;
        }

        .canvas {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        /* BADGE BASE */
        .left-badge,
        .right-badge {
          position: absolute;
          background: linear-gradient(135deg, #d4af37, #f4e5c2);
          padding: 12px 18px;
          border-radius: 10px;
          font-weight: 600;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
          backdrop-filter: blur(10px);

          opacity: 0;
          transform: translateY(20px) scale(0.95);
          transition: all 0.4s ease;
        }

        /* POSITIONS */
        .left-badge {
          left: 5%;
          top: 60%;
        }

        .right-badge {
          right: 5%;
          bottom: 15%;
        }

        /* SHOW STATE */
        .show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </div>
  );
}