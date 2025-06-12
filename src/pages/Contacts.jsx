import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpecialistCard from '../components/SpecialistCard';
import '../styles/mystyle.css';
import '../styles/contacts.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contacts() {
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/specialists')
      .then((res) => setSpecialists(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <main className="contacts-main">
        <h2 className="section-title">НАШІ СПЕЦІАЛІСТИ</h2>
        <div className="card-container">
          {specialists.map(person => (
            <SpecialistCard
              key={person.id}
              name={person.name}
              title={person.title}
              email={person.email}
              image={person.image}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
