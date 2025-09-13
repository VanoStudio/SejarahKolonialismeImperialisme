<template>
    <TresCanvas v-bind="gl" id="canvas" window-size>
        <TresPerspectiveCamera
            :position="[0, 0, 0]"
            :far="50"
        />

        <OrbitControls 
            :target="[-3, 1, -0.5]"
            :enabled="false"
        />

        <TresGroup>
            <Suspense   Suspense>
                <ScenePerang/>
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
const gl = {
    clearColor: 'white',
    antialias: true,
}
</script>