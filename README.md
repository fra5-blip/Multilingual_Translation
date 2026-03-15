##Multilingual Translation Web Application

#Project Overview

This project is a web-based translation application that allows users to translate short messages between different languages in real time.

The application was developed as part of a Full Stack Development assignment. It demonstrates frontend development skills and API integration using JavaScript.

Users can input text, select source and target languages, and receive translated results instantly.

---

Features

- Translate text between languages
- Default translation on page load
- Language selection (English, French, Detect Language)
- Switch languages button
- Text-to-Speech for both input and translated text
- Copy input and translated text
- Loading indicator during translation
- Real-time translation using debounce
- Dark mode toggle
- Responsive design for mobile devices
- Error handling for API requests

---

Technologies Used

- HTML5
- CSS3
- JavaScript
- Translation API (MyMemory API)

API Endpoint used:

https://api.mymemory.translated.net/get

---

How the Application Works

1. The user enters text in the input area.
2. The user selects the source language and the target language.
3. The Translate button sends a request to the translation API.
4. The API returns the translated text.
5. The translated result is displayed in the output area.

Users can also:

- Listen to the text using speech synthesis
- Copy the text using clipboard functionality
- Switch languages instantly

---

Project Structure

translation-web-app
│
├── index.html
├── style.css
├── script.js
└── README.md

---

Installation / Running the Project

1. Download or clone the repository.

2. Open the project folder.

3. Open the file:

index.html

in your web browser.

No additional setup or installation is required.

---

Future Improvements

- Add more language options
- Improve UI animations
- Add translation history
- Integrate a more advanced translation API
- Deploy the project online

---

Author

Francis Lombe
Software Engineering Student

---

License

This project was created for academic purposes.
