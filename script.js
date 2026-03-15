/* ==============================
   GET ELEMENTS
================================ */

const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const sourceLang = document.getElementById("sourceLang");
const targetLang = document.getElementById("targetLang");

const translateBtn = document.getElementById("translateBtn");
const switchLangBtn = document.getElementById("switchLang");

const listenInput = document.getElementById("listenInput");
const listenOutput = document.getElementById("listenOutput");

const copyInput = document.getElementById("copyInput");
const copyOutput = document.getElementById("copyOutput");

const loading = document.getElementById("loading");
const darkBtn = document.getElementById("darkModeToggle");


/* ==============================
   TRANSLATE FUNCTION
================================ */

function translateText(){

    const text = inputText.value.trim();

    if(text === ""){
        outputText.value = "";
        return;
    }

    const langpair = `${sourceLang.value}|${targetLang.value}`;

    loading.style.display = "block";
    outputText.value = "";

    fetch("https://api.mymemory.translated.net/get", {

        method:"POST",

        body: JSON.stringify({
            q: text,
            langpair: langpair
        }),

        headers:{
            "Content-Type":"application/json"
        }

    })

    .then(response => response.json())

    .then(data => {

        outputText.value = data.responseData.translatedText;

    })

    .catch(error => {

        console.error("Translation error:", error);
        alert("Translation failed. Please try again.");

    })

    .finally(()=>{

        loading.style.display = "none";

    });

}


/* ==============================
   TRANSLATE BUTTON
================================ */

translateBtn.addEventListener("click", translateText);


/* ==============================
   DEFAULT TRANSLATION ON LOAD
================================ */

window.addEventListener("load", () => {

    translateText();

});


/* ==============================
   REAL TIME TRANSLATION (DEBOUNCE)
================================ */

let debounceTimer;

inputText.addEventListener("input", () => {

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {

        translateText();

    }, 600);

});


/* ==============================
   SWITCH LANGUAGES
================================ */

switchLangBtn.addEventListener("click", () => {

    let tempLang = sourceLang.value;
    sourceLang.value = targetLang.value;
    targetLang.value = tempLang;

    let tempText = inputText.value;
    inputText.value = outputText.value;
    outputText.value = tempText;

});


/* ==============================
   COPY TEXT
================================ */

function copyText(textElement){

    navigator.clipboard.writeText(textElement.value)

    .then(()=>{

        alert("Text copied!");

    })

    .catch(()=>{

        alert("Failed to copy text.");

    });

}

copyInput.addEventListener("click", ()=>{

    copyText(inputText);

});

copyOutput.addEventListener("click", ()=>{

    copyText(outputText);

});


/* ==============================
   TEXT TO SPEECH
================================ */

function speak(text, lang){

    if(text === "") return;

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = lang;

    window.speechSynthesis.speak(speech);

}

listenInput.addEventListener("click", ()=>{

    speak(inputText.value, sourceLang.value);

});

listenOutput.addEventListener("click", ()=>{

    speak(outputText.value, targetLang.value);

});


/* ==============================
   DARK MODE
================================ */

darkBtn.addEventListener("click", ()=>{

    document.body.classList.toggle("dark");

});