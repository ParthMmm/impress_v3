import React from 'react';
import styled from 'styled-components';
import { device } from '@/styles/device';

const Container = styled.div`
  width: 100%;
  margin-top: -4rem;
  position: fixed;
  z-index: 2;
  background-color: white;

  @media ${device.md} {
    margin-top: -3.5rem;
  }
  @media ${device.lg} {
    margin-top: -4rem;
  }
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled(SubContainer)`
  padding-right: 12px;
`;

const Title = styled.h1`
  font-family: 'MabryProBlack';

  font-style: normal;
  font-size: 3rem;
  color: white;

  -webkit-text-stroke: 1px black;
  text-shadow: 4px 4px 0px #000000;
  line-height: 64px;
  letter-spacing: -5px;
  /* text-align: left;
  vertical-align: top; */
  margin-left: 24px;

  @media ${device.md} {
    font-size: 4.5rem;
  }
  @media ${device.lg} {
    font-size: 5rem;
  }
`;

const HeaderBar = styled.div`
  height: 0;
  width: 100%;
  border: 4px solid;
  background-color: black;
  margin-top: -3rem;

  @media ${device.md} {
    border: 6px solid;
    margin-top: -3.5rem;
  }
  @media ${device.lg} {
    border: 6px solid;
    margin-top: -4rem;
  }
`;

const AuthButton = styled.button`
  border: 2px solid black;
  border-radius: 120px;
  text-align: center;
  font-size: 1rem;
  background-color: white;
  margin-right: 12px;
  padding: 12px 16px;
  font-weight: 400;
  align-items: center;
  display: flex;
  -webkit-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  visibility: hidden;
  @media ${device.md} {
    visibility: visible;
    content: '';
    margin-top: -1.7rem;
  }
  @media ${device.lg} {
    /* margin-top: -4rem; */
    visibility: visible;
    content: '';
  }

  ::after {
    border-radius: 160px;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    filter: drop-shadow(4px 4px 0px ${(props) => props.theme.colors.secondary});
  }

  :hover {
    filter: drop-shadow(4px 4px 0px ${(props) => props.theme.colors.secondary});
    transform: translate(-2px, -2px);
    -webkit-transform: matrix() (-2px, -2px);
  }
  :hover::after {
    opacity: 1;
  }
`;

type Props = {};

function Header({}: Props) {
  return (
    <Container>
      <SubContainer>
        <Title>impress</Title>
        <ButtonContainer>
          <AuthButton>log in</AuthButton>
          <AuthButton>get started</AuthButton>
        </ButtonContainer>
      </SubContainer>

      <HeaderBar />
    </Container>
  );
}

export default Header;
