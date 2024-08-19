import React from 'react';
import './url-info.css';
import ErrorDisplay from '../error/error';

function UrlInfo({ data}) {

    if (data.error) {

        return <ErrorDisplay error={data.error} />
    }
    return (
        <div className="metadata-item">
            {data.title ? <h2>{data.title}</h2> : <ErrorDisplay error={"Failed to fetch title"}/>}
            {data.description ? <p>{data.description}</p> : <ErrorDisplay error={"Failed to fetch description"}/>}
            {data.image ? <img src={data.image} alt={data.title} /> : <ErrorDisplay error={"Failed to fetch image"}/>}
        </div>
    )
}

export default UrlInfo