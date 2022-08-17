import React, { FC } from "react";
import { Button, Stack } from "@mantine/core";

type ButtonText = {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const ButtonComponent: FC<ButtonText> = ({ text, type }) => {
  if (!type) {
  }
  return (
    <div>
      <Stack align="center" className="mt-8">
        {type === undefined ? (
          <Button className="bg-black" color="dark" radius="xl" size="lg">
            {text}
          </Button>
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

export default ButtonComponent;
