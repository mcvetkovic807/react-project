import './App.css'

function App() {

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
            <ul>
                {dishes.map((dish) => (
                    <li style={{ listStyleType: "none" }} key={dish.id}>{dish.title}</li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            <Header name="Alex" year={new Date().getFullYear()} />
            <Main dishes={dishObjects} />
        </div>
    );
}

export default App
