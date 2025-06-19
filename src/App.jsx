import './App.css'
import {Navbar} from "./components/Navbar"
import {Home} from "./components/Home"
import {About} from "./components/About"
import { DarkModeProvider } from "./darkMode";

function App() {

  return (
    <DarkModeProvider>
      <Navbar />
      <Home />
      <About />
    </DarkModeProvider>
  );
}

export default App
