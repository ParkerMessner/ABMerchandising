import Link from 'next/link'

const Navbar = () => {

    return(

        <nav>
            <div className="logo">
                <h1>
                    <img src="/ablogo.jpg" alt="ABlogo" className="logo1" />
                    {' '} AB Merchandising
                </h1>
                <style jsx>{`
                .logo1 {
                  height: 2em;
                  vertical-align:middle;
                 }
                `}</style>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/gallery"><a>Gallery</a></Link>
            <Link href="/testimonials"><a>Testimonials</a></Link>
            <Link href="/contact"><a>Contact Me</a></Link>
            

        </nav>
    );
}

export default Navbar

//https://www.hongkiat.com/blog/img-css-properties/