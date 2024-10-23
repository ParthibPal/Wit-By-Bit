import React from 'react';
import '../Css/ProductForm4.css'
import ModifiedNav from '../Components/ModifiedNav';
import { useNavigate } from 'react-router-dom';
const ProductForm4 = () => {
    const navigate = useNavigate();
    return (
        <>
            <h2 style={{ marginLeft: '3vh' }}>Add product</h2>
            <ModifiedNav />
            <div className="formContainer">
                <div className="priceBox">
                    <p className="priceInfo">Price Info</p>
                    <div className="priceField">
                        <label htmlFor="priceInput">Price*</label>
                        <div className="inputWrapper">
                            <span className="currencySymbol">₹</span>
                            <input type="number" id="priceInput" placeholder="Enter price" />
                        </div>
                    </div>

                    <div className="discountField">
                        <label htmlFor="discountInput">Discount</label>
                        <div className="inputWrapper">
                            <input type="number" id="discountInput" placeholder="Enter discount" />
                            <div className="discountOptions">
                                <button className="discountBtn">%</button>
                                <button className="discountBtn">$</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fourthForm">
                <button className='form4Cancel' onClick={() => navigate('/productform3')}>Back</button>
                <button className='form4Next' onClick={() => navigate('/productform4',{ state: { activeItem: 'Price info' } })}>Save</button>
            </div>
        </>
    )
}

export default ProductForm4;
