import { log } from 'node:console';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, updatedContacts, 'utf8', (error) => {
      if (error) {
        log('error writeFile', error);
        return;
      }
      log('Success WRITE FILE');
    });
  } catch (error) {
    console.log('Error - writeFile in DB NOT SUCCESS', error);
  }
};
