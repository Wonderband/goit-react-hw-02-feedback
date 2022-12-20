export const ListItem = ({ id, name, number }) => {
    console.log(id);
    return (
    <li key={id}>                  
    {name}  {number}
    </li>
)}

