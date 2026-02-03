const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="pagination">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        ← Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={page === i + 1 ? "active-page" : ""}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
