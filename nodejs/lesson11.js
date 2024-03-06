var sentence = "hello world";

var words = sentence.split('')
console.log(words)

var vowels_position = []
var vowels = []

var count = 0;
words.map((value) => {
     if (value == 'a' || value == 'e' || value == 'i' || value == 'o' || value == 'u') {
          vowels_position.push(count);
          vowels.push(value);
     }
     count++;
});

console.log(vowels_position);

var duplicate_words = words;

vowels_position = vowels_position.reverse()
console.log(vowels_position)
console.log(vowels);

var flash = 0;
while (flash < vowels.length) {
     words[vowels_position[flash]] = vowels[flash];
     flash++;
}
// words[vowels_position[1]] = vowels[1];

console.log(words);
words = words.join('')
console.log(words);