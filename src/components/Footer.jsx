function Footer() {
    return (
        <>
            <div className="footer flex fadein">    
                {"Designed & Created by Justin Jantzi"}
            </div>

            <style jsx>
                {`
                   .footer {
                       justify-content: center;
                       align-items: center;
                       margin-top: 200px;
                       margin-bottom: 25px;
                       color: var(--alt-text);
                   }
                `}
            </style>
        </>
    )
}

export default Footer;