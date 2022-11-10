import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
 static async getInitialProps(context) {
   const initialProps = await Document.getInitialProps(context);
   return { ...initialProps };
 }

 render() {
   return (
    <Html lang={this.props.locale}>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#065f46"/>
          <meta name="msapplication-TileColor" content="#e4e4e7"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="description" content="Purchase a robot for any of your personal needs, ranging from service, social, and combat robots. If you're not looking for a robot today, we also have a large range of virtual cats that will accompany you in the metaverse!" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
   );
 }
}

export default MyDocument;