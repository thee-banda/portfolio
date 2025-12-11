<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const open = ref(false);
const scrolled = ref(false);
const progress = ref(0);

const { lang, setLanguage, toggleLanguage, section } = useLanguage();
const nav = section('navbar');

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = (scrollTop / docHeight) * 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="scrolled ? 'bg-black/90 backdrop-blur-xl py-4' : 'bg-black/50 py-6'"
  >

    <!-- SCROLL PROGRESS BAR -->
    <div class="absolute top-0 left-0 h-[2px] bg-white transition-all duration-75"
         :style="{ width: progress + '%' }" />

    <nav class="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">

      <!-- LOGO -->
      <NuxtLink to="/" class="text-xl font-bold tracking-wide hover:opacity-80 transition">
        THEE Banda._
      </NuxtLink>

      <!-- MENU -->
      <ul class="hidden md:flex gap-10 text-sm uppercase tracking-[0.2em] items-center">
        <li><a href="#about" class="nav-link">{{ nav.about }}</a></li>
        <li><a href="#expertise" class="nav-link">{{ nav.expertise }}</a></li>
        <li><a href="#achievements" class="nav-link">{{ nav.achievements }}</a></li>
        <li><a href="#work" class="nav-link">{{ nav.work }}</a></li>
        <li><a href="#experience" class="nav-link">{{ nav.experience }}</a></li>
        <li><a href="#contact" class="nav-link">{{ nav.contact }}</a></li>
        <li>
          <div class="flex items-center gap-2 text-xs">
            <button
              :aria-pressed="lang === 'th'"
              class="px-3 py-1 rounded-full border transition font-semibold"
              :class="lang === 'th'
                ? 'bg-white text-black border-white shadow-md shadow-purple-500/30'
                : 'text-gray-200 border-white/20 hover:border-white/40 hover:text-white'"
              @click="setLanguage('th')"
            >
              TH
            </button>
            <button
              :aria-pressed="lang === 'en'"
              class="px-3 py-1 rounded-full border transition font-semibold"
              :class="lang === 'en'
                ? 'bg-white text-black border-white shadow-md shadow-purple-500/30'
                : 'text-gray-200 border-white/20 hover:border-white/40 hover:text-white'"
              @click="setLanguage('en')"
            >
              EN
            </button>
          </div>
        </li>
      </ul>

      <!-- HAMBURGER -->
      <button class="md:hidden z-50" @click="open = !open">
        <div class="space-y-2">
          <span
            class="block w-8 h-0.5 bg-white transition"
            :class="open && 'rotate-45 translate-y-2'"
          ></span>
          <span
            class="block w-8 h-0.5 bg-white transition"
            :class="open && 'opacity-0'"
          ></span>
          <span
            class="block w-8 h-0.5 bg-white transition"
            :class="open && '-rotate-45 -translate-y-2'"
          ></span>
        </div>
      </button>

    </nav>

    <!-- MOBILE MENU -->
    <transition name="fade">
      <div
        v-if="open"
        class="md:hidden fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-10 text-2xl"
      >
        <a @click="open = false" href="#home">Home</a>
        <a @click="open = false" href="#about">{{ nav.about }}</a>
        <a @click="open = false" href="#expertise">{{ nav.expertise }}</a>
        <a @click="open = false" href="#achievements">{{ nav.achievements }}</a>
        <a @click="open = false" href="#work">{{ nav.work }}</a>
        <a @click="open = false" href="#experience">{{ nav.experience }}</a>
        <a @click="open = false" href="#contact">{{ nav.contact }}</a>
        <div class="flex items-center gap-4 pt-4 text-sm">
          <button
            :aria-pressed="lang === 'th'"
            class="px-4 py-2 rounded-full border transition font-semibold"
            :class="lang === 'th'
              ? 'bg-white text-black border-white shadow-md shadow-purple-500/30'
              : 'text-gray-200 border-white/20 hover:border-white/40 hover:text-white'"
            @click="setLanguage('th')"
          >
            TH
          </button>
          <button
            :aria-pressed="lang === 'en'"
            class="px-4 py-2 rounded-full border transition font-semibold"
            :class="lang === 'en'
              ? 'bg-white text-black border-white shadow-md shadow-purple-500/30'
              : 'text-gray-200 border-white/20 hover:border-white/40 hover:text-white'"
            @click="setLanguage('en')"
          >
            EN
          </button>
          <button
            class="px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:border-white/40 transition"
            @click="toggleLanguage"
          >
            Toggle
          </button>
        </div>
      </div>
    </transition>

  </header>
</template>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 6px;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 1px;
  background: white;
  transition: 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
