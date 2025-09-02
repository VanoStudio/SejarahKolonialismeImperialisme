<template>
    <HomeButton/>
    <SceneTordesillas/>

    <main id="smooth-wrapper">
        <div id="smooth-content" class="fixed w-full h-full">
        <div class="relative w-full h-full">

            <!-- Judul di luar box -->
            <div class="w-full text-center absolute top-5">
            <h1 class="text-3xl font-bold text-black drop-shadow-lg">
                Perjanjian Tordesillas
            </h1>
            </div>

            <!-- Box konten -->
            <div class="flex w-full h-full">
            <div class="w-[35%] h-full p-5 ml-40 mt-20">
                <div class="relative flex flex-col h-full w-full bg-white rounded-xl shadow-lg p-5">

                <!-- Konten smooth scroll (tanpa scrollbar) -->
                <div class="overflow-y-auto no-scrollbar max-h-[75vh] space-y-6 pr-2">
                    <Transition name="fade-slide" mode="out-in">
                    <div class="space-y-6 text-lg leading-relaxed">

                        <h2 class="font-extrabold text-2xl mb-4">Perjanjian Tordesillas (7 Juni 1494)</h2>

                        <!-- Latar Belakang -->
                        <div class="bg-gray-50 p-4 rounded shadow-sm border-l-4 border-blue-400">
                        <h3 class="font-semibold mb-2 text-gray-800">Latar Belakang:</h3>
                        <ul class="list-disc list-inside space-y-1 text-gray-700">
                            <li>Spanyol & Portugis bersaing dalam pelayaran samudra.</li>
                            <li>Penemuan benua Amerika (1492) oleh Columbus menimbulkan sengketa wilayah.</li>
                            <li>Paus Alexander VI memediasi untuk mencegah konflik.</li>
                        </ul>
                        </div>

                        <!-- Isi Perjanjian -->
                        <div class="bg-gray-50 p-4 rounded shadow-sm border-l-4 border-green-400">
                        <h3 class="font-semibold mb-2 text-gray-800">Isi Perjanjian:</h3>
                        <ul class="list-disc list-inside space-y-1 text-gray-700">
                            <li>Dunia dibagi dengan garis demarkasi vertikal di Samudra Atlantik (370 legua barat Kepulauan Tanjung Verde).</li>
                            <li>Timur garis → Portugis.</li>
                            <li>Barat garis → Spanyol.</li>
                        </ul>
                        </div>

                        <!-- Pembagian Wilayah -->
                        <div class="bg-gray-50 p-4 rounded shadow-sm border-l-4 border-purple-400">
                        <h3 class="font-semibold mb-2 text-gray-800">Pembagian Wilayah:</h3>
                        <ul class="list-disc list-inside space-y-1 text-gray-700">
                            <li>Portugis: Afrika, India, Asia (termasuk Malaka & Maluku), Brasil (karena berada di timur garis).</li>
                            <li>Spanyol: Hampir seluruh Amerika (kecuali Brasil).</li>
                        </ul>
                        </div>

                        <!-- Dampak -->
                        <div class="bg-gray-50 p-4 rounded shadow-sm border-l-4 border-red-400">
                        <h3 class="font-semibold mb-2 text-gray-800">Dampak:</h3>
                        <ul class="list-disc list-inside space-y-1 text-gray-700">
                            <li>Portugis berkembang di Asia sebagai kekuatan maritim.</li>
                            <li>Spanyol menguasai Amerika & kemudian Filipina.</li>
                            <li>Menjadi awal kolonialisme global bangsa Eropa.</li>
                        </ul>
                        </div>

                    </div>
                    </Transition>
                </div>

                </div>
            </div>
            </div>

        </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

onMounted(() => {
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.2,   // kehalusan scroll (semakin besar semakin lembut)
    effects: true,
  });
});
</script>

<style>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-leave-from, .fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Hilangkan scrollbar */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
