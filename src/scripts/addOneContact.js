import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";



export const addOneContact = async () => {
try {
  const data = await readContacts();
  const arr = JSON.parse(data);
  const contact = createFakeContact();
  arr.push(contact);
  await writeContacts(JSON.stringify(arr));
} catch (err) {
  console.error(err);
}
};

addOneContact();
