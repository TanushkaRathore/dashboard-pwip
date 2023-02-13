import './Pagination.css';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Pagination = (props) => {
    const { limit, data, setCurrentPage, currentPage } = props;
    let count = data.length;

    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(count / limit); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='pagination'>
            <button
                disabled={currentPage === 1}
                className="paginationButton"
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                <HiChevronLeft />
            </button>

            {
                pageNumbers.map((item, index) => (
                    <button
                        className={currentPage === item ? "paginationButtonSelected" : "paginationButton"}
                        onClick={() => setCurrentPage(item)}
                        key={index}
                    >
                        {item}
                    </button>
                ))
            }
            <button
                disabled={currentPage === Math.ceil(count / limit)}
                className="paginationButton"
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                <HiChevronRight />
            </button>
        </div>
    );
}

export default Pagination;