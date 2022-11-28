import Head from 'next/head'
import { ContentPageHeader } from './../headers'

function ContentPageLayout({children, title, type, tagline, ...props}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>
                <ContentPageHeader tagline={tagline} type={type} title={title} />
                <div className="container flex flex-wrap flex-row gap-6 justify-center mx-auto px-4 xl:px-8 my-16">
                    {children}
                </div>
            </main>
        </>
    )
}

export default ContentPageLayout;