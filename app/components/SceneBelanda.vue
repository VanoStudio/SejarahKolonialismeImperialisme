<template>
    <TresCanvas v-bind="gl" id="canvas" window-size>
        <TresPerspectiveCamera
            :position="[-5, 5.5, -7.2]"
            :far="50"
        />

        <OrbitControls 
            :target="[-3, 1, -0.5]"
            :enabled="false"
        />

        <TresGroup>
            <Suspense   Suspense>
                <SceneKapalDagang/>
            </Suspense>

            <Suspense>
                <Ocean>
                    <TresCircleGeometry :args="[70, 10]" />
                </Ocean>
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