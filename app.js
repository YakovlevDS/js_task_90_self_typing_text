// ? Task:Self-supporting text


// Solution 1

 
let chr = -1
let txt = 'Набрать самопечатающийся текст'
const space = "_"
const text = document.querySelector("#text")

const changeText = () =>{
chr++
let textOutput = text.textContent.substring(
        0, text.textContent.length - space.length
);
    text.innerHTML = textOutput + txt.charAt(chr) + space;
    
    if (text.textContent.length <= txt.length) {
        setTimeout(() => changeText(), 200)
    }
}
changetext();

// ! Explanation: 
