import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";

interface Props {}

function RegisterForm(props: Props) {
  const {} = props;

  return (
    <form className="flex flex-col gap-2">
      <VStack>
        <FormControl>
          <FormLabel>Fullname</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input type="tel" />
        </FormControl>
      </VStack>
      <Button colorScheme="blue" type="submit">
        Create an account
      </Button>
    </form>
  );
}

export default RegisterForm;
