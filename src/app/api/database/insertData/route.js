// import necessary modules
import { NextRequest, NextResponse } from "next/server";
import executeQuery from "@/config/db";

export async function POST(request) {
    try {
     const reqBody = await request.json()
      const { id, content } = reqBody;
      const result = await executeQuery("INSERT INTO new_table (id, content) VALUES (?, ?)", [id, content]);
      return NextResponse.json({
        data: result,
        message: "Data inserted successfully",
      });
    } catch (error) {
      console.error('Error inserting data:', error);
      return NextResponse.json({
        error: "Error inserting data",
      });
    }
  }
  