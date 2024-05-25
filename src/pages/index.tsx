import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meu curriculo</title>
      </Head>
      <Box
            as='main'
            w='100%'
            maxW={1200}
            mx='auto'
            my='4'
            px='6'
      >
        <Heading>
          Seja bem vindo!
        </Heading>

        <Text>
          Trabalho com  desenvolvimento de sistemas a 20 anos, sou fluente em Delphi e SQL, conheço C++ e Java e arranho um pouco em javascript, HTML e CSS. Estou cursando Engenharia da Computação e tenho a intenção de estudar ReactJS/NodeJS.
        </Text>
      </Box>
    </div>
  )
}
