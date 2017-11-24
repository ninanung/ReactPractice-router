import React from 'react';
import { Link } from 'react-router-dom';

const logo = {
    height: '3.5rem',
    backgroundColor: "#212529",
    width: "100vw",
    lineHeight: '3.5rem',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center'
};

const menu = {
    backgroundColor: "#343a40",
    height: "3.5rem"
};

const menuItem = {
    display: "inline-block",
    color: "white",
    fontSize: "1rem",
    lineHeight: "3.5rem",
    width: "33.3333%",
    textAlign: "center",
    cursor: "pointer",
    transition: "background-color 0.3s",
    textDecoration: "none"
};

const menuItemHover = {
    backgroundColor: "#495057"
};

const menuItemActive = {
    backgroundColor: "#1862ab"
};

class Header extends React.Component {
    render() {
        return(
            <div>
                <div style={ logo }>
                    Develop
                </div>
                <div style={ menu }>
                    <Link style={ menuItem } to="/">홈</Link>
                    <Link style={ menuItem } to="/about/ninanung">소개</Link>
                    <Link style={ menuItem } to="/posts">포스트</Link>
                </div>
            </div>
        );
    }
}

export default Header;