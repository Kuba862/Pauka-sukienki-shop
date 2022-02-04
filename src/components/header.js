import * as React from "react"
import styled from "styled-components"

import PropTypes from "prop-types"
import { Link } from "gatsby"

import HeaderImage from '../images/homePage1.jpeg';
import PaukaLogo from '../images/svg/paukaLogo.svg';
import ChmielewskaLogo from '../images/svg/chmielewskaLogo.svg';

// const Header = ({ siteTitle }) => (
//   <HeaderWrapper>
//     {/* <Link to="/" className="site-title">{siteTitle}</Link> */}
//     <div>
//     <h1>ZAIMPORTOWANE PRODUKTY ZE STRONY PAUKA.PL</h1>
//     <p>Jeeli dodasz produkt, zmienisz cenę, itp. na swoim shopify, to będę miał na bieąco aktualizację</p>
//     </div>
//     <LinksWrapper>
//       <Link to="/products">All products</Link>
//       <Link to="/cart">My Cart</Link>
//     </LinksWrapper>
//   </HeaderWrapper>
// )
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1440px;
  margin: 0 auto;
  background: url(${HeaderImage}) center center no-repeat;
  height: 2256px;
`;
const LogoWrapper = styled.div`
  margin: 96px 0 0 160px;
  position: relative
`;
const Pauka = styled.div`
  background: url(${PaukaLogo}) center center no-repeat;
  width: 100px;
  height: 93px;
  position: absolute;
  top: 65px;
  left: 60px;
`;
const Chmielewska = styled.div`
  background: url(${ChmielewskaLogo}) bottom center no-repeat;
  width: 240px;
  height: 76px;
`;
const MenuWrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 54px 137px 0 0;
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


const Header = () => {
  return (
  <>
  <Wrapper>
    <LogoWrapper>
      <Pauka />
      <Chmielewska />
    </LogoWrapper>
    <div>
      <MenuWrapper>
        <Link to="/news">nowości</Link>
        <Link to="/products" >kolekcje</Link>
        <Link to="/about">o mnie</Link>
        <Link to="/shopping">zakupy</Link>
        <Link to="https://www.instagram.com/sukienki_pauka?utm_medium=copy_link">insta</Link>
        <Link to="/cart">koszyk</Link>
      </MenuWrapper>
    </div>
    </Wrapper>
  </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderWrapper = styled.header`
  padding: 40px;
  display: flex;
  justify-content: space-between;

  .site-title {
    font-weight: bold;
    color: #014c40;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 15px;
    font-weight: normal;
    text-transform: uppercase;
    font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;

    :hover {
      text-decoration: underline;
    }
  }
`
const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 40px;
`
