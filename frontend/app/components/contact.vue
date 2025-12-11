<script setup>
const { section } = useLanguage();
const contact = section('contact');
</script>

<template>
  <section
    id="contact"
    class="min-h-screen bg-black text-white px-6 py-24 flex items-center"
  >
    <div class="max-w-5xl mx-auto w-full">

      <!-- Title -->
      <h2 class="text-4xl md:text-6xl font-bold mb-12">
        {{ contact.heading }}
        <span
          class="block w-20 h-1 mt-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        ></span>
      </h2>

      <div class="grid md:grid-cols-2 gap-12">

        <!-- LEFT: INFO -->
        <div class="space-y-6">
          <p class="text-gray-400 text-lg leading-relaxed">
            {{ contact.intro }}
          </p>

          <div class="space-y-4 text-gray-300">
            <p>{{ contact.emailLabel }}: <a href="mailto:mrtheebanda.mail@gmail.com">mrtheebanda.mail@gmail.com</a></p>
            <p>{{ contact.phoneLabel }}: +66 081-8411336</p>
            <p>📍 {{ contact.locationLabel }}: Thailand</p>
          </div>

          <!-- SOCIAL -->
          <div class="flex gap-6 pt-4">
            <a href="#" class="hover:text-purple-400 transition">GitHub</a>
            <a href="#" class="hover:text-purple-400 transition">LinkedIn</a>
            <a href="#" class="hover:text-purple-400 transition">Instagram</a>
          </div>
        </div>

        <!-- RIGHT: FORM -->
        <form
          class="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg space-y-6"
        >
          <div>
            <label class="block mb-2 text-sm text-gray-300">{{ contact.form.name }}</label>
            <input
              type="text"
              :placeholder="contact.form.placeholders.name"
              class="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-purple-400"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-300">{{ contact.form.email }}</label>
            <input
              type="email"
              :placeholder="contact.form.placeholders.email"
              class="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-purple-400"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-300">{{ contact.form.message }}</label>
            <textarea
              rows="4"
              :placeholder="contact.form.placeholders.message"
              class="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-purple-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition"
          >
            {{ contact.form.submit }}
          </button>
        </form>

      </div>
    </div>
  </section>
</template>
