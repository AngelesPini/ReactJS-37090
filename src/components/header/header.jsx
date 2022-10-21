import React from 'react';
import Nav from '../navBar/navBar';
import '../style.scss';
import ItemListContainer from '../itemListContainer/itemListContainer';
const Header = () => {
    return (
        <div className="body_header">
        <div className="header_nav">
        <Nav/>

        </div>
        <div className="header_hero">
            <h1>WICCA</h1>
            <h2>shop</h2>
        </div>
        <ItemListContainer/>
    </div>
    );
}

export default Header;
