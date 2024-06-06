// VideoEditor.tsx
import { Box, Button, Text, VStack, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Track } from './Track';
import { MediaLibrary } from './MediaLibrary';

export const VideoEditor = () => {
  const [tracks, setTracks] = useState([
    {
      id: '1',
      clips: [
        {
          id: 'clip1',
          start: 0,
          length: 20,
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        },
      ],
    },
    { id: '2', clips: [] },
  ]);

  const addTrack = () => {
    setTracks([...tracks, { id: `${tracks.length + 1}`, clips: [] }]);
  };

  return (
    <HStack align='stretch' p={4} spacing={4}>
      <MediaLibrary />
      <VStack align='stretch' flex='1' spacing={4}>
        <Box bg='gray.800' p={4} rounded='md'>
          <Text fontSize='xl' mb={4} color='white'>
            Preview Window
          </Text>
          <Box bg='black' w='100%' h='200px' mb={4}>
            {/* 在这里添加视频播放组件 */}
          </Box>
        </Box>
        <Box>
          <Button colorScheme='blue' onClick={addTrack}>
            Add Track
          </Button>
        </Box>
        {tracks.map(track => (
          <Track key={track.id} id={track.id} clips={track.clips} />
        ))}
      </VStack>
    </HStack>
  );
};
