import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


const generateContacts = async (number) => {
    try {
        const data = await readContacts();
        const arr = JSON.parse(data);
    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();
          arr.push(contact);
    }
    await writeContacts(JSON.stringify(arr));
  } catch (err) {
    console.error(err);
  }
};

generateContacts(5);
