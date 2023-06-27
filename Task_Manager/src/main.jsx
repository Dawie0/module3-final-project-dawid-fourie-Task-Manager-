import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from './contexts/ThemeContext.jsx'
import { TaskIndexContextProvider } from './contexts/TaskIndexContext.jsx'
import './index.css'


const Main = () => {

  

  return (
    <ThemeContextProvider>
      <TaskIndexContextProvider>
        <div className='App'> 
          <App />
        </div>
      </TaskIndexContextProvider>
    </ThemeContextProvider>
  )
}

export default Main

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />,
)
