import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthPage } from '../../pages/AuthPage'
import { GeolocationPage } from '../../pages/GeolocationPage'
import { AboutPage } from '../../pages/AboutPage'
import { ErrorPage } from '../../pages/ErrorPage'
import { RegistrPage } from '../../pages/RegistrPage'

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<AuthPage/>}></Route>
            <Route path="/geolocation" element={<GeolocationPage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/error" element={<ErrorPage/>}></Route>
            <Route path="/registr" element={<RegistrPage/>}></Route>
        </Routes>
    </BrowserRouter>
}