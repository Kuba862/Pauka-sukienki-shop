import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import PaukaLogo from '../images/svg/paukaLogo.svg';
import ChmielewskaLogo from '../images/svg/chmielewskaLogo.svg';

const LogoWrapper = styled.div`
  margin: 96px 0 0 160px;
  position: relative
`;
const Pauka = styled.div`
  background: url(${PaukaLogo}) center center no-repeat;
  width: 100px;
  height: 93px;
  position: absolute;
  top: -25px;
  left: 60px;
`;
const Chmielewska = styled.div`
  background: url(${ChmielewskaLogo}) bottom center no-repeat;
  width: 240px;
  height: 76px;
`;

const Logo = () => {
    return (
        <>
            <LogoWrapper>
                <Link to='/'>
                    <Pauka />
                    <Chmielewska />
                </Link>
            </LogoWrapper>
        </>
    )
}

export default Logo;