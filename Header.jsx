import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';


const MainHeader = styled.header`
    padding : 0 4.8rem;
    height : 10rem;
    background-color : ${({theme}) => theme.colors.bg};
    display : flex;
    justify-content : space-between; 
    align-items : center;

    .logo {
        height : auto;
        max-width : 30%;
    }
`;

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src="./images/Yahoo-logo.png"  alt="logo-img" className='logo'/>
        </NavLink>
        <Navbar/>
    </MainHeader>
  )
}



export default Header;
