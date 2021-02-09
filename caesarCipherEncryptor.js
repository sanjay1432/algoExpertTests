function caesarCipherEncryptor(string, key) {
    // Write your code here.
    const alphabets = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ]
    let encrypted = '';
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        const num = alphabets.indexOf(letter);
        let index = num + key%26;
        if (index > 25) {
            index = index - 26
        }
        encrypted+=alphabets[index]
        console.log({ letter, num, index })
    }
    return encrypted
}

console.log(caesarCipherEncryptor('abc', 57))