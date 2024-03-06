import { App } from 'vue'
import './style.css'

import LibButton from './components/LibButton.vue'
import LibLabel from './components/LibLabel.vue'

export { LibButton, LibLabel }

export default {
    install: (app: App) => {
        app.component('LibButton', LibButton)
        app.component('LibLabel', LibLabel)
    }
}

// Local Testing
import { createApp } from 'vue'
import TestApp from './App.vue'

const app = createApp( TestApp )
app.mount( '#app' )