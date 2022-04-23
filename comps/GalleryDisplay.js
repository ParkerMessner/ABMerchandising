import * as React from 'react';
import Image from 'next/image'


const GalleryDisplay = (props) => {

    return(
        <div style={{textAlign:"center"}}>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: 'row',
                flex: 3,
                justifyContent: "center",
                }}
                >        

                {props.imgs.map((img) => (
                    <div className="item">
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