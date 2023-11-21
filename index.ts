import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  const body = req.body ? JSON.stringify(req.body) : "";
  console.log(
    `${new Date().toISOString()} - ${req.method} ${req.path} - Body: ${body}`
  );
  next();
});

app.post("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
