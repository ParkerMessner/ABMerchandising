import Head from 'next/head'
import Testimonial from '../comps/Testimonial';

var testimonials = ["\"Bringing in Aimee as a partner in our Golf Shop operation has been invaluable.  When our club underwent a renovation, Aimee was able to make display selections and furniture arrangements that took the renovation to another level and made our new space not only enhanced visually, but also functionally. Her expertise has been a great resource for me and my team and has helped us elevate the experience our members receive when they come to our shop.  We will continue to take advantage of our partnership with Aimee to enhance all areas of our retail operation for years to come.\"",
"\"Aimee has been an absolute godsend in my first year at The Club at Strawberry Creek. Her knowledge, creativity, and keen eye for detail have completely transformed our golf shop. Every request or concept I’ve brought to her, she has taken and elevated beyond expectation — she consistently knocks it out of the park. Aimee not only creates visually engaging and organized displays but also fosters collaboration and excitement within our team. Our staff is genuinely energized when they hear Aimee is coming, as she involves them directly in the merchandising process — from product presentation to training and storytelling. I highly recommend Aimee to any golf professional looking to elevate their shop experience, improve retail performance, and bring a professional polish to their operation. She’s an invaluable partner and a true difference-maker.\"",
    "\"Bringing Aimee on board has greatly improved the look and flow our of our golf shop.  With her impressive displays and use of our (limited) space, Aimee has helped create a retail environment that not only services our members and guests, but also captures the look and feel of our historic club.  Our members love the look of our shop and we have the sales to prove it!\"",
 "\"Throughout the buying process, I could depend on Aimee to respond to emails, calls, and texts. Aimee was always accessible and professional and she provided thorough follow up every step of the way on large orders, special orders and everything in between.\"",
"\"Aimee provides an extraordinary shopping experience at the Shoreacres Golf Shop. She curates a superior collection of ladies' and men's apparel and gift accessories that are unique to the Shoreacres' membership. Aimee will go out of her way to make the shopping experience effortless with her personal touch and attention to detail. The Golf Shop was a shopping destination for me, my family and guests.\"",
"\"Aimee's attention to detail, efficiency and customer service skills were appreciated by our members. We worked in the Golf Shop together and I knew I could always rely on Aimee to get the job done.\""
 ];
export default function Testimonials() {
    return (
        <div className="container">
            <Head>
                <title>AB Merchandising</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{textAlign:"center"}}>
            <h1>Testimonials</h1>
            </div>
            {testimonials.map((q) => (
                <Testimonial quote={q}/>
            ))}
        </div>
    );
}
