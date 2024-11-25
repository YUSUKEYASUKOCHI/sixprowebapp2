import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = 'sixpro-secure-key-v1'; // バージョン付きにして互換性管理を容易に

// 暗号化前のデータ検証
function isValidData(data: any): boolean {
  try {
    JSON.stringify(data);
    return true;
  } catch {
    return false;
  }
}

export function encrypt(data: any): string {
  try {
    if (!isValidData(data)) {
      console.warn('Invalid data provided for encryption');
      return '';
    }
    
    const jsonStr = JSON.stringify(data);
    if (!jsonStr) return '';
    
    return CryptoJS.AES.encrypt(jsonStr, ENCRYPTION_KEY).toString();
  } catch (error) {
    console.error('Encryption error:', error);
    return '';
  }
}

export function decrypt(encryptedData: string | null): any {
  try {
    if (!encryptedData) return null;
    
    // 暗号化されていない既存データの処理
    try {
      const legacyData = JSON.parse(encryptedData);
      if (legacyData) {
        console.info('Converting legacy data to encrypted format');
        return legacyData;
      }
    } catch {
      // 暗号化データなので続行
    }
    
    const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
    const decryptedStr = bytes.toString(CryptoJS.enc.Utf8);
    
    if (!decryptedStr) return null;
    
    const parsed = JSON.parse(decryptedStr);
    return parsed;
  } catch (error) {
    console.error('Decryption error:', error);
    return null;
  }
}