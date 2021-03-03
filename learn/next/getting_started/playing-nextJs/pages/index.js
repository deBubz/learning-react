import Head from "next/head";
import Card from "./index_parts/card";
import Footer from "./index_parts/footer";

import Header from "./index_parts/head";

export default function Home() {
  const cardsContent = [
    {
      title: "Documentation",
      link: "https://nextjs.org/docs",
      sub: "Find in-depth information about Next.js features and API.",
    },
    {
      title: "Learn",
      link: "https://nextjs.org/learn",
      sub: "Learn about Next.js in an interactive course with quizzes!",
    },
    {
      title: "Examples",
      link: "https://github.com/vercel/next.js/tree/master/examples",
      sub: "Discover and deploy boilerplate example Next.js projects.",
    },
    {
      title: "Deploy",
      link:
        "https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      sub: "Instantly deploy your Next.js site to a public URL with Vercel.",
    },
  ];
  return (
    <div className="container">
      <Header />

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          {cardsContent.map((e, i) => (
            <Card key={i} title={e.title} sub={e.sub} link={e.link} />
          ))}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
