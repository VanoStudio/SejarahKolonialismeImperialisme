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
        
    </TresCanvas>
</template>

<script setup>
const gl = {
    clearColor: 'white',
    antialias: true,
}
</script>