

import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import AuthPage from './Pages/HomePage/AuthPage/AuthPage'
import PageLayout from './Layouts/pageLayout/pageLayout'
import ProfilePage from './Pages/HomePage/AuthPage/ProfilePage/ProfilePage'
function App() {
  

  return (
    <PageLayout>
    <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/auth' element={<AuthPage />}/>
      <Route path='/:username' element={<ProfilePage />}/>
    </Routes>
      
    </PageLayout>
  )
}

export default App
