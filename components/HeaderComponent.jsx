
function HeaderComponent({tagline, title, imgSrc, imgAlt, ...props}) {
    return ( 
        <header>
            <img 
                src={imgSrc} 
                alt={imgAlt} 
            />
            <h1>
                {title}
            </h1>
            <p>
                {tagline}
            </p>
        </header>
    );
}

export default HeaderComponent;