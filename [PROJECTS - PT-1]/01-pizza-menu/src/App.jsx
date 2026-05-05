function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza</h1>
        </header>
    );
}

function Menu() {
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente repudiandae sunt quas accusamus et officiis dicta
                voluptas quae perspiciatis eveniet incidunt explicabo, inventore
                aliquam modi?
            </p>
        </div>
    );
}

function Pizzas() {
    return (
        <ul className="pizzas">
            <li className="pizza">
                <img src="pizzas/focaccia.jpg" alt="" />
                <div>
                    <h3>Focaccia</h3>
                    <p>Bread with italian olive oil and rosemary</p>
                    <span>6</span>
                </div>
            </li>
            <li className="pizza">
                <img src="pizzas/margherita.jpg" alt="" />
                <div>
                    <h3>Pizza Margherita</h3>
                    <p>Tomato and mozarella</p>
                    <span>10</span>
                </div>
            </li>
            <li className="pizza">
                <img src="pizzas/spinaci.jpg" alt="" />
                <div>
                    <h3>Pizza Spinaci</h3>
                    <p>Bread with italian olive oil and rosemary</p>
                    <span>12</span>
                </div>
            </li>
            <li className="pizza">
                <img src="pizzas/funghi.jpg" alt="" />
                <div>
                    <h3>Pizza Funghi</h3>
                    <p>Tomato, mozarella, mushrooms, and onion</p>
                    <span>12</span>
                </div>
            </li>
            <li className="pizza sold-out">
                <img src="pizzas/salamino.jpg" alt="" />
                <div>
                    <h3>Pizza Salamino</h3>
                    <p>Tomato, mozarella, and pepperoni</p>
                    <span>SOLD OUT</span>
                </div>
            </li>
            <li className="pizza">
                <img src="pizzas/prosciutto.jpg" alt="" />
                <div>
                    <h3>Pizza Prosciutto</h3>
                    <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
                    <span>18</span>
                </div>
            </li>
        </ul>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <p>We are happy to welcome you between 12:00 and 12:00</p>
        </footer>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Pizzas />
            <Footer />
        </div>
    );
}

export default App;
