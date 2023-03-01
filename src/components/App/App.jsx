// import { Report } from 'notiflix';
// import { useEffect, useState } from 'react';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from '../Filter';
import { Container, SubTitle, Title } from './App.styled';

const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
