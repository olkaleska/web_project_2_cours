import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const FormContainer = styled.div`
  background-color: #9b8364;
  border-radius: 10px;
  padding: 40px 80px;
  max-width: 550px;
  margin: 0 auto;
  font-size: 18px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;

  label {
    width: 180px;
    font-weight: bold;
    color: #2c1d0d;
  }

  input {
    flex: 1;
    padding: 4px;
    background: none;
    border: none;
    border-bottom: 2px solid black;
    font-size: 16px;
    color: #2c1d0d;
  }
`;

const SearchButton = styled.button`
  margin-left: 10px;
  background-color: #3b2a17;
  color: white;
  border: none;
  padding: 10px 18px;
  cursor: pointer;
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  gap: 12px;
  padding-left: 10px;

  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #2c1d0d;
    border-radius: 2px;
    background-color: transparent;
    cursor: pointer;

    &:checked {
      background-color: #3b2a17;
    }
  }

  label {
    font-size: 15px;
    color: #2c1d0d;
  }
`;

const SubmitRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    background-color: #3b2a17;
    color: white;
    border: none;
    padding: 10px 24px;
    font-size: 16px;
    cursor: pointer;
  }
`;

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    books: "",
    email: "",
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 
    axios
      .post("http://localhost:3001/registrations", formData)
      .then(() => {
        alert("Реєстрацію збережено!");
      })
      .catch((error) => {
        console.error("Помилка при збереженні:", error);
        alert("Не вдалося зберегти реєстрацію.");
      });
  };

  return (
    <>
      <Header />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormRow>
            <label>ПІБ</label>
            <input type="text" name="name" onChange={handleChange} />
          </FormRow>
          <FormRow>
            <label>Дата приходу</label>
            <input type="date" name="date" onChange={handleChange} />
          </FormRow>
          <FormRow>
            <label>Час приходу</label>
            <input type="time" name="time" onChange={handleChange} />
          </FormRow>
          <FormRow>
            <label>Потрібні книги</label>
            <input type="text" name="books" onChange={handleChange} />
            <SearchButton type="button">Знайти книгу</SearchButton>
          </FormRow>
          <FormRow>
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} />
          </FormRow>
          <CheckboxRow>
            <input type="checkbox" name="confirm" onChange={handleChange} />
            <label>Надіслати підтвердження</label>
          </CheckboxRow>
          <SubmitRow>
            <button type="submit">Записатись</button>
          </SubmitRow>
        </form>
      </FormContainer>
      <Footer />
    </>
  );
};

export default Registration;
