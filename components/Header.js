import { HStack, Heading } from '@chakra-ui/react';

export const Header = () => (
  <HStack w="full" justifyContent="space-evenly" alignItems="center">
    <Heading>header start</Heading>
    <Heading>header end</Heading>
  </HStack>
);
