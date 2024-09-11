import { localDict } from "./dict.js"
import { cupangDict } from "./dict.js"
import { LOCAL } from "./form.js"
import { CUPANG } from "./form.js"

const LOCALi = LOCAL
const CUPANGi = CUPANG

const getCupangDefinition = (char) => {
    return localDict[char] ?? "<check-your-spelling>"
}

const getLocalDefinition = (char) => {
    return cupangDict[char] ?? "<check-your-spelling>"
}

const localAlphabetToCupangAlphabet = (sentence) => {
    if (!sentence) {
        console.log("Local is Null")
        return
    }
    sentence = sentence.toUpperCase()
    let convertedSentence = ""
    for (let i = 0; i < sentence.length; i++) {
        convertedSentence += getCupangDefinition(sentence[i]) + " "
    }
    console.log(convertedSentence)
}

const cupangAlphabetToLocalAlphabet = (sentence) => {
    if (!sentence) {
        console.log("Cupang is Null")
        return
    }
    sentence = sentence.toUpperCase()
    let convertedSentence = ""
    let split = sentence.split(" ")
    for (let i = 0; i < split.length; i++) {
        convertedSentence += getLocalDefinition(split[i])
    }
    console.log(convertedSentence)
}

localAlphabetToCupangAlphabet(LOCALi)
cupangAlphabetToLocalAlphabet(CUPANGi)
