<script setup lang="ts">
import MicrosoftLogon from './components/MicrosoftLogon.vue'
import LibButton from './components/LibButton.vue'
import LibTable from './components/LibTable.vue'
import LibUnsortedIcon from './components/LibUnsortedIcon.vue';
import LibDescIcon from './components/LibDescIcon.vue';
import LibAscIcon from './components/LibAscIcon.vue';

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
        <LibButton size="small" :icon="LibUnsortedIcon">Button</LibButton>
        <LibButton size="small" :icon="LibDescIcon">Button</LibButton>
        <LibButton size="small" :icon="LibAscIcon">Button</LibButton>
        <Suspense>
            <LibTable />
        </Suspense>
    </div>
</template>

<style scoped>
.container {
    gap: 100px;
    height: 100vh;
    display: grid;
    margin: 50px 0;
    align-items: center;
    justify-items: center;
    grid-template-rows: repeat(7, max-content);
}
</style>
