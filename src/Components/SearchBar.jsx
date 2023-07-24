import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [college, setCollege] = useState([])
  const searchRef = useRef(null)
  const [search, setSearch] = useState("")
  

  useEffect( ()=>{
    fetch(`https://e-commerce-site-back-end.vercel.app/searchCollege?search=${search}`)
    .then(res => res.json())
    .then(data => {
      setCollege(data)
    })
  } ,[search])

  const handleSearch = () => {
    console.log(searchRef.current.value)
    setSearch(searchRef.current.value);
   
}
  return (
    <form>
      <div className="bg-[#002147] py-5 px-10 flex justify-center items-center">
        <input
          type="text"
          className="py-2 rounded px-10 lg:w-[50%] w-full relative"
          name="search"
          id="search"
          ref={searchRef}
          placeholder="Search College"
        />
        <div className="left-12">
            <FaSearch></FaSearch>
        </div>
      <input type="submit" onClick={() => handleSearch()} className="border lg:px-10 px-3 py-[7px] bg-image text-black border-[#f36b3b]text-white rounded absolute lg:right-[380px] right-10 lg:w-[200px] w-[35%]" name="" value="Search College" id="" />
      </div>
    </form>
  );
};

export default SearchBar;
