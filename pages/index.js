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
        
        <div style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          }}
        > 
        <Image className='homeImage'
            src='/SC/SC1.jpg'
            width='480px'
            height='640px'
        />
        </div>

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
