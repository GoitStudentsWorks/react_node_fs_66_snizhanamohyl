import styled from 'styled-components';

export const MyRecipePage = styled.h1`
    color: #001833;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.56px;

    margin-top: 73px;
    margin-bottom: 50px;

    @media screen and (min-width: 767px){
        font-size: 32px;
        line-height: 32px;
        letter-spacing: -0.64px;

        margin-bottom: 100px;
    }

    @media screen and (min-width: 1439px){
        font-size: 44px;
        line-height: 44px;
        letter-spacing: -0.88px;
    }
`

export const ContainerMarg = styled.div`
    padding-bottom: 22px;

    @media screen and (min-width: 767px){
        padding-bottom: 32px;
    }
`

export const ContainerPad = styled.div`
    padding-bottom: 100px;

    @media screen and (min-width: 767px){
        padding-bottom: 200px;
    }

    @media screen and (min-width: 1439px){
        padding-bottom: 100px;
    }
`