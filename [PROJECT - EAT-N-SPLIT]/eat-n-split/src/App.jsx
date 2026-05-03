import initialFriends from "./data.js";

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
            <button className="button">Select</button>
        </li>
    );
}

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

function App() {
    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList />
            </div>
        </div>
    );
}

export default App;
