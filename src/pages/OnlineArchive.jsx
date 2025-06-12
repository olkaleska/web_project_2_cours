import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";


// Діапазон років — по 10

const years = Array.from({ length: 50 }, (_, i) => 1600 + i * 10);

const TopButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const NavLink = styled.a`
  display: inline-block;
  padding: 15px 25px;
  font-size: 16px;
  background-color: ${(props) => (props.primary ? "#3e2c13" : "white")};
  color: ${(props) => (props.primary ? "white" : "#3e2c13")};
  text-decoration: none;
  border: ${(props) => (props.primary ? "none" : "1px solid #3e2c13")};
  cursor: pointer;
`;

// const SearchBar = styled.div`
//   margin: 60px;
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   width: 20%;
// `;

// const SearchInput = styled.input`
//   flex: 1;
//   padding: 10px;
//   border: none;
//   border-radius: 20px;
//   background-color: #a18a6b;
//   color: #2c1d0d;
//   font-size: 18px;
// `;

// const SearchButton = styled.button`
//   background: none;
//   border: none;
//   font-size: 24px;
//   cursor: pointer;
// `;

const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px;
  gap: 30px;
`;

const Years = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
  padding: 0 50px;
`;

const YearButton = styled.button`
  background-color: #2c1d0d;
  color: white;
  border: none;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
`;

// const Map = styled.div`
//   flex: 1;
//   background-color: #3a2a16;
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 20px;
//   height: 300px;
// `;

const Content = styled.div`
  display: flex;
  margin: 30px;
  gap: 40px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 200px;
  font-size: 16px;
  color: #2c1d0d;

  img {
    width: 100%;
  }

  .title {
    font-weight: bold;
    margin-top: 10px;
  }
`;
const Map = styled.div`
  flex: 1;
  background: url("/images/map.jpeg") center/cover no-repeat;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 300px;
  border: 3px solid white;
`;


const OnlineArchive = () => {
  const [allArchives, setAllArchives] = useState([]);
  const [filteredArchives, setFilteredArchives] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDecade, setSelectedDecade] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/archives")
      .then((res) => {
        setAllArchives(res.data);
        setFilteredArchives(res.data);
      })
      .catch((err) => console.error("Помилка при завантаженні архівів:", err));
  }, []);

  const handleYearClick = (year) => {
    const start = year;
    const end = year + 9;
  
    const result = allArchives.filter(
      (item) => Number(item.year) >= start && Number(item.year) <= end
    );
  
    console.log(`Пошук архівів з ${start} по ${end}:`, result);
  
    setFilteredArchives(result);
    setSearchTerm(""); // очищає поле пошуку
    setSelectedDecade(`${start}–${end}`);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const result = allArchives.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredArchives(result);
  };

  return (
    <>
      <Header />
      {/* <SearchBar>
        <SearchInput
          type="text"
          placeholder="Пошук..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <SearchButton>🔍</SearchButton>
      </SearchBar> */}

      <MainSection>
        <Years>
          {years.map((y) => (
            <YearButton key={y} onClick={() => handleYearClick(y)}>
              {y}
            </YearButton>
          ))}
        </Years>
        <Map></Map>
      </MainSection>

      <Content>
  {filteredArchives.length > 0 ? (
    filteredArchives.map((card) => (
      <Card key={card.id}>
        <img
          src="/images/archiv.jpeg"
          alt="архів"
        />
        <div className="title">{card.title}</div>
        <div className="description">{card.description}</div>
      </Card>
    ))
  ) : (
    <div style={{ fontSize: "20px", color: "#3e2c13", marginLeft: "30px" }}>
      Немає архівів за обраний період або результат пошуку порожній.
    </div>
  )}
</Content>


      <Footer />
    </>
  );
};

export default OnlineArchive;




