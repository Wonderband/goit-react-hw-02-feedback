import { ListItem } from "./ListItem/ListItem"
export const ContactList = ({ filter, contacts }) => { 
    return (
       <ul>
            {contacts.filter(item => item.name.toLowerCase().includes(filter))
                .map(item => { return (<ListItem id={item.id} name={item.name} number={item.number}/>) })
            }
        </ul> 
    )
}