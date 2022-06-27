import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import Image from 'next/image';
import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs';
import { device } from '@/styles/device';
type Props = {};

const EmptyBox = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  background: white;
  /* width: 100%; */
  max-width: 600px;
  margin: auto;
  /* height: 40rem; */
  margin-bottom: 12px;
  display: block;
`;

const Title = styled.p`
  font-family: 'MabryProBlack';
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 0px;
`;

const SubText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
`;

const TextContainer = styled.div``;

const ImageBlock = styled.div`
  /* display: block; */
`;

const AuthButton = styled.button`
  border: 2px solid black;
  border-radius: 160px;
  text-align: center;
  font-size: 1rem;
  background-color: white;
  padding: 12px 16px;
  font-weight: 400;
  align-items: center;
  display: flex;
  -webkit-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

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

const InteractButtons = styled(AuthButton)`
  margin-right: 16px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InteractContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DescriptionText = styled.div`
  padding: 12px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 40%;
  margin-top: 12px;
  /* align-items: center; */
  /* align-content: center; */
`;

const ImageDiv = styled.img`
  content: url('https://i.imgur.com/Mo0enkX.png');
  max-width: 100%;
  max-height: 50%;
  object-fit: fill;
`;

function Post({}: Props) {
  return (
    <EmptyBox>
      <TopContainer>
        <TextContainer>
          <Title>post title</Title>
          <SubText>username</SubText>
        </TextContainer>
        <AuthButton>share</AuthButton>
      </TopContainer>

      <Image
        alt='image of mechanical keyboard switch'
        src='https://i.imgur.com/Mo0enkX.png'
        height={'50%'}
        layout='responsive'
        width={'50%'}
      />
      <BottomContainer>
        <TagContainer>
          <SubText>type</SubText>
          <SubText>lube</SubText>
          <SubText>film</SubText>
        </TagContainer>
        <InteractContainer>
          <InteractButtons>
            <BsHandThumbsUp aria-label='thumbs up button' id='like' />
          </InteractButtons>
          <InteractButtons>
            <BsHandThumbsDown aria-label='thumbs down button' id='dislike' />
          </InteractButtons>
        </InteractContainer>
      </BottomContainer>
      <DescriptionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia.
      </DescriptionText>
    </EmptyBox>
  );
}

export default Post;
