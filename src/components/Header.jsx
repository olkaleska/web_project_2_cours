// import { Link } from 'react-router-dom';

// export default function Header() {
//   return (
//     <header>
//       ОБЛАСНИЙ АРХІВ ФАНТАСТИЧНОЇ ОБЛАСТІ
//       <div className="top-buttons">
//         <Link to="/" className="top-buttons">Новини</Link>
//         <Link to="/online_archive" className="top-buttons">Онлайн архів</Link>
//         <Link to="/contacts" className="top-buttons">Контакти та графік роботи</Link>
//         <Link to="/registration" className="top-buttons">Зареєструвати прихід</Link>
//       </div>
//     </header>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 20px;
  font-size: 24px;
  background-color: #b89c7d;
`;

const TopButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const NavLink = styled(Link)`
  padding: 15px 25px;
  font-size: 16px;
  background-color: ${(props) => (props.primary ? "#3e2c13" : "white")};
  color: ${(props) => (props.primary ? "white" : "#3e2c13")};
  text-decoration: none;
  border: ${(props) => (props.primary ? "none" : "1px solid #3e2c13")};
  cursor: pointer;
`;

const Header = () => (
  <HeaderWrapper>
    ОБЛАСНИЙ АРХІВ ФАНТАСТИЧНОЇ ОБЛАСТІ
    <TopButtons>
      <NavLink to="/" primary>Новини</NavLink>
      <NavLink to="/archive" primary>Онлайн архів</NavLink>
      <NavLink to="/contacts" primary>Контакти</NavLink>
      <NavLink to="/registration">Зареєструвати прихід</NavLink>
    </TopButtons>
  </HeaderWrapper>
);

export default Header;
