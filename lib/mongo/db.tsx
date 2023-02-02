import { MongoClient } from "mongodb";

const URI = process.env.MONGO_URI;
const options = {};

if (!URI) throw new Error("MongoDB URI not found");

let client = new MongoClient(URI, options);
let clientPromise;

if (process.env.NODE_ENV !== "production") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  } else {
    clientPromise = client.connect();
  }
}

export default clientPromise;
