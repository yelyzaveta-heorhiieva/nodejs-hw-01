import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";



export const addOneContact = async () => {
  try {
    const data = await readContacts();
    const contact = createFakeContact();
    await writeContacts([...data, contact]);
} catch (err) {
  console.error(err);
}
};

addOneContact();
