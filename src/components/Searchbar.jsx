import { FiSearch } from "react-icons/fi";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="flex h-11 items-center gap-3 rounded border border-[#292938] bg-[#12121a] px-4 transition focus-within:border-blue-500">
      <FiSearch
        size={17}
        className="shrink-0 text-[#777994]"
      />

      <input
        type="text"
        placeholder="Buscar filme..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#777994]"
      />
    </div>
  );
}