"use client"
import themeDevices from "@/styles/themeDevices";
import { pageHomeImages } from "@/utils/pageHomeImages";
import { Card, Flex, Group, Image, Paper, Stack, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";

export default function PageHome() {
  const { isMobile } = themeDevices();

  const images = pageHomeImages.map((img, index) => {
    const { hovered, ref } = useHover();

    return (
      <Card className="object-animated" opacity={"0"} key={index} p={"0"} radius={"sm"} style={{
        scale: hovered ? "1.02" : "1",
        transitionDuration: ".5s",
      }}>
        <Image ref={ref} src={img.src} w={img.width} style={{
          scale: hovered ? "1.05" : "1",
          transitionDuration: ".5s",
        }} />
      </Card>
    );
  });

  return (
    <>
      <Flex direction={"column"} ta={"center"}>
        <Paper className="object-animated" opacity={"0"} h={"7"} radius={"0"} style={{
          background: "linear-gradient(90deg, #E94E4E 0%, #CAE94E 30.21%, #4EE979 51.04%, #4EB1E9 72.92%, #924EE9 100%)",
          backgroundSize: "600% 100%",
          animation: "degradeanimado 8s infinite alternate ease-in-out",
        }} />
        <Stack w={"90vw"} m={"auto"} gap={"0"} align={"center"}>
          <Text className="object-animated" opacity={"0"} component={"h1"} fz={isMobile ? "h3" : "h1"} fw={"bold"} my={isMobile ? "xl" : "50"}>
            Levar mais cor e intensidade  é a nossa missão
          </Text>
          <Group component={"span"} m={"0 auto"} py={"xs"} gap={isMobile ? "8" : ""} style={{
            overflow: "hidden",
          }}>
            {images}
          </Group>
          <Text className="object-animated" opacity={"0"} w={"60rem"} maw={"90vw"} component={"h3"} fz={isMobile ? "h5" : "h4"} my={isMobile ? "xl" : "50"}>
            Disponibilizamos de uma qualidade de alto padrão para as estampas dos nossos clientes e parceiros! Assim, mantendo o padrão Ômega com mais cor e intensidade.
          </Text>
        </Stack>
      </Flex>
    </>
  );
}
