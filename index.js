const app = require('./app')
const port = 5000

let api;

 api = app.listen(port, () => {
  console.log(`Test server running on port ${port}`)
})

