import { useState } from "react";
import faqs from "./data.js";

function Accordion() {
    return (
        <div className="accordion">
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={index + 1}
                    title={faq.title}
                    text={faq.text}
                    num={index}
                />
            ))}
        </div>
    );
}
function AccordionItem({ num, title, text }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{num < 10 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{text}</div>}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Accordion />
        </div>
    );
}

export default App;
