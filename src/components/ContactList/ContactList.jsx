import { List } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';

export const ContactList = () => {
    
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <List>
            {visibleContacts.map(contact => (
                <ContactListItem key={contact.id} contact={contact} />
            ))}
        </List>
    )
}
