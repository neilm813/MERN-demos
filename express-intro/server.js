const port = 5000;
const express = require("express");

const app = express();
app.use(express.json());

app.get("/api/cities", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Aogashima",
      population: 170,
    },
    {
      id: 2,
      name: "Longyearbyen",
      population: 2144,
    },
    {
      id: 3,
      name: "Kennedy Meadows",
      population: 28,
    },
  ]);
});

app.get("/api/cities/:id", (req, res) => {
  res.json({
    id: req.params.id
  });
});

app.post("/api/cities", (req, res) => {
  console.log(req.body);
  res.json({
    status: "success",
    city: req.body
  })
});

app.delete("/api/cities/:id", (req, res) => {
  console.log(req.params);

  res.json({
    status: "success",
    msg: `Deleted city id: ${req.params.id}`
  });
});

app.put("/api/cities/:id", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  
  res.json({
    status: "success",
    msg: `Updated city id: ${req.params.id}`
  })
});


app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to!`));