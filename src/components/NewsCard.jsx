// import React from 'react';

// export default function NewsCard({ title }) {
//   return (
//     <div className="card">
//       <p>{title}</p>
//     </div>
//   );
// }

import React from 'react';
import './styles/NewsCard.css'; // Стилі саме для NewsCard

export default function NewsCard({ title }) {
  return (
    <div className="box split tall">
      <div className="top"></div>
      <div className="bottom">{title}</div>
    </div>
  );
}
