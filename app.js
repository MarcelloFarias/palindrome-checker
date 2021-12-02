let input = document.querySelector('.input'),
    output = document.querySelector('.output'),
    btn = document.querySelector('.btn');

function verifyWord() {
    let word = input.value.toLowerCase(),
        lastChar,
        firstChar;

    for(let i = 0; i < word.length; i++) {
        lastChar = word[i];
        firstChar = word[0];

        if(lastChar !== firstChar) {
            output.innerHTML = `<p class="res">Is not a Palindrome</p>`;
        }
        else {
            output.innerHTML = `<p class="res">Is a Palindrome</p>`;
        }
    }
}

btn.addEventListener('click', verifyWord);