<script setup lang="ts">
import MicrosoftLogon from './components/MicrosoftLogon.vue'
import LibButton from './components/LibButton.vue';

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
    </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
}
</style>
