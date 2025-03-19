import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const data = await readContacts();
  if (data.length >= 1) {
    data.pop();
    await writeContacts(data);
  }
};

removeLastContact();
