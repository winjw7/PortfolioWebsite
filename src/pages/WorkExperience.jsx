import Clash from "../media/images/previouswork/Clash.png";
import Kingdom from "../media/images/previouswork/Kingdom.png";
import Buyers from "../media/images/previouswork/Buyers.png";
import Saloon from "../media/images/previouswork/Saloon.png";
import Spigot from "../media/images/previouswork/Spigot.png";

function PastJob({Name, Image, Year, Desc}) {
    return (
        <>
            <div className="job flex col hideOnHover showOnHover">
                <img className="hideChild" src={Image} alt={Name + " logo"}/>
                <div className="year hideChild">{Year}</div>

                <div className="desc show flex">
                    {Desc}
                </div>
            </div>

            <style jsx>
                {`
                    .job {
                        width: 300px;
                        height: 300px;
                        border: 3px solid var(--primary);
                        border-radius: 12px;
                        justify-content: flex-end;
                        background: rgba(var(--primary), 6%);
                        position: relative;
                    }

                    .job > img {
                        width: 75%;
                        margin: auto;
                        
                    }

                    .job > .year {
                        margin-bottom: 25px;
                    }

                    .desc {
                        font-size: 16px;
                        text-align: left;
                        justify-content: center;
                        align-items: center;
                        width: 85%;
                        height: 100%;
                    }

                    .desc > div {
                        justify-content: center;
                        align-items: center;
                    }

                    @media only screen and (max-width: 450px) {
                        .job {
                            width: 200px;
                            height: 200px;
                            font-size: 20px;
                        }
                    }
                `}
            </style>
        </>
    )
}

function WorkExperience() {
    return (
        <>
            <div className="work-experience flex col" id="workexp">    
                <div className="header">Work Experience</div>
                <div className="jobs">
                    
                    <PastJob 
                        Name={"Minecraft Mods"} 
                        Image={Spigot} 
                        Year={"2015-2020"}
                        Desc={<div>
                            Spigot Plguins
                            <br/>
                            <br/>
                            I created Minecraft mods with over 4,000 downloads, generating an overall average rating of a 4.5/5 from over 100 reviews.
                            <br/>
                            <br/>
                            Technologies Involved: 
                            <br/>
                            Java
                            <br/>
                            <br/>
                            <div className="hover" onClick={()=> window.open("https://www.spigotmc.org/resources/authors/winjw7.33100/", "_blank")}><u><b>Link</b></u></div>
                        </div>}
                    />

                    <PastJob 
                        Name={"Rusty Saloon"} 
                        Image={Saloon} 
                        Year={"2021-2021"}
                        Desc={<div>
                            Rusty Saloon
                            <br/>
                            <br/>
                            Worked as Lead Developer to create a complete new front end as well as maintaing the backend.
                            <br/>
                            <br/>
                            Technologies Involved: 
                            <br/>
                            JavaScript, React, Express, MySQL
                            <br/>
                            <br/>
                            <div className="hover" onClick={()=> window.open("https://rustysaloon.com", "_blank")}><u><b>Link</b></u></div>
                        </div>}
                    />
                    
                    <PastJob 
                        Name={"Rust Clash"} 
                        Image={Clash} 
                        Year={"2021-2021"}
                        Desc={<div>
                            Rust Clash
                            <br/>
                            <br/>
                            Worked as Lead Developer to implement features such as crypto deposits, Discord integration, security features, and more on both frontend and backend.
                            <br/>
                            <br/>
                            Technologies Involved: 
                            <br/>
                            JavaScript, Vue, Express, MongoDB
                            <br/>
                            <br/>
                            <div className="hover" onClick={()=> window.open("https://rustclash.com", "_blank")}><u><b>Link</b></u></div>
                        </div>}
                    />
                    
                    <PastJob 
                        Name={"Rust Kingdom"} 
                        Image={Kingdom} 
                        Year={"2021-2022"}
                        Desc={<div>
                            Rust Kingdom
                            <br/>
                            <br/>
                            My own personal project where I made my own Rust arcade site from scratch with over 6000 registered users.
                            <br/>
                            <br/>
                            Technologies Involved: 
                            <br/>
                            JavaScript, React, Express, MySQL
                            <br/>
                            <br/>
                            <div className="hover" onClick={()=> window.open("https://rustkingdom.gg", "_blank")}><u><b>Link</b></u></div>
                        </div>}
                    />
                    
                    <PastJob 
                        Name={"Skin Buyers"} 
                        Image={Buyers} 
                        Year={"2022-2022"}
                        Desc={<div>
                            Skin Buyers
                            <br/>
                            <br/>
                            My own personal project where I made my own Rust skin selling site where users can sell skins instantly for crypto.
                            <br/>
                            <br/>
                            Technologies Involved: 
                            <br/>
                            JavaScript, React, Express, MySQL
                            <br/>
                            <br/>
                            <div className="hover" onClick={()=> window.open("https://skinbuyers.com", "_blank")}><u><b>Link</b></u></div>
                        </div>}
                    />
                </div>
            </div>

            <style jsx>
                {`
                   .work-experience {
                        width: 100%;
                        margin-top: 150px;
                        margin-left: 200px;
                        align-items: flex-start;
                        font-size: 32px;
                    }

                    .jobs {
                        margin-top: 50px;
                        gap: 50px;
                        grid-template-columns: repeat(auto-fit,minmax(270px,1fr));
                        display: inline-grid;
                        width: 90%;
                    }

                    .header {
                        font-family: Montserrat-Bold;
                    }

                    @media only screen and (max-width: 450px) {
                        .header {
                            font-size: 20px;
                        }
                    }

                    @media only screen and (max-width: 800px) {
                        .work-experience {
                            margin-left: 0px;
                            align-items: center;
                        }

                        .jobs {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default WorkExperience;