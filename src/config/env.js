const dotenv = require("dotenv");
const path = require("path");

dotenv.config({path:path.resolve(__dirname,"../../.env")});

const required = ["MONGO_URI", "JWT_SECRET"];
const missing = required.filter((key)=>!process.env[key]);
if(missing.length){
    console.log(`Missing required env vars : $missing.join(", ")`);
    process.exit(1);
}

module.exports = {
    nodeEnv: process.env.NODE_ENV || "development",
    port: Number(process.env.PORT) || 8000,
    mongoUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    cookieName: process.env.COOKIE_NAME,
    clientOrigins: (
        process.env.CLIENT_ORIGIN
    )
        .split(",")
        .map((o)=>o.trim())
        .filter(Boolean),
    
        geminiApiKey: process.env.GEMINI_API_KEY,
        geminimodel: process.env.GEMINI_MODEL,
        isProd: process.env.NODE_ENV === "production",
}