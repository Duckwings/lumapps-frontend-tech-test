import React from 'react';
import './index.scss';

const PaginationComponent = ({ numberOfPages, currentPage, setCurrentPage }) => {
    const displayPaginationButtons = (pagesToCount) => {
        const convertNumberOfPagesToArray = new Array(pagesToCount).fill("");
        return convertNumberOfPagesToArray.map((data, index) => {
            if(!index) return;
            const isActive = index === currentPage;
            return (
            <button
                className={isActive ? 'active_pagination_button pagination_button' : 'pagination_button'}
                onClick={() => setCurrentPage(index)}
            >
                {index}
            </button>
            )
        });
    };

    return (
        <div className="pagination_component">
            {displayPaginationButtons(numberOfPages)}
        </div>
    );
}

export default PaginationComponent;
