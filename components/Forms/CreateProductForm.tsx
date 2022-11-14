import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  Button,
  Flex,
  Textarea,
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";

interface Props {}

function CreateProductForm(props: Props) {
  const {} = props;

  return (
    <form className="flex flex-col gap-2">
      <Text as="h4" className="text-2xl font-bold ">Create a new product</Text>
      <VStack>
        <FormControl>
          <FormLabel>Product Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select placeholder="Select Category">
            <option value="option1">Alcoholic</option>
            <option value="option2">Non Alcoholic</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <Input type="number" />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea rows={5} placeholder="sample description" />
        </FormControl>
      </VStack>
      <Flex gap="2">
        <Button colorScheme="blue" type="submit">
          Create Product
        </Button>
        <Button variant="outline" colorScheme="blue" type="reset">
          Discard
        </Button>
      </Flex>
    </form>
  );
}

export default CreateProductForm;
