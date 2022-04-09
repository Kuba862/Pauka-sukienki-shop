import * as React from "react"
import styled from "styled-components"

import PropTypes from "prop-types"
import { Link } from "gatsby"

import Menu from '../components/menu';
import Logo from '../components/logo';
import DressWithPrice from '../components/dressWithPrice';

import HeaderImage from '../images/homePage1.jpeg';
import First from '../images/Placeholder.jpg';
import Second from '../images/Placeholder2.jpg';
import Third from '../images/Placeholder3.jpg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1440px;
  margin: 0 auto;
  background: url(${HeaderImage}) center center no-repeat;
  background-position-y: unset;
  background-position-x: -55px;
  height: 2256px;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
  bottom: 650px;
  margin: 0 0 0 160px;
    a {
      font-family: 'lombard';
      font-size: 16px;
      text-decoration: underline;
      color: #F0E5C4;
      line-height: 19.2px;
    }
`;

const Title = styled.div`
margin: 0 0 16px 0;
  span:nth-child(1),
  span:nth-child(3) {
    font-family: 'apropal';
    color: #CDE7ED;
    font-size: 80px;
    line-height: 96px;
  }
  span:nth-child(2) {
    font-family: 'lombard';
    color: #F0E5C4;
    font-size: 80px;
  }
`;
const Description = styled.div`
line-height: 22.4px;
font-weight: 400;
margin: 0 0 24px 0;
  span {
    width: 568px;
    font-family: 'made-mirage';
    color: #f5f5f5;
    font-size: 16px;
  }
`;

const Header = ({fill}) => {
  return (
  <>
  <Wrapper>
    <Logo />
    <div>
      <Menu fill={fill} />
    </div>
    <HeaderText>
          <Title>
            <span>Stworzone </span>
            <span>do </span>
            <span>kręcenia</span>
          </Title>
        <Description>
          <span>Piękne i wygodne sukieneczki dla każdej kobiety, które czynią ich codzienność piękniejszą. Dobierz odpowiedni krój i fason. Stylizacja może być zarówno  szykowna lub „na sportowo” i ciesz się komfortem noszenia.</span>
        </Description>
        <Link to='/products'>Zobacz najnowszą kolekcję</Link>
      </HeaderText>
      <div>
        <DressWithPrice dressImage={First} width={'240px'} height={'320px'} hiddens name={'Aurora'} description={'szary melanż'} />
        <DressWithPrice dressImage={Second} width={'320px'} height={'480px'} hiddens name={'Aurora'} description={'Pódrowy róż'} />
        <DressWithPrice dressImage={Third} width={'420px'} height={'640px'} hiddens name={'Laura'} description={'NiebieskI Jeans'} />
      </div>
    </Wrapper>
  </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

// Header.defaultProps = {
//   siteTitle: {
//     created: `stworzone`,
//     to: `do`,
//     spinning: `kręcenia`,
//   } 
// }

export default Header;
