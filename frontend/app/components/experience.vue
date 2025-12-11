<script setup>
const { section } = useLanguage();
const experience = section('experience');
</script>

<template>
  <section
    id="experience"
    class="bg-slate-950 text-white px-6 md:px-10 py-24 relative overflow-hidden"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute w-96 h-96 bg-indigo-500/15 blur-[150px] -top-20 right-0"></div>
      <div class="absolute w-72 h-72 bg-purple-500/15 blur-[140px] bottom-0 left-10"></div>
    </div>

    <div class="max-w-5xl mx-auto relative">
      <div class="flex items-center gap-3 mb-4">
        <span class="w-10 h-px bg-gradient-to-r from-indigo-400 to-purple-500"></span>
        <p class="uppercase tracking-[0.2em] text-xs text-gray-400">{{ experience.kicker }}</p>
      </div>
      <h2 class="text-4xl md:text-6xl font-bold mb-12">{{ experience.heading }}</h2>

      <div class="space-y-10">
        <article
          v-for="role in experience.roles"
          :key="role.company"
          class="relative border border-white/10 rounded-2xl p-6 md:p-8 bg-white/5 backdrop-blur-xl blur-[0.4px] hover:blur-0 transition"
        >
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
            <h3 class="text-2xl font-semibold">{{ role.title }} @ {{ role.company }}</h3>
            <p class="text-gray-400 text-sm">{{ role.period }}</p>
          </div>
          <p class="text-gray-300 text-sm mb-4">{{ role.location }}</p>
          <p class="text-gray-400 leading-relaxed mb-4">{{ role.copy }}</p>
          <div class="flex flex-wrap gap-2 text-xs text-gray-200">
            <span
              v-for="skill in role.skills"
              :key="skill"
              class="px-3 py-1 rounded-full border border-white/10 bg-white/5"
            >
              {{ skill }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

