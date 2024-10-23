import React from 'react';
import '../Css/SideNav.css';

const SideNav = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Handle form submission logic here
    };

    return (
        <>
        <img src='/images/lemon-inc.png' className='sideNavImg'/>
        
            <form onSubmit={handleSubmit} className='sideNav'>
                <div className="option">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label htmlFor="vehicle1">Home</label>
                </div>
                <div className="option">
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                    <label htmlFor="vehicle2">Stores</label>
                </div>
                <div className="option">
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                    <label htmlFor="vehicle3">Products</label>
                </div>
                <div className="option">
                    <input type="checkbox" id="vehicle4" name="vehicle4" value="Catalog" />
                    <label htmlFor="vehicle4">Catalogue</label>
                </div>
                <div className="option">
                    <input type="checkbox" id="vehicle5" name="vehicle5" value="Promotion" />
                    <label htmlFor="vehicle5">Promotions</label>
                </div>
                <div className="option">
                    <input type="checkbox" id="vehicle6" name="vehicle6" value="Report" />
                    <label htmlFor="vehicle6">Reports</label>
                </div>
                <div className="option">
                    <input type="checkbox" id="vehicle7" name="vehicle7" value="Docs" />
                    <label htmlFor="vehicle7">Docs</label>
                </div>
                <div className="option">
                    <input type="checkbox" id="vehicle8" name="vehicle8" value="Settings" />
                    <label htmlFor="vehicle8">Settings</label>
                </div>
            </form>
            <hr></hr>
        </>
    );
}

export default SideNav;
