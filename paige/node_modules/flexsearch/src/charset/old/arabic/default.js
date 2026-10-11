import { EncoderOptions } from "../../../type.js";
// non ascii control chars 0-31
const regex = /[^\u0621-\u064A\u0660-\u06690-9\s]+/g;
const split = /\s+/;

/** @type EncoderOptions */
const options = {
    // the string is already encoded as RTL by default
    //rtl: true,
    // normalize: function(str){
    //     return ("" + str).normalize("NFD").replace(regex, "")
    // },
    dedupe: true
};
export default options;
