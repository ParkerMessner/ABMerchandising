import Head from 'next/head'
export default function About() {
    return (
        <div className="container">
            <Head>
                <title>AB Merchandising</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="about" style={{textAlign:"left"}}>
                <p>AB Merchandising seeks to make your job as a Golf Professional simpler by allowing you more time to focus on meeting the golf needs of your members. Offering a la carte services, you choose which services best fit your needs throughout the season. </p>

                <p><i>A full, confidential initial assessment is performed and a complete proposal is presented for your review and consideration.</i></p>

                <p><b>BUYING ASSISTANCE</b>: Arrange and attend buying meetings with vendors and coordinate orders. Can also advise on orders or seek additional vendors.</p>

                <p><b>MERCHANDISING</b>: Rework displays to provide an exceptional shopping experience for your members and their guests.</p>

                <p><b>TOURNAMENT/OUTING ASSISTANCE</b>: Serve as a liaison with vendors for tournament and outing prizes and gifts.</p>

                <p><b>CUSTOMER SERVICE TRAINING</b>: Provide training on the lines carried in your Shop.</p>

                <p><b>PROP/FURNITURE CONSULTATION</b>: Will carefully source props and/or furniture to enhance your Shop and can also serve as a liaison during the construction process.</p>
            </div>
        </div>
    );
}
