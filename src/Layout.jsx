import { Outlet } from 'react-router'
import { Navbar } from './components/Navbar/Navbar'
import './index.css'
import {ThemeContextProvider} from './context/ThemeContext'
// import {Inter} from 'next/font/google'

// const inter = Inter({subsets : ['latin']})

export const metadata = {
  title : 'Blog App',
  description : 'The best blog'
}
 export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body >
        <ThemeContextProvider>
          <div className='container'>
            <div className='wrapper'> 
            <Navbar />
            <Outlet/>
            {children}
            </div>
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  )
 }