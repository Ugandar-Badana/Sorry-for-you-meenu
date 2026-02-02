import React, { useEffect } from "react";
import her1 from "./one.jpeg";
import her2 from "./two.jpeg";
import her3 from "./three.jpeg";
const photos = [her2, her1, her3];

export default function SorryApp() {
  const celebrate = (e) => {
    const rect = e.target.getBoundingClientRect();
    for (let i = 0; i < 20; i++) {
      const spark = document.createElement("span");
      spark.className = "spark";
      spark.style.left = rect.left + rect.width / 2 + "px";
      spark.style.top = rect.top + rect.height / 2 + "px";
      spark.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
      spark.style.setProperty("--y", `${Math.random() * 200 - 100}px`);
      document.body.appendChild(spark);

      setTimeout(() => spark.remove(), 1000);
    }
  };
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 4 + Math.random() * 4 + "s";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 8000);
    };

    const interval = setInterval(createHeart, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>I'm Really Sorry Meenu ❤️</h1>
      <p>
        I know I hurt you by forgetting our first meet and our very first call.
        That mistake came from carelessness, not from lack of love — and I am
        deeply sorry for that.
      </p>
      <p>
        I promise you this: I will remember every little moment with you — the
        small dates, the silly calls, the memories that make us{" "}
        <strong>us</strong>. You matter to me more than I can ever explain.
      </p>
      <p>
        Please forgive me. I want to keep growing, loving you better, and making
        memories with you for a lifetime. 💖
      </p>
      <div className="photos">
        {photos.map((src, i) => (
          <img key={i} src={src} alt={`Memory ${i + 1}`} onClick={celebrate} />
        ))}
      </div>

      <p className="signature">– Yours always</p>

      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #ffdde1, #ee9ca7);
          overflow: hidden;
        }

        .container {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          color: #6b0f1a;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.2rem;
          max-width: 600px;
          line-height: 1.6;
        }

        .photos {
          display: flex;
          gap: 16px;
          margin: 30px 0 10px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .photos img {
          width: 140px;
          height: 180px;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s ease;
        }

        .photos img:hover {
          transform: scale(1.05);
        }

        .signature {
          margin-top: 20px;
          font-style: italic;
          font-size: 1.1rem;
        }

        .heart {
          position: fixed;
          bottom: -20px;
          width: 20px;
          height: 20px;
          background: red;
          transform: rotate(45deg);
          animation: floatUp linear forwards;
          opacity: 0.7;
        }

        .heart::before,
        .heart::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background: red;
          border-radius: 50%;
        }

        .heart::before {
          top: -10px;
          left: 0;
        }

        .heart::after {
          left: -10px;
          top: 0;
        }

        @keyframes floatUp {
          from {
            transform: translateY(0) rotate(45deg);
            opacity: 0.8;
          }
          to {
            transform: translateY(-110vh) rotate(45deg);
            opacity: 0;
          }
        }

        .spark {
          position: fixed;
          width: 8px;
          height: 8px;
          background: #ff4d6d;
          border-radius: 50%;
          pointer-events: none;
          animation: explode 1s ease-out forwards;
          z-index: 5;
        }

        @keyframes explode {
          to {
            transform: translate(var(--x), var(--y)) scale(0);
            opacity: 0;
          }
        }
          to {
            transform: translateY(-110vh) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}