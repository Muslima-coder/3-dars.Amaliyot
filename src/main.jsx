import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterContext } from './context/Context.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TeachersProvider } from './context/TeachersContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CounterContext>
            <TeachersProvider>
               <App />
            </TeachersProvider>
        </CounterContext>
    </BrowserRouter>
)
