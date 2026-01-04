import { useState } from "react";
import './App.css'
import chef from "./images/chef.jpg";

function Header({ name, year }) {
    return (
        <header>
            <h1>{name}'s Kitchen</h1>
            <p>Copyright {year}</p>
        </header>
    )
}

const items= [
    "Macaroni with Chese",
    "Salmon with Potatoes",
    "Tofu with Vegetables",
    "Minestrone soup"
];

const dishObjects = items.map((dish, i) => ({
    id: i,
    title: dish
}));

function Main({ dishes }) {
    return (
        <main>
            <img src={chef} height={200} alt="A photo of a smiling chef owner" />
            <ul>
                {dishes.map((dish) => (
                    <li style={{ listStyleType: "none" }} key={dish.id}>{dish.title}</li>
                ))}
            </ul>
        </main>
    )
}

function App() {
    const [status, setStatus] = useState(true);

    return (
        <div>
            <h1>The restauarant is currently {" "}{status ? "open" : "closed"}.</h1>
            <button onClick={() => setStatus(!status)}>{status ? "Close" : "Open"} Restaurant</button>
            <Header name="Alex" year={new Date().getFullYear()} />
            <Main dishes={dishObjects} />
        </div>
    );
}

export default App
