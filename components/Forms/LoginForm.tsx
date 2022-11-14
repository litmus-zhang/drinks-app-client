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

function LoginForm(props: Props) {
  const {} = props;

  return (
    <form className="flex flex-col gap-2">
      <VStack>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
      </VStack>
      <Button colorScheme="blue" type="submit">
        Login to your Account
      </Button>
    </form>
  );
}

export default LoginForm;
