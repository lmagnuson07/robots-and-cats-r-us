function ContentPageHeader({title, tagline, type, supportTagline, ...props}) {
    return (
      <>
        <header className="text-center pt-20">
          <h1 className="text-3xl font-semibold text-indigo-600">
            {type}
          </h1>
          <p className="mt-1 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            {title}
          </p>
          <p className="mx-auto mt-8 max-w-xl text-xl text-gray-500">
            {tagline}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-xl text-gray-500">
            {supportTagline}
          </p>
        </header>
      </>
    );
  }
  
  export default ContentPageHeader;