import React, { FC } from "react";
import {
  Avatar,
  Container,
  createStyles,
  Text,
  Title,
} from "@mantine/core";
import LinkButton from "@/components/Button/Button";
import dayjs from "dayjs";
import { Tweets } from "@/types/tweet";

const useStyles = createStyles(() => ({
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

const Twitter: FC<{ twitter: Tweets }> = ({ twitter }) => {

  return (
    <Container>
      {twitter.data.map((list, index) => (
        <a key={index} target="_blank" className="mb-10 flex" href={`https://twitter.com/${twitter.includes.users[0].username}/status/${twitter.data[index].id}`} rel="noreferrer" >
            <Avatar
              src={twitter.includes.users[0].profile_image_url}
              alt={twitter.includes.users[0].name}
              className="rounded-full"
            />
            <div className="ml-3">
              <div className="flex">
                <Text className="font-bold text-[16px]">
                  {twitter.includes.users[0].name}
                </Text>
                <Text className="text-[#909296] text-[12px] font-bold ml-2">
                  @{twitter.includes.users[0].username}
                </Text>
                <Text className="text-[#909296] text-[12px] font-bold ml-2">
                  {dayjs(list.created_at).format("M月D日")}
                </Text>
              </div>
              <Text className="text-[14px]">{list.text}</Text>
            </div>
        </a>
      ))}
    </Container>
  );
};

export default Twitter;
