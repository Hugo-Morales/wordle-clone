import CryptoJS from 'crypto-js';

const secretKey = import.meta.env.VITE_SECRET_KEY;

function encriptarPalabra(palabra) {
    if (secretKey) return CryptoJS.AES.encrypt(palabra, secretKey).toString();

    return '';
}

function desencriptarPalabra(word) {
    if (secretKey) return CryptoJS.AES.decrypt(word, secretKey).toString(CryptoJS.enc.Utf8);

    return '';
}

export { encriptarPalabra, desencriptarPalabra };