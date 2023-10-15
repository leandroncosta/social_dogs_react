import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import styles from './Photo.module.css';
import Error from '../Helper/Error';
import PhotoContent from './PhotoContent';
import Head from '../Helper/Head';

const Photo = () => {
    const { id } = useParams();
    const { request, data, error, loading } = useFetch();

    React.useEffect(() => {
        const fetchPhoto = async () => {
            const { url, options } = PHOTO_GET(id);
            const { response, json } = await request(url, options);

            console.log(response, json);
        };
        fetchPhoto();
    }, [request, id]);

    if (error) return <Error error={error} />;
    if (data)
        return (
            <section className="container mainContainer">
                <Head title={data.photo.title} description="" />
                <PhotoContent photoSingle={true} data={data} />
            </section>
        );
    else return null;
};

export default Photo;
