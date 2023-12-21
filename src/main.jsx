import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import store from "./store.js"
import { Provider } from "react-redux"
import { registerLicense } from '@syncfusion/ej2-base'

registerLicense('ORg4AjUWIQA/Gnt2UVhhQlVFfV5dXGpWfFN0QXNddVtxfldGcC0sT3RfQF5iS3xTdkBjWXxacHBcRw==');

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
