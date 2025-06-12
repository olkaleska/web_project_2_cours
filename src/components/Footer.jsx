import React from 'react';
import './styles/Footer.css'; 

export default function Footer() {
    return (
      <footer>
        <div className="left">
          <p className="heading">Графік роботи :</p>
          <p>Понеділок - Пʼятниця – <span>9 - 18</span></p>
          <p>Субота – <span>11 - 16</span></p>
          <p>Неділя – <span>вихідний</span></p>
        </div>
  
        <div className="right">
          <p>01015, м. Фантастичне, вул. Прекрасна, 73</p>
          <p>+38 0** *** ** **</p>
          <p>************@gmail.com</p>
          <a href="#">youtube link</a>
  
          <div className="subscribe">
            <input type="email" placeholder="Ваш email" />
            <button>Підписатись</button>
          </div>
        </div>
      </footer>
    );
  }
  