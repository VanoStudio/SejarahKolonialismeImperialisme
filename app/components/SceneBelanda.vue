<template>
    <TresCanvas v-bind="gl" id="canvas" window-size>
        <TresPerspectiveCamera
            :position="[0, 2, 6]"
        />

        <OrbitControls 
            :target="[0, 0, 0]"
            :enabled="false"
        />

        <TresGroup>
            <Suspense>
              <SceneKapalDagang/>
            </Suspense>

            <Suspense>
                <Ocean>
                    <TresCircleGeometry :args="[10, 8]" />
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