// updateData.js
import { NextRequest, NextResponse } from "next/server";
import executeQuery from "@/config/db";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { id, content } = reqBody;
    const result = await executeQuery("UPDATE new_table SET content = ? WHERE id = ?", [content, id]);
    return NextResponse.json({
      data: result,
      message: "Data updated successfully",
    });
  } catch (error) {
    console.error('Error updating data:', error);
    return NextResponse.json({
      error: "Error updating data",
    });
  }
}
