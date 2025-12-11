<script setup>
const { section } = useLanguage();
const expertise = section('expertise');
</script>

<template>
  <section
    id="expertise"
    class="bg-slate-950 text-white px-6 md:px-10 py-24 relative overflow-hidden"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute w-72 h-72 bg-purple-500/20 blur-[140px] -top-10 left-10"></div>
      <div class="absolute w-80 h-80 bg-pink-500/20 blur-[140px] bottom-0 right-10"></div>
    </div>

    <div class="max-w-6xl mx-auto relative">
      <div class="flex items-center gap-3 mb-4">
        <span class="w-10 h-px bg-gradient-to-r from-purple-400 to-pink-500"></span>
        <p class="uppercase tracking-[0.2em] text-xs text-gray-400">{{ expertise.kicker }}</p>
      </div>
      <h2 class="text-4xl md:text-6xl font-bold mb-12">{{ expertise.heading }}</h2>

      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="card in expertise.cards"
          :key="card.title"
          class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 transition"
        >
          <p class="text-purple-300 font-semibold mb-3">{{ card.kicker }}</p>
          <h3 class="text-2xl font-bold mb-3">{{ card.title }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">{{ card.copy }}</p>
          <ul class="space-y-2 text-gray-200 text-sm">
            <li v-for="skill in card.skills" :key="skill" class="flex items-center gap-2">
              <span class="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
              {{ skill }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

