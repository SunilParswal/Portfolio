import styles from "./App.module.css";
import { Introduction } from "./components/Introduction/Introduction";
import { Contact } from "./components/Contact/Contact";
import { Skillc } from "./components/skill/skill";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";



function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <Introduction />
      <Skillc />
      <Contact />
      
    </div>
  );
}

export default App;
