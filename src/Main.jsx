export default function Main() {
    return (
      <main>
        <div className="container">
          <Column title="Повністю" items={["Тематика 1", "Тематика 3", "Тематика 5"]} />
          <Column title="Тематики" items={["Тематика 2", "Тематика 4", "Тематика 6"]} />
          <Column title="Новини" news={["Організовано захід 1", "Організовано захід 2"]} split />
          <Column title="Повністю" news={["Інтерв’ю", "Інтерв’ю"]} split />
        </div>
      </main>
    );
  }
  
  function Column({ title, items, news, split }) {
    return (
      <div className="column">
        <h4>{title}</h4>
        {items?.map((item, i) => (
          <div className="box brown" key={i}>{item}</div>
        ))}
        {news?.map((item, i) => (
          <div className="box split tall" key={i}>
            <div className="top"></div>
            <div className="bottom">{item}</div>
          </div>
        ))}
      </div>
    );
  }
  