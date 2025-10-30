import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Footer from './components/common/Footer'
import CTAButton from './components/common/CTAButton'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Footer/>
    <CTAButton text="Hello"/>
</StrictMode>
)