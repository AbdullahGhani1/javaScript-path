<!-- Tool Change -->

### Backend create an server with /jokes endPoint

```js
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

// get a list of 5 Jokes
app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the chicken cross the road?",
      content: "To get to the other side!",
    },
    {
      id: 2,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 3,
      title: "What do you call fake spaghetti?",
      content: "An impasta!",
    },
    {
      id: 4,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 5,
      title: "Why don't skeletons fight each other?",
      content: "They don't have the guts!",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

we are using bundler vite on frontEnd app to create an react app

```shell
npm create vite@latest .
```

Getting error on fetch api on frontend

```ts
Access to fetch at 'http://localhost:4000/jokes' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.Understand this error

```

Now add cros on backend
