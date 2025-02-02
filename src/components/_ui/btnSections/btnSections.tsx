import { btnSectionsMock } from "@/utils/btnSectionsMock";
import { Card, Flex, Group, Image, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";

export default function BtnSections() {

  const buttons = btnSectionsMock.map((btn, index) => {
    const { hovered, ref } = useHover();

    return (
      <Card className="object-animated" opacity={0} key={index} ref={ref} component="a" href={btn.link} p={"0"}>
        <Flex w={"9rem"} h={"7rem"} direction={"column"} justify={"space-between"}>
          <Flex flex={"1"} direction={"column"} justify={"center"} align={"center"} gap={"xs"}>
            <Image src={btn.src} w={"40"} alt={btn.alt} />
            <Text ta={"center"} fw={"bold"} fz={"sm"} inline>
              {btn.titulo}
            </Text>
          </Flex>
          <Group bg={btn.cor} h={hovered ? "10" : "7"} w={"100%"} style={{
            transitionDuration: ".1s"
          }}></Group>
        </Flex>
      </Card>
    )
  });

  return (
    <>
      <Flex pos={"relative"} w={"90vw"} m={"auto"} style={{
        overflowX: "auto",
      }}>
        <Flex gap={"sm"} m={"auto"}>
          {buttons}
        </Flex>
      </Flex>
    </>
  );
}
