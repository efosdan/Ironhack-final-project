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
  justify-content: space-between;
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
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
          <Logo onClick={() => setShow(true)}>PASTA</Logo>
        </Left>

        <Right>
          <MenuItem>CONTACT US</MenuItem>
          <a href="./signup-login/SignUpForm" />
          <MenuItem>SING UP</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
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
