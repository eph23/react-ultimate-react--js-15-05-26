import pizzaData from "./data";

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Pizza(props) {
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
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente repudiandae sunt quas accusamus et officiis dicta
                voluptas quae perspiciatis eveniet incidunt explicabo, inventore
                aliquam modi?
            </p>
            <ul className="pizzas">
                {pizzaData.map((pizza) => (
                    <Pizza key={pizza.name} pizzaObj={pizza} />
                ))}
            </ul>
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
