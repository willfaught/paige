import { EncoderOptions } from "../../../type.js";
// non ascii control chars 0-31
const regex = /[\u0300-\u036f]+/g;

// https://en.wikipedia.org/wiki/Greek_alphabet
// 	"ἀ"	"ἁ"	"ἂ"	"ἃ"	"ἄ"	"ἅ"	"ἆ"	"ἇ"
//
// 	"ἐ"	"ἑ"	"ἒ"	"ἓ"	"ἔ"	"ἕ"
//
// 	"ἠ"	"ἡ"	"ἢ"	"ἣ"	"ἤ"	"ἥ"	"ἦ"	"ἧ"
//
// 	"ἰ"	"ἱ"	"ἲ"	"ἳ"	"ἴ"	"ἵ"	"ἶ"	"ἷ"
// 	"ὀ"	"ὁ"	"ὂ"	"ὃ"	"ὄ"	"ὅ"
// 	"ὐ"	"ὑ"	"ὒ"	"ὓ"	"ὔ"	"ὕ"	"ὖ"	"ὗ"
//
// 	"ὠ"	"ὡ"	"ὢ"	"ὣ"	"ὤ"	"ὥ"	"ὦ"	"ὧ"
// 	"ὰ"	"ά"	"ὲ"	"έ"	"ὴ"	"ή"	"ὶ"	"ί"	"ὸ"	"ό"	"ὺ"	"ύ"	"ὼ"	"ώ"
// 	"ᾀ"	"ᾁ"	"ᾂ"	"ᾃ"	"ᾄ"	"ᾅ"	"ᾆ"	"ᾇ"
// 	"ᾐ"	"ᾑ"	"ᾒ"	"ᾓ"	"ᾔ"	"ᾕ"	"ᾖ"	"ᾗ"
// 	"ᾠ"	"ᾡ"	"ᾢ"	"ᾣ"	"ᾤ"	"ᾥ"	"ᾦ"	"ᾧ"
// 	"ᾰ"	"ᾱ"	"ᾲ"	"ᾳ"	"ᾴ"		"ᾶ"	"ᾷ"
// 	"ῂ"	"ῃ"	"ῄ"		"ῆ"	"ῇ"
// 	"ῐ"	"ῑ"	"ῒ"	"ΐ"			"ῖ"	"ῗ"
// 	"ῠ"	"ῡ"	"ῢ"	"ΰ"	"ῤ"	"ῥ"	"ῦ"	"ῧ"
//     "ῲ"	"ῳ"	"ῴ"	 "ῶ"	"ῷ"
//
//
// const mapper = new Map([
//
// ]);

/** @type EncoderOptions */
const options = {
    // normalize: function(str){
    //     return ("" + str).normalize("NFD").replace(regex, "");
    // },
    dedupe: true
};
export default options;
