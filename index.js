const sanscript = require("sanscriptjs");
const googleTTS = require("google-tts-api");
const fs = require("fs");

let tts = {};

let getQuery = (text, script) => {
    if (script) {
        return (script != "kannada" ? sanscript.t(text, script, "kannada") : text)
    } else {
        throw console.error("ERROR: Must specify the script of the query.");
    }
}

tts.saveFile = (text, options) => {
    googleTTS.getAudioBase64(getQuery(text, options.script), {
        lang: 'kn',
        slow: options.slow ?? false,
        host: 'https://translate.google.com',
        timeout: 10000,
    }).then(response => {
        fs.writeFileSync(options.fileName ?? "audio.mp3", Buffer.from(response, 'base64'))
    }).catch(console.error);
}

tts.getBase64 = (text, options) => {
    googleTTS.getAudioBase64(getQuery(text, options.script), {
        lang: 'kn',
        slow: options.slow ?? false,
        host: 'https://translate.google.com',
        timeout: 10000,
    }).then(response => {
        return response;
    }).catch(console.error);
}

tts.getURL = (text, options) => {
    return googleTTS.getAudioUrl(getQuery(text, options.script), {
        lang: 'kn',
        slow: options.slow ?? false,
        host: 'https://translate.google.com',
    })
}

tts.getAllBase64 = (text, options) => {
    googleTTS.getAllAudioBase64(getQuery(text, options.script), {
        lang: 'kn',
        slow: options.slow ?? false,
        host: 'https://translate.google.com',
        timeout: 10000,
        splitPunct: options.splitPunct ?? "॥.?"
    }).then(response => {
        return response;
    }).catch(console.error);
}

tts.getAllURLs = (text, options) => {
    return googleTTS.getAllAudioUrls(getQuery(text, options.script), {
        lang: 'kn',
        slow: options.slow ?? false,
        host: 'https://translate.google.com',
        splitPunct: options.splitPunct ?? "॥.?"
    })
}

module.exports = tts;

