import React from "react";
import styled, { css } from "styled-components";

const NavbarContainer = styled.div`
height:40px;
background:#87CEEB;
display:flex;
align-item:center;
justify-content:space-between;

`;
const LogoContainer = styled.div`

margin:-10px 6px;
cursor:pointer;

`;

const LoginContainer = styled.div`

padding:2px
`;

const Button = styled.button`
color:white;
padding:4px 6px;
background:#2E2EFF;
margin:5px 8px;
border-radius:7px;
cursor:pointer;

${(props) => props.outline && css`
color:#2E2EFF;
background:white;
border:solid 1px #2E2EFF;
`}

`;

export default function Navbar() {
  return (

    <NavbarContainer>

      <LogoContainer>
        <h3>Vision.Com</h3>
      </LogoContainer>

      <LoginContainer>
        <Button>Login</Button>
        <Button outline>SignUp</Button>
      </LoginContainer>

    </NavbarContainer>

  );
}
