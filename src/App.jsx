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

    return (
        <div>
            <Header name="Alex" year={new Date().getFullYear()} />
            <main>
                <h2>We serve the most delicious food around</h2>
            </main>
        </div>
    );
}

export default App
