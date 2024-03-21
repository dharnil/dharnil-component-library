<script setup lang="ts">
import { onMounted } from 'vue'

let headers: string[], data: [string[]] = [[]]

async function fetchData() {
    console.log('fetchData()')
    await fetch("", {
        method: "GET",
        headers: {
            'content-type': 'text/csv'
        }
    }).then(res => res.text().then(body => {
        let array = body.split('\n')
        headers = array[0].split(',')
        for (let i = 0; i < 10; i++) {
            let line: string[] = array.slice(1)[i].split(',')
            data[i] = line
        }
    }))
}
await fetchData()

// console.log(data)

const headerCount = headers!.length

onMounted(() => {
    var gridLayout = document.querySelector('.grid-layout')
    for (let i = 0; i < 6; i++) {
        const element = document.createElement('div')
        element.innerText = headers[i]
        console.log('header-' + headers[i].toLowerCase().replace(/ /g, '-'))
        element.className = 'header-' + headers[i].toLowerCase().replace(/ /g, '-')
        gridLayout?.appendChild(element)
    }
    data.forEach(array => {
        for (let i = 0; i < 6; i++) {
            const element = document.createElement('div')
            element.className = headers[i].toLowerCase().replace(/ /g, '-')
            element.innerText = array[i]
            gridLayout?.appendChild(element)
        }
    });
})

</script>

<template>
    <!-- Header Must be a Button Component -->
    <div class="grid-layout"></div>
</template>

<style scoped>
.grid-layout {
    background-color: #1b2123;
    font-size: 14px;
    width: 80vw;
    padding: 12px;
    display: grid;
    grid-template-columns: repeat(v-bind(headerCount), 1fr);
    border-radius: 6px;
    gap: 12px;
}

.grid-layout :deep(div) {
    /* background-color: darkolivegreen; */
    width: max-content;
}

.grid-layout :deep(div[class*='header']) {
    background-color: #1a2a3e;
    border: 1px solid #1e3953;
    width: max-content;
    border-radius: 6px;
    padding: 6px 12px;
    font-weight: bold;
    line-height: 20px;
    cursor: pointer;
}
</style>

<style></style>