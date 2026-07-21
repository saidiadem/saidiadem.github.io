"use client";

import Matter from "matter-js";
import { useEffect, useRef, useState } from "react";

const MEDIA_URL =
  "https://cdn.jsdelivr.net/gh/saidiadem/saidiadem.github.io@portfolio-media/public";

const skillIcons = [
  "react.svg",
  "nest.png",
  "symfony.png",
  "java.png",
  "python.png",
  "javascript.png",
  "android.png",
  "html.png",
  "css.png",
  "cpp.png",
  "sql.png",
].map((file) => `${MEDIA_URL}/${file}`);

export default function MatterBox() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(scene);
    return () => observer.unobserve(scene);
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const { Bodies, Composite, Engine, Mouse, MouseConstraint, Render, Runner } = Matter;
    const width = Math.min(scene.clientWidth || 760, 760);
    const height = width < 520 ? 390 : 500;
    const engine = Engine.create();
    const world = engine.world;
    const render = Render.create({
      element: scene,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "#0e1014",
      },
    });

    Render.run(render);
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    const wall = { isStatic: true, render: { fillStyle: "#0e1014" } };
    Composite.add(world, [
      Bodies.rectangle(width / 2, height + 24, width, 48, wall),
      Bodies.rectangle(width + 24, height / 2, 48, height, wall),
      Bodies.rectangle(-24, height / 2, 48, height, wall),
      Bodies.rectangle(width / 2, -24, width, 48, wall),
    ]);

    const radius = width < 520 ? 34 : 43;
    const timers: ReturnType<typeof setTimeout>[] = [];

    skillIcons.forEach((texture, index) => {
      const timer = setTimeout(() => {
        const image = new Image();
        image.onload = () => {
          const body = Bodies.circle(
            radius + Math.random() * Math.max(1, width - radius * 2),
            radius + Math.random() * Math.max(1, height / 2 - radius),
            radius,
            {
              restitution: 0.82,
              friction: 0.25,
              render: {
                fillStyle: "transparent",
                sprite: {
                  texture,
                  xScale: (radius * 2) / image.width,
                  yScale: (radius * 2) / image.height,
                },
              },
            },
          );
          Composite.add(world, body);
        };
        image.src = texture;
      }, index * 170);
      timers.push(timer);
    });

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    return () => {
      timers.forEach(clearTimeout);
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
      runnerRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (runnerRef.current) runnerRef.current.enabled = isVisible;
  }, [isVisible]);

  return (
    <div
      ref={sceneRef}
      className="matter-scene"
      role="img"
      aria-label="Interactive draggable technology icons"
    />
  );
}
