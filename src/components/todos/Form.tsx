import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <FormControl as={"fieldset"}>
        <FormLabel>Add Todo</FormLabel>
        <Input {...register("todo")} placeholder="Enter Your Todo" />
        <Button type="submit" disabled={isSubmitting}>
          Submit Form
        </Button>
      </FormControl>
    </form>
  );
};

export default Form;
