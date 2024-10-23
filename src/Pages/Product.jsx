// import React, {useState} from 'react';
// import { NavLink } from 'react-router-dom';
// import Modal from '../Assets/Modal';
// import '../Css/Product.css';
// const Product = () => {
//     const [isModalOpen, setModalOpen] = useState(false);

//     const openModal = () => {
//       setModalOpen(true);
//     };
  
//     const closeModal = () => {
//       setModalOpen(false);
//     };
//     return (
//         <>
//             <div className="productHome">
//                 <div className="productNav">
//                     <div className="productLogo">
//                         <h2>Products</h2>
//                     </div>
//                     <div className="addCategory">
//                         <button className='addCategoryBtn' onClick={openModal} >Add Categoty</button>
//                          <NavLink to='/productform' ><button className='addProductBtn' >Add Product</button></NavLink>
//                         <Modal isOpen={isModalOpen} onClose={closeModal} />
//                     </div>
//                 </div>
//                 <div className="items">
//                     <div className="shoes">
//                         <h3>Shoes</h3>
//                         <div className="productGrid">
//                             <div className="productImg">
//                             <img src="./images/Shoes.jpg" alt="" />
//                             </div>
//                             <div className="productDetails">
//                                 <h4>Nike Air Jordan</h4>
//                                 <p>₹12,000</p>
//                                 <label>Nike</label>
//                             </div>
//                         </div>
//                         <div className="productGrid">
//                             <div className="productImg">
//                             <img src="./images/Shoes.jpg" alt="" />
//                             </div>
//                             <div className="productDetails">
//                                 <h4>Nike Dunk Low</h4>
//                                 <p>₹8,000</p>
//                                 <label>Nike</label>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="T-shirt">
//                         <h3>T-shirt</h3>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Product;








// Product.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Modal from '../Assets/Modal';
import '../Css/Product.css';

const Product = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleAddProductClick = () => {
        navigate('/productform', { state: { activeItem: 'Description' } }); // Pass the active item as state
    };

    return (
        <>
            <div className="productHome">
                <div className="productNav">
                    <div className="productLogo">
                        <h2>Products</h2>
                    </div>
                    <div className="addCategory">
                        <button className='addCategoryBtn' onClick={openModal}>Add Category</button>
                        <button className='addProductBtn' onClick={handleAddProductClick}>Add Product</button>
                        <Modal isOpen={isModalOpen} onClose={closeModal} />
                    </div>
                </div>
                <div className="items">
                    <div className="shoes">
                        <h3>Shoes</h3>
                        <div className="productGrid">
                            <div className="productImg">
                                <img src="./images/Shoes.jpg" alt="" />
                            </div>
                            <div className="productDetails">
                                <h4>Nike Air Jordan</h4>
                                <p>₹12,000</p>
                                <label>Nike</label>
                            </div>
                        </div>
                        <div className="productGrid">
                            <div className="productImg">
                                <img src="./images/Shoes.jpg" alt="" />
                            </div>
                            <div className="productDetails">
                                <h4>Nike Dunk Low</h4>
                                <p>₹8,000</p>
                                <label>Nike</label>
                            </div>
                        </div>
                    </div>
                    <div className="T-shirt">
                        <h3>T-shirt</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
