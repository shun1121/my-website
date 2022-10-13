import React, { FC } from "react";
import { Avatar, Text } from "@mantine/core";
import dayjs from "dayjs";
import { Tweets } from "@/types/tweet";
import { useMediaQuery } from '@mantine/hooks';

const Twitter: FC<{ twitter: Tweets }> = ({ twitter }) => {
  const matches = useMediaQuery('(max-width: 400px)');
  return (
    <div>
      {twitter.data.map((list, index) => (
        <a
          key={index}
          target="_blank"
          className="flex mb-10"
          href={`https://twitter.com/${twitter.includes.users[0].username}/status/${twitter.data[index].id}`}
          rel="noreferrer"
        >
          <Avatar
            src={twitter.includes.users[0].profile_image_url}
            alt={twitter.includes.users[0].name}
            className="rounded-full"
          />
          <div className="ml-3">
            <div className={matches ? "mb-1" : "flex" }>
              <Text className="font-bold text-[16px]">
                {twitter.includes.users[0].name}
              </Text>
              <Text className={matches ? "text-[#909296] text-[12px] font-bold" : "text-[#909296] text-[12px] font-bold ml-2" }>
                @{twitter.includes.users[0].username}
              </Text>
              <Text className={matches ? "text-[#909296] text-[12px] font-bold" : "text-[#909296] text-[12px] font-bold ml-2" }>
                {dayjs(list.created_at).format("M月D日")}
              </Text>
            </div>
            <Text className="text-[14px]">{list.text}</Text>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Twitter;
