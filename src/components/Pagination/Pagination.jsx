export default function Pagination({ currentPage, setCurrentPage, totalPages }) {
    const maxVisiblePages = 10;

    const onPageChange = (event) => {
        const currentElement = event.target;
        if (currentElement.tagName === 'BUTTON') {
            if (currentElement.innerText === '<') {
                setCurrentPage(prevPage => prevPage - 1);
            } else {
                setCurrentPage(prevPage => prevPage + 1);

            }
        }
    }

    const renderPageNumbers = () => {
        const pages = [];
        const startPage = Math.max(1, currentPage - (maxVisiblePages / 2));
        const endPage = Math.min(totalPages, currentPage + (maxVisiblePages / 2));
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                  key={i}
                  onClick={() => {
                    setCurrentPage(i);
                  }}
                  className={i === currentPage ? 'active-page' : ''}
                >
                  {i}
                </button>
              );
        }
        return pages;
      };


    return <div className="pagination-container" onClick={onPageChange}>
        <button>{'<'}</button>
        {renderPageNumbers()}
        {/* <div>{currentPage} - {totalPages} </div> */}
        <button>{'>'}</button>
    </div>
}   