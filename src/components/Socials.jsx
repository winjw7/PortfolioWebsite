import Github from "../media/images/socials/github.png";
import Insta from "../media/images/socials/insta.png";
import Linkedin from "../media/images/socials/linkedin.png";
import Twitter from "../media/images/socials/twit.png";

function Socials() {
    return (
        <>
            <div className="socials flex col">    
                <img className="hover" src={Github} alt="github" onClick={() => window.open("https://github.com/winjw7")}/>
                <img className="hover" src={Linkedin} alt="linkedin" onClick={() => window.open("https://www.linkedin.com/in/justinjantzi/")}/>
                <img className="hover" src={Twitter} alt="twitter" onClick={() => window.open("https://twitter.com/winjw7")}/>
                <img className="hover" src={Insta} alt="insta" onClick={() => window.open("https://www.instagram.com/justin.jantzi/")}/>
            </div>

            <style jsx>
                {`
                   .socials {
                       position: fixed;
                       width: 75px;
                       left: 0;
                       bottom: 0;
                       gap: 30px;
                   }

                   .socials > img {
                       opacity: .5;
                   }

                   .socials:after {
                        content: "";
                        display: block;
                        width: 1px;
                        height: 90px;
                        background-color: var(--primary);
                   }
                `}
            </style>
        </>
    )
}

export default Socials;