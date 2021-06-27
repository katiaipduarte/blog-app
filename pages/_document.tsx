import { getLangFromReq } from '@utils/from-req';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const locale = getLangFromReq(ctx.req);
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      locale,
      styles: <>{initialProps.styles}</>
    };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="theme-color" content="#FFFFFF" />
          <meta name="keywords" content="" />
          <meta property="og:site_name" content="nextjs-boilerplate" />
          <meta property="og:locale" content={this.props.locale} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="" />
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
