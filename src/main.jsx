import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App'
import "./index.scss"
import { Provider } from 'react-redux'
import { store } from './Store/store'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(


<Provider store={store}>
    <App/>
</Provider>

)


