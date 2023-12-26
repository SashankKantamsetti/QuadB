import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import Detailed from '../Components/Detailed';
const ShowDes = () => {
    const params = useParams();
    const [showsArr, setShowsArr] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios("https://api.tvmaze.com/search/shows?q=all");
                setShowsArr(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching shows:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const reqShow = showsArr[params.id];
    let imageUrl = reqShow.show.image && reqShow.show.image.medium;
    return (
        <Detailed
            rating={reqShow.show.rating.average}
            imgurl={imageUrl}
            key={reqShow.show.id}
            id={params.id}
            url={reqShow.show.url}
            name={reqShow.show.name}
            summary={reqShow.show.summary} />
    )
}

export default ShowDes