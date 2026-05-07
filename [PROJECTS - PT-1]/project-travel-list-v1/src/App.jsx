const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Camera", quantity: 1, packed: true },
    { id: 4, description: "Camera Charger", quantity: 1, packed: true },
];

function Header() {
    return <h1>🌴Far away🧳</h1>;
}

function Item({ description, quantity, packed }) {
    return (
        <li>
            <span></span>
            <span style={packed ? { textDecoration: "line-through" } : {}}>
                {quantity} {description}
            </span>
            <button>❌</button>
        </li>
    );
}

function List() {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
                    <Item
                        key={item.id}
                        description={item.description}
                        quantity={item.quantity}
                        packed={item.packed}
                    />
                ))}
            </ul>
        </div>
    );
}

function Form() {
    return (
        <form className="add-form">
            <h3>What do you need for your trip?</h3>
            <select>
                {Array.from({ length: 20 }, (_, index) => index + 1).map(
                    (num) => (
                        <option value={num} key={num}>
                            {num}
                        </option>
                    ),
                )}
            </select>
            <input type="text" placeholder="Items..." />
            <button>Add</button>
        </form>
    );
}

function Footer() {
    return (
        <footer className="stats">
            <em>You have X items in your list and you already packed X (X%)</em>
        </footer>
    );
}

function App() {
    return (
        <div className="app">
            <Header />
            <Form />
            <List />
            <Footer />
        </div>
    );
}

export default App;
