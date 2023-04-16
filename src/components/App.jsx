import { Container } from './App.styled';

import Section from './Section/Section';
import { ContactForm }  from './ContactForm/ContactForm';
import { ContactList} from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectIsLoading, selectError } from "redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
    return (
      <Container>
        <Section title="Phonebook">
       <ContactForm  />  
        </Section>
        <Filter />  
        <Section title="Contacts">
          {isLoading ? <div>Loading...</div> :
            error ? <div>{error}</div> : <ContactList />}
        </Section>
      </Container>
  );
  
};

export default App;
