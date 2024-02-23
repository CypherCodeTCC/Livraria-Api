import app from "./server";

const PORT: number = 3001;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
