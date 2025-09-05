import { log } from 'node:console';
import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  const data = await readContacts();
  try {
    log('succsess read file for count contacts');
    return data.length;
  } catch (error) {
    log('fail read fiel for count contacts', error);
  }
};
console.log(await countContacts());
