function App() {
    return (
        <div className="steps">
            <div className="numbers">
                <div className="active">1</div>
                <div className="">2</div>
                <div className="">3</div>
            </div>
            <div className="message">
                <p>Step 1: "Learn React ⚛️"</p>
            </div>
            <div className="buttons">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    );
}

export default App;
