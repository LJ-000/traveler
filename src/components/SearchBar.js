import React from "react";
import SearchIcon from '@material-ui/icons/Search';
const SearchBar = (props) => {
  return (
           <div className ="search-bar"> 
            <input onChange = {(e) => props.handleSearch(e.target.value)} type="text" placeholder="Search Restaurants"/>
            <button> 
                <SearchIcon/>
                 </button>
               </div>
  )
}
export default SearchBar