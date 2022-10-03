import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    height: 60px;

`;

const Wrapper = styled.div `
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

const Left = styled.div `
    flex:1;
    text-align: center
`;




const Center = styled.div `
    flex:1;
    
`;
const Logo = styled.h1 `
    font-weight: bold;
    display: flex;
    text-align: center;
    border: none;
`;

const Right = styled.div `
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div `
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper> 
        <Left> 
            <Logo>PASTA</Logo> 
        </Left>
        <Center> Center </Center>
        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>CONTACT</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar