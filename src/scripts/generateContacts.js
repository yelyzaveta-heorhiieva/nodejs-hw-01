import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const data = await readContacts();
  const contacts = Array(number).fill(0).map(createFakeContact);
  await writeContacts([...data, ...contacts]);
};

generateContacts(5);
