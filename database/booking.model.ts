import { Schema, model, models, Document } from "mongoose";

export interface IBooking extends Document {
  event: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    event: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

const Booking = models.Booking || model<IBooking>("Booking", BookingSchema);
export default Booking;