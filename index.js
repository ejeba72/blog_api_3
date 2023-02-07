const { app, PORT } = require("./app");

app.listen(PORT, () => {
  console.log(`Server is attentively listening to request at port ${PORT}`);
})