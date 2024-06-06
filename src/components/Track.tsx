// Track.tsx
import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { Clip } from './Clip';

interface ClipData {
  id: string;
  start: number;
  length: number;
  src: string;
}

interface TrackProps {
  id: string;
  clips: ClipData[];
}

export const Track: React.FC<TrackProps> = ({ clips }) => {
  const [clipData, setClipData] = useState(clips);

  const handleDragStop = (clipId: string, start: number) => {
    setClipData(prev =>
      prev.map(clip => (clip.id === clipId ? { ...clip, start } : clip))
    );
  };

  const handleResizeStop = (clipId: string, length: number) => {
    setClipData(prev =>
      prev.map(clip => (clip.id === clipId ? { ...clip, length } : clip))
    );
  };

  return (
    <Box
      bg='gray.700'
      p={4}
      mb={2}
      rounded='md'
      position='relative'
      height='100px'
    >
      {clipData.map(clip => (
        <Clip
          key={clip.id}
          id={clip.id}
          start={clip.start}
          length={clip.length}
          src={clip.src}
          onDragStop={handleDragStop}
          onResizeStop={handleResizeStop}
        />
      ))}
    </Box>
  );
};
