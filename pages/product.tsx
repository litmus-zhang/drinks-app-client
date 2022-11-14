import Head from "next/head";
import React from "react";
import CreateProductForm from "../components/Forms/CreateProductForm";

interface Props {}

function Product(props: Props) {
  const {} = props;

  return (
    <div>
        <Head>
            <title>Product Page</title>
        </Head>
        <main className="w-96 shadow-md p-4  m-auto mt-8">
            <CreateProductForm />
        </main>
    </div>
  );
}

export default Product;
