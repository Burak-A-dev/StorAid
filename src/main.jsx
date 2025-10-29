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
    <CTAButton logo="facebook" onClick={() => window.open('https://facebook.com', '_blank')} />
<CTAButton logo="x" onClick={() => window.open('https://twitter.com', '_blank')} />
<CTAButton logo="instagram" onClick={() => window.open('https://instagram.com', '_blank')} />
<CTAButton logo="youtube" onClick={() => window.open('https://youtube.com', '_blank')} />

  </StrictMode>,
)