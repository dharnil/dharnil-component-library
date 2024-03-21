<script setup lang="ts">
// const bgColor = '#297720'

withDefaults(
    defineProps<{
        label: string
        bgColor?: string
    }>(),
    {
        bgColor: '#297720'
    }
)
</script>

<template>
    <button>{{ label }}</button>
</template>

<style scoped>
button {
    width: max-content;
    height: max-content;
    padding: 6px 12px;
    border: none;
    border: 1px solid #009b00;
    border-radius: 6px;
    font-weight: bold;
    line-height: 20px;
    color: #ffffff;
    background-color: v-bind(bgColor);
    cursor: pointer;
}
</style>
