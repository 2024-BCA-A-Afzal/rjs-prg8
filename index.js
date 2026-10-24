
function Recipe() {
  return (
    <div className="container">
      <h1>Recipe Cards</h1>

      <div className="card">
        <h2>Chicken Noodles Soup</h2>
        <img
          src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400"
          alt="Chicken Noodles Soup"
          width="200"
        />
        <ul>
          <li>Chicken</li>
          <li>Noodles</li>
          <li>Carrot</li>
          <li>Salt</li>
        </ul>
      </div>

      <div className="card">
        <h2>Curried Egg</h2>
        <img
          src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400"
          alt="Egg recipe"
          width="200"
        />
        <ul>
          <li>Eggs</li>
          <li>Curry powder</li>
          <li>Onion</li>
          <li>Salt</li>
        </ul>
      </div>

      <div className="card">
        <h2>Oat Cluster</h2>
        <img
          src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400"
          alt="Oats"
          width="200"
        />
        <ul>
          <li>Oats</li>
          <li>Honey</li>
          <li>Nuts</li>
          <li>Butter</li>
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");

if (rootElement && typeof ReactDOM !== "undefined") {
  ReactDOM.createRoot(rootElement).render(<Recipe />);
}
