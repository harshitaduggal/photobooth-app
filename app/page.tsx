"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="home">
      {/* NAVBAR */}
      <div className="navbar">
        <span className="nav-item">home</span>
        <span className="nav-item">layout</span>
        <span className="nav-item">contact</span>
      </div>

      {/* STICKER PLACEHOLDERS */}
      <img className="sticker sticker1" src="/assets/papers.png"></img>
      <img className="sticker sticker2" src="/assets/strip1.png"></img>
      <img className="sticker sticker3" src="/assets/strip2.png"></img>
      <img className="sticker star1" src="/assets/newstarB.png"></img>
      <img className="sticker star2" src="/assets/newstarS.png"></img>

      {/* VINTAGE NOISE OVERLAY */}
      <div className="noise-overlay"></div>

      {/* CONTENT */}
      <h1 className="logo">flashpop</h1>
      <p className="tagline">a vintage photobooth app</p>

      <button className="start-btn" onClick={() => router.push("/camera")}>
        start
      </button>
    </div>
  );
}
