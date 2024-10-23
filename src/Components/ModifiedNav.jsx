import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Css/ProductForm.css';

const ModifiedNav = () => {
    const location = useLocation();
    const activeItem = location.state?.activeItem || 'Description'; // Default to 'Description' if not provided

    return (
        <>
            <div className="styleNav">
                <ul>
                    <li style={{ backgroundColor: activeItem === 'Description' ? '#C4E1F6' : '',
                        padding : activeItem === 'Description' ? '2px 5px' : '0',
                        borderRadius : activeItem === 'Description' ? '4px' : '0',
                        color : activeItem === 'Description' ? '#07c' : 'None',
                     }} className='l1'>Description</li>

                    <li style={{
                        padding : activeItem === 'Description' ? '2px 5px' : '0',
                        borderRadius : activeItem === 'Description' ? '4px' : '0',
                        color : activeItem === 'Description' ? '#07c' : 'None',
                     }}className='l2'>></li>

                     
                    <li style={{ backgroundColor: activeItem === 'Variants' ? '#C4E1F6' : '',
                        padding : activeItem === 'Variants' ? '2px 5px' : '0',
                        borderRadius : activeItem === 'Variants' ? '4px' : '0',
                        color : activeItem === 'Variants' ? '#07c' : '',
                     }} className='l2'>Variants</li>

                    
                    <li style={{
                        padding : activeItem === 'Combinations' ? '2px 5px' : '0',
                        borderRadius : activeItem === 'Combinations' ? '4px' : '0',
                        color : activeItem === 'Combinations' ? '#07c' : 'None',
                     }}className='l3'>></li>


                    <li style={{ backgroundColor: activeItem === 'Combinations' ? '#C4E1F6' : '',
                        padding : activeItem === 'Combinations' ? '2px 5px' : '0',
                        borderRadius : activeItem === 'Combinations' ? '4px' : '0',
                        color : activeItem === 'Combinations' ? '#07c' : '',
                     }} className='l3'>Combinations</li>


                    <li style={{
                        padding : activeItem === 'Combinations' ? '2px 5px' : '0',
                        borderRadius : activeItem === 'Combinations' ? '4px' : '0',
                        color : activeItem === 'Combinations' ? '#07c' : 'None',
                     }}className='l4'>></li>


                    <li style={{backgroundColor: activeItem === 'Price info' ? '#C4E1F6' : '',
                        padding : activeItem === 'Price info' ? '2px 5px' : '0',
                        borderRadius : activeItem === 'Price info' ? '4px' : '0',
                        color : activeItem === 'Price info' ? '#07c' : 'None',
                     }} className='l4'>Price info</li>
                </ul>
            </div>
        </>
    );
};

export default ModifiedNav;
