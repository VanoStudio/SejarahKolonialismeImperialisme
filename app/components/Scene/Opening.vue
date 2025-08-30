<template>
    <TresGroup>
        <TresGroup :position="[0, 0, 0]">
            <TresGroup :position="[0, 0.15, 0]">
                <primitive :object="characterBelanda.scene"/>
                <ContactShadows :position-y="0" color="#335" :scale="5" />
            </TresGroup>

            <TresMesh>
                <TresBoxGeometry :args="[0.3, 0.3, 0.3]" />
                <TresMeshStandardMaterial :color="'#00ff00'" />
            </TresMesh>
        </TresGroup>
        
        <Html
            center
            transform
            :distance-factor="4"
            :position="[0, 0.5, 0]"
            :scale="[0.5, 0.5, 0.5]"
        >
            <h1 class="dialogue-box-1 bg-gray-100 text-xs p-1 rounded">
                Halo! Saya Rialdi!
            </h1>
        </Html>
    </TresGroup>
</template>

<script setup>
import { useGLTF, useAnimations, Html } from '@tresjs/cientos'

const characterBelanda = await useGLTF('/models/character_belanda.glb')
console.log(characterBelanda)

characterBelanda.scene.scale.set(1.5, 1.5, 1.5)

const characterBelandaAnimation = useAnimations(characterBelanda.animations, characterBelanda.scene)
characterBelandaAnimation.actions['Armature|mixamo.com|Layer0'].play()

</script>