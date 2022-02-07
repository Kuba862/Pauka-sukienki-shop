import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Instagram from '../components/svgComponents/instagram';
import Bag from '../components/svgComponents/bag';

const MenuWrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 54px 137px 0 0;
    font-family: 'apropal';
      a:nth-child(1),
      a:nth-child(2),
      a:nth-child(3),
      a:nth-child(4) {
        padding-right: 40px;
      }
      a:nth-child(4) {
        margin-right: 100px;
      }
      a:nth-child(5) {
        padding-right: 45px; 
      }
      a {
        font-size: 12px;
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
      }
`;

const Menu = ({fill}) => {
    return(
    <>
    <MenuWrapper>
        <Link to="/news">nowości</Link>
        <Link to="/products" >kolekcje</Link>
        <Link to="/about">o mnie</Link>
        <Link to="/shopping">zakupy</Link>
        <Link to="https://www.instagram.com/sukienki_pauka?utm_medium=copy_link">
          <Instagram fill={fill} />
        </Link>
        <Link to="/cart">
          <Bag fill={fill} />
        </Link>
    </MenuWrapper>
    </>
    )
}

export default Menu;