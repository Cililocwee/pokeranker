import { Box, Select } from "@chakra-ui/react";
import { useState } from "react";

interface RatingSelectorProps {
  avgRating: number;
}

export default function RatingSelector({ avgRating }: RatingSelectorProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <Select onChange={handleChange} value={avgRating | 0}>
        <option value="0">0</option>
        <option value="1">1 </option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Select>

      {/* Purely for debug */}
      <button
        onClick={() => {
          console.log(value);
        }}
      >
        Press
      </button>
    </Box>
  );
}
