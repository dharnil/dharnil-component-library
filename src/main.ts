import { App } from 'vue'
import './style.css'

import LibButton from './components/LibButton.vue'
import LibLabel from './components/LibLabel.vue'
import MicrosoftLogon from './components/MicrosoftLogon.vue'
import LibUnsortedIcon from './components/LibUnsortedIcon.vue';
import LibDeleteIcon from './components/LibDeleteIcon.vue'
import LibEditIcon from './components/LibEditIcon.vue'
import LibDescIcon from './components/LibDescIcon.vue'
import LibAscIcon from './components/LibAscIcon.vue'
import LibTable from './components/LibTable.vue'

export { LibButton, LibLabel, LibUnsortedIcon, LibDescIcon, LibAscIcon, LibTable, LibDeleteIcon, LibEditIcon }

export default {
    install: (app: App) => {
        app.component('LibButton', LibButton)
        app.component('LibLabel', LibLabel)
        app.component('MicrosoftLogon', MicrosoftLogon)
        app.component('LibUnsortedIcon', LibUnsortedIcon)
        app.component('LibDescIcon', LibDescIcon)
        app.component('LibAscIcon', LibAscIcon)
        app.component('LibTable', LibTable)
        app.component('LibDeleteIcon', LibTable)
        app.component('LibEditIcon', LibTable)
    }
}

// Local Testing
// import { createApp } from 'vue'
// import Test from './Test.vue'

// const app = createApp( Test )
// app.mount( '#app' )