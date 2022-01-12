import s from "./paginator.module.css";
import React, { useState } from "react";

const Paginator = ({ onPageChanged, currentPage, totalUsersCount, countUsersPage, portionSize = 10 }) => {
    let countPages = Math.ceil(totalUsersCount / countUsersPage);

    let pages = [];
    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(countPages / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    let portionStart = portionSize * (portionNumber - 1);
    let portionEnd = portionSize * portionNumber - 1;

    return (
        <div className={s.pagesButton}>
            {portionNumber > 1 && (
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber - 1);
                    }}
                >
                    prev
                </button>
            )}
            {pages.map((num) => {
                if (num >= portionStart && num <= portionEnd) {
                    return (
                        <span
                            onClick={(e) => {
                                onPageChanged(num);
                            }}
                            className={num === currentPage ? `${s.pageButtonCurrent} ${s.pageButton}` : s.pageButton}
                        >
                            {num}
                        </span>
                    );
                }
            })}
            {portionNumber < portionCount && (
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber + 1);
                    }}
                >
                    next
                </button>
            )}
        </div>
    );
};

export default Paginator;
