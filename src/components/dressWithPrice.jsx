import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { navigate } from 'gatsby-link';
import useStore from '../context/StoreContext';

const Image = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${(props) => props.dressImage}) center no-repeat;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
const PriceTag = styled.div`
    align-self: end;
    display: ${(props) => props.hidden ? 'none' : 'flex'};
    width: 80px;
    height: 80px;
    background-color: #FAEDF3;
    border-radius: 50px;
    justify-content: center;
        span {
            align-self: center;
        }
        span:nth-child(1) {
            font-family: 'lombard';
            font-size: 24px;
            color: ${(props) => props.fontcolor};
        }
        span:nth-child(2) {
            font-family: 'lombard';
            font-size: 12px;
            color: ${(props) => props.fontcolor};
        }
`;

const DressWithPrice = ({name, description, dressImage, width, height, hidden, fontcolor}) => {
    return (
        <>
            <Image dressImage={dressImage} width={width} height={height}>
                <PriceTag hidden={hidden}>
                    <span fontcolor={fontcolor}>400</span>
                    <span fontcolor={fontcolor}>zł</span>
                </PriceTag>
                <div>
                    <div>{name}</div>
                    <div>{description}</div>
                </div>
            </Image>
        </>
    )
}

export default DressWithPrice;
