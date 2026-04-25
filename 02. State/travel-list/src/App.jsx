function Logo() {
    return (
        <header>
            <h1>🏝️Far away🧳</h1>
        </header>
    );
}
function Form() {
    return (
        <div className="add-form">
            <h3>What do you need for your trip?</h3>
        </div>
    );
}
function PackingList() {
    return <div className="list">LIST</div>;
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
