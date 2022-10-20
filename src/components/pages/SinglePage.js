import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import setContent from '../../utils/setContent';
import useMarvelService from '../../services/MarvelService';
import AppBanner from "../appBanner/AppBanner";


const SinglePage = ({Component, dataType}) => {
        const {id} = useParams();
        const [data, setData] = useState(null);
        const {getComic, getCharacter, clearError, process, setProcess} = useMarvelService();

        useEffect(() => {
            updateData();
            // eslint-disable-next-line
        }, [id])

        const updateData = () => {
            clearError();

            switch (dataType) {
                case 'comic':
                    getComic(id).then(onDataLoaded).then(() => {setProcess('success');});
                    break;
                case 'character':
                    getCharacter(id).then(onDataLoaded).then(() => {setProcess('success');});
                    break;
                default:
                    return;
            }
        }

        const onDataLoaded = (data) => {
            setData(data);
        }


        return (
            <>
                <AppBanner/>
                {setContent(process,Component,data)}
            </>
        )
}

export default SinglePage;