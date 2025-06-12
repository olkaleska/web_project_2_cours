// export default function Footer() {
//     return (
//       <footer>
//         <div className="left">
//           <p className="heading">Графік роботи :</p>
//           <p>Понеділок - Пʼятниця – <span>9 - 18</span></p>
//           <p>Субота – <span>11 - 16</span></p>
//           <p>Неділя – <span>вихідний</span></p>
//         </div>
  
//         <div className="right">
//           <p>01015, м. Фантастичне, вул. Прекрасна, 73</p>
//           <p>+38 0** *** ** **</p>
//           <p>************@gmail.com</p>
//           <a href="#">youtube link</a>
  
//           <div className="subscribe">
//             <input type="email" placeholder="Ваш email" />
//             <button>Підписатись</button>
//           </div>
//         </div>
//       </footer>
//     );
//   }
  

import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: #9b8364;
`;

const Column = styled.div`
  max-width: 300px;

  .heading {
    font-weight: bold;
  }

  .subscribe {
    margin-top: 10px;

    input {
      padding: 8px;
      width: 70%;
    }

    button {
      padding: 8px;
      cursor: pointer;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Column>
      <p className="heading">Графік роботи :</p>
      <p>Понеділок - Пʼятниця – <span>9 - 18</span></p>
      <p>Субота – <span>11 - 16</span></p>
      <p>Неділя – <span>вихідний</span></p>
    </Column>
    <Column>
      <p>м. Фантастичне, вул. Прекрасна, 73</p>
      <p>+38 0** *** ** **</p>
      <p>*********@gmail.com</p>
      <a href="#">YouTube</a>
      <div className="subscribe">
        <input type="email" placeholder="Ваш email" />
        <button>Підписатись</button>
      </div>
    </Column>
  </FooterWrapper>
);

export default Footer;
