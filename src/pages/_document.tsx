import Document, { Head, Html, Main, NextScript } from 'next/document';
import Header from '../components/Header';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/favicon-logo.png" type="image/png" />
          <meta
            name="description"
            content="Artigos sobre Tecnologia para Programadores,confira nossos artigos exclusivos sobre os mais variados temas
              sobre Tecnologia e Engenharia da Informação."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
