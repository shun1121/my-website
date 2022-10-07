import React, { FC } from "react";
import { Button, Stack } from "@mantine/core";
import Link from "next/link";

type ButtonText = {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  href: string
};

const LinkButton: FC<ButtonText> = ({ href, text, type }) => {
  if (!type) {
  }
  return (
    <div>
      <Stack align="center" className="mt-8">
        {type === undefined ? (
          <Link href={href} passHref>
            <Button className="bg-black" color="dark" radius="xl" size="lg">
              {text}
            </Button>
          </Link>
        ) : (
            <Button
              type={type}
              className="bg-black"
              color="dark"
              radius="xl"
              size="lg"
            >
              {text}
            </Button>
        )}
      </Stack>
    </div>
  );
};

export default LinkButton;
