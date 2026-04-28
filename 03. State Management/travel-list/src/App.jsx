import { useState } from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
];

function Logo() {
    return (
        <header>
            <h1>🏝️Far away🧳</h1>
        </header>
    );
}
function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();

        if (!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        };

        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    function handleItem(event) {
        setDescription(event.target.value);
    }

    function handleQuantity(event) {
        setQuantity(+event.target.value);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select onChange={handleQuantity} value={quantity}>
                {Array.from({ length: 20 }, (_, index) => index + 1).map(
                    (num) => (
                        <option value={num} key={num}>
                            {num}
                        </option>
                    ),
                )}
            </select>
            <input
                type="text"
                placeholder="Items..."
                value={description}
                onChange={handleItem}
            />
            <button>Add</button>
        </form>
    );
}
function PackingList({ items, onDeleteItem, onToggleItem }) {
    const [sortBy, setSortBy] = useState("input");

    function handleSort(event) {
        setSortBy(event.target.value);
    }

    let sortedItems;

    if (sortBy === "input") {
        sortedItems = items;
    }
    if (sortBy === "description") {
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));
    }
    if (sortBy === "packed") {
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        key={`${item.id}${item.description}`}
                        onDeleteItem={onDeleteItem}
                        item={item}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={handleSort}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
            </div>
        </div>
    );
}

function Item({ item, onDeleteItem, onToggleItem }) {
    return (
        <li>
            <input
                type="checkbox"
                value={item.packed}
                onChange={() => onToggleItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}

function Status({ items }) {
    if (!items.length) {
        return (
            <footer className="stats">
                Start adding some items to your packing list 🧳
            </footer>
        );
    }
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    return (
        <footer className="stats">
            {percentage === 100 ? (
                <em>You got everything ready to go 🚀🚀🚀</em>
            ) : (
                <em>
                    You have {numItems} items on your list and you already
                    packed {numPacked} ({percentage}%)
                </em>
            )}
        </footer>
    );
}

function App() {
    const [items, setItems] = useState(initialItems);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item,
            ),
        );
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
            />
            <Status items={items} />
        </div>
    );
}

export default App;
