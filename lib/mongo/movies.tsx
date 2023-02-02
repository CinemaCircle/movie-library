const { default: clientPromise } = require("@/lib/mongo/db");

let client;
let db;
let moviesCollection;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    moviesCollection = await db.collection("movies");
  } catch (error) {
    throw new Error("failed to stablish connection to database");
  }
}

async () => {
  await init();
};

export async function getMovies() {
  try {
    if (!moviesCollection) await init();
    const result = await moviesCollection.find({}).limit(20).toArray();

    return { movies: result };
  } catch (error) {
    return { error: "failed to fetch movies!" };
  }
}

export async function addMovie(movie) {
  try {
    if (!moviesCollection) await init();

    const result = await moviesCollection.insertOne(movie);

    return { id: result.insertedId };
  } catch (error) {
    return { error: "failed to insert movie!" };
  }
}
