<template>
    <div class="relative min-h-screen flex items-center justify-center bg-gray-100">
      <NuxtLink to="/select" class="absolute bg-blue-500 top-[1rem] left-[1rem] p-2 text-white rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-10" viewBox="0 0 24 24"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"/></svg>
      </NuxtLink>

  <div ref="mainContent" class="bg-white space-y-10 p-8 rounded-xl shadow-lg max-w-7xl w-full">
      <!-- Judul -->
      <h1 ref="title" class="text-4xl font-bold text-center">Ekspedisi Inggris</h1>

      <!-- Konten 2 kolom -->
      <div class="flex justify-center items-start gap-6">
        <!-- Kotak video -->
        <div ref="videoBox" class="flex items-center justify-center w-1/2 shadow-lg rounded-xl overflow-clip">
        <video
          autoPlay
          muted
          playsInline
          class="w-full h-full rounded-lg shadow-md bg-gray-300 aspect-square"
        >
          <source src="/videos/Inggris/inggris.mp4" type="video/mp4" />
          Browser kamu tidak mendukung video.
        </video>
        </div>

        <!-- Deskripsi -->
        <div ref="descBox" class="text-xl space-y-4 text-gray-800 w-1/2 border border-black/10 shadow-lg rounded-xl self-stretch p-5">
        <p>
          <span class="font-semibold">1579 – Sir Francis Drake</span>
          (misi penjelajahan & dagang rempah)<br />
          • Rute: dari Pasifik → Filipina → Ternate (Maluku) → Jawa → Samudra
          Hindia → Tanjung Harapan → pulang ke Inggris.
        </p>

        <p>
          • Pelaut/kapal: Francis Drake, kapal <i>Golden Hind</i>.
          <span class="text-gray-500">(Library of Congress; Wikipedia)</span>
        </p>

        <p>
          • Tujuan awal: pelayaran keliling dunia sekaligus mencari keuntungan
          lewat perompakan musuh Spanyol/Portugis dan membeli cengkih di
          Ternate (perjanjian dagang dengan Sultan).
          <span class="text-gray-500">(Library of Congress)</span>
        </p>
        </div>
      </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const mainContent = ref(null)
const title = ref(null)
const videoBox = ref(null)
const descBox = ref(null)

onMounted(() => {
  gsap.from([title.value, videoBox.value, descBox.value], {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.2
  })
})
</script>