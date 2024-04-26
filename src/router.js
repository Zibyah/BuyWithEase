import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Landing } from './app/pages/Landing'
import { Product } from './app/pages/Products'
import { LoginPage } from './app/pages/Loginpage'

export const RoutesPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element= {<LoginPage />} />
                    <Route path="/home" element={<Landing />} />
                    <Route path="/product" element={<Product />} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}