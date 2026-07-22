"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const MEDIA_URL =
  "https://cdn.jsdelivr.net/gh/saidiadem/saidiadem.github.io@portfolio-media";

const slides = [
  {
    image: `${MEDIA_URL}/media/gommage-third-place.png`,
    alt: "The Gommage team receiving third place at the Artificial Intelligence National Summit Hackathon",
    kicker: "Artificial Intelligence National Summit · June 2026",
    title: "Gommage finished third.",
    detail: "Agentic AI for Enterprise Automation",
  },
  {
    image: `${MEDIA_URL}/media/dataquest-third-place.webp`,
    alt: "The Data Dangereuse team receiving third place at the DataQuest competition",
    kicker: "DataQuest · Data Overflow 2026",
    title: "Data Dangereuse finished third.",
    detail: "Explainable insurance recommendations",
  },
  {
    image: `${MEDIA_URL}/public/unbreaking.png`,
    alt: "Adem and his team at the Unbreaking News 2.0 hackathon",
    kicker: "Unbreaking News 2.0 · November 2025",
    title: "Relib won first place.",
    detail: "Colonial bias analysis for Wikipedia",
  },
  {
    image: `${MEDIA_URL}/public/cybersphere.png`,
    alt: "Team Fokspy at the national Cybersphere cybersecurity congress",
    kicker: "Cybersphere · National cybersecurity congress",
    title: "Team Fokspy placed fourth.",
    detail: "Capture the Flag competition",
  },
  {
    image: `${MEDIA_URL}/public/wintercup.png`,
    alt: "Adem and his team competing in the Wintercup programming contest",
    kicker: "Wintercup · Competitive programming",
    title: "A top 25 Wintercup finish.",
    detail: "National competitive programming contest",
  },
];

export default function AwardsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setCurrent((index) => (index + 1) % slides.length),
      7000,
    );

    return () => window.clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <figure className="award-moment award-carousel" aria-roledescription="carousel">
      <div className="award-carousel-media">
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          width={1280}
          height={852}
          unoptimized
          priority={current === 0}
        />
        <button
          className="carousel-arrow carousel-arrow-left"
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Previous award"
        >
          <ChevronLeft />
        </button>
        <button
          className="carousel-arrow carousel-arrow-right"
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Next award"
        >
          <ChevronRight />
        </button>
        <div className="carousel-dots" aria-label="Choose award">
          {slides.map((item, index) => (
            <button
              className={index === current ? "active" : ""}
              type="button"
              key={item.title}
              onClick={() => goTo(index)}
              aria-label={`Show slide ${index + 1}: ${item.title}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>
      </div>
      <figcaption aria-live="polite">
        <div>
          <p>{slide.kicker}</p>
          <h3>{slide.title}</h3>
        </div>
        <span>{slide.detail}</span>
      </figcaption>
    </figure>
  );
}
