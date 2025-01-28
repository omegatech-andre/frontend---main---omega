import { Button, Flex, Text } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Flex direction={"column"} ta={"center"}>
        <Text ff={"monospace"} h={"90vw"} bg={"blue"}>
          frontend---main---omega
        </Text>
        <Text ff={"text"} h={"90vw"} bg={"grape"}>
          frontend---main---omega
        </Text>
        <Text ff={"heading"} h={"90vw"} bg={"lime"}>
          frontend---main---omega
        </Text>
        <Button>botao</Button>
      </Flex>
    </>
  );
}
