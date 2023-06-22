import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from './contexts/ThemeContext.jsx'
import './index.css'


const Main = () => {

  

  return (
    <ThemeContextProvider>
      <div className='App'> 
        <App />
      </div>
    </ThemeContextProvider>
  )
}

export default Main

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />,
)
