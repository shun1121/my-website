import { BlogData } from "@/types/blog";
import { Title, Stack, Text } from "@mantine/core";
import dayjs from "dayjs";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const BlogList: FC<{blogData: BlogData}> = ({blogData}) => {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 400px)",
  });
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient ? 
        isMobile ? 
          <div>
            {blogData.contents.slice(0, 4).map((list, index) => (
              <Link key={index} href={`/blog/${list.id}`} passHref>
                <a>
                  <Stack key={index} className="mb-6">
                    <Title order={2}>{list.title}</Title>
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: list.body,
                      }}
                    />
                    {dayjs(list.createdAt).format("YYYY年MM月DD日")}
                  </Stack>
                </a>
              </Link>
            ))}
          </div> : 
          <div>
            {blogData?.contents.slice(0, 5).map((list, index) => (
              <Link key={index} href={`/blog/${list.id}`} passHref>
                <a>
                  <Stack key={index} className="mb-6">
                    <Title order={2}>{list.title}</Title>
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: list.body,
                      }}
                    />
                    {dayjs(list.createdAt).format("YYYY年MM月DD日")}
                  </Stack>
                </a>
              </Link>
            ))}
          </div> :
          <></>
        }
    </div>
  )
};
