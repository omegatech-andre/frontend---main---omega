"use client"
import themeDevices from "@/styles/themeDevices";
import { Button, Flex, Stack } from "@mantine/core";

export default function HeaderMain() {
  const { isDesktop } = themeDevices();

  return (
    <>
      <Stack bg={"linear-gradient(180deg, #950000 0%, #292626 100%)"}>
        <Flex justify={"space-between"} flex={1} px={isDesktop ? "10rem" : "lg"} py={"lg"}>
          <Button variant="outline" color="white" component="a" href="/">Início</Button>
          <Button variant="outline" color="white" component="a" href="/boletim-tecnico">Boletim Téc.</Button>
        </Flex>
        <Flex>
          carousel
        </Flex>
      </Stack>
    </>
  );
}
