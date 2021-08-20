import { Flex, Image, Text } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            as='header'
            w='100%'
            maxW={1200}
            h='28'
            mx='auto'
            mt='4'
            px='6'
            align='center'
        >
            <Image 
                h='24'
                src='/images/logo.jpg' alt='Logo'
            />

            <Text
                fontSize='5xl'
                fontWeight='bold'
                letterSpacing='wide'
                w='64'
            >
                CMS
            </Text>
        </Flex>
    )
}