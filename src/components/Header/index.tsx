import { Box, Image, Text } from "@chakra-ui/react";

import { Menu } from "./Menu";

export function Header() {
    return (
        <Box
            as='header'
            w='100%'
            maxW={1200}
            h='32'
            mx='auto'
            my='4'
            px='6'
        >
            <Box w='100%' h='80%' bg='gray.600'>
                <Image 
                    display='inline-block'
                    h='100%'
                    verticalAlign='top'
                    src='/images/logo.jpg' alt='Logo'
                />

                <Text
                    as='span'
                    fontSize='5xl'
                    fontWeight='bold'
                    letterSpacing='wide'
                    w='64'
                    ml='4'
                >
                    Claudio Marcio Stocco
                </Text>
            </Box>
            <Menu />
        </Box>
    )
}