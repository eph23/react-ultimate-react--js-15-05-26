import initialFriends from "./data.js";

/* ******************************************** */
/*ANCHOR                    BUTTON COMPONENT                   */
function Button({ children }) {
    return <button className="button">{children}</button>;
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
function FriendsList() {
    const friends = initialFriends;

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
function FormAddFriend() {
    return (
        <form action="" className="form-add-friend">
            <label htmlFor="">✏️Friend Name</label>
            <input type="text" placeholder="Name" />
            <label htmlFor="">📸Image URL</label>
            <input type="text" />
            <Button>Add</Button>
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
    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList />
                <FormAddFriend />
                <Button>Add Friend</Button>
            </div>
            <FormSplitBill />
        </div>
    );
}
/* ******************************************** */

export default App;
