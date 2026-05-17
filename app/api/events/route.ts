import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Event from "@/database/event.model";

// ------------------ POST (JSON Only) ----------------------
export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const body = await req.json(); // <-- FIX: JSON instead of formData()

        const createdEvent = await Event.create(body);

        return NextResponse.json(
            { message: "Event created successfully", event: createdEvent },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Event creation failed",
                error: error instanceof Error ? error.message : "unknown error"
            },
            { status: 500 }
        );
    }
}

// ------------------ GET (Fix 405) -------------------------
export async function GET() {
    try {
        await connectDB();
        const events = await Event.find().lean();

        return NextResponse.json({ events }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to fetch events",
                error: error instanceof Error ? error.message : "unknown error"
            },
            { status: 500 }
        );
    }
}