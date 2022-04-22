import Head from 'next/head'
import Testimonial from '../comps/Testimonial';

var testimonials = ["\"Throughout the buying process, I could depend on Aimee to respond to emails, calls, and texts. Aimee was always accessible and professional and she provided thorough follow up every step of the way on large orders, special orders and everything in between.\"",
"\"Aimee provides an extraordinary shopping experience at the Shoreacres Golf Shop. She curates a superior collection of ladies' and men's apparel and gift accessories that are unique to the Shoreacres' membership. Aimee will go out of her way to make the shopping experience effortless with her personal touch and attention to detail. The Golf Shop was a shopping destination for me, my family and guests.\"",
"\"Aimee's attention to detail, efficiency and customer service skills were appreciated by our members. We worked in the Golf Shop together and I knew I could always rely on Aimee to get the job done.\""];
export default function Testimonials() {
    return (
        <div className="container">
            <Head>
                <title>AB Merchandising</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {testimonials.map((q) => (
                <Testimonial quote={q}/>
            ))}
        </div>
    );
}
