import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AB Merchandising</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="top-box">
        <h1 className="title">
          Welcome to AB Merchandising
        </h1>

        <h2 align="center" color="#000435">Create. Every. Day.</h2> {/*TODO: Make this bigger and navy blue. Remove it from the footer on just this page */}
        
        <div style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          }}
        > 
        <Image className='homeImage'
            src='/Masters/Masters5.jpg'
            width='640px'
            height='420px'
        />
        </div>

        <h3 align="center">The 2024 Masters Tournament</h3>

      </div>
        
      <style jsx>{`
        .container {
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
  )
}
