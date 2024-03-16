import { App } from 'vue'
import './style.css'

import LibButton from './components/LibButton.vue'
import LibLabel from './components/LibLabel.vue'
import MicrosoftLogon from './components/MicrosoftLogon.vue'

export { LibButton, LibLabel }

export default {
    install: (app: App) => {
        app.component('LibButton', LibButton)
        app.component('LibLabel', LibLabel)
        app.component('MicrosoftLogon', MicrosoftLogon)
    }
}

// Local Testing
import { createApp } from 'vue'
import Test from './Test.vue'

const app = createApp( Test )
app.mount( '#app' )