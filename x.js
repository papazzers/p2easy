function clicker() {
  console.log("Button Working!");
};
app.get("/", (req, res) => {
  res.render("home", {
    x: clicker()
  });
});
