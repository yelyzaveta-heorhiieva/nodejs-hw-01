import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
      const data = await readContacts();
      return JSON.parse(data);
    } catch (err) {
      console.error(err);
    }
};

console.log(await getAllContacts());
