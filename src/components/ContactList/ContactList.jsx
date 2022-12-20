import { ListItem } from "./ListItem/ListItem"
export const ContactList = ({ filter, contacts, onDelete }) => { 
    return (
       <ul>
            {contacts.filter(item => item.name.toLowerCase().includes(filter))
                .map(item => {
                    return (<ListItem key={item.id} id={item.id} name={item.name}
                        number={item.number} onDelete={onDelete} />)
                })
            }
        </ul> 
    )
}