const SearchForm = () => {
  return (
    <div className="w-full bg-opacity-80 backdrop-blur-sm ">
      <input
        className="w-full text-sm bg-gray-700 h-[2.75rem] px-4 rounded-full outline-none text-gray-200 bg-opacity-80 placeholder-gray-100"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchForm;
