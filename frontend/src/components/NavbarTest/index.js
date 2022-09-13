import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../../data/MenuData';
import { Button } from './Button';
import Bars from '../../imgs/bars.png'

const Nav = styled.nav`
    height: 60px;
    display: flex;
    padding: 1 2rem;
    z-index: 100;
    position: flex;
    width: 100%;
    background: white;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

const NavLink = css`
    color: #c60021;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    cursor: pointer;
    text-decoration: none;
`

const Logo = styled(Link)`
    ${NavLink}
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    font-size: 40px;
    text-shadow: gray 0.1em 0.1em 0.2em
`

const MenuBars = styled.i`
    display: none;

    @media screen and (max-width: 768px) {
        display:block;
        background-image:url(${Bars});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor:pointer;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-50%,25%);
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto 0 auto;

    @media screen and (max-width: 786px) {
        display:none;
    }
`

const NavMenuLinks = styled(Link)`
    ${NavLink}
`

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 786px) {
        display: none;
    }
`

const Navbar = ({ toggle, user }) => {
    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
    };
    return (
        <Nav>
            <Logo to='/'>CK-Load</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))
                }
            </NavMenu>
            <NavBtn>
                {user ?
                    <Button to='/' primary='true' onClick={logout}>
                        Log out
                    </Button>
                    :
                    <Button to='/login' primary='true'>
                        Log in
                    </Button>
                }
            </NavBtn>
        </Nav>
    )
}

export default Navbar