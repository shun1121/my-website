import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderProps {
  links: { link: string; label: string }[];
}

export const HeaderSimple = ({ links }: HeaderProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState("");
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    // ヘッダーのタブの色変更方法を検討
    <Link key={link.label} href="https://ui.mantine.dev/#main">
      <Anchor
        key={link.label}
        href={link.link}
        className={cx(classes.link, { [classes.linkActive]: active === link.link })}
        // onClick={(event) => {
        //   // event.preventDefault();
        //   console.log(event)
        //   console.log(link)
        //   setActive(link.link);
        // }}
      >
        {link.label}
      </Anchor>
    </Link>
  ));

  return (
    <Header height={60}>
      <Container className={classes.header}>
        <Link href='/'>
          <a className='font-bold'>
            My Website
          </a>
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      </Container>
    </Header>
  );
}