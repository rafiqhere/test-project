const express = require('express');
const cors = require ('cors');
const app = express()
const port = 3000
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors());
app.use (express.json());


//testDBuser
//CnNVunG8ouLJbdB6
const uri = "mongodb+srv://testDBuser:CnNVunG8ouLJbdB6@perfume-oil.3nilgjs.mongodb.net/?appName=Perfume-oil";
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})


async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();


      const db = client.db("devopsPractice"); // change db name as needed
      const collection = db.collection("users");

      app.get("/users", async (req, res) => {
            const items = await collection.find().toArray();
            res.json(items)
        });



      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    }
  }
  run().catch(console.dir);
  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
