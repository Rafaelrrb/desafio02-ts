import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header/Header';
import { ButtonLogin } from './components/ButtonLogin';

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <ButtonLogin login={login}/>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
