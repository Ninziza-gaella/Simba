function SearchBar({ value, onChange }) {
  return (
    <div>
    <input type="text"placeholder="Search products..."value={value}onChange={onChange}/>
 </div> 
  );
}

export default SearchBar;