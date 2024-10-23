// ProductForm.jsx
import React, { useState } from 'react';
import '../Css/ProductForm.css'; // CSS file for styling
import { useNavigate,useLocation } from 'react-router-dom';
import ModifiedNav from '../Components/ModifiedNav';

const ProductForm = () => {
    const location = useLocation(); // Get the location object
    const activeItems = location.state?.activeItem || []; // Extract active items from state or default to empty array
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ productName, category, brand, image });
    };
    const navigate = useNavigate();

    const handleAddProductClick = () => {
        navigate('/productform', { state: { activeItem: ['Description','Variants']} }); // Pass the active item as state
    };
    return (
        <>
            <h2 style={{ marginLeft: '3vh' }}>Add product</h2>

            <ModifiedNav activeItems={activeItems}/>
            
            <form onSubmit={handleSubmit} className="product-form">
                <h2 style={{marginLeft:'-31vh'}}>Description</h2>
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <select className='customSele' value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="">Select Category</option>
                        <option value="shoes">Shoes</option>
                        <option value="tshirts">T-Shirts</option>
                        <option value="accessories">Accessories</option>
                    </select>
                </div>
                <div>
                    <label>Brand:</label>
                    <input
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        required
                    />
                </div>
                <div className="upload-container">
                    {/* <label htmlFor="file-upload" className="upload-label">Upload Image:</label> */}
                    <label htmlFor="file-upload" className="custom-file-upload">
                        <img src='/images/upload.png' />
                        Upload Image
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        accept="image/*"
                        className="file-input"
                        required
                    />
                </div>
            </form>
            <div className="firstForm">
                <button className='formCancel' onClick={() => navigate('/product')}>Cancel</button>
                <button className='formNext' onClick={() => navigate('/productform2',{ state: { activeItem: 'Variants' } })}>Next</button>
            </div>
           
        </>
    );
};

export default ProductForm;
