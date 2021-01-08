import "./seach.component";

import "./search.styles.css";

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input 
            className="search"
            type="text" 
            placeholder={placeholder}
            onChange={handleChange }>
        </input>
    )
}

export {
    SearchBox
}