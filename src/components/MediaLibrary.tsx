// MediaLibrary.tsx
import { Box, Text, VStack } from '@chakra-ui/react';

const mediaItems = [
  {
    id: '1',
    name: 'Image 1',
    src: 'https://source.unsplash.com/random/300x200',
  },
  {
    id: '2',
    name: 'Image 2',
    src: 'https://source.unsplash.com/random/300x201',
  },
  // 添加更多媒体项
];

export const MediaLibrary = () => {
  return (
    <Box width='200px' bg='gray.800' p={4} rounded='md'>
      <Text fontSize='xl' mb={4} color='white'>
        Media Library
      </Text>
      <VStack align='stretch' spacing={4}>
        {mediaItems.map(item => (
          <Box key={item.id} bg='gray.700' p={2} rounded='md'>
            <Text color='white'>{item.name}</Text>
            <img src={item.src} alt={item.name} style={{ width: '100%' }} />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};
