const Footer = () => {
    return (
        <footer className="flex flex-col w-full fixed items-center justify-center bottom-0 bg-blue text-white py-1">
            <h3 id="footerMessage">
                Find me elsewhere: 
            </h3>
            <div className="flex">
                 <a href="https://www.linkedin.com/in/chaseforlini/"><img className=" h-6 w-6" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"/></a>
                <a href="https://www.facebook.com/ChaseForlini/"><img className="h-6 w-6" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook2_colored_svg-512.png"/></a>
                <a href="https://twitter.com/tortafresco"><img className=" h-6 w-6" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png"/></a>
            </div>
        </footer>    
    )
}

export default Footer;