import React, { FC } from "react";
import {
  Container,
  createStyles,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

type Name = {
  name: string;
};

const useStyles = createStyles(() => ({
  title: {
    justifyContent: "center",
    "@media (max-width: 768px)": {
      paddingTop: "3rem",
    },
  },
  snsIcons: {
    display: "flex",
    color: "white",
    "@media (max-width: 768px)": {
      marginTop: "2.5rem",
    },
  },
}));

const Top: FC<Name> = ({ name }) => {
  const { classes } = useStyles();

  return (
    <div className="bg-pink-500 h-64">
      <Container className="h-64 w-full md:flex md:justify-between">
        <Stack className={classes.title}>
          <Title order={1} className="text-white">
            自分のサイトまとめ
          </Title>
          <Text className="text-white">
            {name}のポートフォリオのためのページです。
          </Text>
        </Stack>
        <Group className={classes.snsIcons}>
          <a
            href="https://twitter.com/Shunsuk87072477"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter className="w-8 h-8" />
          </a>
          <a
            href="https://m.facebook.com/?paipv=0&eav=Afa0fdFXVsAeenTM70bfNsOAxbJc8vDqr8nMvJ3E3Hl9e6C2AG-sCIoxt6KWiYJQAI0&_rdr&tbua=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/shun1121"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub className="w-8 h-8" />
          </a>
        </Group>
      </Container>
    </div>
  );
};

export default Top;
