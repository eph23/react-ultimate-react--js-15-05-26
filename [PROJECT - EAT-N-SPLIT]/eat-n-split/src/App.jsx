import { useState } from "react";
import initialFriends from "./data.js";

/* ******************************************** */
/*ANCHOR                    BUTTON COMPONENT                   */
function Button({ children, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
}
/* ******************************************** */

/* ******************************************** */
/*ANCHOR               FRIEND COMPONENT               */
function Friend({ friend }) {
    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    You owe {friend.name} ${Math.abs(friend.balance)}
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owes you ${friend.balance}
                </p>
            )}
            {friend.balance === 0 && <p>You and {friend.name} are even</p>}
            <Button>Select</Button>
        </li>
    );
}
/* ******************************************** */

/* ******************************************** */
/*ANCHOR                 FRIENDS LIST                 */
function FriendsList({ friends }) {
    return (
        <ul>
            {friends.map((friend) => (
                <Friend friend={friend} key={friend.id} />
            ))}
        </ul>
    );
}
/* ******************************************** */

/* ******************************************** */
/*ANCHOR                ADD FRIEND FORM               */
function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleImageChange(event) {
        setImage(event.target.value);
    }

    function handleSubmit(event) {
        if (!name || !image) return;

        const id = crypto.randomUUID();
        event.preventDefault();
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        onAddFriend(newFriend);
        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <form action="" className="form-add-friend" onSubmit={handleSubmit}>
            <label htmlFor="">✏️Friend Name</label>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
            />
            <label htmlFor="">📸Image URL</label>
            <input type="text" value={image} onChange={handleImageChange} />
            <Button onSubmit={onAddFriend}>Add</Button>
        </form>
    );
}
/* ******************************************** */

/* ******************************************** */
/*                SPLIT BILL FORM               */
function FormSplitBill() {
    return (
        <form action="" className="form-split-bill">
            <h2>Split a bill with</h2>

            <label htmlFor="">💲Bill value</label>
            <input type="text" />

            <label htmlFor="">💸Your Expenses</label>
            <input type="text" />

            <label htmlFor="">💰X's Expenses</label>
            <input type="text" />

            <label htmlFor="">💳Who is paying bill</label>
            <select>
                <option value="user">You</option>
                <option value="friend">X</option>
            </select>
        </form>
    );
}
/* ******************************************** */

/* ******************************************** */
/*ANCHOR                 APP COMPONENT                */
function App() {
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [friends, setFriends] = useState(initialFriends);

    function handleShowFriend() {
        setShowAddFriend((show) => !show);
    }
    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
        setShowAddFriend(false);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList friends={friends} />
                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}
                <Button onClick={handleShowFriend}>
                    {!showAddFriend ? "Add Friend" : "Close"}
                </Button>
            </div>
            <FormSplitBill />
        </div>
    );
}
/* ******************************************** */

export default App;
