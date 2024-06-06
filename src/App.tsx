import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { VideoEditor } from './components/VideoEditor';

// 自定义主题
const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: 'gray.900',
        color: 'white',
      },
    },
  },
});

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ChakraProvider theme={theme}>
        <VideoEditor />
      </ChakraProvider>
    </DndProvider>
  );
}

export default App;
