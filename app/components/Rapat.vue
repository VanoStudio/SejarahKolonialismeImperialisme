<template>
    <TresCanvas v-bind="gl" id="canvas" window-size>
        <TresPerspectiveCamera
            :position="[0.5, 0, 0]"
            :rotation="[0, 0, 0]"
            :far="50"
        />

        <OrbitControls 
            :target="[-3, 1, -0.5]"
            :enabled="false"
            :enableRotate ="true"
        />

        <TresGroup>
            <Suspense   Suspense>
                <SceneRuangDiskusi/>
            </Suspense>


        </TresGroup>
        <TresDirectionalLight 
        :color="0xffffff" 
        :intensity="5" 
        :position="[5, 0, 0]" 
        />

    </TresCanvas>
</template>

<script setup>
import RuangDiskusi from './Scene/RuangDiskusi.vue'

const gl = {
    clearColor: 'black',
    antialias: true,
}
</script>