function Header() {
    return (
        <header>
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
            <h3>Pizza Spinaci</h3>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        </div>
    );
}

function Menu() {
    return (
        <main>
            <h2>Menu</h2>
            <Pizza />
        </main>
    );
}

function Footer() {
    return <footer>We are currently open</footer>;
}

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
