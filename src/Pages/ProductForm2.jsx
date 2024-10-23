import React, { useState } from 'react';
import ModifiedNav from '../Components/ModifiedNav';
import { useNavigate } from 'react-router-dom';
import '../Css/ProductForm2.css';

const ProductForm2 = () => {
    const navigate = useNavigate();
    
    // State for managing preset values
    const [values, setValues] = useState(['Large', 'Red', '']); // Example preset values

    // Handle delete function
    const handleDelete = (index) => {
        const newValues = [...values];
        newValues[index] = ''; // Reset the value
        setValues(newValues);
    };

    return (
        <>
            <h2 style={{ marginLeft: '3vh' }}>Add product</h2>
            <ModifiedNav />
            <form action="">
                <div className="form2Container">
                    <h3>Variants</h3>
                    <div className="form2">
                        <div className="form2Options">
                            <p>Option*</p>
                            <input type="text" placeholder='Size' /><br /><br />
                            <input type="text" placeholder='Color' /><br /><br />
                            <input type="text" placeholder='' /><br /><br />
                        </div>
                        <div className="form2Values">
                            <p>Values*</p>
                            {values.map((value, index) => (
                                <div key={index} className="valueContainer">
                                    <input
                                        type="text"
                                        value={value}
                                        className={value ? 'highlight' : ''}
                                        onChange={(e) => {
                                            const newValues = [...values];
                                            newValues[index] = e.target.value;
                                            setValues(newValues);
                                        }}
                                    /><br /> <br /> <br /> 
                                    {value && (
                                        <span className="deleteIcon" onClick={() => handleDelete(index)}>
                                            &times; {/* Cross symbol */}
                                        </span>
                                    )}<br /> <br /> 
                                
                                </div>
                            ))}
                        </div>
                        <div className="form2Del">
                            <img src='/images/delete.png' alt="Delete" className='img1'/><br /><br />
                            <img src='/images/delete.png' alt="Delete" className='img2'/><br /><br />
                            <img src='/images/delete.png' alt="Delete" className='img3'/><br /><br />
                        </div>
                    </div>
                    <p className="addOptions">+ Add Options</p>
                </div>
                <div className="secondForm">
                    <button className='form2Cancel' onClick={() => navigate('/productform')}>Back</button>
                    <button className='form2Next' onClick={() => navigate('/productform3',{ state: { activeItem: 'Combinations' } })}>Next</button>
                </div>
            </form>
        </>
    );
}

export default ProductForm2;
