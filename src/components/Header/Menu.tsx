import { Box, Flex, HStack } from "@chakra-ui/react";

import { MenuItem } from "./MenuItem";

export function Menu() {
    return (
        <Flex
            as='nav'
            mt='-4'
        >
            <HStack
                spacing='1'
                align='center'
                mx='auto'
                px='6'
                bg='gray.700'
            >
                <MenuItem href='/' shouldMatchExactHref>Home</MenuItem>
                <MenuItem href='/projects'>Projetos</MenuItem>
                <MenuItem href='/resume'>Curriculo</MenuItem>
                <MenuItem href='/products'>Produtos</MenuItem>
            </HStack>
        </Flex>
    )
}