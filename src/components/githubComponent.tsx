import React, { FC } from 'react';
import { Box, Container, createStyles, Group, Stack, Text, Title } from '@mantine/core';
import LinkButton from './button';
import { Star } from 'tabler-icons-react';

export type Github = {
  createdAt: string
  description: string
  name: string
  url: string
  stargazarCount: number
  forkCount: number
  languages: []
}[]

const useStyles = createStyles((theme) => ({
  heading: {
    marginTop: '4rem',
    marginBottom: '2rem',
    paddingBottom: '2rem',
    borderBottom: '2px solid #E9ECEF',
    '@media (max-width: 768px)': {
      marginTop: '2.5rem',
      paddingTop: '0px',
      paddingBottom: '1.5rem',
    },
  },
}));

const Github: FC<any> = (props) => {
  const { name, description, stars, forks, url, languages } = props;
  const { classes } = useStyles();
  console.log(props)

  return (
    // <div>
      <Container className='w-1/2'>
      {/* <Title order={1} className={classes.heading}>GitHub</Title> */}
      <Stack spacing={8}>
        <Title order={3}>
          <a href={url}>
            {name}
          </a>
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
            {/* <GitFork size={16} color={iconColor} /> */}
            <Text size="sm" color="dimmed" weight={700}>
              {forks}
            </Text>
          </Group>
        </Group>

        {/* <LanguageBar languages={languages} />
        <LanguageLegens languages={languages} /> */}
      </Stack>
      {/* {
        github?.languages?.nodes?.map((language:any) => {
          <Stack className='flex'>
            <Text>{language.color}</Text>
            <Text>{language.name}</Text>
          </Stack>
        })
      } */}
      {/* <LinkButton text="View on GitHub" href="/" /> */}
    </Container>
    // </div>
  )
}

// const LanguageBar: FC<any> = (props) => {
//   const { languages } = props;
//   console.log(languages.edges)

//   return (
//     <Group spacing={0} sx={{ overflow: "hidden", borderRadius: 8 }} noWrap>
//       {languages?.edges?.map((value, index) => (
//         <Box
//           key={index}
//           sx={{
//             width: `${(value.value * 100).toFixed(1)}%`,
//             backgroundColor: value.color,
//             height: 8,
//           }}
//         ></Box>
//       ))}
//     </Group>
//   );
// };

// const LanguageLegens: FC<any> = (props) => {
//   const { languages } = props;

//   return (
//     <Group noWrap>
//       {languages?.edeges?.map((value, index) => (
//         <Group key={index} spacing={6} noWrap>
//           {/* <DotIcon color={value.color} /> */}
//           <Text size="sm" weight={700}>
//             {value.node.name}
//           </Text>
//           {/* <Text size="sm" color="dimmed" weight={700}>
//             {(value.value * 100).toFixed(1)}%
//           </Text> */}
//         </Group>
//       ))}
//     </Group>
//   );
// };

export default Github
