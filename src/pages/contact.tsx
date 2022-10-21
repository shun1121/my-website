import React, { FC } from "react";
import {
  Container,
  createStyles,
  Title,
  TextInput,
  Group,
} from "@mantine/core";
import LinkButton from "@/components/Button/Button";
import { Schema, schema } from "@/validation/schema";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
}));

const About: FC = () => {
  const { classes } = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Schema> = (data) => console.log(data);

  return (
    <Container className="h-screen">
      <Title order={1} className={classes.heading}>
        Contact
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput className="mt-5" {...register("name", { maxLength: 50 })} />
        {errors.name?.message && (
          <p className="text-red-400">{errors.name?.message}</p>
        )}
        <TextInput
          className="mt-5"
          {...register("email", { required: true })}
        />
        {errors.email?.message && (
          <p className="text-red-400">{errors.email?.message}</p>
        )}
        <TextInput
          className="mt-5"
          {...register("message", { maxLength: 200 })}
        />
        {errors.message?.message && (
          <p className="text-red-400">{errors.message?.message}</p>
        )}
        <Group position="center" mt="xl">
          <LinkButton text="Send Message" type="submit" href="" />
        </Group>
      </form>
    </Container>
  );
};

export default About;
