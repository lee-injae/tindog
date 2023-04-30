function generateUuid() {
    const uuidArray = new Uint8Array(16);
    window.crypto.getRandomValues(uuidArray);
    return Array.from(uuidArray, byte => ('0' + byte.toString(16)).slice(-2)).join('');
  }

const randNum = Math.floor(Math.random())


export {generateUuid}


