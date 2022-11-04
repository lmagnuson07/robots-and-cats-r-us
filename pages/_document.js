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
            <meta name="description" content="Purchase a robot for any of your personal needs, ranging from service, social, and combat robots. If you're not looking for a robot today, we also have a large range of virtual cats that will accompany you in the metaverse!" />
            <link rel="icon" href="favicon.svg" type="image/svg+xml" />
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