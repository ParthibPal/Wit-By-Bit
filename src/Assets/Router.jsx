import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from '../Pages/Product.jsx';
import ProductForm from '../Pages/ProductForm.jsx';
import ProductForm2 from '../Pages/ProductForm2.jsx';
import ProductForm3 from '../Pages/ProductForm3.jsx';
import ProductForm4 from '../Pages/ProductForm4.jsx';
import SideNav from '../Components/SideNav.jsx';
import '../Css/Router.css'; // Optional: Include a CSS file for styling

const Router = () => {
    return (
        <BrowserRouter>
            <div className="appContainer">
                <SideNav />
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Product />} />
                        <Route path='/productform' element={<ProductForm />} />
                        <Route path='/productform2' element={<ProductForm2 />} />
                        <Route path='/productform3' element={<ProductForm3 />} />
                        <Route path='/productform4' element={<ProductForm4 />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Router;
