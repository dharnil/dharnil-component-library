<script setup lang="ts">
withDefaults(
    defineProps<{
        size?: string
        bgColor?: string
    }>(),
    {
        size: '',
        bgColor: '#297720',
    }
)
</script>

<template>
    <label :class="[size + '-label', 'lable-layout']">
        <slot>
            <div>
                {{ $slots.default }}
            </div>
        </slot>
    </label>
</template>

<style scoped>
.large-label {
    font-size: 40px !important;
}

.small-label {
    font-size: 26px !important;
}

.lable-layout {
    font-size: 32px;
}
</style>
