<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-900">
        <div class="bg-white border-2 border-blue-500 p-6 rounded-lg w-[700px]">
        <!-- Judul -->
        <h2 class="text-center text-lg font-bold mb-6">
            PILIH TOPIK UNTUK MEMULAI
        </h2>

        <!-- Grid pilihan -->
        <div class="grid grid-cols-4 gap-6" ref="gridRef">
            <div
            v-for="(item, index) in topics"
            :key="index"
            class="flex flex-col items-center cursor-pointer group grid-item"
            >
            <!-- kotak dengan gambar -->
            <NuxtLink :to="item.path"
                class="w-24 h-20 bg-gray-200 rounded flex items-center justify-center overflow-hidden shadow-md group-hover:scale-105 transition"
            >
                <img
                :src="item.img"
                :alt="item.name"
                class="object-cover w-full h-full"
                />
            </NuxtLink>
            <p class="text-sm text-center mt-2">{{ item.name }}</p>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap'
import { NuxtLink } from '#components';
import { ref, onMounted } from 'vue';

const gridRef = ref(null);
const topics = [
    { name: "Belanda", img: "/images/img-options/belanda.jpg", path: "/belanda" },
    { name: "Spanyol", img: "/images/img-options/spanyol.jpg", path: "/spanyol" },
    { name: "Portugis", img: "/images/img-options/portugis.jpg", path: "/portugis" },
    { name: "Inggris", img: "/images/img-options/inggris.jpg", path: "/inggris" },
    { name: "Kongsi dagang VOC", img: "/images/img-options/voc-eic.png", path: "/voc-eic" },
    { name: "Tordesillas", img: "/images/img-options/tordesillas.jpeg", path: "/tordesillas" },
    { name: "Saragosa", img: "/images/img-options/saragoza.jpg", path: "/saragoza" },
];


onMounted(() => {
  if (gridRef.value) {
    gsap.from(gridRef.value.querySelectorAll('.grid-item'), {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
    });
  }
});
</script>

