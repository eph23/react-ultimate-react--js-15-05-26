import { useState } from "react";
import faqs from "./data.js";

function Accordion() {
    const [currentOpen, setCurrentOpen] = useState(null);

    return (
        <div className="accordion">
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={index + 1}
                    title={faq.title}
                    num={index}
                    currentOpen={currentOpen}
                    onOpen={setCurrentOpen}
                >
                    {faq.text}
                </AccordionItem>
            ))}
        </div>
    );
}
function AccordionItem({ num, title, currentOpen, onOpen, children }) {
    const isOpen = num === currentOpen;

    function handleToggle() {
        onOpen(isOpen ? null : num);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{num < 10 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{children}</div>}
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
