import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TwitterCard from './TwitterCard'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TwitterCard name="Elon Musk" userName="elonmusk"/>
    <TwitterCard name="Sergio Kun Aguero
" userName="aguerosergiokun"/>
  </React.StrictMode>
)
