import React from "react";
import Axios from "axios";
import img from "../images/image-notfound.png"
import Show from '../Components/Show'
import { Link } from "react-router-dom";

const Home = () => {
    const [shows, setShows] = React.useState([])

    React.useEffect(() => {
        Axios("https://api.tvmaze.com/search/shows?q=all")
            .then(res => {
                setShows(res.data)
            })
    }, []);
    console.log(shows)
    let ind = -1;
    const display = shows.map(soap => {
        let imageUrl = soap.show.image && soap.show.image.medium;
        if (!imageUrl) {
            imageUrl = img
        }
        let genre_list = soap.show.genres;
        let genre = "";
        if (genre_list.length === 1) {
            genre += genre_list[0];
        }
        else {
            for (let i = 0; i < genre_list.length - 1; i++) {
                genre += `${genre_list[i]}, `;
            }
            genre += genre_list[genre_list.length - 1]
        }
        ind++;
        return <Show
            key={soap.show.id}
            id={ind}
            genre={genre}
            rating={soap.show.rating.average}
            imgurl={imageUrl}
            name={soap.show.name}
            summary={soap.show.summary} />

    })

    return (
        <div className="home">
            <Link to='/' className='logo'>MovieFuzz</Link>
            <div className='all-shows'>
                {display}
            </div>
        </div>
    );
}

export default Home