const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/crmdb", {
  useNewUrlPaser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Established a connection to the database"))
  .catch(err => console.log("Something went wrong when connecting to the database", err));