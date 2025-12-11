<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const { section } = useLanguage();
const achievements = section('achievements');

const props = defineProps({
  item: Object,
  show: Boolean
});

const emit = defineEmits(["close"]);

const imageError = ref(false);

const handleImageError = () => {
  imageError.value = true;
};

const handleEscape = (e) => {
  if (e.key === 'Escape' && props.show) {
    emit('close');
  }
};

const handleBackdropClick = (e) => {
  if (e.target === e.currentTarget) {
    emit('close');
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
  imageError.value = false;
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape);
});
</script>

<template>
  <Teleport to="body">
    <div 
      v-if="show" 
      class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      @click="handleBackdropClick"
    >
      <div 
        class="bg-white/10 border border-white/20 rounded-2xl p-6 max-w-xl w-full text-white backdrop-blur-xl max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <h2 class="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          {{ item?.title }}
        </h2>

        <div v-if="item?.certificate" class="mb-6">
          <p class="text-sm text-gray-400 mb-2">ใบประกาศนียบัตร / Certificate</p>
          <div class="relative rounded-lg overflow-hidden border border-white/20 bg-white/5">
            <img 
              :src="item.certificate" 
              class="w-full h-auto object-contain"
              alt="Certificate"
              @error="handleImageError"
            />
            <div v-if="imageError" class="p-12 text-center text-gray-500 border-2 border-dashed border-white/20 rounded-lg">
              <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <p class="text-sm">Certificate image not found</p>
              <p class="text-xs text-gray-600 mt-1">Place your certificate at: {{ item.certificate }}</p>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">รายละเอียด / Details</h3>
          <ul class="space-y-3 text-gray-300">
            <li v-for="detail in item?.details" :key="detail" class="flex gap-3 items-start">
              <span class="text-purple-400 mt-1.5 flex-shrink-0">•</span>
              <span class="leading-relaxed">{{ detail }}</span>
            </li>
          </ul>
        </div>

        <button
          class="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition"
          @click="emit('close')">
          {{ achievements.closeButton }}
        </button>
      </div>
    </div>
  </Teleport>
</template>
