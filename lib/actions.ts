"use server"

import { client } from "./mongodb";
import { ObjectId } from "mongodb";

export async function getAllCampaigns() {
  try {
    await client.connect();

    const campaigns = await client.db("helpmeet").collection('campaigns').find().toArray();

    // Manually convert MongoDB _id objects to plain values
    const campaignsWithoutObjectId = campaigns.map(campaign => {
      const { _id, img, title, desc, goalprice, raisedprice } = campaign;
      return { img, title, desc, goalprice, raisedprice , _id: _id.toString() }; // Convert _id to string
    });

    return campaignsWithoutObjectId;
  } catch(error: any ) {
    console.error(`Error fetching campaigns: ${error.message}`);
    return []; // Return an empty array in case of error
  } finally {
    await client.close();
  }
}


export async function updateCampaign(_id: string, newRaisedPrice: number){
  try {
    await client.connect();

    await client.db("helpmeet").collection('campaigns').findOneAndUpdate(
      { _id: new ObjectId(_id) }, // Filter for the document to update
      { $inc: { raisedprice: newRaisedPrice } } // Update operation
    );
    console.log("updated!")

  } catch(error: any ) {
    console.error(`Error updating campaign: ${error.message}`);
    // Handle error here
  } finally {
    await client.close();
  }  
}
