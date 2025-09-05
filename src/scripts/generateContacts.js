import { createFakeContact } from '../utils/createFakeContact.js';
// import { writeContacts } from '../utils/writeContacts.js';
// import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { log } from 'node:console';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const { data } = readContacts; //1 - отримуємо дані з файлу
  const array1 = [];
  for (let i = 0; i < number; i++) {
    //2 - циклом генеруємо масив об'єктів (який потім будемо додавати до того що у файлі)
    const createContact = createFakeContact(); // Тут тип даних - Об'єкт
    try {
      array1.push(createContact);
      log(`Масив з ${i} елементів`);
    } catch (error) {
      log(`error appendFile`, error);
    }
  }
  await fs.appendFile(data, String.toString(array1), 'utf8');
  log(data);
  //  const dataString = JSON.stringify(data); ШО ТЫ МУТИШЬ  - Запускай шайтан машинуюююю.....
  //  try {
  //    await fs.appendFile(PATH_DB, data, 'utf8');
  //    log('succes appendFile');
  //  } catch (error) {
  //    log('error appendFile', error);
  //  }
  //  writeContacts(dataString);
};

generateContacts(2);
