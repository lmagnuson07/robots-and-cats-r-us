function HomePageContentHeader({title, headingStyling = "", containerStyling = "", paddingLeft="lg:pl-72", ...props}) {
    return (
      <>
        <header className="bg-gray-200 shadow">
            <div className={`${containerStyling} m-auto`}>
                <h2 className={`${headingStyling} ${paddingLeft} flex gap-x-2 flex-wrap justify-center m-auto lg:m-0 text-indigo-600 font-rockwell text-shadow-sm md:text-7xl text-5xl text-center px-4 py-16 md:py-32`}>{title} <span>. . .</span></h2>
            </div>
        </header>
      </>
    );
  }
  
  export default HomePageContentHeader;