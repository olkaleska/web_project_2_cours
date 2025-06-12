import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SectionWrapper = styled.section`
  background-color: #c2a37e; /* трохи світліше/ширше відтінок фону */
  padding: 60px 0 80px;
`;

const FormContainer = styled.div`
  background-color: #9b8364;
  border-radius: 10px;
  padding: 40px 80px;
  max-width: 550px;
  margin: 0 auto;
  font-size: 18px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr auto;
  align-items: center;
  margin-bottom: 18px;
  column-gap: 12px;

  label {
    font-weight: bold;
    color: #2c1d0d;
    justify-self: end;
  }

  input, select {
    padding: 4px;
    background: none;
    border: none;
    border-bottom: 2px solid black;
    font-size: 16px;
    color: #2c1d0d;
    width: 100%;
  }

  button {
    white-space: nowrap;
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

  const [archives, setArchives] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/archives")
      .then((res) => setArchives(res.data))
      .catch((err) => console.error("Помилка завантаження архівів:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/registrations", formData)
      .then(() => {
        alert("Реєстрацію збережено!");
        setFormData({
          name: "",
          date: "",
          time: "",
          books: "",
          email: "",
          confirm: false,
        });
        navigate("/online-archive");
      })
      .catch((error) => {
        console.error("Помилка при збереженні:", error);
        alert("Не вдалося зберегти реєстрацію.");
      });
  };

  const handleFindBookClick = () => {
    navigate("../archive");
  };

  return (
    <>
      <Header />
      <SectionWrapper>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormRow>
            <label>ПІБ</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormRow>
          <FormRow>
            <label>Дата приходу</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </FormRow>
          <FormRow>
            <label>Час приходу</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </FormRow>
          <FormRow>
            <label>Потрібні книги</label>
            <select
              name="books"
              value={formData.books}
              onChange={handleChange}
              required
            >
              <option value="">Оберіть архів</option>
              {archives.map((archive) => (
                <option key={archive.id} value={archive.title}>
                  {archive.title}
                </option>
              ))}
            </select>
            <SearchButton type="button" onClick={handleFindBookClick}>
              Знайти книгу
            </SearchButton>
          </FormRow>
          <FormRow>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormRow>
          <CheckboxRow>
            <input
              type="checkbox"
              name="confirm"
              checked={formData.confirm}
              onChange={handleChange}
            />
            <label>Надіслати підтвердження</label>
          </CheckboxRow>
          <SubmitRow>
            <button type="submit">Записатись</button>
          </SubmitRow>
        </form>
      </FormContainer>
      </SectionWrapper>
      <Footer />
    </>
  );
};

export default Registration;
