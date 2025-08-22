import { auth } from "@/auth";
import Container from "@/src/components/Container";
import FavoriteProducts from "@/src/components/favorite/FavoriteProducts";
import Title from "@/src/components/Title";
import { redirect } from "next/navigation";
import React from "react";

const FavoritePage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }
  return (
    <Container className="py-10 px-4">
      <Title className=" text-amazonBlue text-2xl">Favorite page</Title>
      <p className=" max-w-3xl mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
        perferendis odio harum vitae ex expedita consectetur ducimus, eveniet
        magni nam voluptatum quisquam nobis, ab dolorum.
      </p>

      <FavoriteProducts />
    </Container>
  );
};

export default FavoritePage;
