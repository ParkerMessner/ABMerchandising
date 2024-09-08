import Head from 'next/head'
import GalleryDisplay from '../comps/GalleryDisplay';

export default function Gallery() {
    const images = ['/GO/GO1.jpg','/GO/GO2.jpg'];
    const GlenOaks = [
        //{ name: "/GO/GO1.jpg", w: "500px" , h: "640px"},
        //{ name: "/GO/GO2.jpg", w: "512px" , h: "640px" },
        { name: "/GO/GO_3.jpg", w: "480px" , h: "640px" },
        { name: "/GO/GO_5.jpg", w: "489px" , h: "640px" },
        { name: "/GO/GO6.jpg", w: "523px" , h: "640px" },
        { name: "/GO/GO7.jpg", w: "480px" , h: "640px" },
        
      ];

    const Onwenstia = [
        { name: "/ONW/ONW1.jpg", w: "512px" , h: "640px"},
        { name: "/ONW/ONW2.jpg", w: "512px" , h: "640px"},
        //{ name: "/ONW/ONW3.jpg", w: "640px" , h: "600px"}, Yeti
        //{ name: "/ONW/ONW4.jpg", w: "480px" , h: "640px"}, Dresser and racks
        { name: "/ONW/ONW5.jpg", w: "480px" , h: "640px"},
        { name: "/ONW/ONW6.jpeg", w: "3024px" , h: "4032px"},
        { name: "/ONW/ONW7.jpeg", w: "2612px" , h: "3679px"},
        { name: "/ONW/ONW8.jpeg", w: "3023px" , h: "3600px"},
        { name: "/ONW/ONW9.jpg", w: "549px" , h: "640px"},


      ];
    
    const SunsetRidge = [//Put at the top of the gallery
        { name: "/SR/SR_1.jpg", w: "480px" , h: "640px"},
        { name: "/SR/SR_3.jpg", w: "509px" , h: "640px"},
        { name: "/SR/SR_4.jpg", w: "480px" , h: "640px"},
 
      ];

    const StrawberryCreek = [
        //{ name: "/SC/SC1.jpg", w: "480px" , h: "640px"},
        //{ name: "/SC/SC2.jpg", w: "480px" , h: "640px"},
        { name: "/SC/SC3.jpg", w: "480px" , h: "640px"},
        //{ name: "/SC/SC4.jpg", w: "480px" , h: "640px"}, Gfore
        //{ name: "/SC/SC5.jpg", w: "480px" , h: "640px"}, Mistletoe
        { name: "/SC/SC6.jpg", w: "480px" , h: "640px"},
        //{ name: "/SC/SC7.jpg", w: "480px" , h: "640px"},
        //{ name: "/SC/SC8.jpg", w: "552px" , h: "640px"},
        //{ name: "/SC/SC9.jpg", w: "480px" , h: "640px"}, Bears and sign in middle
        { name: "/SC/SC10.jpg", w: "480px" , h: "640px"},
        { name: "/SC/SC11.jpg", w: "480px" , h: "640px"},
        { name: "/SC/SC12.jpg", w: "492px" , h: "640px"},
        { name: "/SC/SC13.jpeg", w: "2866px" , h: "3521px"},
      ];

    const ShoreAcres = [
        { name: "/SA/SA1.jpg", w: "1512px" , h: "2016px"},
        { name: "/SA/SA2.jpg", w: "1512px" , h: "2016px"},
        { name: "/SA/SA3.jpg", w: "1512px" , h: "2016px"},
        { name: "/SA/SA4.jpg", w: "1512px" , h: "2016px"},
        { name: "/SA/SA5.jpg", w: "1512px" , h: "2016px"},
        { name: "/SA/SA6.jpg", w: "1512px" , h: "2016px"},
        
      ];

    const IceHouse = [
        { name: "/IH/IH1.jpg", w: "480px" , h: "640px"},
        { name: "/IH/IH2.jpg", w: "492px" , h: "640px"},
        { name: "/IH/IH3.jpg", w: "480px" , h: "640px"},
        { name: "/IH/IH4.jpg", w: "496px" , h: "640px"},
        { name: "/IH/IH5.jpg", w: "480px" , h: "640px"},
        { name: "/IH/IH6.jpg", w: "640px" , h: "603px"},
        { name: "/IH/IH7.jpg", w: "461px" , h: "640px"},
        { name: "/IH/IH8.jpg", w: "640px" , h: "498px"},
      ];

      const Ridgemoor = [
        { name: "/RM/RM1.jpg", w: "478px" , h: "640px"},
        { name: "/RM/RM2.jpg", w: "436px" , h: "640px"},
        { name: "/RM/RM3.jpg", w: "640px" , h: "520px"},
      ];

      const Inverness = [
        { name: "/IV/IV1.jpg", w: "640px" , h: "505px"},
        { name: "/IV/IV2.jpg", w: "529px" , h: "640px"},
        { name: "/IV/IV3.jpg", w: "580px" , h: "640px"},
        { name: "/IV/IV4.jpg", w: "640px" , h: "480px"},

      ];

      const BMW_2024 = [
        { name: "/BMW_2024/BMW_2024_2.jpg", w: "480px" , h: "640px"},
        { name: "/BMW_2024/BMW_2024_5.jpg", w: "480px" , h: "640px"},
        { name: "/BMW_2024/BMW_2024_4.jpg", w: "480px" , h: "640px"},
        { name: "/BMW_2024/BMW_2024_3.jpg", w: "480px" , h: "640px"},
      ]



    return (
        <div className="container">
            <Head>
                <title>AB Merchandising</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{textAlign:"center"}}>
            <h1>Gallery</h1>
            </div>

            <div style={{textAlign:"center"}}>
            <h3>Après Golf Shop, 2024 BMW Championship, Castle Pines Golf Club</h3>
            </div>

            <GalleryDisplay imgs = {BMW_2024} clubName="Castle Pines Golf Club" clubLoc="Castle Rock, Colorado"/>


            <div style={{textAlign:"center"}}>
            <h3>Icehouse Specialty Shop, 2023 BMW Championship, Olympia Fields Country Club</h3>
            </div>

            <GalleryDisplay imgs = {IceHouse} clubName="Olympia Fields Country Club" clubLoc="Olympia Fields"/>

            <div style={{textAlign:"center"}}>
            <h3>Chicagoland North Shore Golf Shops</h3>
            </div>

            <GalleryDisplay imgs = {Onwenstia} clubName="Onwentsia" clubLoc="Lake Forest, IL"/>

            <GalleryDisplay imgs = {SunsetRidge} clubName="Sunset Ridge" clubLoc="Northfield, IL"/>
                
            <GalleryDisplay imgs = {GlenOaks} clubName="Glen Oak" clubLoc="Glen Ellyn, IL"/>

            <GalleryDisplay imgs = {Ridgemoor} clubName="Ridgemoor" clubLoc="Harwood Heights, IL"/>

            <GalleryDisplay imgs = {Inverness} clubName="Inverness" clubLoc="Inverness, IL"/>
            
            <GalleryDisplay imgs = {ShoreAcres} clubName="Shore Acres" clubLoc="Lake Bluff, IL"/>

            <GalleryDisplay imgs = {StrawberryCreek} clubName="Strawberry Creek" clubLoc="Kenosha, WI"/>
    

        </div>
    );
}
