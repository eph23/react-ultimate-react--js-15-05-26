const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {
    let step = 1;

    function handleNext() {
        console.log("Clicked Next");
    }

    function handlePrevious() {
        console.log("Clicked Previous");
    }

    return (
        <div className="steps">
            <div className="numbers">
                <div className={step >= 1 ? "active" : ""}>1</div>
                <div className={step >= 2 ? "active" : ""}>2</div>
                <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <div className="message">
                <p>
                    Step {step}: {messages[step - 1]}
                </p>
            </div>
            <div className="buttons">
                <button
                    style={{ backgroundColor: "#7950f2", color: "#fff" }}
                    onClick={handlePrevious}
                >
                    Previous
                </button>
                <button
                    style={{ backgroundColor: "#7950f2", color: "#fff" }}
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;
