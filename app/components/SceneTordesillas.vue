<template>
    <TresCanvas v-bind="gl" id="canvas" window-size>
        <TresPerspectiveCamera
            :position="[0, 0, 8]"
            :far="50"
        />

        <OrbitControls 
            :target="[-3, 0.5, 0]"
            :enabled="false"
        />

        <TresGroup>
            <Suspense>
                <ScenePeopleHandShake/>
            </Suspense>


        </TresGroup>

        <TresAmbientLight :intensity="2" />
        <TresDirectionalLight :color="0xffffff" :intensity="1" />
    </TresCanvas>
</template>

<script setup>
const gl = {
    clearColor: 'white',
    antialias: true,
}
</script>