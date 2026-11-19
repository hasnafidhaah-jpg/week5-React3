import { useState } from "react";
function SearchActivity() {
  const [search, setSearch] = useState("");
  const activities = ["React", "JavaScript", "Football", "Reading"];

  // Type cheytha word undenkil mathram list il edukkuka
  const filtered = activities.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
        placeholder="Search..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.map((item) => <p key={item}>{item}</p>)}
    </div>
  );
}
export default SearchActivity;