import { getCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import Link from "next/link";

export const metadata = {
  title: "Your Cart - Horimazo",
};

export default async function CartPage() {
  const cart = await getCart();

  return (
     <div>
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          setProductQuantity={setProductQuantity}
        />
      ))}

      {!cart?.items.length ? (
        <div className="flex flex-col items-end sm:items-center">
          <p className="text-amber-700 font-semibold mb-5">Your cart is empty.</p>
          <Link href="http://localhost:3000/">
            <p className="btn-secondary btn sm:w-[200px]">Go Shopping</p>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-end sm:items-center">
          <p className="mb-3 font-bold">
            Total: {formatPrice(cart?.subtotal || 0)}
          </p>
          <button
            className="btn-primary btn sm:w-[200px]"
            disabled={!cart?.items.length}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}