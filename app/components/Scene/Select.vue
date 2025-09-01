<template>
    <TresGroup>
        <TresGroup :position="[0, 0, 0]">
            <TresGroup :position="[0, 0, 0]">
                <primitive :object="FramePortugal.scene"/>
                <primitive :object="FramePortugal.scene"/>
            </TresGroup>
        </TresGroup>
    </TresGroup>
</template>

<script setup>
import { useGLTF } from '@tresjs/cientos'

const router = useRouter()

const FrameBelanda = await useGLTF('/models/FrameBelanda.glb')
FrameBelanda.scene.scale.set(0.5, 0.5, 0.5)
const FrameSpanyol = await useGLTF('/models/FrameSpanyol.glb')
const FramePortugal = await useGLTF('/models/Frame.glb')
const FrameInggris = await useGLTF('/models/FrameInggris.glb')
const FrameVOC = await useGLTF('/models/FrameKongsiDagang.glb')
const FrameTordesillas = await useGLTF('/models/FrameTordesillas.glb')
const FrameSaragoza = await useGLTF('/models/FrameSaragoza.glb')

const pindahPage = (param) => {
    router.push({name: param})
} 



</script>