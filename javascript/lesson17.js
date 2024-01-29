function countVowel() {
     console.log("Vowel ");
     var sentence = document.getElementById("sentence").value;
     console.log(sentence);
     var vowel = ['a', 'e', 'i', 'o', 'u'];
     var count = 0;
     var sentence_array = sentence.split("")
     console.log(sentence_array);
     var flash = 0;
     for (flash = 0; flash < sentence.length; flash++) {
          if (sentence_array[flash] == vowel[0] || sentence_array[flash] == vowel[1] || sentence_array[flash] == vowel[2] || sentence_array[flash] == vowel[3] || sentence_array[flash] == vowel[4]) {
               count = count + 1;
          }
     }
     console.log(`total vowel are ` + count);
}
