import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const animals = ["giraffe", "zebra", "bear"];
console.log(animals[0]);

// const [firstAnimal, second, third] = ["giraffe", "zebra", "bear"];
// console.log(firstAnimal);

const [,, third] = ["giraffe", "zebra", "bear"];
console.log(third);

createRoot(document.getElementById('root')).render(<App />)
