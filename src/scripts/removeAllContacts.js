import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { log } from 'node:console';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]', 'utf8');
    log('Success removeAllContacts');
  } catch (error) {
    log('Error removeAllContacts', error);
  }
};
removeAllContacts();
