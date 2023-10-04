import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function NewApp(){
  return(
    <h1>Hello New Apps</h1>
  )
}


const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}

const AnotherApp = (        

    <a href="https://google.com">visit google from here</a>
  
)


ReactDOM.createRoot(document.getElementById('root')).
render(
  
    // <App />
    // <NewApp/>
    AnotherApp
    

)