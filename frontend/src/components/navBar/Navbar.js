<<<<<<< HEAD
import React from "react";
import { Badge } from "@mui/material";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
=======
import React  from 'react'
import { Badge } from '@mui/material';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/Search';
>>>>>>> d199563b316399680c0e085bd80558f04e6558ee

const Container = styled.div`
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

const Logo = styled.h1 `
    font-weight: bold;
    display: flex;
    text-align: center;
    border: none;
    cursor: pointer;
`;



const Center = styled.div `
    flex:1;
    display: flex;
    align-items: center;
    
`;

const Left = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  display: flex;
  text-align: center;
  border: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
`;

const Navbar = ({ setShow, size } ) => {
  return (
    <Container>
<<<<<<< HEAD
      <Wrapper>
        <Left>
          <Logo>PASTA DELA VILLA</Logo>
=======
      <Wrapper> 
        <Left> 
            <Logo onClick={() => setShow(true)}>PASTA</Logo> 
>>>>>>> d199563b316399680c0e085bd80558f04e6558ee
        </Left>

        <Right>
          <MenuItem>CONTACT US</MenuItem>
          <a href="./signup-login/SignUpForm">
            <MenuItem>SING UP</MenuItem>
<<<<<<< HEAD
          </a>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
=======
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
                <Badge badgeContent={size} color="primary" onClick={() => setShow(false)}>
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </MenuItem>
>>>>>>> d199563b316399680c0e085bd80558f04e6558ee
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
