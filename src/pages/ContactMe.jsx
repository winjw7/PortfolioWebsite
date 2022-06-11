function ContactMe() {
    return (
        <>
            <div className="contact-me flex col" id="contactme">    
                <div className="header">Contact Me</div>
                <div className="contacts flex col">
                    <div className="section flex">
                        <div className="type">Email:</div>
                        <div className="info">jwjantzi@rochester.rr.com</div>
                    </div>
                    <div className="section flex">
                        <div className="type">Discord:</div>
                        <div className="info">winjw7#6836</div>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                   .contact-me {
                        width: 100%;
                        margin-top: 150px;
                        margin-left: 200px;
                        align-items: flex-start;
                        font-size: 32px;
                    }

                    .contacts {
                        margin-top: 50px;
                        gap: 25px;
                    }

                    .section {
                        width: 100%;
                        font-size: 24px;
                        color: var(--alt-text);
                    }

                    .section > .type {
                        margin-right: 150px;
                        width: 100px;
                        text-align: left;
                    }

                    .section > .info {
                        margin-left: 50px;
                    }

                    .header {
                        font-family: Montserrat-Bold;
                    }

                    @media only screen and (max-width: 800px) {
                        .contact-me {
                            font-size: 16px;
                            margin-left: 0px;
                            align-items: center;
                        }

                        .section > .type {
                            margin-right: 0px;
                            width: 60px;
                        }

                        .section {
                            font-size: 12px;
                        }

                        .section > .info {
                            margin-left: 0px;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default ContactMe;