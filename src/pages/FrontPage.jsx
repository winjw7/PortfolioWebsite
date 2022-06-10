import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import CartoonMe from "../media/images/CartoonMe.png";

function FrontPage() {
    return (
        <>
            <div className="initial-page flex col">
                <Navbar/>
                <Socials/>

                <div className="content flex">
                    <div className="text flex col">
                        <code>{"<div>"}</code>
                        <div>HI, I'M JUSTIN</div>
                        <div>FULL-STACK DEVELOPER</div>
                        <br/>
                        <div className="typewriter" id="first">I've been a software developer for over 10 years</div> 
                        <div className="typewriter" id="second">creating desktop apps, mobile apps, websites,</div>
                        <div className="typewriter" id="third">games, and more!</div>
                        <br/>
                        <code>{"</div>"}</code>
                    </div>
                    <div className="img-container flex">
                        <img src={CartoonMe} alt="Cartoon of me"/>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .initial-page {
                        width: 100%;
                        height: 100vh;
                        background: linear-gradient(90deg, transparent, var(--darker-primary));
                        overflow: hidden;
                        font-size: 32px;
                    }   

                    .content {
                        width: 100%;
                        height: 100%;
                        justify-content: center;
                        margin-left: 200px;
                    }

                    .content > .text {
                        width: 50%;
                        align-items: flex-start;
                        text-align: left;
                    }

                    code {
                        opacity: 20%;
                    }

                    .content > .text > div {
                        font-size: 28px;
                        color: var(--alt-text);
                    }

                    .content > .text > div:nth-child(2) {
                        font-family: Montserrat-Bold;
                        font-size: 110px;
                        color: white;
                    }
                    
                    .content > .text > div:nth-child(3) {
                        -webkit-text-stroke: 3px #668DC8;
                        color: transparent;
                        font-family: Montserrat-Bold;
                        font-size: 64px;
                    }

                    .content > .img-container > img {
                        height: 80%;
                        position: absolute;
                        bottom: 0;
                    }

                    .content > .img-container {
                        height: 100%;
                        width: 50%;
                        position: relative;
                        justify-content: center;
                    }

                    .typewriter {
                        opacity: 0;
                        overflow: hidden; /* Ensures the content is not revealed until the animation */
                        white-space: nowrap; /* Keeps the content on a single line */
                        letter-spacing: .15em; /* Adjust as needed */
                        margin-right: auto;
                        text-align: left;
                        max-width: fit-content;
                      
                        animation: 
                          typing 3s steps(80, end),
                          blink-caret-first 3s,
                          show-anim .1s infinite;
                      }
                      
                      
                      .typewriter#first {
                        animation-delay: 0s;
                      }
                      
                      .typewriter#second {
                        animation-delay: 3s;
                      }
                      
                      .typewriter#third {
                        animation: 
                          typing 3s steps(80, end),
                          blink-caret 2s infinite,
                          show-anim .1s infinite;
                      
                        animation-delay: 6s;
                        border-right: .15em solid var(--alt-text);
                        overflow: hidden;
                      }
                      
                      @keyframes show-anim {
                        from { opacity: 1; }
                        to { opacity: 1; }
                      }
                      
                      /* The typing effect */
                      @keyframes typing {
                        from { width: 0; }
                        to { width: 100%; }
                      }
                      
                      /* The typewriter cursor effect */
                      @keyframes blink-caret {
                        from, to { border-color: transparent; }
                        50% { border-color: var(--alt-text); }
                      }
                      
                      /* The typewriter cursor effect */
                      @keyframes blink-caret-first {
                        0% { border-color: var(--alt-text); border-right: .15em solid var(--alt-text); }
                        98% { border-color: var(--alt-text); border-right: .15em solid var(--alt-text); }
                        99% { border-color: transparent  }
                      }
                      
                `}
            </style>
        </>
    )
}

export default FrontPage;