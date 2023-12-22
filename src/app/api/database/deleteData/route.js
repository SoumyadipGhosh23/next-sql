// deleteData.js
import { NextRequest, NextResponse } from "next/server";
import executeQuery from "@/config/db";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { id } = reqBody;
    const result = await executeQuery("DELETE FROM new_table WHERE id = ?", [id]);
    return NextResponse.json({
      data: result,
      message: "Data deleted successfully",
    });
  } catch (error) {
    console.error('Error deleting data:', error);
    return NextResponse.json({
      error: "Error deleting data",
    });
  }
}
