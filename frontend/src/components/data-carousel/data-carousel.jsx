import React, { useState } from 'react'
import './data-carousel.css'
import './react-paginate.css'
import ReactPaginate from 'react-paginate';
import UrlInfo from '../url-info/url-info';

function DataCarousel({ items }) {
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 1;
    const endOffset = itemOffset + itemsPerPage

    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;;
        setItemOffset(newOffset);
    };
    return (
        <>
            <div className="metadata-list">
                {currentItems.map((item, index) => (
                    <UrlInfo key={index} data={item} />
                ))}
            </div>
            <ReactPaginate
                className="react-paginate"
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< prev"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default DataCarousel