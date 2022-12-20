export const ListItem = ({ id, name, number, onDelete }) => {
    // console.log(id);
    const deleteContact = (e) => onDelete(id);    
    return (
    <li>                  
        {name}  {number}
        <button type='button' onClick={deleteContact}>Delete</button>
    </li>
    )

    
    
}



