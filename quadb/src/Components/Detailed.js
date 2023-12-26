import React from 'react';
import star from '../images/star-icon.svg'

const Detailed = (props) => {
    const divStyle = {
        backgroundImage: `url("${props.imgurl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%'
    };

    const overlayStyle = {
        backdropFilter: 'blur(5px)', // Adjust the blur amount for the glass effect
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the alpha for transparency
    };

    return (
        <div className='detail' style={divStyle}>
            <div className='glass-overlay' style={overlayStyle}>
                <img src={`${props.imgurl}`} alt={`${props.name}`} className='det--img' />
                <div className='content'>
                    <div className='rating'>
                        <h2 className='detail--name'>{props.name}</h2>
                        <img src={star} alt='star-png' className='star' />
                        <h4 className='det--rating'>{props.rating ? props.rating : "-"}</h4>
                    </div>
                    <a href={props.url} className='webiste'>Learn More --- &gt;</a>
                    <div dangerouslySetInnerHTML={{ __html: props.summary }} className='det--summary' />
                    <button className='book'>Book Tickets</button>
                </div>
            </div>
        </div>
    );
};

export default Detailed;
