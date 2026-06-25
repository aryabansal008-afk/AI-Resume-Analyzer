const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const env = require("./config/env");
const {connectDB} = require("./config/db");
const {notFound, errorHandler} = require("./middleware/errorHandler");

const healthRouter = require("./routes/health");
const authRouter = require("./routes/auth");
const resumesRouter = require("./routes/resumes");
const dashboardRouter = require("./routes/dashboard");
const historyRouter = require("./routes/history");
const insightsRouter = require("./routes/insights");
const versionsRouter = require("./routes/versions");

const app= express();

app.set("trust proxy", 1);
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || env.clientOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json({limit:"1mb"}));
app.use(express.urlencoded({extended:true, limit:"1mb"}));
app.use(cookieParser());
if(!env.isProd) app.use(morgan("dev"));

app.use("/api/health", healthRouter);
app.use("/api/auth", authRouter);
app.use("/api/resumes",resumesRouter);
app.use("/api/dashboard",dashboardRouter);
app.use("/api/history",historyRouter);
app.use("/api/insights",insightsRouter);
app.use("/api/versions",versionsRouter);

app.use(notFound);
app.use(errorHandler);

async function start(){
    try{
        await connectDB();
        app.listen(env.port, ()=>{
            console.log(`Server listening on port ${env.port}`);
        });
    } catch(err){
        console.log("Failed to start server: ", err.message);
        process.exit(1);
    }
}

process.on("unhandledRejection", (reason)=>{
    console.log("Unhandled rejection ", reason);
});

start();

module.exports = app;
