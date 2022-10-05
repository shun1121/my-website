import React, { FC } from "react";
import {
  Box,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Star, GitFork } from "tabler-icons-react";

export type GithubProps = {
  name: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
  languages: Languages[];
};

const Github: FC<GithubProps> = (props) => {
  const { name, description, stars, forks, url, languages } = props;

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Stack spacing={8} className="w-full mb-5">
        <Title order={3}>
          <Text>{name}</Text>
        </Title>
        {description ? (
          <Text weight={500} lineClamp={1}>
            {description}
          </Text>
        ) : null}
        <Group>
          <Group spacing={4}>
            <Star size={16} />
            <Text size="sm" color="dimmed" weight={700}>
              {stars}
            </Text>
          </Group>
          <Group spacing={4}>
            <GitFork size={16} />
            <Text size="sm" color="dimmed" weight={700}>
              {forks}
            </Text>
          </Group>
        </Group>
        <LanguageBar languages={languages} />
        <LanguageLegens languages={languages} />
      </Stack>
    </a>
  );
};

type Languages = {
  color: string;
  ratio: number;
  name: string;
};
type LanguageProps = {
  languages: Languages[];
};

const LanguageBar: FC<LanguageProps> = (props) => {
  const { languages } = props;
  console.log(languages);

  return (
    <Group spacing={0} sx={{ overflow: "hidden", borderRadius: 8 }} noWrap>
      {languages?.map((value, index) => (
        <Box
          key={index}
          sx={{
            width: `${(value.ratio * 100).toFixed(1)}%`,
            backgroundColor: value.color,
            height: 8,
          }}
        ></Box>
      ))}
    </Group>
  );
};

const LanguageLegens: FC<LanguageProps> = (props) => {
  const { languages } = props;

  return (
    <Group noWrap>
      {languages?.map((value, index) => (
        <Group key={index} spacing={6} noWrap>
          <Text size="sm" weight={700}>
            {value.name}
          </Text>
          <Text size="sm" color="dimmed" weight={700}>
            {(value.ratio * 100).toFixed(1)}%
          </Text>
        </Group>
      ))}
    </Group>
  );
};

export default Github;
