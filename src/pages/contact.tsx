import React, { FC } from 'react';
import { Container, createStyles, Title, TextInput, Group, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import ButtonComponent from '../components/button';

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

const About: FC = () => {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
  })

  return (
    <div>
      <Container className='h-screen'>
        <Title order={1} className={classes.heading}>Contact</Title>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput className='mb-5' mt="md" label="Email" placeholder="your@email.com" {...form.getInputProps('email')} />
          <TextInput className='mb-5' label="Name" placeholder="Taro Yamada" {...form.getInputProps('name')} />
          <Textarea className='mb-5' label="Your message" placeholder="I want to order your goods" {...form.getInputProps('message')} />
          <Group position="center" mt="xl">
            <ButtonComponent text="Send Message" type="submit" />
          </Group>
        </form>
      </Container>
    </div>
  )
}

export default About