import { createStyles, Container } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[5],
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

export const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div>© 2022 My Website</div>
      </Container>
    </div>
  );
}