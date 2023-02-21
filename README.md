# Sanskrit Text-to-Speech 🕉️
### Generate text-to-speech for Sanskrit.
#### संस्कृत वाङ्निर्मिति

## Installation ⬇️
```
$ npm install sanskrit-tts
```

## Usage
#### Import the `sanskrit-tts` module:
```ts
import tts from "sanskrit-tts"
```
```js
const tts = require("sanskrit-tts") // CommonJS
```

### Methods
#### 💾 Save to disk:
```js
tts.saveFile("aham vanam gacchāmi", { 
    script: "iast", 
    fileName: "audio.mp3" 
});
```
You can make it ***slower*** if you need:
```js
tts.saveFile("अहं वक्तुं शक्नोमि", { 
    script: "devanagari", 
    slow: true, 
    fileName: "audio.mp3" 
});
```

#### 🔗 Get URL:
```js
let url = tts.getURL("कथम् अस्ति भवान्", { script: "devanagari" })
console.log(url);

// Returns: https://translate.google.com/translate_tts...
```

#### 🔢 Get Audio in Base64 encoding:
```js
let base64 = tts.getBase64("ओम् नमः शिवाय", { script: "devanagari" })
console.log(base64);
```

#### 🔗 Get All URLs (For queries more than 200 characters): 🔗
```js
let urls = tts.getAllURLs("गणितम् पठामः", { script: "devanagari" })
console.log(urls);

// Returns [Array]
```
> You can also do the same to get Base64 encodings for queries more than 200 characters using `tts.getAllBase64()`. 

### 🆎 Supported Scripts
 Sanskrit TTS uses the [SanscriptJS](https://npmjs.org/package/sanscriptjs) module to transliterate your Sanskrit input. The following scripts are supported:
- bengali
- devanagari
- gujarati
- gurmukhi
- kannada
- malayalam
- oriya
- tamil
- telugu
- grantha
- grantamil
- hk (Harvard-Kyoto)
- iast (International Alphabet of Sanskrit Transliteration)
- iso15919 (ISO 15919)
- itrans (ITRANS)
- slp1 (Sanskrit Library Phonetic Basic)
- velthuis (Velthuis)
- wx (WX)

### ⚖️ License 
MIT