import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    // const buffer = (await fs.readFile(PATH_DB)).toString('utf8');
    // const data = buffer.toString('utf8');
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error - readFile', error);
  }
};
console.log(readContacts());
//погоди монтаж прилетел
// я поки подивлюсь/почитаю+
