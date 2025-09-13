<template>
  <SceneVocSenang :current-id="currentId"/>
  <HomeButton/>

    <main>
    <div class="fixed w-full h-full">
      <div class="relative w-full h-full">
        <div class="flex items-center justify-center w-full h-full">
          <div class="w-[65%]"></div>
          <div class="w-[35%] h-full p-5 self-stretch">
            <div class="relative flex flex-col justify-between h-full w-full bg-white/50 backdrop-blur-2xl rounded-xl p-5">
              <Transition name="fade-slide" mode="out-in">
                <div :key="currentId" class="space-y-4">
                  <h2 class="font-extrabold text-lg flex-1">{{ data[currentId].title }}</h2>
                  <ul class="space-y-5">
                    <li v-for="(desc, idx) in data[currentId].desc" :key="idx">
                      <span v-html="desc"></span>
                    </li>
                  </ul>
                  <div class="w-full mt-4">
                    <img
                      :src="data[currentId].img"
                      alt="Ilustrasi"
                      class="w-50 h-70 object-fill rounded-lg border border-gray-300"
                    />
                  </div>

                </div>
              </Transition>
              <div class="flex justify-between items-center mb-4">
                <button
                  class="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
                  :disabled="currentId === 0"
                  @click="prevData"
                ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1m3.66 6.82l5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07a1 1 0 0 0 0 1.64"/></svg></button>
                <button
                  class="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
                  :disabled="currentId === data.length - 1"
                  @click="nextData"
                ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m7.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82M16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1"/></svg></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const currentId = ref(0)
const data = [
  {
    id: 0,
    title: 'VOC (Vereenigde Oostindische Compagnie)',
    desc: [
      '<b>Didirikan:</b> 20 Maret 1602, atas usulan Johan van Oldenbarnevelt.',
      '<b>Tujuan:</b> Menyatukan perusahaan dagang Belanda agar tidak saling bersaing.',
      '<b>Hak Oktroi:</b> VOC berperan seperti negara – monopoli dagang Asia, mencetak uang, membentuk angkatan perang, membangun benteng, membuat perjanjian, hingga mengatur hukum.',
      '<b>Pusat:</b> Batavia (Jakarta).',
      '<b>Masa aktif:</b> 1602 – 31 Desember 1799.'
    ],
    img: '/images/belanda/michiel.jpg',
  },
  {
    id: 1,
    title: 'Kelemahan & Kejatuhan VOC',
    desc: [
      '<b>Internal:</b>',
      '<ul>',
        '<li>Korupsi besar-besaran (dijuluki Vergaan Onder Corruptie).</li>',
        '<li>Biaya tinggi: gaji pegawai, benteng, armada.</li>',
        '<li>Perang terus-menerus: Mataram, Gowa-Tallo, Banten.</li>',
        '<li>Manajemen buruk: Heeren Zeventien gagal mengontrol.</li>',
      '</ul>',
      '<b>Eksternal:</b>',
      '<ol>',
        '<li>Persaingan dagang: kalah dari Inggris (EIC) & Prancis.</li>',
        '<li>Politik Belanda berubah: Republik Batavia (1795) anti-monopoli.</li>',
        '<li>Perlawanan rakyat Nusantara: makin luas, menguras biaya & melemahkan VOC.</li>',
      '</ol>'
    ],
    img:null
  },
  {
    id: 2,
    title: 'Title 3',
    desc: [
      'Description for title 3'
    ]
  }
]



function prevData() {
  if (currentId.value > 0) currentId.value--
}

function nextData() {
  if (currentId.value < data.length - 1) currentId.value++
}

</script>

<style>
</style>
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
</style>
