const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const sourceLang = document.getElementById("sourceLang");
const targetLang = document.getElementById("targetLang");

const translateBtn = document.getElementById("translateBtn");
const switchLang = document.getElementById("switchLang");

const listenInput = document.getElementById("listenInput");
const listenOutput = document.getElementById("listenOutput");

const copyInput = document.getElementById("copyInput");
const copyOutput = document.getElementById("copyOutput");

const loading = document.getElementById("loading");
const darkToggle = document.getElementById("darkModeToggle");



function translateText(){

const text = inputText.value.trim();

if(!text){
outputText.value = "";
return;
}

const url =
`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang.value}|${targetLang.value}`;

loading.style.display = "block";

fetch(url)

.then(res => res.json())

.then(data => {

outputText.value = data.responseData.translatedText;

})

.catch(err => {

console.error(err);
outputText.value = "Translation error.";

})

.finally(()=>{

loading.style.display = "none";

});

}



translateBtn.addEventListener("click", translateText);



window.addEventListener("load", translateText);


let debounce;

inputText.addEventListener("input", () => {

clearTimeout(debounce);

debounce = setTimeout(() => {

translateText();

},600);

});


switchLang.addEventListener("click", () => {

let tempLang = sourceLang.value;
sourceLang.value = targetLang.value;
targetLang.value = tempLang;

let tempText = inputText.value;
inputText.value = outputText.value;
outputText.value = tempText;

});


function copy(textArea){

navigator.clipboard.writeText(textArea.value);

alert("Copied!");

}

copyInput.onclick = ()=> copy(inputText);
copyOutput.onclick = ()=> copy(outputText);


function speak(text, lang){

if(!text) return;

const speech = new SpeechSynthesisUtterance(text);
speech.lang = lang;

speechSynthesis.speak(speech);

}

listenInput.onclick = ()=> speak(inputText.value, sourceLang.value);
listenOutput.onclick = ()=> speak(outputText.value, targetLang.value);


darkToggle.onclick = ()=>{

document.body.classList.toggle("dark");

};
