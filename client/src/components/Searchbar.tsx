import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="hidden items-center gap-2 rounded-md px-2 py-1 shadow-md ring-1 ring-gray-200 sm:flex">
      <Search className="size-4 text-gray-500" />
      <input
        type="text"
        placeholder="Search..."
        className="text-sm outline-0"
      />
    </div>
  );
};

export default Searchbar;
