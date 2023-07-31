import { useState, useEffect } from "react";
import logo from "../assets/logo_green.svg";

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const handleClick = () => setNav(!nav);

    // Disabling scroll when mobile menu is active
    useEffect(() => {
        if (!nav) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [nav]);

    return (
        <section className="fixed z-10 w-screen bg-darkText bg-opacity-80 overflow-hidden">
            {/* Menu */}
            <div className="container hidden items-center justify-between   p-4  sm:flex ">
                <div className="logo">
                    <a href="#home">
                        <img
                            src={logo}
                            alt="logo mp - mario polchert"
                            className="w-[10vh] landscape:w-[15vh] landscape:lg:w-[10vh]"
                        />
                    </a>
                </div>
                <div className="full-menu tracking-widest">
                    <ul className=" flex cursor-pointer flex-row space-x-4 text-2xl ">
                        <li>
                            <a
                                className="group text-lightText transition-all duration-500 ease-in-out hover:text-accent"
                                href="#home"
                            >
                                <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                                    HOME
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="group text-lightText transition-all duration-500 ease-in-out hover:text-accent"
                                href="#about"
                            >
                                <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                                    ABOUT
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="group text-lightText transition-all duration-500 ease-in-out hover:text-accent "
                                href="#tools"
                            >
                                <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] ">
                                    TOOLS
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="group text-lightText transition-all duration-500 ease-in-out hover:text-accent"
                                href="#work"
                            >
                                <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                                    WORK
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="group text-lightText transition-all duration-500 ease-in-out hover:text-accent"
                                href="#contact"
                            >
                                <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                                    CONTACT
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Mobile menu */}
            <div className="container z-30 flex items-center justify-between bg-darkText p-4 sm:hidden">
                {nav ? (
                    <>
                        <div className="logo">
                            <a href="#home">
                                <img
                                    src={logo}
                                    alt="logo mario polchert"
                                    className="w-[8vh]"
                                />
                            </a>
                        </div>
                        <div className="hamburger">
                            <svg
                                onClick={handleClick}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                className="h-12 w-12 text-accent"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </div>
                    </>
                ) : (
                    <div className="mobile-menu-open">
                        <div className="flex w-full flex-row items-center justify-between">
                            <div className="logo">
                                <a href="#home" onClick={handleClick}>
                                    <img
                                        src={logo}
                                        alt="logo mario polchert"
                                        className="w-[8vh]"
                                    />
                                </a>
                            </div>
                            <div className="x-mark ">
                                <svg
                                    onClick={handleClick}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5"
                                    stroke="currentColor"
                                    className="h-12 w-12 text-accent"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="full-menu">
                            <ul className="flex cursor-pointer flex-col space-y-12 pt-[20vh] text-center text-2xl text-lightText">
                                <li onClick={handleClick}>
                                    <a href="#home">Home</a>
                                </li>
                                <li onClick={handleClick}>
                                    <a href="#about">About</a>
                                </li>
                                <li onClick={handleClick}>
                                    <a href="#tools">Tools</a>
                                </li>
                                <li onClick={handleClick}>
                                    <a href="#work">Work</a>
                                </li>
                                <li onClick={handleClick}>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Navbar;
