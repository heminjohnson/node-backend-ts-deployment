import server from "./server";

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 5001;

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
