function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.image} alt={props.name} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price + 2}</span>
            </div>
        </div>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h2>Menu</h2>
            <Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                image="pizzas/spinaci.jpg"
                price={10}
            />
        </main>
    );
}

function Footer() {
    return <footer className="footer">We are currently open</footer>;
}

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
