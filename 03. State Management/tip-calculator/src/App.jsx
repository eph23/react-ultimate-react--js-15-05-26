import { useState } from "react";

function BillInput({ bill, onSetBill }) {
    function handleBillChange(event) {
        onSetBill(Number(event.target.value));
    }

    return (
        <div className="inputs">
            <label>How much was the bill?</label>
            <input
                type="text"
                placeholder="Bill value"
                value={bill}
                onChange={handleBillChange}
            />
        </div>
    );
}

function SelectPercentage({ percentage, onSelect, children }) {
    function handlePercentageChange(event) {
        onSelect(Number(event.target.value));
    }

    return (
        <div className="inputs">
            <label>{children}</label>
            <select value={percentage} onChange={handlePercentageChange}>
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}

function Output({ bill, tip }) {
    return (
        <div className="message">
            <h3>
                You have to pay ${bill + tip}
                <br /> (<span>Bill: $</span>
                {bill} + <span>Tip: $</span>
                {tip})
            </h3>
        </div>
    );
}

function Reset({ onReset }) {
    return (
        <div className="buttons">
            <button onClick={onReset}>Reset</button>
        </div>
    );
}

function TipCalculator() {
    const [bill, setBill] = useState("");
    const [percentageSelf, setPercentageSelf] = useState(0);
    const [percentageFriend, setPercentageFriend] = useState(0);

    const tip = bill * ((percentageSelf + percentageFriend) / 2 / 100);

    function handleReset() {
        setBill("");
        setPercentageFriend(0);
        setPercentageSelf(0);
    }

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill} />
            <SelectPercentage
                percentage={percentageSelf}
                onSelect={setPercentageSelf}
            >
                How much did you liked the service?
            </SelectPercentage>
            <SelectPercentage
                percentage={percentageFriend}
                onSelect={setPercentageFriend}
            >
                How much did your friend liked the service?
            </SelectPercentage>
            {bill && (
                <>
                    <Output bill={bill} tip={tip} />
                    <Reset onReset={handleReset} />
                </>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1>Tip Calculator</h1>
            <TipCalculator />
        </div>
    );
}

export default App;
