<template>
    <home-button />
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-8">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
            <!-- Judul -->
            <h1 class="text-2xl font-bold text-center mb-6">
                Revolusi Prancis
            </h1>

            <!-- Grid -->
            <div class="grid grid-cols-2 gap-6">
                <!-- Kolom kiri (scrollable) -->
                <div class="h-96 overflow-y-auto space-y-4 pr-4">
                    <!-- Latar Belakang -->
                    <div class="bg-gray-50 p-4 rounded shadow-sm border-l-4 border-blue-400">
                        <h2 class="font-semibold mb-2 text-gray-800">Penyebab Utama:</h2>
                        <ul class="list-disc list-inside text-sm space-y-1 text-gray-700">
                            <li>Krisis Ekonomi: Utang besar akibat perang, pajak berat, gagal panen → rakyat kelaparan.</li>
                            <li>Ketidakadilan Sosial: Golongan I & II bebas pajak, Golongan III menanggung beban tanpa hak politik.</li>
                            <li>Pengaruh Pencerahan: Voltaire, Rousseau, Montesquieu mendorong kebebasan, persamaan, demokrasi.</li>
                            <li>Pemerintahan Absolut: Louis XVI boros, gagal atasi krisis; kemewahan Marie Antoinette menambah kebencian.</li>
                            <li>Inspirasi Revolusi Amerika: Keberhasilan melawan Inggris memicu semangat keadilan & kebebasan.</li>
                        </ul>
                    </div>

                    <!-- Isi Perjanjian -->
                    <div class="bg-gray-50 p-4 rounded shadow-sm border-l-4 border-green-400">
                        <h2 class="font-semibold mb-2 text-gray-800">Akibat:</h2>
                        <ul class="list-disc list-inside text-sm space-y-1 text-gray-700">
                            <li>Politik: Monarki absolut runtuh → lahir republik & demokrasi; konstitusi, parlemen, nasionalisme berkembang.</li>
                            <li>Sosial: Feodalisme dihapus, semua setara di depan hukum; kesadaran hak asasi meningkat.</li>
                            <li>Ekonomi: Pajak adil, tanah bangsawan & gereja dibagi; kelas borjuis tumbuh.</li>
                            <li>Global: Jadi inspirasi revolusi di Eropa, Amerika Latin, Asia; memicu gerakan kemerdekaan.</li>
                        </ul>
                    </div>

                    
                </div>

                <!-- Kolom kanan (ilustrasi) -->
                <div class="flex items-center justify-center">
                    <img src="/images/rev-prancis/images.jpeg" alt="Ilustrasi Revolusi Prancis" class="w-full h-auto max-w-xs rounded-lg shadow-md" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>
