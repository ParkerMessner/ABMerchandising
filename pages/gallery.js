import Head from 'next/head'
import GalleryDisplay from '../comps/GalleryDisplay';

export default function Gallery() {
    const images = ['/GO/GO1.jpg','/GO/GO2.jpg'];
    const GlenOaks = [
        { name: "/GO/GO1.jpg", w: "500px" , h: "640px"},
        { name: "/GO/GO2.JPG", w: "512px" , h: "640px" },
      ];

    const Onwenstia = [
        { name: "/ONW/ONW1.jpg", w: "512px" , h: "640px"},
        { name: "/ONW/ONW2.jpg", w: "512px" , h: "640px"},
        { name: "/ONW/ONW3.jpg", w: "640px" , h: "600px"},
        { name: "/ONW/ONW4.jpg", w: "480px" , h: "640px"},
        { name: "/ONW/ONW5.jpg", w: "480px" , h: "640px"},
        { name: "/ONW/ONW6.jpeg", w: "480px" , h: "640px"},
      ];

      const StrawberryCreek = [
        { name: "/SC/SC1.jpg", w: "480px" , h: "640px"},
        { name: "/SC/SC2.jpg", w: "480px" , h: "640px"},
        { name: "/SC/SC3.jpg", w: "480px" , h: "640px"},
        { name: "/SC/SC4.jpg", w: "480px" , h: "640px"},
        { name: "/SC/SC5.jpg", w: "480px" , h: "640px"},
        { name: "/SC/SC6.jpg", w: "480px" , h: "640px"},
        { name: "/SC/SC7.jpg", w: "480px" , h: "640px"},
        { name: "/SC/SC8.jpg", w: "552px" , h: "640px"},
        { name: "/SC/SC9.jpg", w: "480px" , h: "640px"},
        { name: "/SC/SC10.jpg", w: "480px" , h: "640px"},
        { name: "/SC/SC11.jpg", w: "480px" , h: "640px"},
        { name: "/SC/SC12.jpg", w: "492px" , h: "640px"},
      ];

      const ShoreAcres = [
        { name: "/SA/SA1.jpg", w: "1512px" , h: "2016px"},
        { name: "/SA/SA2.jpg", w: "1512px" , h: "2016px"},
        { name: "/SA/SA3.jpg", w: "1512px" , h: "2016px"},
        { name: "/SA/SA4.jpg", w: "1512px" , h: "2016px"},
        { name: "/SA/SA5.jpg", w: "1512px" , h: "2016px"},
        { name: "/SA/SA6.jpg", w: "1512px" , h: "2016px"},
        
      ];

    return (
        <div className="container">
            <Head>
                <title>AB Merchandising</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <GalleryDisplay imgs = {StrawberryCreek} clubName="Strawberry Creek" clubLoc="Kenosha, WI"/>

            <GalleryDisplay imgs = {Onwenstia} clubName="Onwentsia" clubLoc="Lake Forest, IL"/>

            <GalleryDisplay imgs = {ShoreAcres} clubName="Shore Acres" clubLoc="Lake Bluff, IL"/>

            <GalleryDisplay imgs = {GlenOaks} clubName="Glen Oak" clubLoc="Glen Ellyn, IL"/>
        </div>
    );
}
