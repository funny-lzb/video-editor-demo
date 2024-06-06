import { Box, HStack } from '@chakra-ui/react';

export const Timeline = ({ duration }: { duration: number }) => {
  const segments = [];
  for (let i = 0; i <= duration; i++) {
    segments.push(<Box key={i} w='20px' h='100%' bg='gray.500' m={1}></Box>);
  }
  return <HStack>{segments}</HStack>;
};
