import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { useTheme } from 'next-themes';

const MatterBox = () => {
  const { theme } = useTheme();
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine>(Matter.Engine.create());
  const runnerRef = useRef<Matter.Runner | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (sceneRef.current) {
      observer.observe(sceneRef.current);
    }

    return () => {
      if (sceneRef.current) {
        observer.unobserve(sceneRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const { Engine, Render, Runner, Mouse, MouseConstraint, World, Bodies, Composite, Composites } = Matter;
    const engine = engineRef.current;
    const world = engine.world;

    const renderWidth = 700;
    const renderHeight = 500; 

    const render = Render.create({
      element: sceneRef.current!,
      engine: engine,
      options: {
        width: renderWidth,
        height: renderHeight,
        showAngleIndicator: false,
        wireframeBackground: theme==='light'?'#afababb1':'#141414',
        wireframes: false,
        background: theme==='light'?'#afababb1':'#141414',
      },
    });


    Render.run(render);

    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);
   
    Composite.add(world, [
      Bodies.rectangle(renderWidth / 2, renderHeight + 25, renderWidth, 50, { isStatic: true, render: { fillStyle: '#060a19' } }), // bottom
      Bodies.rectangle(renderWidth + 25, renderHeight / 2, 50, renderHeight, { isStatic: true, render: { fillStyle: '#060a19' } }), // right
      Bodies.rectangle(-25, renderHeight / 2, 50, renderHeight, { isStatic: true, render: { fillStyle: '#060a19' } }), // left
      Bodies.rectangle(renderWidth / 2, -25, renderWidth, 50, { isStatic: true, render: { fillStyle: '#060a19' } }) // top
    ]);
    const images = [
      '/react.svg' ,'/nest.png','/symfony.png','java.png','python.png','javascript.png','image.png','android.png','html.png','css.png','cpp.png','sql.png'
    ];
    
    const loadImage = (src: string) => {
      return new Promise<{ width: number; height: number }>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ width: img.width, height: img.height });
        img.onerror = reject;
        img.src = src;
      });
    };
    
    const circleRadius = 45;
    
    images.forEach((image, index) => {
      setTimeout(() => {
        loadImage(image).then(({ width, height }: { width: number; height: number }) => {
          const xScale = (circleRadius * 2) / width;
          const yScale = (circleRadius * 2) / height;
    
          const randomX = Math.random() * renderWidth;
          const randomY = Math.random() * renderHeight;
    
          const circle = Bodies.circle(randomX, randomY, circleRadius, {
            restitution: 0.8,
            friction: 0.3,
            render: {
              sprite: {
                texture: image,
                xScale: xScale,
                yScale: yScale
              },
              fillStyle: 'transparent',
            }
          });
    
          // Check if the image is already added to the world
          const isImageAlreadyAdded = world.bodies.some(body => 
            body.render.sprite && body.render.sprite.texture === image
          );
    
          if (!isImageAlreadyAdded) {
            Composite.add(world, circle);
            console.log(`Circle for image ${index} created at (${randomX}, ${randomY})`);
          } else {
            console.log(`Image ${index} already added: ${image}`);
          }
        }).catch((error) => {
          console.error(`Failed to load image ${index}: ${error}`);
        });
      }, index * (Math.random()*500+300)); // Delay each image by index * delay
    });
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });


    World.add(world, mouseConstraint);

    render.mouse = mouse;

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: renderWidth, y: renderHeight },
    });

    return () => {
      Render.stop(render);
      if (runnerRef.current) {
        Runner.stop(runnerRef.current);
      }
      World.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
      (render.canvas as unknown)= null;
      (render.context as unknown) = null;
      render.textures = {};
    };
  }, [theme]);

  // Pause/resume engine based on visibility
  useEffect(() => {
    if (runnerRef.current) {
      if (isVisible) {
        runnerRef.current.enabled = true;
      } else {
        runnerRef.current.enabled = false;
      }
    }
  }, [isVisible]);

  return <div ref={sceneRef} style={{ width: '100%', height: '100%' }} />;
};

export default MatterBox;