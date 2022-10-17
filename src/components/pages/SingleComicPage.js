import { useParams,NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';


import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';
import AppBanner from '../appBanner/AppBanner';
import './singleComicPage.scss';


const SingleComicPage = () => {
    const {comicId} = useParams();
    const [comic, setComic] = useState(null);

    const { getComic, clearError,process,setProcess} = useMarvelService();

    useEffect(() => {
        updateComic()
    }, [comicId]);

    const updateComic = () => {
        clearError();
        getComic(comicId)
            .then(onComicLoaded)
            .then(() => setProcess('success'));
    }

    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    console.log(comic)
    return (
        <>
            <AppBanner/>
            {setContent(process,View,comic)}
        </>
    )
}
const View = ({data}) => {
    const {title, description, thumbnail, pageCount, language, price} = data;

    return (
        <div className='single-comic'>
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language:{language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <NavLink to="/comics" end style={({isActive})=>({color: isActive ? '#9f0013' : 'inherit'})} className="single-comic__back">Back to all</NavLink>
        </div>
    )
}

export default SingleComicPage;