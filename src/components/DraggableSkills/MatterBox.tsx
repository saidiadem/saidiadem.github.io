"use client";

import Matter from "matter-js";
import { useEffect, useRef, useState } from "react";

const skills = [
  ["Python", "#f2cf4a", "python/3776AB"],
  ["FastAPI", "#55d6be", "fastapi/009688"],
  ["React", "#61dafb", "react/61DAFB"],
  ["TypeScript", "#6aa9ff", "typescript/3178C6"],
  ["Next.js", "#f2f1ec", "nextdotjs/FFFFFF"],
  ["C++", "#69a9db", "cplusplus/00599C"],
  ["PyTorch", "#ff8a5b", "pytorch/EE4C2C"],
  ["TensorFlow", "#ffb347", "tensorflow/FF6F00"],
  ["Scikit-learn", "#f4a261", "scikitlearn/F7931E"],
  ["Hugging Face", "#f2cf4a", "huggingface/FFD21E"],
  ["LangChain", "#8ed1c2", "langchain/1C3C3C"],
  ["Qdrant", "#ff6f9c", "qdrant/DC244C"],
  ["Milvus", "#66d9ef", "milvus/00A1EA"],
  ["Neo4j", "#73b7ff", "neo4j/4581C3"],
  ["Postgres", "#8fb9e8", "postgresql/4169E1"],
  ["MySQL", "#73b7c9", "mysql/4479A1"],
  ["Docker", "#56a8ff", "docker/2496ED"],
  ["GitHub Actions", "#74a8ff", "githubactions/2088FF"],
  ["RabbitMQ", "#ff8a3d", "rabbitmq/FF6600"],
  ["Electron", "#8ed1dc", "electron/47848F"],
  ["Expo", "#f2f1ec", "expo/FFFFFF"],
  ["NestJS", "#ed5276", "nestjs/E0234E"],
  ["Flask", "#f2f1ec", "flask/FFFFFF"],
  ["Spring Boot", "#89c95d", "springboot/6DB33F"],
  ["Symfony", "#f2f1ec", "symfony/FFFFFF"],
  ["Ollama", "#f2f1ec", "ollama/FFFFFF"],
  ["Jira Forge", "#7ba6ff", "jira/2684FF"],
  ["Git", "#ff765f", "git/F05032"],
  ["Linux", "#f2cf4a", "linux/FCC624"],
] as const;

type SkillBody = Matter.Body & {
  plugin: { skillName?: string; skillIcon?: HTMLImageElement };
};

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

    const { Bodies, Composite, Engine, Events, Mouse, MouseConstraint, Render, Runner } = Matter;
    const width = Math.round(scene.clientWidth || 760);
    const height = width;
    const compact = width < 520;
    const engine = Engine.create({ gravity: { x: 0, y: 0.72 } });
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
      Bodies.rectangle(width / 2, height + 20, width, 40, wall),
      Bodies.rectangle(width + 20, height / 2, 40, height, wall),
      Bodies.rectangle(-20, height / 2, 40, height, wall),
      Bodies.rectangle(width / 2, -20, width, 40, wall),
    ]);

    const timers: ReturnType<typeof setTimeout>[] = [];
    const bodies: SkillBody[] = [];
    skills.forEach(([label, color, icon], index) => {
      const timer = setTimeout(() => {
        const radius = compact ? 22 : 26;
        const body = Bodies.circle(
          radius + Math.random() * Math.max(1, width - radius * 2),
          26 + Math.random() * 82,
          radius,
          {
            restitution: 0.64,
            friction: 0.34,
            frictionAir: 0.012,
            render: {
              fillStyle: "#15191f",
              strokeStyle: color,
              lineWidth: 1.5,
            },
          },
        ) as SkillBody;
        body.plugin.skillName = label;
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = `https://cdn.simpleicons.org/${icon}`;
        body.plugin.skillIcon = image;
        bodies.push(body);
        Composite.add(world, body);
      }, index * 62);
      timers.push(timer);
    });

    const drawLogos = () => {
      const context = render.context;
      bodies.forEach((body) => {
        const icon = body.plugin.skillIcon;
        if (icon?.complete && icon.naturalWidth > 0) {
          const iconSize = compact ? 22 : 26;
          context.save();
          context.translate(body.position.x, body.position.y);
          context.rotate(body.angle);
          context.drawImage(
            icon,
            -iconSize / 2,
            -iconSize / 2,
            iconSize,
            iconSize,
          );
          context.restore();
        }
      });
    };
    Events.on(render, "afterRender", drawLogos);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.18, render: { visible: false } },
    });
    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    return () => {
      timers.forEach(clearTimeout);
      Events.off(render, "afterRender", drawLogos);
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
      aria-label={`Interactive draggable technology logos: ${skills.map(([name]) => name).join(", ")}`}
    />
  );
}
