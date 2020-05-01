const server = require("./API/server");
const PORT = process.env.PORT || 4000;

server.listen(
    PORT, () => console.log(`Listening to ${PORT}`)
);