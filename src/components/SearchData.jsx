
function SearchData({ searchData ,useSearchVideo}) {

  return (
    <>
      {searchData && (
        <ul className="border rounded-2xl ">
          {searchData.map((s, i) => (
            <li
              onMouseDown={() => useSearchVideo(s)}
              className="px-5 py-2 font-semibold capitalize hover:bg-black/10 "
              key={i}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SearchData;
