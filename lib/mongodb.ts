
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri: string = process.env.MONGODB_URL || ""

if(!uri)console.log("MONGODB URL not provided!")

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


