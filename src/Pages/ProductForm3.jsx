import React from 'react';
import ModifiedNav from '../Components/ModifiedNav.jsx'
import '../Css/ProductForm3.css'
import { useNavigate } from 'react-router-dom';
const ProductForm3 = () => {
    const navigate = useNavigate();
    return(
        <>
         <h2 style={{ marginLeft: '3vh' }}>Add product</h2>
        <ModifiedNav/>
        <form className="customForm">
            <div className="formRow">
                {/* First Column: M/Black, M/Red, etc. */}
                <div className="column1">
                    <span className='span1'>M/Black</span><br />
                    <span className='span2'>M/Red</span><br />
                    <span  className='span3'>L/Black</span><br />
                    <span className='span4'>L/Red</span><br />
                </div>

                {/* Second Column: ABC12, SDF3, etc. */}
                <div className="column">
                    <p>SKU*</p>
                    <input type="text" placeholder="ABC12" /><br />
                    <input type="text" placeholder="SDF3" /><br />
                    <input type="text" placeholder="HWE3" /><br />
                    <input type="text" placeholder="ABC12" /><br />
                </div>

                {/* Third Column: Toggle Buttons */}
                <div className="column">
                    <p style={{marginLeft:'2vh'}}>In stock</p>
                    <label className="toggle1">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label><br />
                    <label className="toggle2">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label><br />
                    <label className="toggle3">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label><br />
                    <label className="toggle4">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label><br />
                </div>

                {/* Fourth Column: Input Boxes */}
                <div className="column">
                    <p>Quantity</p>
                    <input type="text" placeholder="Input 1" /><br />
                    <input type="text" placeholder="Input 2" /><br />
                    <input type="text" placeholder="Input 3" /><br />
                    <input type="text" placeholder="Input 4" /><br />
                </div>
            </div>
        </form>
        <div className="secondForm">
                <button className='form3Cancel' onClick={() => navigate('/productform2')}>Back</button>
                <button className='form3Next' onClick={() => navigate('/productform4',{ state: { activeItem: 'Price info' } })}>Next</button>
            </div>
        </>
    )
}
export default ProductForm3;