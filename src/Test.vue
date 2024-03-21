<script setup lang="ts">
import MicrosoftLogon from './components/MicrosoftLogon.vue'
import LibButton from './components/LibButton.vue'
import LibTable from './components/LibTable.vue'

const msalConfig = {
    auth: {
        clientId: "",
        authority: "",
        redirectUri: "http://localhost:5173/",
    },
    cache: {
        cacheLocation: "",
        storeAuthStateInCookie: false,
    }
}
</script>

<template>
    <div class="container">
        <MicrosoftLogon :msal-config="msalConfig" />
        <LibButton :label="'Button'"/>
        <Suspense>
            <LibTable />
        </Suspense>
    </div>
</template>

<style scoped>
.container {
    height: 100vh;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
}
</style>
