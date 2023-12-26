import React from 'react'
import { Link } from 'react-router-dom'

const Show = (props) => {
    return (
        <div className='show'>
            <Link to={`/${props.id}`} style={{ textDecoration: 'none' }}>
                <img src={`${props.imgurl}`} alt={`${props.name}`} className='show--img' />
            </Link>
            <p className='show--name'>{props.name}</p>
            <p className='show--rating'>{props.rating ? props.rating : "-"}</p>
            <p className='show--genre'>{props.genre}</p>

        </div>


    )
}

export default Show