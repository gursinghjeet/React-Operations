import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function NewApp(){
  const part = ' you are welcome'
  return(
    <h1>Hello New Apps{part}</h1>
  )
}


// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const AnotherApp = (        

    <a href="https://google.com">visit google from here</a>

)

const substring = ' from here'

const reactElement = React.createElement(
  'a',
  {href : "https://google.com",targetm : '_blank'},
  'Click me to visit google',
  substring
)


ReactDOM.createRoot(document.getElementById('root')).
render(
  
    // <App />
    // <NewApp/>
    // AnotherApp
    reactElement
    

)