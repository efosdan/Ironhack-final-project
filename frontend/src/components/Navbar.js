import React from "react";
import { Badge } from "@mui/material";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Search from "@mui/icons-material/Search";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;

  align-items: center;
  justify-content: flex-start;
`;

const Left = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  display: flex;
  text-align: left;
  border: none;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 5px solid white;
    display: flex;
    align-items: center
    margin-left: 20px;
    padding: 5px;
    color: black;
    
`;
const Input = styled.input`
  border: none;
  background-color: lightgrey;
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

const Navbar = ({ setShow, size }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo onClick={() => setShow(true)}>PASTA VILLA</Logo>
        </Left>
        <Center>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>
            <a href="/">HOME</a>
          </MenuItem>
          <MenuItem>
            {" "}
            <a href="/login">SIGN IN</a>
          </MenuItem>
          <MenuItem>
            <a href="/signup">SIGN UP</a>
          </MenuItem>
          <MenuItem>
            <Badge
              badgeContent={size}
              color="primary"
              onClick={() => setShow(false)}
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
