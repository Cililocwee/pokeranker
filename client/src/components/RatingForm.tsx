import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function RatingForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Box backgroundColor={"lightgray"} padding={"3em"} marginTop={"2em"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="pokemon_id">Pokemon</FormLabel>
          <Select {...register("pokemon_id")}>
            <option value="001">Bulbasaur</option>
            <option value="002">Ivysaur</option>
          </Select>

          <FormLabel htmlFor="ratingValue">Rating</FormLabel>
          <Select {...register("ratingValue")}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Select>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
