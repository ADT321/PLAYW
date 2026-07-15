import { test } from '@playwright/test';
import { encrypt, decrypt } from '../utils/CryptojsUtil';

test("Sample env test", async({page}) => {
 const plainText = 'Lahore is my city2';
 const encryptedText = encrypt(plainText);
 console.log('SALT:',process.env.SALT);
  console.log('EncryptedTxt:',encryptedText);
  const decryptedText = decrypt(encryptedText);
 console.log('DecryptedTxt:', decryptedText);
});