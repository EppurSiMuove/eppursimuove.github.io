const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center pb-2">
            <h1 className="bg-darkText text-[1.2rem] font-thin tracking-wider text-lightText portrait:text-[1rem]">
                Made by Mario Polchert &copy; {year}
            </h1>
        </footer>
    );
};

export default Footer;


