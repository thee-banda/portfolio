<script setup>
const { section } = useLanguage();
const about = section('about');
</script>

<template>
  <section
    id="about"
    class="min-h-screen bg-black text-white px-6 md:px-10 py-24 flex items-center relative overflow-hidden"
  >
    <div class="absolute -z-10 w-[520px] h-[520px] bg-purple-600/15 blur-[180px] top-10 left-[-140px]"></div>
    <div class="absolute -z-10 w-[420px] h-[420px] bg-pink-500/15 blur-[160px] bottom-10 right-[-120px]"></div>

    <div class="max-w-6xl mx-auto w-full grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
        <div>
        <div class="flex items-center gap-3 mb-4">
          <span class="w-10 h-px bg-gradient-to-r from-purple-400 to-pink-500"></span>
          <p class="uppercase tracking-[0.2em] text-xs text-gray-400">{{ about.kicker }}</p>
        </div>
        <h2 class="text-4xl md:text-6xl font-bold mb-6">{{ about.heading }}</h2>
        <p class="text-lg text-gray-300 leading-relaxed mb-6">
          {{ about.p1 }}
        </p>
        <p class="text-lg text-gray-300 leading-relaxed mb-6">
          {{ about.p2 }}
        </p>
        <blockquote class="border-l-2 border-white/10 pl-4 italic text-gray-400">
          "{{ about.quote }}"
        </blockquote>
        </div>

        <div class="relative">
          <div
          class="w-full h-80 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl shadow-lg flex items-center justify-center text-gray-400"
          >
          <div class="text-center space-y-2">
            <p class="text-sm uppercase tracking-[0.2em] text-gray-400">{{ about.availabilityTitle }}</p>
            <p class="text-xl font-semibold">{{ about.availabilitySub }}</p>
            <p class="text-sm text-gray-500">{{ about.availabilityNote }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
