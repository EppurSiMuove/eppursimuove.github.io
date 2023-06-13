const Navbar = () => {
    return (
        <section className="w-screen fixed">
            <div className="container flex justify-between items-center bg-blue-400 p-4">
                <div className="logo">
                    <img
                        src="https://unsplash.it/60/60"
                        alt="logo mario polchert"
                    />
                </div>
                <div className="menu">
                    <ul className="flex flex-row space-x-4 text-2xl cursor-pointer">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#tools">Tools</a>
                        </li>
                        <li>
                            <a href="#work">Work</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
