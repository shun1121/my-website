import React, { FC } from "react";
import { Avatar, Container, createStyles, Text } from "@mantine/core";
import dayjs from "dayjs";
import { Tweets } from "@/types/tweet";

const Twitter: FC<{ twitter: Tweets }> = ({ twitter }) => {
  return (
    <Container>
      {twitter.data.map((list, index) => (
        <a
          key={index}
          target="_blank"
          className="mb-10 flex"
          href={`https://twitter.com/${twitter.includes.users[0].username}/status/${twitter.data[index].id}`}
          rel="noreferrer"
        >
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
