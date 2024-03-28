const app = require("./index");
const connectDb = require("./config/db");

const PORT = 5050;

app.get('/', (req, res) => {
    return res.status(200).send({ message: "Good" });
});

app.listen(PORT, async () => {
    try {
        await connectDb();
        console.log("Connected to database successfully");
        console.log("Server is active on PORT:", PORT);
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
});
