import Link from 'next/link'
import * as React from 'react';

const Testimonial = (props) => {

    return(

        <div className="test">
            <h2>{props.quote}</h2>
        </div>
    );
}

export default Testimonial