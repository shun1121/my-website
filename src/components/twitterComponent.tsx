import React, { FC } from "react";
import {
  Avatar,
  Container,
  createStyles,
  Text,
  Title,
} from "@mantine/core";
import LinkButton from "./button";
import { Tweets } from "../pages";
import dayjs from "dayjs";
import useSWR from "swr"

const useStyles = createStyles((theme) => ({
  heading: {
    marginTop: "4rem",
    marginBottom: "2rem",
    paddingBottom: "2rem",
    borderBottom: "2px solid #E9ECEF",
    "@media (max-width: 768px)": {
      marginTop: "2.5rem",
      paddingTop: "0px",
      paddingBottom: "1.5rem",
    },
  },
  twitterWrapper: {
    display: "flex",
  },
}));

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// const Twitter: FC<{ twitter: Tweets }> = ({ twitter }) => {
const Twitter: FC = () => {
  const { data, error } = useSWR<Tweets>('/api/twitter', fetcher);
  const { classes } = useStyles();
  console.log(data)

  return (
    <Container className="max-w-[598px]">
      <Title order={1} className={classes.heading}>
        Twitter
      </Title>
      {error && (<div>failed to load</div>)}
      {!data && (<div>loading...</div>)}
      {data?.data.map((list, index) => (
        <a key={index} className="mb-10 flex" href={`https://twitter.com/${data?.includes.users[0].username}/status/${data?.data[index].id}`} >
            <Avatar
              src={data.includes.users[0].profile_image_url}
              alt={data.includes.users[0].name}
              className="rounded-full"
            />
            <div className="ml-3">
              <div className="flex">
                <Text className="font-bold text-[16px]">
                  {data.includes.users[0].name}
                </Text>
                <Text className="text-[#909296] text-[12px] font-bold ml-2">
                  @{data.includes.users[0].username}
                </Text>
                <Text className="text-[#909296] text-[12px] font-bold ml-2">
                  {dayjs(list.created_at).format("M月D日")}
                </Text>
              </div>
              <Text className="text-[14px]">{list.text}</Text>
            </div>
        </a>
      ))}
      <LinkButton
        text="View on Twitter"
        href={`https://twitter.com/${data?.includes.users[0].username}`}
      />
    </Container>
  );
};

export default Twitter;
