"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface SculptureProps {
  mousePos: { x: number; y: number };
}

export const DigitalSculptureThree: React.FC<SculptureProps> = ({ mousePos }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef(mousePos);

  // Keep mouseRef updated without restarting useEffect
  useEffect(() => {
    mouseRef.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 7.2;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    // 3. Dynamic Lighting
    const pointLightCyan = new THREE.PointLight(0x00d9ff, 2.5, 50);
    pointLightCyan.position.set(4, 4, 4);
    scene.add(pointLightCyan);

    const pointLightViolet = new THREE.PointLight(0xa855f7, 2.0, 50);
    pointLightViolet.position.set(-4, -4, 2);
    scene.add(pointLightViolet);

    const pointLightIndigo = new THREE.PointLight(0x6366f1, 1.5, 50);
    pointLightIndigo.position.set(0, 5, -3);
    scene.add(pointLightIndigo);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // 4. Main Sculpture Group
    const group = new THREE.Group();
    scene.add(group);

    // Central Core (Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(1.35, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x0d0d26,
      emissive: 0x6366f1,
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Outer Wireframe Hull
    const outerWireGeo = new THREE.IcosahedronGeometry(1.75, 1);
    const outerWireMat = new THREE.MeshStandardMaterial({
      color: 0x00d9ff,
      emissive: 0x00d9ff,
      emissiveIntensity: 0.6,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const outerWireMesh = new THREE.Mesh(outerWireGeo, outerWireMat);
    group.add(outerWireMesh);

    // Inner Glowing Torus Knot
    const knotGeo = new THREE.TorusKnotGeometry(0.65, 0.16, 64, 16);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    group.add(knotMesh);

    // Orbital Ring 1 (Neon Cyan)
    const ring1Geo = new THREE.TorusGeometry(2.4, 0.022, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x00d9ff });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    group.add(ring1);

    // Orbital Ring 2 (Neon Violet)
    const ring2Geo = new THREE.TorusGeometry(2.75, 0.025, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    group.add(ring2);

    // Orbital Ring 3 (Electric Indigo)
    const ring3Geo = new THREE.TorusGeometry(3.1, 0.018, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({ color: 0x6366f1 });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    group.add(ring3);

    // Nebula Particle Constellation
    const particleCount = 200;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i + 2] = (Math.random() - 0.5) * 12;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x00d9ff,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // 5. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Mouse-responsive smooth lerp
      const targetY = mouseRef.current.x * 0.45;
      const targetX = -mouseRef.current.y * 0.35;
      group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetY, 0.05);
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetX, 0.05);
      group.position.y = Math.sin(time * 0.8) * 0.15;

      // Rotations
      coreMesh.rotation.x += delta * 0.35;
      coreMesh.rotation.y += delta * 0.5;

      outerWireMesh.rotation.x -= delta * 0.2;
      outerWireMesh.rotation.z += delta * 0.3;

      knotMesh.rotation.y += delta * 0.4;
      knotMesh.rotation.z -= delta * 0.25;

      ring1.rotation.x = Math.PI / 3 + time * 0.4;
      ring1.rotation.y = time * 0.3;

      ring2.rotation.y = Math.PI / 4 + time * 0.35;
      ring2.rotation.z = time * 0.25;

      ring3.rotation.x = -Math.PI / 6 + time * 0.25;
      ring3.rotation.z = -time * 0.4;

      particles.rotation.y = time * 0.05;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    // 6. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      outerWireGeo.dispose();
      outerWireMat.dispose();
      knotGeo.dispose();
      knotMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[420px] lg:min-h-[540px]">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
