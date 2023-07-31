import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tools from "./components/Tools";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./index.css";
import Social from "./components/Social";

<link
    rel="stylesheet"
    href="node_modules/modern-normalize/modern-normalize.css"
></link>;

function App() {
    return (
        <div className="overflow-x-hidden min-w-screen mx-auto">
            <Navbar />
            <Social />
            <Hero />
            <About />
            <Tools />
            <Work />
            <Contact />
        </div>
    );
}

export default App;
