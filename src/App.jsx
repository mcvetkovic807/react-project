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
        "Tofu with Vegetables"
    ];

    function Main({ dishes }) {
        return (
            <ul>
                {dishes.map((dish, i) => (
                    <li style={{ listStyleType: "none" }} key={i}>{dish}</li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            <Header name="Alex" year={new Date().getFullYear()} />
            <Main dishes={items} />
        </div>
    );
}

export default App
