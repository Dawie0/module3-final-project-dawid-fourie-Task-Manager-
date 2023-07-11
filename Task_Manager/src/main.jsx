import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from './contexts/ThemeContext.jsx'
import { TaskIndexContextProvider } from './contexts/TaskIndexContext.jsx'
import { ValidUserContextProvider } from './contexts/UserContext.jsx'
import App from './App.jsx'
import './index.css'


const Main = () => {

  

  return (
    <ThemeContextProvider>
      <ValidUserContextProvider>
        <TaskIndexContextProvider>
          <div className='App'> 
            <App />
          </div>
        </TaskIndexContextProvider>
      </ValidUserContextProvider>
    </ThemeContextProvider>
  )
}

export default Main

ReactDOM.createRoot(document.getElementById('root')).render(
    <Main />,
)
