import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-09-30.acacia", // Make sure the Stripe API version is correct
});

export async function POST(request: NextRequest) {
  try {
    const { amount }: { amount: number } = await request.json();

    // Validate that the amount is a number and greater than 0
    if (typeof amount !== "number" || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount. It must be a positive number." },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: unknown) {
    console.error("Internal Error:", error);

    // Check if the error is a Stripe error
    if (error instanceof Stripe.errors.StripeError) {
      // Handle Stripe errors specifically
      return NextResponse.json(
        { error: `Stripe error: ${error.message}` },
        { status: 402 }
      );
    }

    // General error handling for other types of errors
    return NextResponse.json(
      { error: `Internal Server Error: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
