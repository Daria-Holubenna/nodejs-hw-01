import { log } from 'node:console';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {};
try {
  const data = await fs.readFile(PATH_DB, 'utf8');
  const parsedData = JSON.parse(data);
  log(parsedData, typeof parsedData);
  if (parsedData.length) {
    parsedData.pop();
    writeContacts(JSON.stringify(parsedData, null, 2));
  }
} catch (error) {
  log('Do not removed last cotact', error);
}
removeLastContact();
