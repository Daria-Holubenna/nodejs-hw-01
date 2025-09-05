import { createFakeContact } from '../utils/createFakeContact.js';
import {writeContacts } from '../utils/writeContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { log } from 'node:console';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const data = await readContacts(); 
    log(data);
  for (let i = 0; i < number; i++) {
    const createContact = createFakeContact(); 
         data.push(createContact);
  }
      const dataString = JSON.stringify(data, null, 2);
  await fs.appendFile(PATH_DB, dataString, 'utf8');
      try {
      log('success appendFile');
    } catch (error) {
      log(`error appendFile`, error);
    }
    log(data);
writeContacts(dataString);
};

generateContacts(1);
