
function Recipe() {
  return (
    <div className="container">
      <h1>Recipe Cards</h1>

      <div className="card">
        <h2>Chicken Noodles Soup</h2>
        <ul>
          <li>Chicken</li>
          <li>Noodles</li>
          <li>Carrot</li>
          <li>Salt</li>
        </ul>
      </div>

      <div className="card">
        <h2>Curried Egg</h2>
        <ul>
          <li>Eggs</li>
          <li>Curry powder</li>
          <li>Onion</li>
          <li>Salt</li>
        </ul>
      </div>

      <div className="card">
        <h2>Oat Cluster</h2>
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

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<Recipe />);
