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
            <ContentPageHeader tagline={tagline} type={type} title={title} />
            {children}
        </>
    )
}

export default ContentPageLayout;