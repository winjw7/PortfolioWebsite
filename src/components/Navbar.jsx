import { scrollTo } from "../components/ScrollTo";
import resume from "../media/other/resumeCV.pdf";

function Navbar() {
    return (
        <>
            <div className="navbar flex fadein">    
                <div className="logo">
                    <div>Justin</div>
                    <div>Jantzi</div>
                </div>
                
                <div className="sections flex">
                    <div className="hover" onClick={() => scrollTo({id: "aboutme", duration: 1500})}>About Me</div>
                    <div className="hover" onClick={() => scrollTo({id: "workexp", duration: 1500})}>Experience</div>
                    <div className="hover"onClick={() => scrollTo({id: "contactme"})}>Contact</div>
                    <div className="hover" onClick={() => window.open(resume, "_blank")}>Resume</div>
                </div>
            </div>

            <style jsx>
                {`
                   .navbar {
                        width: 100%;
                        height: 150px;
                        text-transform: uppercase;
                        margin-left: 100px;
                        margin-top: 25px;
                        font-size: 32px;
                   }

                   .logo {
                        font-family: Montserrat-Light;
                        font-weight: 300;
                        line-height: 41px;
                        letter-spacing: 0.32em;
                   }

                   .sections {
                        margin-left: auto;
                        margin-right: 100px;
                        font-size: 24px;
                        gap: 50px;
                   }
                `}
            </style>
        </>
    )
}

export default Navbar;