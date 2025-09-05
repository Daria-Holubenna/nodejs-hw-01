import fs from 'node:fs/promises';
import PATH_DB from '../constants/contacts'
import { log } from 'node:console';
export const countContacts = async () => {
try{
await fs.readFile(PATH_DB, )
log('succsess read file for count contacts')
} catch(error){
log('fail read fiel for count contacts', error)
}
};

console.log(await countContacts());
