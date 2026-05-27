<template>
  <div
    style="
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      background: #171513;
      color: #f3f1ef;
      font-family: Inter, sans-serif;
    "
  >
    <!-- Orange left accent bar -->
    <div
      style="width: 12px; height: 100%; background: #e64d33; flex-shrink: 0"
    />

    <!-- Main content -->
    <div
      style="
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 60px 68px;
      "
    >
      <!-- Header: Logo + site name -->
      <div style="display: flex; align-items: center; gap: 20px">
        <svg
          viewBox="0 0 979.79 504.34"
          xmlns="http://www.w3.org/2000/svg"
          style="height: 36px; width: 70px"
        >
          <polygon
            fill="#e64d33"
            points="118.87 133.31 0 252.18 0 0 168.11 0 168.11 84.07 118.87 133.31"
          />
          <polygon
            fill="#e64d33"
            points="0 504.34 0 252.18 168.11 420.28 168.11 504.34 0 504.34"
          />
          <polygon
            fill="#e64d33"
            points="237.74 252.18 489.88 504.32 252.14 504.32 168.11 420.28 168.11 84.07 252.18 0 489.89 0 237.74 252.18"
          />
          <polygon
            fill="#e64d33"
            points="979.79 252.18 727.65 504.32 489.91 504.32 742.05 252.18 489.9 0 727.61 0 794.27 66.66 742.05 118.87 860.92 237.74 913.14 185.53 979.79 252.18"
          />
          <polygon
            fill="#e64d33"
            points="794.27 66.66 860.92 0 979.79 118.87 913.14 185.53"
          />
        </svg>
        <div style="display: flex; flex-direction: column; gap: 2px">
          <span
            style="font-size: 24px; font-weight: 700; letter-spacing: -0.5px"
            >Khateeb's Portfolio</span
          >
          <span style="font-size: 16px; color: #a09890">khateeb.me</span>
        </div>
      </div>

      <!-- Main content -->
      <div style="display: flex; flex-direction: column; gap: 16px">
        <span
          style="
            font-size: 15px;
            font-weight: 700;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: #e64d33;
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
            font-size: 26px;
            line-height: 1.4;
            margin: 0;
            color: #a09890;
            max-width: 900px;
          "
        >
          Vue, Nuxt, TypeScript, Laravel. Projects, articles, and experience.
        </p>
      </div>

      <!-- Footer -->
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 18px;
          color: #6e6760;
        "
      >
        <span>github.com/khateeboveskey</span>
        <span>linkedin.com/in/khateeb404</span>
      </div>
    </div>
  </div>
</template>
