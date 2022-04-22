import * as React from 'react';
import Image from 'next/image'


const GalleryDisplay = (props) => {

    return(
        <div style={{textAlign:"center"}}>
            <h1><u>{props.clubName}</u></h1>
            <h3>{props.clubLoc}</h3>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: 'row',
                flex: 3,
                justifyContent: "center",
                }}
                >        

                {props.imgs.map((img) => (
                    <div class="item">
                        <Image className='display'
                            src={img.name}
                            width={img.w}
                            height={img.h}
                            key={img}
                            />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalleryDisplay