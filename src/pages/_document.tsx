import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* for PWA */}
        <meta name="application-name" content="Tic Tac Toe" />
        <meta name="description" content="Best Tic Tac Toe in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#0C2D57" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <title>Tic Tac Toe</title>
      <meta
        name="description"
        content="Play tic-tac-toe online! Enjoy a classic game of tic-tac-toe against the computer or a friend. Test your strategic skills and have fun!"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
