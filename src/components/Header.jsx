import PropTypes from "prop-types";
import { useState } from "react";

function Header({ onSearch }) {
  const [textSearch, setSearch] = useState("");
  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[28px] uppercase font-bold text-red-700">Movie Theater</h1>
        <nav className="flex place-items-center space-x-10">
          <a href='./App.jsx' className="text-white hover:text-red-700">Home</a>
          <a href="#" className="text-white hover:text-red-700">About</a>
          <a href="#" className="text-white hover:text-red-700">Contact</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search"
          className="p-2 text-black bg-gray-300" onChange={(e) => setSearch(e.target.value)} value={textSearch} />
        <button className="p-2 text-white bg-red-700 hover:bg-red-900"
          onClick={() => onSearch(textSearch)}>
          Search</button>
      </div>


    </div>
  )
}
Header.propTypes = {
  onSearch: PropTypes.func,
};
export default Header;