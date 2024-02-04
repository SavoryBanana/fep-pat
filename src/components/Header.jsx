const Header = () => {
    return(
        <>
            <header className="flex flex-row sticky top-0 w-full h-16 place-items-center justify-around z-50 drop-shadow bg-white bg-opacity-50 backdrop-blur-lg dark:bg-header dark:bg-opacity-50">
                <h1 className="text-xl m-4 font-bold"><a href="https://github.com/SavoryBanana" target="_blank" rel="noreferrer">@SavoryBanana</a></h1>
                <ul className="grid grid-cols-4 gap-4 justify-end text-center">
                    <li className="p-2"><a href="#">Home</a></li>
                    <li className="p-2"><a href="#">About</a></li>
                    <li className="p-2"><a href="#">Works</a></li>
                    <li className="p-2"><a href="#">Contact</a></li>
                </ul>
            </header>
        </>
    );
}

export default Header