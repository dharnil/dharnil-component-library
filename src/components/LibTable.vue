<script setup lang="ts">
import { Component } from 'vue'
import LibButton from './LibButton.vue';
import LibUnsortedIcon from './LibUnsortedIcon.vue';
import LibDescIcon from './LibDescIcon.vue';
import LibAscIcon from './LibAscIcon.vue';

const prop = withDefaults(
    defineProps<{
        dataSet: {}[]
        actions?:{
            label?: string
            icon: Component
        }[]
    }>(),
    {}
)

// Add Reset Order to Dataset
let data = prop.dataSet

const sortColumn = (key: string) => {
    Object.keys(data[0]).forEach(header => {
        if (header != key) {
            var heading = document.querySelector(`.header-${header.toLowerCase().replace(/ /g, '-')}`)
            if (heading?.classList.contains('desc')) {
                heading?.classList.remove('desc')
            }
            if (heading?.classList.contains('asc')) {
                heading?.classList.remove('asc')
            }
        }

    })
    var column = document.querySelector(`.header-${key.toLowerCase().replace(/ /g, '-')}`)
    if (column?.classList.contains('asc')) {
        column.classList.replace('asc', 'desc')
        data.sort((a, b): number => {
            if (a[key as keyof {}] > b[key as keyof {}]) return -1
            else return 0
        })
        return
    } else if (column?.classList.contains('desc')) {
        column?.classList.replace('desc', 'asc')
    } else column?.classList.add('asc')
    data.sort((a, b): number => {
        if (a[key as keyof {}] < b[key as keyof {}]) return -1
        else return 0
    })
    returnProp(key)
}

const returnProp = (key: string): Component => {
    var column = document.querySelector(`.header-${key.toLowerCase().replace(/ /g, '-')}`)
    if (column?.classList.contains('desc'))
        return LibDescIcon
    else if (column?.classList.contains('asc'))
        return LibAscIcon
    else return LibUnsortedIcon
}
</script>

<template>
    <!-- Header Must be a Button Component -->
    <div class="table-container">
        <table class="table-layout">
            <tr>
                <th v-for="key in Object.keys(data![0])" :class="'header-' + key.toLowerCase().replace(/ /g, '-')">
                    <LibButton @click="sortColumn(key)" size="small" area="seemless" bgColor="#00000000"
                        borderStyle="borderless" :icon="returnProp(key)">{{ key }}</LibButton>
                </th>
                <th v-if="actions && actions?.length > 0" v-for="action in actions">
                    <LibButton v-if="action.label != null" size="small" area="seemless" bgColor="#00000000"
                        borderStyle="borderless">{{ action.label }}</LibButton>
                </th>
            </tr>
            <tr v-for="(values, index) in data!.slice(0, 10)" :key="index">
                <td v-for="value in Object.values(values)"
                    :class="{ 'header-column': Object.values(values).indexOf(value) == 0 }">
                    <div>{{ value }}</div>
                </td>
                <td class="cell-data-center" v-if="actions && actions?.length > 0" v-for="action in actions">
                    <div>
                        <LibButton @click="$emit('actionClick', values)" :icon="action.icon" size="small" bgColor="none" borderColor=""
                        area="seemless" />
                    </div>
                </td>
            </tr>
        </table>
    </div>


</template>

<style scoped>
.table-container {
    border: 1px solid #4f4f4f;
    border-radius: 6px;
    max-width: 1000px;
    overflow: scroll;
    width: 100%;
}

.table-layout {
    background-color: #1b2123;
    border-spacing: 0;
    overflow: scroll;
    font-size: 14px;
    width: 100%;
}

.table-layout :deep(th) {
    border-bottom: 1px solid #4f4f4f;
    margin: 0 auto;
    min-width: max-content;
}

.table-layout :deep(td) {
    overflow: hidden;
}

.table-layout :deep(td:not(.cell-data-center)) div {
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 150px;
    overflow: hidden;
    padding: 6px;
}

.cell-data-center div {
    display: flex;
    justify-content: center;
}
</style>