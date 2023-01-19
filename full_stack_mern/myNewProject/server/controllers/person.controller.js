const { response } = require("express")

module.exports.index = (req, res) => {
  response.json({
    message: "Hello World"
  });
}