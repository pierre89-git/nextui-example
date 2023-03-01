// ./pages/index.js

import { Button, Card, Container, Grid, Spacer, Text } from "@nextui-org/react";
import Head from "next/head";
import ProductCard from "../components/ProductCard";

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=8");
    const { products } = await res.json();
    // console.log({ products });

    return {
      props: { products },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { products: [] },
    };
  }
};

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Shopping app</title>
      </Head>
      <main>
        <header className="store-hero">
          <Spacer y={2} />
          <Container md>
            <Card variant="bordered">
              <Card.Body css={{ padding: "$24" }}>
                <Text
                  h1
                  css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  }}
                >
                  Welcome to NextUI + Next.js Shopping app
                </Text>
                <Text size={24}>
                  This is a simple shopping app built with NextUI and Next.js.
                  This is a demo app to showcase NextUI components.
                </Text>
              </Card.Body>
            </Card>
          </Container>
        </header>
        <Spacer y={2} />

        <Container lg>
          <Grid.Container gap={2}>
            {products.map((product) => (
              <Grid xs={12} sm={3} md={2.4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid.Container>
        </Container>
        {/* <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <Button onClick={() => addToCart(product)}>Add to cart</Button>
            </li>
          ))}
        </ul> */}
      </main>
    </>
  );
}
