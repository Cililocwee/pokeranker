import {
  Box,
  Button,
  FormControl,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PokedexEntry from "../interfaces/PokedexEntry";
import axios from "axios";

interface RatingFormProps {
  displayedPokemon: PokedexEntry;
}

interface RatingSubmission {
  userId: number;
  pokemonId: number;
  value: string;
}

export default function RatingForm({ displayedPokemon }: RatingFormProps) {
  const [ratingValue, updateRatingValue] = useState("1");
  const toast = useToast();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  function onSubmit() {
    // ** DEV: user is hardcoded to one for DEV/DEBUG
    const debugRating: RatingSubmission = {
      userId: 1,
      pokemonId: displayedPokemon.id,
      value: ratingValue,
    };

    handleSubmitRating(debugRating);
    console.log({ ratingValue, displayedPokemon });
  }

  // ** DEV: now users can only submit score ONCE
  const handleSubmitRating = async (ratingObject: RatingSubmission) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/ratings/${ratingObject.userId}/${ratingObject.pokemonId}/${ratingObject.value}`
      );
      console.log("Response:", response.data);
      toast({
        title: "Rating submitted!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "You've already rated this pokemon",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box backgroundColor={"lightgray"} padding={"3em"} marginTop={"2em"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Text textTransform={"capitalize"}>
            Current Pokemon: #{displayedPokemon?.id} - {displayedPokemon?.name}
          </Text>
          <RadioGroup onChange={updateRatingValue}>
            <Stack spacing={4} direction={"row"} justify="center">
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
              <Radio value="5">5</Radio>
            </Stack>
          </RadioGroup>
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
