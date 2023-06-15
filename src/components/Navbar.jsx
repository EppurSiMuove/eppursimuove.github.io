import { useState, useEffect } from "react";

// const Logo = () => {
//     return (
//         <div className="logo">
//             <a href="#home">
//                 <img
//                     src="https://unsplash.it/60/60"
//                     alt="logo mario polchert"
//                 />
//             </a>
//         </div>
//     );
// };

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    // Disabling scroll when mobile menu is active
    useEffect(() => {
        if (nav) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [nav]);

    // Needed to add this to avoid disabling if orientation is landscape
    useEffect(() => {
        const handleOrientationChange = () => {
            const isLandscape = window.matchMedia(
                "(orientation: landscape)"
            ).matches;
            setNav(isLandscape);
        };

        window.addEventListener("orientationchange", handleOrientationChange);

        return () => {
            window.removeEventListener(
                "orientationchange",
                handleOrientationChange
            );
        };
    }, []);

    return (
        <section className="w-screen fixed ">
            {/* Menu */}
            <div className="container hidden sm:flex justify-between items-center bg-blue-400 p-4">
                <div className="logo">
                    <a href="#home">
                        <img
                            src="https://unsplash.it/60/60"
                            alt="logo mario polchert"
                        />
                    </a>
                </div>
                <div className="full-menu">
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
            {/* Mobile menu */}
            <div className="container z-30 flex sm:hidden justify-between items-center bg-darkText p-4">
                {!nav ? (
                    <>
                        <div className="logo">
                            <a href="#home">
                                <img
                                    src="https://unsplash.it/60/60"
                                    alt="logo mario polchert"
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
                                className="w-12 h-12 text-accent"
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
                        <div className="flex flex-row justify-between w-full items-center">
                            <div className="logo">
                                <a href="#home" onClick={handleClick}>
                                    <img
                                        src="https://unsplash.it/60/60"
                                        alt="logo mario polchert"
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
                                    className="w-12 h-12 text-accent"
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
                            <ul className="flex flex-col text-lightText text-2xl text-center cursor-pointer space-y-12 pt-[20vh]">
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

{
    /* <div className="flex flex-col w-screen h-screen items-center bg-darkText opacity-95 p-4">
                        <div className="flex flex-row justify-between w-full items-center"> */
}
