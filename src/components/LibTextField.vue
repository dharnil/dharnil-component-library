<script setup lang="ts">
import { ref } from 'vue';

withDefaults(
    defineProps<{
        size?: string
        bgColor?: string
        borderStyle?: string
        borderColor?: string
        icon?: object
    }>(),
    {
        size: '',
        bgColor: '#297720',
        borderStyle: '1px solid',
        borderColor: '#009b00',
        area: ''
    }
)

let inputValue = ref('')

const helloWorld = () => {
    inputValue.value = ''
}

</script>

<template>
    <div :class="['textfield', 'textfield-' + size]">
        <input type="text" placeholder="Search" class="textfield-input" v-model="inputValue" @keyup.enter="$emit('getInput', inputValue); helloWorld()">
    </div>
</template>

<style scoped>
.textfield {
    background-color: #1b2123;
    border: 1px solid #4f4f4f;
    border-radius: 6px;
    height: 30px;
    display: grid;
    align-items: center;
    padding: 0 6px;
    gap: 6px;
}

.textfield-tag {
    padding: 2px 6px 0px 6px;
    background-color: #4f4f4f;
    border-radius: 6px;
}

.textfield-input {
    all: unset;
    height: max-content;
    width: 120px;
    background-color: #1b2123;
}

.textfield-small {
    height: 26px;
}

.large-btn {
    height: 40px;
}
</style>