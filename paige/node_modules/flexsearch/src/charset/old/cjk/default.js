import { EncoderOptions } from "../../../type.js";
// non ascii control chars 0-31
const regex = /[\x00-\x7F]+/g;

/** @type EncoderOptions */
const options = {
    // normalize: function(str){
    //     return ("" + str).replace(regex, "")
    // },
    dedupe: true,
    //split: ""
};
export default options;
