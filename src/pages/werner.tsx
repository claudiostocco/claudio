import { Image, Stack } from "@chakra-ui/react";

export default function Werner() {
    return (
        <Stack gridGap={16}>
            <Image src="/images/werner-f1.jpeg" alt="Werner Folder 1" />
            <Image src="/images/werner-f2.jpeg" alt="Werner Folder 2" />
        </Stack>
    )
}