import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
// import { PATH_DB } from '../constants/contacts.js';
// import fs from 'node:fs/promises';
import { log } from 'node:console';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  const data = await readContacts();
  const createContact = createFakeContact();
  data.push(createContact);
  const dataString = JSON.stringify(data, null, 2);
  // await fs.appendFile(PATH_DB, dataString, 'utf8');
  // try {
  //   log('success appendFile');
  // } catch (error) {
  //   log(`error appendFile`, error);
  // }
  writeContacts(dataString);
  log(data);
};

addOneContact();
