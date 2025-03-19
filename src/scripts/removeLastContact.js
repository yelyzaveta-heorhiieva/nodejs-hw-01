import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
      const data = await readContacts();
      const arr = JSON.parse(data);
      if (arr.length >= 1) {
        arr.pop();
        await writeContacts(JSON.stringify(arr));
      }
    } catch (err) {
      console.error(err);
    }
};

removeLastContact();
