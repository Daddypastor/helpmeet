import { sql } from '@vercel/postgres';



export async function fetchCampaigns() {  
    try {  
      const data = await sql`SELECT * FROM Campaign`;  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch campaign data.');
    }
  }

  export async function updateCampaignRaisedPrice(id: number, newPrice: any) {  
    try {  
      await sql`UPDATE Campaign SET raisedPrice = raisedPrice + ${newPrice} WHERE id = ${id}`; 
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to update campaign data.');
    }
}

  