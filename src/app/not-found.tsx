import React from "react";
import Container from "../components/Container";
import Title from "../components/Title";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Container className="py-10">
      <Title className="text-3xl text-amazonBlue font-semibold">
        Page Not Found
      </Title>
      <p className=" max-w-3xl mt-2 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
        perferendis odio harum vitae ex expedita consectetur ducimus, eveniet
        magni nam voluptatum quisquam nobis, ab dolorum.
      </p>
      <Link
        href={"/"}
        className="text-sm font-semibold border-b border-b-amazonLight/70 hover:border-b-amazonBlue text-amazonLight/70 hover:text-amazonBlue duration-200"
      >
        Back to shopping
      </Link>
    </Container>
  );
};

export default NotFoundPage;
