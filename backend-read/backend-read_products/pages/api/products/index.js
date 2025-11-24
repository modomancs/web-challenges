import Product from "@/db/models/Product";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  console.log(request.method);
  if (request.method === "GET") {
    const Products = await Product.find();
    response.status(200).json(Products);
    return;
  }
  response.status(405).json({ status: "Method not allowed" });
}
