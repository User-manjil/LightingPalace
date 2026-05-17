import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongoose: MongooseCache | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };
if (!global.mongoose) global.mongoose = cached;

export default async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    if (!MONGODB_URI) {
      throw new Error("Missing MONGODB_URI in .env");
    }

    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}