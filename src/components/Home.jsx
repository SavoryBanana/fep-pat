import Typewriter from '../animations/Typewriter';
import profile from '../assets/profile.jpg'

const Home = () => {
    return(
        <>
        <section className="flex items-center justify-center h-svh">
            <div className="grid grid-cols-2 w-1/2 justify-center">
                <div className="h-60 w-60 rounded-full drop-shadow">
                    <img className="object-cover h-60 w-60 rounded-full border-solid border-2 border-gray-950" src={profile} alt="profile picture" />
                </div>
                <div className="w-full m-4 text-white shadow-2xl">
                    <div id="window" className="h-full rounded-xl bg-terminal-theme">
                        <div id="tab" className="flex justify-start w-full px-4 py-1 bg-terminal-tab rounded-tl-xl rounded-tr-xl">
                            <div className="flex justify-center items-center">
                                <div className="w-3 h-3 m-1 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 m-1 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 m-1 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="relative w-full text-center">
                                <p className="mx-5">🏠 SavoryBanana — -bash — 80x24</p>
                            </div>
                        </div>
                        <div className="w-inherit h-inherit px-2">
                            <p className="text-green-500">Pats-Mac:~ SavoryBanana$ cat ~/intro.txt</p>
                            <p><Typewriter text="Hello! I am Patrick. I am a Versatile Software Developer with a strong focus on Front-End Development and intermediate skills in Backend Development." delay="100" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Home