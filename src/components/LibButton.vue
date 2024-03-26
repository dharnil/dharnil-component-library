<script setup lang="ts">

withDefaults(
    defineProps<{
        size?: string
        bgColor?: string
        borderStyle?: string
        borderColor?: string
        area?: string
        icon?: object
    }>(),
    {
        size: '',
        bgColor: '#297720',
        borderStyle: '',
        borderColor: '#009b00',
        area: ''
    }
)
</script>

<template>
    <button :class="[size + '-btn', borderStyle, area]">
        <div>
            <slot></slot>
        </div>
        <component v-if="icon" :is="icon"></component>
    </button>
</template>

<style scoped>
.small-btn {
    height: 28px;
}

.large-btn {
    height: 40px;
}

.borderless {
    border: none;
}

.seemless {
    padding: 6px;
}

button {
    border: v-bind(borderStyle) v-bind(borderColor);
    background-color: v-bind(bgColor);
    max-width: max-content;
    min-width: max-content;
    align-items: center;
    white-space: nowrap;
    border-radius: 6px;
    padding: 6px 12px;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    height: 32px;
    gap: 6px;
}
</style>
