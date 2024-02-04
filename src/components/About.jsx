import Typewriter from "../animations/Typewriter";

const About = () => {
    return(
        <>
        <section className="flex flex-col items-center m-5 p-5">
            <h1 className="text-4xl text-center">About Me</h1>
            <div className="container grid grid-cols-2 justify-around items-center w-3/4 mt-5">
                <img className="object-cover w-96 h-96 rounded-xl" src="https://th.bing.com/th/id/OIG4.6tmq5PKBRAz2nGPhJMSA?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="penguin" />
                <div className="mx-5 flex flex-col">
                    <div className="w-full text-white">
                        <div id="window" className="h-full rounded-xl bg-terminal-theme drop-shadow">
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
                                <p className="text-green-500">Pats-Mac:~ SavoryBanana$ cat ~/about.txt</p>
                                <p><Typewriter text="My interest in technology started when I was 7 years old! I started tinkering with Nokia Symbian phones when I was at 6th grade and this curiosity continued until I installed my first custom ROM on an Android device. I have built custom ROMs and a custom Linux kernel on a Samsung Galaxy J4+ device during my first year in college. I started Front-End Web Development after graduating college, and now I'm currently diving deep into Backend development." delay="1" /></p>
                            </div>
                        </div>
                    </div>
                    <a className="bg-green-700 p-2 my-2 rounded-xl drop-shadow-xl w-fit" href="https://drive.google.com/file/d/1GqAmcoLv6nOh6RVcTjFSl1Xw2K6l6BaT/view?usp=sharing" target="_blank" rel="noreferrer"><svg className="inline-block mb-1 mr-1" width="20px" height="20px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 15V21M19 21L17 19M19 21L21 19M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H14M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M9 17H13M9 13H15M9 9H10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>Download Resume</a>
                </div>
            </div>
            <h1 className="text-2xl text-center mt-5">My Personal Journey</h1>
            {/* timeline */}
            <div className="w-3/4">
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 ">
                    {/*  left */}
                    <div className="flex flex-row-reverse md:contents">
                        <div className="bg-white dark:bg-terminal-theme col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                            <h3 className="font-semibold text-lg">Bicol University</h3>
                            <p className="font-semibold text-sm mb-1">July 2023</p>
                            <p className="leading-tight">
                            Graduated BS Computer Science
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-1/2 mt-20 w-1 bg-green-700 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-700 shadow"></div>
                        </div>
                    </div>
                    {/* end of left */}

                    {/*  right */}
                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-green-700 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-700 shadow"></div>
                        </div>
                        <div className="bg-white dark:bg-terminal-theme col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                            <h3 className="font-semibold text-lg">Bicol University Office of Student Affairs and Services (BU-OSAS)</h3>
                            <p className="font-semibold text-sm mb-1">July 2022 - August 2022</p>
                            <p className="leading-tight">
                            Finished 240 Hours of Internship as a Student Assistant
                            </p>
                        </div>
                    </div>
                    {/* end of right */}

                    {/*  left */}
                    <div className="flex flex-row-reverse md:contents">
                        <div className="bg-white dark:bg-terminal-theme col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                            <h3 className="font-semibold text-lg">Anislag National High School (SHS)</h3>
                            <p className="font-semibold text-sm mb-1">April 2019</p>
                            <p className="leading-tight">
                            Graduated TVL-ICT with NC II in Computer Systems Servicing
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-green-700 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-700 shadow"></div>
                        </div>
                    </div>
                    {/* end of left */}

                    {/* right */}
                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-green-700 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-700 shadow"></div>
                        </div>
                        <div className="bg-white dark:bg-terminal-theme col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                            <h3 className="font-semibold text-lg">Tintonick Ink Printer and Computer Services</h3>
                            <p className="font-semibold text-sm mb-1">January 2019</p>
                            <p className="leading-tight">
                            IT Technician Intern
                            </p>
                        </div>
                    </div>
                    {/* end of right */}

                    {/* right */}
                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-1/2 w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-green-700 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-700 shadow"></div>
                        </div>
                        <div className="bg-white dark:bg-terminal-theme col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                            <h3 className="font-semibold text-lg">Project Medusa Organization (AOSP)</h3>
                            <p className="font-semibold text-sm mb-1">January 2019 - March 2021</p>
                            <p className="leading-tight">
                            Collaborated with multiple developers from the Android Open Source Project community to maintain OS and Kernel updates for Samsung Galaxy J4+
                            </p>
                        </div>
                    </div>
                    {/* end of right */}
                </div>
            </div>
            {/* end of timeline */}

            <h1 className="text-2xl text-center mt-5">My Technical Skills</h1>
            <div className="w-3/4 mt-2 grid grid-cols-3 gap-5 justify-evenly items-start">
                <div id="first" className="shadow-md rounded-xl dark:bg-terminal-theme h-full">
                    <div className="dark:bg-terminal-tab rounded-tl-xl rounded-tr-xl flex flex-row items-center justify-start">
                        <svg width="64px" height="64px" viewBox="-12 -12 48.00 48.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.576"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="#15803D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <h1 className="text-xl">Front-End Tools</h1>
                    </div>
                    <div className="grid grid-cols-4 gap-1 m-4 p-4 rounded-xl items-center">
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactjs" />
                            <h1 className="text-sm">ReactJS</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" alt="reactjs" />
                            <h1 className="text-sm">Vite</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="reactjs" />
                            <h1 className="text-sm">Tailwind</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="reactjs" />
                            <h1 className="text-sm">Bootstrap</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="reactjs" />
                            <h1 className="text-sm">HTML</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="reactjs" />
                            <h1 className="text-sm">CSS</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="reactjs" />
                            <h1 className="text-sm">JavaScript</h1>
                        </div>
                    </div>
                </div>
                <div id="second" className="shadow-md rounded-xl h-full dark:bg-terminal-theme">
                    <div className="flex flex-row items-center justify-start dark:bg-terminal-tab rounded-tl-xl rounded-tr-xl">
                        <svg width="64px" height="64px" viewBox="-12 -12 48.00 48.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 8C6.88071 8 8 6.88071 8 5.5C8 4.11929 6.88071 3 5.5 3C4.11929 3 3 4.11929 3 5.5C3 6.88071 4.11929 8 5.5 8ZM5.5 8V16M5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16ZM18.5 8C19.8807 8 21 6.88071 21 5.5C21 4.11929 19.8807 3 18.5 3C17.1193 3 16 4.11929 16 5.5C16 6.88071 17.1193 8 18.5 8ZM18.5 8C18.5 8.92997 18.5 9.39496 18.3978 9.77646C18.1204 10.8117 17.3117 11.6204 16.2765 11.8978C15.895 12 15.43 12 14.5 12H8.5C6.84315 12 5.5 13.3431 5.5 15" stroke="#15803D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <h1 className="text-xl">Backend Tools</h1>
                    </div>
                    <div className="grid grid-cols-4 gap-1 m-4 p-4 rounded-xl  items-center">
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="reactjs" />
                            <h1 className="text-sm">NodeJS</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-full h-10" src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="reactjs" />
                            <h1 className="text-sm">MongoDB</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg" alt="reactjs" />
                            <h1 className="text-sm">Python</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-full h-10" src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" alt="reactjs" />
                            <h1 className="text-sm">Django</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="reactjs" />
                            <h1 className="text-sm">JavaScript</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg" alt="reactjs" />
                            <h1 className="text-sm">C#</h1>
                        </div>
                    </div>
                </div>
                <div id="third" className="shadow-md rounded-xl h-full dark:bg-terminal-theme">
                    <div className="flex flex-row items-center justify-start dark:bg-terminal-tab rounded-tl-xl rounded-tr-xl">
                        <svg fill="#15803D" width="64px" height="64px" viewBox="-288 -288 1152.00 1152.00" xmlns="http://www.w3.org/2000/svg" stroke="#15803D" strokeWidth="0.00576"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"></path></g></svg>
                        <h1 className="text-xl">Acquired Skills</h1>
                    </div>
                    <div className="grid grid-cols-4 gap-1 m-4 p-4 rounded-xl  items-center">
                        <div className="flex flex-col items-center p-2">
                            <img className="w-full h-10" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg" alt="reactjs" />
                            <h1 className="text-sm">Unity</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" alt="reactjs" />
                            <h1 className="text-sm">Linux</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="reactjs" />
                            <h1 className="text-sm">C</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="reactjs" />
                            <h1 className="text-sm">Photoshop</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="reactjs" />
                            <h1 className="text-sm">VSCode</h1>
                        </div>
                        <div className="flex flex-col items-center p-2">
                            <img className="w-10 h-10" src="https://upload.wikimedia.org/wikipedia/commons/6/62/Git-logo-orange.svg" alt="reactjs" />
                            <h1 className="text-sm">Git</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default About