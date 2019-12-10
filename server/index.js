/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
const express = require("express");
const path = require("path");
const app = express();
const React = require("react");
const Router = require("router");

const routes = require("./routes");

app.use(express.static(path.join(__dirname, "build")));
/*app.use(function(req, res, next) {
  var router = Router.create({location: req.url, routes: routes})
  router.run(function(Handler, state) {
    var html = React.renderToString(<Handler/>)
    return res.render('react_page', {html: html})
  })
})*/
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(3000);
