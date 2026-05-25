<script setup lang="ts">
defineProps<{
  title?: string;
  subtitle?: string;
  badge?: string;
}>();
</script>

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
        radial-gradient(circle at 85% 15%, #312e81 0%, transparent 55%),
        radial-gradient(circle at 15% 95%, #6d28d9 0%, transparent 55%),
        linear-gradient(135deg, #0b0f1a 0%, #111827 100%);
      color: #ffffff;
      font-family: Inter, sans-serif;
    "
  >
    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <div style="display: flex; align-items: center; gap: 14px">
        <div
          style="
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background: #ffffff;
            color: #0b0f1a;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 26px;
            font-weight: 700;
          "
        >
          K
        </div>
        <span style="font-size: 22px; font-weight: 700; letter-spacing: -0.5px"
          >Khateeb's Portfolio</span
        >
      </div>
      <span
        v-if="badge"
        style="
          padding: 10px 20px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.18);
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        "
        >{{ badge }}</span
      >
    </div>

    <div style="display: flex; flex-direction: column; gap: 20px">
      <h1
        style="
          font-size: 84px;
          font-weight: 700;
          line-height: 1.05;
          margin: 0;
          letter-spacing: -2px;
          max-width: 1000px;
        "
      >
        {{ title || "Khateeb's Portfolio" }}
      </h1>
      <p
        v-if="subtitle"
        style="
          font-size: 30px;
          line-height: 1.35;
          margin: 0;
          opacity: 0.85;
          max-width: 1000px;
        "
      >
        {{ subtitle }}
      </p>
    </div>

    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        opacity: 0.7;
      "
    >
      <span>A.Rahman S. Al-Khateeb</span>
      <span>khateeb.me</span>
    </div>
  </div>
</template>
