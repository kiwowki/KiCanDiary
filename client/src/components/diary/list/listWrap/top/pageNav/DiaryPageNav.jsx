import React, { useEffect, useState } from 'react'

const DiaryPageNav = ({ fixedPageCount, currentPage, handlePageChange }) => {
    return (
        <div className="diary__list__pages">
            <ul>
                {Array.from(
                    { length: fixedPageCount },
                    (_, index) => index + 1
                ).map((number) => (
                    <li
                        key={number}
                        className={currentPage === number ? 'active' : ''}
                    >
                        <span onClick={() => handlePageChange(number)}>
                            {number}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DiaryPageNav
