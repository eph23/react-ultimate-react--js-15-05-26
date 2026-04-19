import pizzaData from "./data";

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Pizza(props) {

    if(props.pizzaObj.soldOut) return null;

    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente repudiandae sunt quas accusamus et officiis dicta
                voluptas quae perspiciatis eveniet incidunt explicabo, inventore
                aliquam modi?
            </p>
            {numPizzas > 0 ? (
                <ul className="pizzas">
                    {pizzas.map((pizza) => (
                        <Pizza key={pizza.name} pizzaObj={pizza} />
                    ))}
                </ul>
            ) : (
                <p>We are still working on our menu. Please come back later</p>
            )}
        </main>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <div className="order">
                    <p>
                        We are OPEN until {closeHour}:00. Come visit us or order
                        online
                    </p>
                    <button className="btn">Order Online</button>
                </div>
            ) : (
                <p>
                    We are happy to welcome you between {openHour}:00 and{" "}
                    {closeHour}:00
                </p>
            )}
        </footer>
    );
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
