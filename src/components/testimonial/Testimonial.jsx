import React, { useState, useEffect } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    img: "https://picsum.photos/200",
    quote:
      "InayIT's solutions have made a significant impact on our business. They are reliable, efficient, and innovative.",
    name: "Sarah P",
    role: "@BrightFuture Tech",
  },
  {
    img: "https://picsum.photos/200",
    quote:
      "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
    name: "Nick V",
    role: "@Malika Inc.",
  },
  {
    img: "https://picsum.photos/200",
    quote:
      "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
    name: "Amelia W",
    role: "@Panda AI",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const autorotateTiming = 5000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((prevActive) =>
        prevActive + 1 === testimonials.length ? 0 : prevActive + 1
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate]);

  return (
    <div className="testimonial-container">
      {/* Title */}
      <h2>What Our Clients Say</h2>

      {/* Avatar with Background */}
      <div className="testimonial-avatar">
        <div className="avatar-background">
          <img src={testimonials[active].img} alt={testimonials[active].name} />
        </div>
      </div>

      {/* Quote */}
      <p>{`"${testimonials[active].quote}"`}</p>

      {/* Author */}
      <p>{`${testimonials[active].name} ${testimonials[active].role}`}</p>

      {/* Dots Navigation */}
      <div className="testimonial-buttons">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={active === index ? "active" : ""}
            onClick={() => {
              setActive(index);
              setAutorotate(false);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
