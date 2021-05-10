import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

// Router.onRouteChangeStart = url => {
//   console.log("url", url);
//   NProgress.start();
// };
// Router.onRouteChangeComplete = () => {
//   console.log(url);
//   NProgress.done();
// };
// Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title }) => (
  <div class="root">
    <Head>
      <title>UPSC Pyq</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
      ></link>
    </Head>
    <header>
      header
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </header>
    <h1>{title}</h1>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>
      {`
        .root {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        header {
          width: 100%;
          display: flex;
          justify-content: space-around;
          padding: 1em;
          font-size: 1.2rem;
          background: indigo;
        }
        heder a {
          color: darkgrey;
          text-decoration: none;
        }
        header a:hover {
          font-weight: bold;
          color: lightgrey;
        }
        footer {
          padding: 1em;
        }
      `}
    </style>
  </div>
);
