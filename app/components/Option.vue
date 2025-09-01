<template>
    <TresCanvas v-bind="gl" id="canvas" window-size>
        <TresPerspectiveCamera
            :position="[0, 0.5, 1]"
        />

        <OrbitControls 
            :target="[0, 0.2, 0]"
            :enabled="false"
        />

        <TresGroup>
            <Suspense>
                <SceneSelect/>
            </Suspense>

            <!-- <Suspense>
                <Ocean>
                    <TresCircleGeometry :args="[10, 8]" />
                </Ocean>
            </Suspense> -->
        </TresGroup>

        <TresAmbientLight :intensity="2" />
        <TresDirectionalLight :color="0xffffff" :intensity="1" />
    </TresCanvas>
</template>

<script setup>
import { SceneSelect } from '#components';

const gl = {
    clearColor: 'white',
    antialias: true,
}
</script>