<script setup lang="ts">
import { AccountInfo, PublicClientApplication } from '@azure/msal-browser'

const props = defineProps<{
    msalConfig: {
        auth: {
            clientId: string,
            authority: string,
            redirectUri: string
        },
        cache: {
            cacheLocation: string,
            storeAuthStateInCookie: boolean
        }
    }
}>()

const loginRequest = {
    scopes: [ "User.Read" ],
    account: {} as AccountInfo
}

const SignIn = async function () {
    console.log( "SignIn()" );

    const msalInstance = new PublicClientApplication( props.msalConfig )

    loginRequest.account = msalInstance.getAllAccounts()[ 0 ]

    await msalInstance.initialize();

    msalInstance.acquireTokenPopup( loginRequest )
        .then( tokenResponse => console.log( tokenResponse ) )
}
</script>

<template>
    <button id="sso-microsoft-button" type="button" v-on:click="SignIn()">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
            <title>MS-SymbolLockup</title>
            <rect x="1" y="1" width="9" height="9" fill="#f25022" />
            <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
            <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
            <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
        </svg>
        <div>Sign in with Microsoft</div>
    </button>
</template>

<style scoped>
#sso-microsoft-button {
    width: max-content;
    font: #5e5e5e;
    background-color: #ffffff;
    border: 1px solid #8c8c8c;
    display: flex;
    height: 41px;
    gap: 12px;
    padding: 0 12px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>
