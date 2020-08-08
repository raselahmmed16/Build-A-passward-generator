const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNUmbers')
const includeSymbolsElement = document.getElementById('includeSymbols')

const form = document.getElementById('passwordGeneratorForm');
const passwordDisplay = document.getElementById('passwordDisplay');
 const UPPERCASE_CHAR_CODES = arrayFromLowToHeigh(65, 90)
 const LOWERCASE_CHAR_CODES = arrayFromLowToHeigh(97, 112)
 const NUMBER_CHAR_CODES = arrayFromLowToHeigh(48, 57)
 const SYMBOL_CHAR_CODES = arrayFromLowToHeigh(33, 57).concat(
     arrayFromLowToHigh(58, 64)
 ).concat(
     arrayFromLowToHigh(91, 96)
 ).concat(
     arrayFromLowToHigh(123, 126)
 )

characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNUmber.value;
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked

    const password = generatePassword(characterAmont, includeUppercase, includeNumbers, includeSymbols);
    passwordDispaly.innerText = password;
})
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
    // console.log(LOWERCASE_CHAR_CODES);
    let charCodes = LOWERCASE_CHAR_CODES;
    if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODE);
    if(includeNUmbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);

    const passwordCharacters = []
    for(let i = 0; i < characterAmount; i++){

        const characterCode = charCodes[Math.floor(MAth.random()* charCodes.length)];
        passwordCharacters.push(string.fromCharcode(characterCode))
    }
    return passwordCharacters.join('')
};


function arrayFromLowToHigh(low, high){
    const array =[];
    for(let i = low; i <= high; i++){
        array.push(i);
    }
    return array;
}

function syncCharacterAmount(e) {
   const value = e.target.value;
   characterAmountNumber.value = value;
   characterAmountRange.value = value;
}