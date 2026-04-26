const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 2, description: "Charger", quantity: 2, packed: true },
    { id: 2, description: "T-Shirts", quantity: 5, packed: true },
];

function Logo() {
    return (
        <header>
            <h1>🏝️Far away🧳</h1>
        </header>
    );
}
function Form() {
    function handleSubmit(event) {
        event.preventDefault();
        
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select name="" id="">
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
function PackingList() {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
                    <Item key={`${item.id}${item.description}`} item={item} />
                ))}
            </ul>
        </div>
    );
}

function Item({ item }) {
    return (
        <li>
            <span></span>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    );
}

function Status() {
    return (
        <footer className="stats">
            <em>You have X items on your list and you already packed X (X%)</em>
        </footer>
    );
}

function App() {
    return (
        <div className="app">
            <Logo />
            <Form />
            <PackingList />
            <Status />
        </div>
    );
}

export default App;
