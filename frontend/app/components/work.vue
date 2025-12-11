<script setup>
const { section } = useLanguage();
const work = section('work');
</script>

<template>
  <section
    id="work"
    class="bg-black text-white px-6 md:px-10 py-24 relative overflow-hidden"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute w-96 h-96 bg-indigo-500/15 blur-[160px] top-0 left-12"></div>
      <div class="absolute w-80 h-80 bg-purple-500/15 blur-[140px] bottom-10 right-0"></div>
    </div>

    <div class="max-w-6xl mx-auto relative">
      <div class="flex items-center gap-3 mb-4">
        <span class="w-10 h-px bg-gradient-to-r from-indigo-400 to-purple-500"></span>
        <p class="uppercase tracking-[0.2em] text-xs text-gray-400">{{ work.kicker }}</p>
      </div>
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <h2 class="text-4xl md:text-6xl font-bold leading-tight">
          {{ work.heading }}
        </h2>
        <a href="#contact" class="text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-white transition">
          {{ work.cta }}
        </a>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="project in work.projects"
          :key="project.title"
          class="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden flex flex-col hover:border-purple-400/50 transition"
        >
          <div class="aspect-[4/3] bg-gradient-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center text-sm text-gray-500">
            <span class="group-hover:text-white transition">Preview</span>
          </div>
          <div class="p-6 flex-1 flex flex-col">
            <p class="text-purple-300 text-xs font-semibold mb-2">{{ project.tag }}</p>
            <h3 class="text-2xl font-semibold mb-3">{{ project.title }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
              {{ project.copy }}
            </p>
            <div class="flex flex-wrap gap-2 text-xs text-gray-300">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-3 py-1 rounded-full border border-white/10 bg-white/5"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

