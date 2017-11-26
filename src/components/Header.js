import React from 'react';
import { Link } from 'react-router-dom';

const logo = {
    height: '3.5rem',
    backgroundColor: "#212529",
    width: "100%",
    display: "table",
    tableLayout: "fixed"
};

const logoItem = {
    display: "table-cell",
    color: "white",
    fontSize: "1rem",
    lineHeight: "3.5rem",
    textAlign: "center",
    cursor: "pointer",
    transition: "background-color 0.3s",
    textDecoration: "none"
};

const menu = {
    backgroundColor: "#343a40",
    display: "table",
    tableLayout: "fixed",
    width: "100%",
    height: "3.5rem"
};

const menuItem = {
    display: "table-cell",
    color: "white",
    fontSize: "1rem",
    lineHeight: "3.5rem",
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
                    <p style={ logoItem }>Develop</p>
                </div>
                <div style={ menu }>
                    <Link style={ menuItem } to="/">홈</Link>
                    <Link style={ menuItem } to="/about/ninanung">소개</Link>
                    <Link style={ menuItem } to="/posts">포스트</Link>
                    <Link style={ menuItem } to="/login">로그인</Link>
                    <Link style={ menuItem } to="/me">나의 페이지</Link>
                    <Link style={ menuItem } to="/search">검색</Link>
                </div>
            </div>
        );
    }
}

export default Header;