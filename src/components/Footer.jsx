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

// <footer className="absolute z-100 portrait:pb-4 portrait:mt-0 landscape:md:pb-0 landscape:md:pt-0 w-full h-[5vh] bg-red-700 flex justify-center box-border">
