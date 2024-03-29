<script setup lang="ts">
import { Component, reactive } from 'vue'
import LibButton from './LibButton.vue';
import LibUnsortedIcon from './LibUnsortedIcon.vue';
import LibDescIcon from './LibDescIcon.vue';
import LibAscIcon from './LibAscIcon.vue';
import LibAddIcon from './LibAddIcon.vue';
import LibTextField from './LibTextField.vue';
import LibLabel from './LibLabel.vue';
import LibCancelIcon from './LibCancelIcon.vue';
import { useTableStore } from '../store/TableStore';

const prop = withDefaults(
    defineProps<{
        title?: string
        dataSet: {}[]
        actions?: {
            label?: string
            icon: Component
        }[]
    }>(),
    {}
)

// Add Reset Order to Dataset
let data = useTableStore()
data.data = prop.dataSet

const returnProp = (key: string): Component => {
    var column = document.querySelector(`.header-${key.toLowerCase().replace(/ /g, '-')}`)
    if (column?.classList.contains('desc'))
        return LibDescIcon
    else if (column?.classList.contains('asc'))
        return LibAscIcon
    else return LibUnsortedIcon
}

const sortColumn = (key: string) => {
    Object.keys(data.data[0]).forEach(header => {
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
        data.data.sort((a, b): number => {
            if (a[key as keyof {}] > b[key as keyof {}]) return -1
            else return 0
        })
        return
    } else if (column?.classList.contains('desc')) {
        column?.classList.replace('desc', 'asc')
    } else column?.classList.add('asc')
    data.data.sort((a, b): number => {
        if (a[key as keyof {}] < b[key as keyof {}]) return -1
        else return 0
    })
    returnProp(key)
}

let filterArray: string[] = reactive([])

const inputValue = async (value: string) => {
    filterArray.push(value)
    filterData()
}

const filterData = async () => {
    filterArray.forEach(filt => {
        data.data = data.data.filter(a => {
            console.log(Object.keys(a).length)
            for (let i = 0; i < Object.values(a).length; i++) {
                console.log(String(Object.values(a)[i]).toLowerCase(), filt.toLowerCase(), String(Object.values(a)[i]).toLowerCase().includes(filt.toLowerCase()))
                if (String(Object.values(a)[i]).toLowerCase().includes(filt.toLowerCase()))
                    return true
            }
        })
    })
}

const removeFilter = (index: number) => {
    filterArray.splice(index, 1)
    data.data = prop.dataSet

}
</script>

<template>
    <!-- Header Must be a Button Component -->
    <div class="component-container">
        <LibLabel v-if="title" size="small">{{ title }}</LibLabel>
        <div class="action-button">
            <div class="table-filter-list">
                <!-- Horizontal Scroll Supported on Trackpad Enabled Devices -->
                <LibButton v-for="(filter, index) in filterArray" :key="index" :icon="LibCancelIcon" bgColor="#1b2123"
                    borderColor="#4f4f4f" size="small" class="table-filter-tag" @click="removeFilter(index)">{{ filter
                    }}
                </LibButton>
            </div>
            <LibTextField @get-input="inputValue" size="small" />
            <LibButton size="small" :icon="LibAddIcon">Add</LibButton>
        </div>
        <div v-if="data.data[0] && Object.keys(data.data[0]).length != 0" class="table-container">
            <table class="table-layout">
                <tr>
                    <th v-for="key in Object.keys(data.data![0])"
                        :class="'header-' + key.toLowerCase().replace(/ /g, '-')">
                        <LibButton @click="sortColumn(key)" size="small" area="seemless" bgColor="#00000000"
                            borderStyle="borderless" :icon="returnProp(key)">{{ key }}</LibButton>
                    </th>
                    <th v-if="actions && actions?.length > 0" v-for="action in actions">
                        <LibButton v-if="action.label != null" size="small" area="seemless" bgColor="#00000000"
                            borderStyle="borderless">{{ action.label }}</LibButton>
                    </th>
                </tr>
                <tr v-for="(values, index) in data.data!.slice(0, 10)" :key="index">
                    <td v-for="value in Object.values(values)"
                        :class="{ 'header-column': Object.values(values).indexOf(value) == 0 }">
                        <div>{{ value }}</div>
                    </td>
                    <td class="cell-data-center" v-if="actions && actions?.length > 0" v-for="action in actions">
                        <div>
                            <LibButton @click="$emit('actionClick', values, action.label)" :icon="action.icon"
                                size="small" bgColor="none" borderColor="" area="seemless" />
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
.table-title {
    font-size: 28px;
}

.table-filter-list {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto, max-content, max-content;
    gap: 6px;
    overflow-x: scroll;
    scrollbar-width: none;
}

.action-button {
    justify-content: right;
    align-items: end;
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-auto-flow: column;
    gap: 12px;
}

.component-container {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, auto);
    gap: 12px;
}

.table-container {
    grid-column: span 2;
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