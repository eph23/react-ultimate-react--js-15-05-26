const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
];

function Header() {
    return <h1>🌴Far away🧳</h1>;
}

function List() {
    return (
        <div className="list">
            <ul>
                <li>
                    <span>2</span>
                    <span>Passports</span>
                    <button>❌</button>
                </li>
                <li>
                    <span>12</span>
                    <span>Socks</span>
                    <button>❌</button>
                </li>
            </ul>
        </div>
    );
}

function Form() {
    return (
        <form className="add-form">
            <h3>What do you need for your trip?</h3>
            <select>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
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
