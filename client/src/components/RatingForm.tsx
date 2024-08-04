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
import { useAuth0 } from "@auth0/auth0-react";

interface RatingFormProps {
  displayedPokemon: PokedexEntry;
  isAlreadyRated: boolean;
}

interface RatingSubmission {
  userId: number | string;
  pokemonId: number;
  value: string;
}

export default function RatingForm({
  displayedPokemon,
  isAlreadyRated,
}: RatingFormProps) {
  const [ratingValue, updateRatingValue] = useState("1");
  const toast = useToast();
  const { user } = useAuth0();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  function onSubmit() {
    // !! DEV: how I handle this id is smelly

    const userRating: RatingSubmission = {
      userId: user?.sub?.split("|")[1],
      pokemonId: displayedPokemon.id,
      value: ratingValue,
    };

    handleSubmitRating(userRating);
    console.log({ ratingValue, displayedPokemon });
  }

  // ** DEV: now users can only submit score ONCE
  const handleSubmitRating = async (ratingObject: RatingSubmission) => {
    try {
      const response = await axios.put(
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
        title: "Something went wrong",
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
          <RadioGroup onChange={updateRatingValue} isDisabled={isAlreadyRated}>
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
          isDisabled={isAlreadyRated}
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
