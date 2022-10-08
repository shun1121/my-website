import React, { FC } from "react";
import { Button, Stack } from "@mantine/core";
import Link from "next/link";

type ButtonText = {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  href: string;
};

const LinkButton: FC<ButtonText> = ({ href, text, type }) => {
  if (!type) {
  }
  return (
    <div>
      <Stack align="center" className="mt-8">
        {type === undefined ? (
          text.includes("GitHub") || text.includes("Twitter") ? (
            <a
              href={href}
              target="_blank"
              className="flex justify-center items-center px-[26px] h-[50px] rounded-[100vh] text-[18px] font-semibold bg-black text-white "
              rel="noreferrer"
            >
              {text}
            </a>
          ) : (
            <Link href={href} passHref>
              <Button className="bg-black" color="dark" radius="xl" size="lg">
                {text}
              </Button>
            </Link>
          )
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
