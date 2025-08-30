<template>
    <main class="w-full h-full">
        <MainScene />

        <div class="absolute bottom-0">
            <button @click="changeText" class="bg-blue-500 text-white p-2 rounded px-4 py-2">Change Text</button>
        </div>
    </main>
</template>

<script setup>
const changeText = () => {
    document.querySelector(".dialogue-box-1").innerText = "Saya rayap besi!";
}
</script>

<style scoped>
</style>