// // // import React, { useState, useEffect } from 'react';
// // // import NewsCard from '../components/NewsCard';
// // // import Header from '../components/Header';
// // // import Footer from '../components/Footer';

// // // export default function News() {
// // //   const [newsList, setNewsList] = useState([]);

// // //   useEffect(() => {
// // //     // Псевдо-завантаження з API або JSON-server
// // //     setNewsList([
// // //       { id: 1, title: 'Організовано захід 1' },
// // //       { id: 2, title: 'Інтерв’ю з дослідником' },
// // //     ]);
// // //   }, []);

// // //   return (
// // //     <>
// // //       <Header />
// // //       <div className="page">
// // //         <h2>Новини архіву</h2>
// // //         <div className="card-grid">
// // //           {newsList.map((news) => (
// // //             <NewsCard key={news.id} title={news.title} />
// // //           ))}
// // //         </div>
// // //       </div>
// // //       <Footer />
// // //     </>
// // //   );
// // // }

// // import React, { useState, useEffect } from 'react';
// // import NewsCard from '../components/NewsCard';
// // import Header from '../components/Header';
// // import Footer from '../components/Footer';
// // import './styles/News.css'; // Підключення CSS для News сторінки

// // export default function Main() {
// //   return (
// //     <main>
// //       <div className="container">
// //         <Column title="Повністю" items={["Тематика 1", "Тематика 3", "Тематика 5"]} />
// //         <Column title="Тематики" items={["Тематика 2", "Тематика 4", "Тематика 6"]} />
// //         <Column title="Новини" news={["Організовано захід 1", "Організовано захід 2"]} split />
// //         <Column title="Повністю" news={["Інтерв’ю", "Інтерв’ю"]} split />
// //       </div>
// //     </main>
// //   );
// // }

// // function Column({ title, items, news, split }) {
// //   return (
// //     <>
// //     <Header />
// //     <div className="column">
// //       <h4>{title}</h4>
// //       {items?.map((item, i) => (
// //         <div className="box brown" key={i}>{item}</div>
// //       ))}
// //       {news?.map((item, i) => (
// //         <div className="box split tall" key={i}>
// //           <div className="top"></div>
// //           <div className="bottom">{item}</div>
// //         </div>
// //       ))}
// //     </div>
// //     <Footer />
// //     </>
// //   );
// // }


// // // export default function News() {
// // //   const [newsList, setNewsList] = useState([]);

// // //   useEffect(() => {
// // //     // Тут можна підключити API або файл
// // //     setNewsList([
// // //       { id: 1, title: 'Організовано захід 1' },
// // //       { id: 2, title: 'Інтерв’ю з дослідником' },
// // //       { id: 3, title: 'Відкриття нової виставки' },
// // //       { id: 4, title: 'Презентація досліджень' },
// // //     ]);
// // //   }, []);

// // //   return (
// // //     <>
// // //       <Header />
// // //       <div className="news-page">
// // //         <h2>Новини архіву</h2>
// // //         <div className="card-grid">
// // //           {newsList.map((news) => (
// // //             <NewsCard key={news.id} title={news.title} />
// // //           ))}
// // //         </div>
// // //       </div>
// // //       <Footer />
// // //     </>
// // //   );
// // // }


// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import './styles/News.css';

// export default function Main() {
//   return (
//     <>
//       <Header />
//       <main>
//         <div className="container">
//           <Column title="Повністю" items={["Тематика 1", "Тематика 3", "Тематика 5"]} />
//           <Column title="Тематики" items={["Тематика 2", "Тематика 4", "Тематика 6"]} />
//           <Column title="Новини" news={["Організовано захід 1", "Організовано захід 2"]} split />
//           <Column title="Повністю" news={["Інтерв’ю", "Інтерв’ю"]} split />
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }

// function Column({ title, items, news, split }) {
//   return (
//     <div className="column">
//       <h4>{title}</h4>
//       {items?.map((item, i) => (
//         <div className="box brown" key={i}>{item}</div>
//       ))}
//       {news?.map((item, i) => (
//         <div className="box split tall" key={i}>
//           <div className="top"></div>
//           <div className="bottom">{item}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import '../index.css';

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Column title="Повністю" items={["Тематика 1", "Тематика 3", "Тематика 5"]} />
          <Column title="Тематики" items={["Тематика 2", "Тематика 4", "Тематика 6"]} />
          <Column title="Новини" news={["Організовано захід 1", "Організовано захід 2"]} />
          <Column title="Інтерв’ю" news={["Інтерв’ю 1", "Інтерв’ю 2"]} />
        </div>
      </main>
      <Footer />
    </>
  );
}

function Column({ title, items, news }) {
  return (
    <div className="column">
      <h4>{title}</h4>
      {items?.map((item, i) => (
        <div className="box brown" key={i}>{item}</div>
      ))}
      {news?.map((item, i) => (
        <NewsCard key={i} title={item} />
      ))}
    </div>
  );
}
