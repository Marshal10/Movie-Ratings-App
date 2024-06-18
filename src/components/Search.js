import { useKey } from "./useKey";
import { useRef } from "react";

export default function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      type="text"
      className="search"
      placeholder="Search Movies..."
      value={query}
      onChange={(e) => setQuery((q) => e.target.value)}
      ref={inputEl}
    ></input>
  );
}
