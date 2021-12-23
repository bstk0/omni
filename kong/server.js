//https://konghq.com/blog/insomnia-rest/
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//SECURITY
const auth = {
  username: "admin",
  password: "mysecretpassword",
};

function authenticated(headers) {

  console.log(headers.authorization);
  if (headers.authorization == null) { 
    console.log("opa")
    return false; 
  }

  const [user, pass] = headers.authorization.split(":");

  if (user && pass && user == auth.username && pass == auth.password) {
    return true;
  }

  return false;
}

//creating books
let books = [
  {
    id: 1,
    title: "Absalom, Absalom",
    isbn: 97803801407743,
    author: { id: 1, firstname: "William", lastname: "Faulkner" },
  },
  {
    id: 2,
    title: "The Fire Next Time",
    isbn: 97801401284643,
    author: { id: 2, firstname: "James", lastname: "Baldwin" },
  },
  {
    id: 3,
    title: "Orlando",
    isbn: 9780241827502,
    author: { id: 3, firstname: "Virginia", lastname: "Woolf" },
  },
];

//GET
http://localhost:3000/api/books
app.get("/api/books", (req, res) => {
  res.send(books);
});

//GET ONE
//http://localhost:3000/api/book/2
app.get('/api/book/:id', (req, res) => {
  //console.log(req.params);
  //console.log(req.params.id);
  let myId = req.params.id;
  let book = books.find((book) => book.id == req.params.id);
  res.send(book);
});

//ADD - via Insominia
app.post("/api/book", (req, res) => {
  if (!authenticated(req.headers)) {
    return res.status(401).send("Authentication required.");
  }
  const body = req.body;
  const book = {
    id: body.id,
    title: body.title,
    isbn: body.isbn,
    author: {
      id: body.author.id,
      firstname: body.author.firstname,
      lastname: body.author.lastname,
    },
  };
  books.push(book);

  res.send(books);
});

//DEL
app.delete("/api/book/:id", (req, res) => {
  books = books.filter((book) => book.id != req.params.id);
  res.send(books);
});
