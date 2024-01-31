const sentence = 'i am learning Web Development.';

let reverse = '';
for (const letter of sentence) {
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse)
let rev = '';
for (let i = 0; i < sentence.length; i++) {
    // console.log(i)
    // console.log(sentence[i])
    const letter = sentence[i];
    rev = letter + rev;
    // console.log(rev)
}


// Shortcut way to reverse string
const reversed = sentence.split('').reverse().join('');
console.log(reversed);