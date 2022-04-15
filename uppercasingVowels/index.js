// lowercasing vowel and uppercasing consonent
//If input string is "Learn programming and start earning" then output should be lEArn prOgrAmmIng And stArt EArnIng



function uppercasingVowel(input) {
    var vowel = 'aeiou'
    input = input.split('')
    for (i = 0; i < input.length; i++) {
        if (vowel.includes(input[i])) {
            input[i] = input[i].toUpperCase()
        }
    }
    console.log(input.join(''))
}
uppercasingVowel("I am LaxmiChapagain")