
function Recipe() {
  return (
    <div>
      <h1>Recipe Cards</h1>

      <div className="card">
        <h1>Chicken Noodles Soup</h1>
        <ul>
          <li>Chicken</li>
          <li>Noodles</li>
          <li>Carrot</li>
          <li>Salt</li>
        </ul>
        <p>A delicious chicken noodle soup.</p>
      </div>

      <div className="card">
        <h1>Curried Egg Salad</h1>
        <ul>
          <li>Eggs</li>
          <li>Curry powder</li>
          <li>Mayonnaise</li>
          <li>Salt</li>
        </ul>
        <p>A simple and tasty curried egg salad.</p>
      </div>

      <div className="card">
        <h1>Oat Cluster</h1>
        <ul>
          <li>Oats</li>
          <li>Honey</li>
          <li>Nuts</li>
          <li>Butter</li>
        </ul>
        <p>A crunchy and healthy oat snack.</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<Recipe />);
