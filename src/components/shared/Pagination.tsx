import Link from 'next/link';

interface PaginationProps {
  maxPageNumber: number;
  currentPageNumber: number;
}

const Pagination: React.FC<PaginationProps> = ({
  maxPageNumber,
  currentPageNumber,
}) => {
  currentPageNumber = Number(currentPageNumber);
  maxPageNumber = Number(maxPageNumber);
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;

  return (
    <div className="flex px-3 my-12">
      {currentPageNumber !== 1 && (
        <Link href={`/blogs/page/${prevPage}`}>
          <a>Previous</a>
        </Link>
      )}
      {currentPageNumber !== maxPageNumber && (
        <Link href={`/blogs/page/${nextPage}`}>
          <a className="ml-4">Next</a>
        </Link>
      )}
    </div>
  );
};

export default Pagination;