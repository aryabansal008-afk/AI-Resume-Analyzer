const {PDFParse} = require("pdf-parse");
const ApiError = require("../utils/ApiError");

async function extractText(buffer){
    let parser;
    try{
        parser = new PDFParse({data:buffer});
        const result = await parser.getText();

        const text = (result.text || "").trim();
        if(!text){
            throw ApiError.badRequest("Could not extract readable text");
        }

        return{text, meta:{numPages: result.pages?.length?? result.numpages??null,},
    };
    } catch(err){
        if(err.isOperational) throw err;
        throw ApiError.badRequest("Failed to parse PDF");
    } finally{
        try{
            await parser?.destroy?.();
        } catch{

        }
    }
}

module.exports = {extractText};
