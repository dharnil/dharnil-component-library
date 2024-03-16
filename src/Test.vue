<script setup lang="ts">
import MicrosoftLogon from './components/MicrosoftLogon.vue'

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
    <MicrosoftLogon :msal-config="msalConfig" />
</template>

<style scoped>
</style>
