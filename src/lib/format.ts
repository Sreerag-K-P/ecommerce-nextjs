export default function formatPrice(price: number) {
  return (price / 100).toLocaleString("en-Us", {
    style: "currency",
    currency: "USD",
  });
}
