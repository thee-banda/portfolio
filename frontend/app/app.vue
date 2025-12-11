<script setup lang="ts">
import Header from './components/header.vue';
import Aboutme from './components/aboutme.vue';
import Expertise from './components/expertise.vue';
import Achivements from './components/achivements/achivements.vue';
import Work from './components/work.vue';
import Experience from './components/experience.vue';
import Contact from './components/contact.vue';

const { lang } = useLanguage();
useHead(() => ({
  htmlAttrs: { lang: lang.value },
}));

</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <Aboutme />
    <Expertise />
    <Achivements />
    <Work />
    <Experience />
    <Contact />
    <NuxtPage />
  </div>
</template>
