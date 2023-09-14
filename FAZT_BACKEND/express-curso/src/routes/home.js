const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/posts", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  res.render("posts", {
    posts: response.data,
  });
});

module.exports = router;
