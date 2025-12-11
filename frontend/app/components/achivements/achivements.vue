<script setup>
import { ref } from 'vue';
import Details from './details.vue';

const { section } = useLanguage();
const achievements = section('achievements');

const selectedAchievement = ref(null);
const showDetails = ref(false);

const openDetails = (type) => {
  selectedAchievement.value = type === 'province' 
    ? achievements.provinceDetails 
    : achievements.regionDetails;
  showDetails.value = true;
};

const closeDetails = () => {
  showDetails.value = false;
  selectedAchievement.value = null;
};
</script>

<template>
  <section
    id="achievements"
    class="bg-black text-white px-6 md:px-10 py-24 relative overflow-hidden"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute w-96 h-96 bg-purple-500/15 blur-[150px] top-6 left-6"></div>
      <div class="absolute w-72 h-72 bg-pink-500/15 blur-[140px] bottom-0 right-10"></div>
</div>

    <div class="max-w-5xl mx-auto relative">
      <div class="flex items-center gap-3 mb-4">
        <span class="w-10 h-px bg-gradient-to-r from-purple-400 to-pink-500"></span>
        <p class="uppercase tracking-[0.2em] text-xs text-gray-400">{{ achievements.kicker }}</p>
      </div>
      <h2 class="text-4xl md:text-6xl font-bold mb-10">{{ achievements.heading }}</h2>

      <div class="space-y-6">
        <article
          class="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-400/50 transition"
        >
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <div>
              <p class="text-purple-300 text-sm font-semibold">{{ achievements.itemMeta }}</p>
              <h3 class="text-2xl font-semibold">{{ achievements.itemTitle }}</h3>
            </div>
            <p class="text-gray-400 text-sm">{{ achievements.itemNote }}</p>
          </div>

          <ul class="space-y-3 text-gray-200 text-sm">
            <li 
              class="group flex gap-2 items-start rounded-lg cursor-pointer transition-all hover:bg-white/10 hover:border hover:border-purple-400/30 p-3 -m-3"
              @click="openDetails('province')"
            >
              <span class="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0"></span>
              <div class="flex-1">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1">
                    <p class="font-semibold text-white group-hover:text-purple-300 transition">{{ achievements.provinceTitle }}</p>
                    <p class="text-gray-400 group-hover:text-gray-300 transition">{{ achievements.provinceResult }}</p>
                  </div>
                  <svg class="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <p class="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition">{{ achievements.clickHint }}</p>
              </div>
            </li>
            <li 
              class="group flex gap-2 items-start rounded-lg cursor-pointer transition-all hover:bg-white/10 hover:border hover:border-purple-400/30 p-3 -m-3"
              @click="openDetails('region')"
            >
              <span class="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0"></span>
              <div class="flex-1">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1">
                    <p class="font-semibold text-white group-hover:text-purple-300 transition">{{ achievements.regionTitle }}</p>
                    <p class="text-gray-400 group-hover:text-gray-300 transition">{{ achievements.regionResult }}</p>
                  </div>
                  <svg class="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <p class="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition">{{ achievements.clickHint }}</p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </div>

    <Details 
      :item="selectedAchievement" 
      :show="showDetails" 
      @close="closeDetails" 
    />
  </section>
</template>
