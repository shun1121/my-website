import React, { FC, ReactNode } from 'react';
import { links } from '../components/link';
import { Footer } from '../components/footer';
import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Anchor, Stack, Text } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';


type Props = {
  children?: ReactNode
}

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

const Layout: FC<Props> = (props) => {
  // const { classes } = useStyles();
  // const [opened, { toggle }] = useDisclosure(false);
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState("");
  const { classes, cx } = useStyles();
  console.log(opened)

  const toggle = () => {
    setOpened(!opened)
  }

  const items = links.map((link) => (
    // ヘッダーのタブの色変更方法を検討
    <Link key={link.label} href={link.link}>
      <a
        className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      >
        {link.label}
      </a>
    </Link>
  ));

  return (
    <div>
      <Header height={60}>
        <Container className={classes.header}>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          <Link href='/'>
            <a className='font-bold'>
              My Website
            </a>
          </Link>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>

        </Container>
      </Header>
        {opened ? (
          <Container>
            <Stack className="fixed top-0 left-0 pl-6 w-full h-full bg-pink-500">
              <Burger opened={opened} onClick={toggle} className='mt-10 mb-5' color='#fff' size="md" />
              <Link href='/about'>
                <a className='text-white font-bold text-4xl mb-2' onClick={toggle}>
                  About
                </a>
              </Link>
              <Link href='/blog'>
                <a className='text-white font-bold text-4xl mb-2' onClick={toggle}>
                  Blog
                </a>
              </Link>
              <Link href='/portfolio'>
                <a className='text-white font-bold text-4xl mb-2' onClick={toggle}>
                  Portfolio
                </a>
              </Link>
              <Link href='/contact'>
                <a className='text-white font-bold text-4xl mb-2' onClick={toggle}>
                  Contact
                </a>
              </Link>
            </Stack>
          </Container>
        ): (
          <div>
            {props.children}
          </div>
        )}
      <Footer />
    </div>
  )
}

export default Layout