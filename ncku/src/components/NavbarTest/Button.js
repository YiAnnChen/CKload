import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#A9A9A9' : 
    '#FFD700' )};
    font-weight: bolder;
    white-space: nowrap;
    outline: none;
    border: none;
    border-radius: 30px;
    min-width: 100px;
    max-width: 200px;
    cursor:pointer;
    text-drcoration:none;
    transtition: 0.3s;
    display: flex;
    justify-content:center;
    align-items: center;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#fff' : 
    '#c60021' )};
    font-size:${({big}) => (big ? '25px' : '20px')};

    &:hover{
        transform: translateY()(-2px);
    }

`