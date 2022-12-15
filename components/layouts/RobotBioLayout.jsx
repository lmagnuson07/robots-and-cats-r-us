import Head from "next/head";

export default function RobotBioLayout({children} ) {
  const {fullName} = {...children.props};
  console.log(children)
  return (
    <>
        <Head>
            <title>{fullName}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="py-20 bg-gray-900 relative lg:top-[76px] top-[72px]">
          <article className="max-w-5xl px-6 mx-4 pb-24 pt-12 lg:mx-auto space-y-12 bg-gray-800 text-gray-50 relative border rounded-lg shadow-md border-gray-700">
            {children}       
          </article>
        </div>
    </>
  );
}