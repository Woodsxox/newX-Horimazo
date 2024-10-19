// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   useStripe,
//   useElements,
//   PaymentElement,
// } from "@stripe/react-stripe-js";
// import convertToSubcurrency from "../lib/convertToSubcurrency";

// interface CheckoutPageProps {
//   amount: number;
// }

//   const CheckoutPage: React.FC<CheckoutPageProps> = ({ amount }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [errorMessage, setErrorMessage] = useState<string>();
//   const [clientSecret, setClientSecret] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setLoading(true);

//     // Ensure that Stripe and Elements are loaded
//     if (!stripe || !elements) {
//       setErrorMessage("Stripe has not loaded yet.");
//       setLoading(false);
//       return;
//     }

//     // Call elements.submit() to prepare for payment
//     const { error: submitError } = await elements.submit();

//     // Handle submission error if any
//       if (submitError) {
//       setErrorMessage(submitError.message);
//       setLoading(false);
//       return; 
//     }

//     // Confirm the payment after successful submission
//        const { error: confirmError } = await stripe.confirmPayment({
//       elements,
//       clientSecret,
//       confirmParams: {
//         return_url: `https://www.localhost:3000/payment-success?amount=${amount}`, 
//       },
//     });

//     if (confirmError) {
//       setErrorMessage(confirmError.message);
//       setLoading(false);
//     } else {
//       setErrorMessage(undefined); 
//     }
//   };

//      useEffect(() => {
//     fetch("/api/create-payment-intent", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, [amount]);

//      if (!clientSecret || !stripe || !elements) {
//     return (
//       <div className="flex items-center justify-center">
//         <div
//           className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
//           role="status"
//         >
//           <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//             Loading...
//           </span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold">Checkout</h1>
//       <p className="text-lg">Amount: {convertToSubcurrency(amount)}</p>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-4 rounded-md shadow-md"
//       >
//         {clientSecret && <PaymentElement />}
//         {errorMessage && <div className="text-red-500">{errorMessage}</div>}
//         <button
//           type="submit"
//           disabled={!stripe || loading}
//           className="text-white w-full p-4 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
//         >
//           {loading ? "Processing..." : `Pay $${amount}`}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutPage;
