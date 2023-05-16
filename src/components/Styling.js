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

export const Outerwrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

// NAVBAR STYLING
export const Nav = styled.div`
  overflow: hidden;
  background-color: black;
  width: 100vw;
  border-bottom: 4px white solid;
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
  color: white;
  transform: scale(1.1);
  transition: 0.2s;
  }
  a:visited {
    color: white
  }
`
export const Navtext = styled.h2`
color: red;
  @media ${Devices.tablet} {
color: green;
  } 
  @media ${Devices.laptop} {
color: white;
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
  color: white; 
  margin: 10px;
  @media (max-width: 668px){
  display: flex;
  justify-content: flex-end;
  }
`
// STARTPAGE STYLING
export const StartpageHeader = styled.h1`
color: red;
  @media ${Devices.tablet} {
color: green;
  } 
  @media ${Devices.laptop} {
color: black;
  }
`

export const YouTube = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
  /* position: relative; */
  overflow: hidden;
  /* padding-top: 56.25%; 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */

  /* @media ${Devices.tablet} {
width: 60%
  } 
  @media ${Devices.laptop} {
width: 70%
  } */
`

// CONTACT STYLING
export const Form = styled.form`
  /* display: flex;
  flex-direction: column; */

`
export const Formwrapper = styled.div`
  display: flex;
  background-color: #F5BA55;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border: 2px white solid;
  padding: 15px;
  border-radius: 7px;
  @media ${Devices.tablet} {
    width: 40%;
  } 
  @media ${Devices.laptop} {
    width: 30%;
  }
`
export const Input = styled.input`
  padding: 10px;
  margin: 10px;
  color: gray;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  @media ${Devices.tablet} {
color: green;
  } 
  @media ${Devices.laptop} {
color: black;
  }
`
export const Inputmessage = styled.input`
  padding: 10px;
  margin: 0.5em;
  color: gray;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  @media ${Devices.tablet} {
color: green;
  } 
  @media ${Devices.laptop} {
color: black;
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`
export const SubmitButton = styled.button`
background-color: #ECB390;
border: none;
font-size: 13px;
border-radius: 10px;
padding: 5px 8px;
margin: 10px 0px;
width: 100px;
cursor: pointer;
@media  ${Devices.tablet} {
  font-size: 15px;
  }
  @media  ${Devices.desktop} {
    font-size: 17px;
  }
`

// FOOTER STYLING
export const LanguageContent = styled.footer`
background-color: #ECB390;
`