import { NextRequest, NextResponse } from "next/server";

import executeQuery from "@/config/db";

export async function GET(){
    try {
        const result =await executeQuery("select * from new_table",[])
        return NextResponse.json({
            fetchedData: result
        })
    } catch (error) {
        console.log(error);
    }
    
    
}