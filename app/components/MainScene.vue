<template>
    <TresCanvas v-bind="gl" id="canvas" window-size>
        <SceneSejarah/>
    </TresCanvas>
</template>

<script setup>
import { SceneSejarah } from '#components';
import Sejarah from './Scene/Sejarah.vue';

const gl = {
    clearColor: 'black',
    antialias: true,
}
</script>