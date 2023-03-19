import React,{useState} from "react"; 

const SearchBar = () => {
  const [text, setText] = useState("");

  const onSearch = evt => {
    evt.preventDefault();
      alert(text);
  };

  const onChange = evt => setText(evt.target.value);

  return (
    <div>
      <form onSubmit={onSearch} className="p-5">
        <input
          type="text"
          name="text"
          placeholder="search"
          value={text}
          onChange={onChange}
          className="p-2"
        />
        <button type="submit" className="text-center">
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchBar