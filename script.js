// Selección de elementos del DOM
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');

// Función de encriptado
function encrypt(text) {
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return encryptedText;
}

// Función de desencriptado
function decrypt(text) {
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return decryptedText;
}

// Evento de encriptado
encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (validateText(text)) {
        outputText.value = encrypt(text);
        inputText.value = '';
    } else {
        alert('Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.');
    }
});

// Evento de desencriptado
decryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (validateText(text)) {
        outputText.value = decrypt(text);
        inputText.value = '';
    } else {
        alert('Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.');
    }
});

// Evento de copia al portapapeles
copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

// Validación de texto
function validateText(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}



