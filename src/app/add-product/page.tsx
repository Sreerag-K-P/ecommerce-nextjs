import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";
export const metadata = {
  title: "Add Product - Flowmason",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();

  const description = formData.get("description")?.toString();

  const imageUrl = formData.get("imageUrl")?.toString();

  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          name="name"
          placeholder="Name"
          required
          className="input-bordered input mb-3 w-full"
        />
        <textarea
          name="description"
          required
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
        />
        <input
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          required
          className="input-bordered input mb-3 w-full"
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          required
          className="input-bordered input mb-3 w-full"
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
}
