<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const x = ref(0);
const y = ref(0);
const { section } = useLanguage();
const hero = section('hero');

const handleMove = (event: MouseEvent) => {
  x.value = event.clientX;
  y.value = event.clientY;
};

onMounted(() => {
  window.addEventListener('mousemove', handleMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMove);
});
</script>

<template>
  <section
    class="min-h-screen relative flex items-center text-white px-6 md:px-10 overflow-hidden"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900"></div>
    <div class="absolute inset-0 noise"></div>
    <div
      class="absolute w-[520px] h-[520px] bg-purple-600/20 blur-[180px] rounded-full"
      :style="{ left: x + 'px', top: y + 'px', transform: 'translate(-50%, -50%)' }"
    ></div>

    <div class="relative z-10 max-w-5xl">
      <div class="flex items-center gap-3 mb-6">
        <span class="w-10 h-px bg-gradient-to-r from-purple-400 to-pink-500"></span>
        <p class="uppercase tracking-[0.2em] text-xs text-gray-400">{{ hero.kicker }}</p>
      </div>

      <h1 class="text-5xl md:text-7xl font-bold leading-tight">
        {{ hero.title }}
      </h1>
      <p class="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
        {{ hero.subtitle }}
      </p>

      <div class="mt-10 flex flex-wrap gap-4">
        <a
          href="#work"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition"
        >
          {{ hero.ctaPrimary }}
        </a>
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-white/40 transition"
        >
          {{ hero.ctaSecondary }} →
        </a>
      </div>

      <div class="mt-12 flex flex-wrap items-center gap-6 text-gray-400 text-sm">
        <span class="uppercase tracking-[0.2em] text-xs">As featured in</span>
        <span
          v-for="badge in hero.badges"
          :key="badge"
          class="px-4 py-2 rounded-full bg-white/5 border border-white/10"
        >
          {{ badge }}
        </span>
      </div>
    </div>
  </section>
</template>
