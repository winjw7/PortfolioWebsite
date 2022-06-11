import RealMe from "../media/images/RealMe.png";

function AboutMe() {
    return (
        <>
            <div className="about-me flex col" id="aboutme">    
               <div className="header">About Me</div>
               <div className="body flex">
                    <div className="text">
                        <div>
                            Hey! My name's Justin and I've always enjoyed anything to do with computers. 
                            I started with modding Minecraft in middle school and transitioned to making 
                            standalone Java applications. Shortly after I picked up C#, started making games 
                            in Unity, and much more.
                        </div>
                        <br/>
                        <div>
                            Currently I'm studying at Rochester Instititue of Technology to earn my BS 
                            of Software Engineering. I'm a captain on the Men's Track and Field team; 
                            I competed at states and medaled multiple times during my high school career 
                            as a sprinter (400m runner).
                        </div>
                        <br/>
                        <div>
                            My most recent software projects have involed being a full-stack developer to 
                            create websites using ReactJS for the frontend and Express backend.
                        </div>
                    </div>

                    <div className="image">
                        <img className ="me" src={RealMe} alt="Myself"/>
                        <div className="square"/>
                    </div>
               </div>
            </div>

            <style jsx>
                {`
                   .about-me {
                       width: 100%;
                       margin-top: 150px;
                       margin-left: 200px;
                       align-items: flex-start;
                       font-size: 32px;
                   }

                   .body > .text {
                       font-size: 20px;
                       color: var(--alt-text);
                       text-align: left;
                       width: 50%;
                   }

                   .image {
                       width: 40%;
                       position: relative;
                       display: flex;
                       justify-content: center;
                   }

                   .image > .me {
                       border-radius: 12px;
                       height: 350px;
                       z-index: 200;
                   }

                   .square {
                       border: 3px solid var(--primary);
                       position: absolute;
                       height: 350px;
                       width: 350px;
                       bottom: 0;
                       z-index: 1;
                       transform: translate(15%, 15%);
                       border-radius: 12px;
                   }


                   .header {
                       font-family: Montserrat-Bold;
                   }

                   @media only screen and (max-width: 1200px) {
                        .about-me > .body > .text {
                            font-size: 16px;
                        }

                        .image > .me {
                            height: 200px;
                        }

                        .square {
                            height: 180px;
                            width: 180px;
                        }
                    }

                    @media only screen and (max-width: 800px) {
                        .about-me > .body {
                            margin-top: 50px;
                            flex-direction: column-reverse;
                            width: 100%;
                            align-items: center;
                            gap: 50px;
                        }

                        .about-me {
                            margin-left: 0px;
                            align-items: center;
                            margin-top: 50px;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default AboutMe;