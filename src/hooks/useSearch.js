import { useEffect, useState } from "react";

function useSearch(items) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (search === "") {
      return setSearchResults(items);
    }
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setSearchResults(results);
  }, [search, items]);

  return { setSearch, searchResults };
}

export default useSearch;
