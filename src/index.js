import ReactDOM from 'react-dom/client'
import { Loader } from '@react-three/drei'
import Interface from './Interface.js'
import App from './App.js'
import { CustomizationsProvider } from './Customizations.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <>
    <CustomizationsProvider>
      <App />
      <Interface />
    </CustomizationsProvider>
    <Loader />
  </>
)
