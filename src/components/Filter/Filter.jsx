export const Filter = ({ filter, filterHandle }) => { 
  // console.log(filter);
  return (
    <>
    <p>Find contacts by name</p>
    <input
        type="text"
        name="filter"
        title="Find the name!"
        value={filter}
        onChange={ filterHandle}
    />
    </>)
}

