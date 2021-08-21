import { Link as ChakraLink, Text } from "@chakra-ui/react";
import { ElementType } from "react";

import { ActiveItem } from "./ActiveItem";

interface MenuItemProps {
    href: string;
    icon?: ElementType
    children: string;
    shouldMatchExactHref?: boolean;
}

export function MenuItem({ children, href, icon, shouldMatchExactHref = false, ...rest }: MenuItemProps) {
    return (
        <ActiveItem href={href} passHref shouldMatchExactHref={shouldMatchExactHref}>
            <ChakraLink
                lineHeight='2rem'
                px='4'
                py='3'
                _hover={{
                    bg: 'gray.600'
                }}
                {...rest}
            >
                <Text fontWeight='medium'>{children}</Text>
            </ChakraLink>
        </ActiveItem>
    )
}