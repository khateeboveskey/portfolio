<template>
  <div
    style="
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 64px 72px;
      background:
        radial-gradient(circle at 80% 20%, #1f2937 0%, transparent 55%),
        radial-gradient(circle at 10% 90%, #4338ca 0%, transparent 60%),
        linear-gradient(135deg, #0b0f1a 0%, #111827 100%);
      color: #ffffff;
      font-family: Inter, sans-serif;
    "
  >
    <div style="display: flex; align-items: center; gap: 16px">
      <div
        style="
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: #ffffff;
          color: #0b0f1a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 700;
        "
      >
        K
      </div>
      <div style="display: flex; flex-direction: column">
        <span style="font-size: 26px; font-weight: 700; letter-spacing: -0.5px"
          >Khateeb's Portfolio</span
        >
        <span style="font-size: 18px; opacity: 0.7"
          >khateeb.me</span
        >
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 18px">
      <span
        style="
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #a5b4fc;
        "
        >Full-stack Developer · Technical Trainer</span
      >
      <h1
        style="
          font-size: 78px;
          font-weight: 700;
          line-height: 1.05;
          margin: 0;
          letter-spacing: -2px;
        "
      >
        A.Rahman S. Al-Khateeb
      </h1>
      <p
        style="
          font-size: 28px;
          line-height: 1.4;
          margin: 0;
          opacity: 0.85;
          max-width: 900px;
        "
      >
        Vue, Nuxt, TypeScript, Laravel. Projects, articles, and experience.
      </p>
    </div>

    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        opacity: 0.65;
      "
    >
      <span>github.com/khateeboveskey</span>
      <span>linkedin.com/in/khateeb404</span>
    </div>
  </div>
</template>
