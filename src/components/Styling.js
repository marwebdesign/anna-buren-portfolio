import styled from 'styled-components/macro';

export const sizes = {
  tablet: '668px',
  laptop: '1024px',
  desktop: '2560px'
};

export const Devices = {
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`
};

// NAVBAR STYLING
export const Nav = styled.div`
  overflow: hidden;
  background-color: #CEE5D0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  @media ${Devices.tablet} {
  flex-direction:row;
  justify-content: space-between ;
  }
  a {
  float: left;
  display: block;
  text-align: center;
  padding: 14px 5px;
  text-decoration: none;
  font-size: 17px;
  @media ${Devices.tablet} {
    padding: 14px 0px;
  }
  }
  a:hover {
  color: black;
  transform: scale(1.1);
  transition: 0.3s;
  }
`
export const Navtext = styled.h2`
color: red;
  @media ${Devices.tablet} {
color: green;
  } 
  @media ${Devices.laptop} {
color: blue;
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 25px;
  
  @media (max-width: 668px) {
    flex-direction: column;
    padding: 0px;
    line-height: 5px;
    max-height: ${({ isOpen }) => (isOpen ? '350px' : '0')};
  }
  @media (min-width: 668px) {
    display: flex;
    justify-content: flex-end;
  }
`
export const HamburgerButton = styled.div`
  display: none;
  color: black; 
  margin: 10px;
  @media (max-width: 668px){
  display: flex;
  }
`
// STARTPAGE STYLING
export const StartpageHeader = styled.h1`
color: red;
  @media ${Devices.tablet} {
color: green;
  } 
  @media ${Devices.laptop} {
color: blue;
  }
`