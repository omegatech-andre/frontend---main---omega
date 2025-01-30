import themeDevices from "@/styles/themeDevices";
import { Button, Flex, Group, Stack, Text } from "@mantine/core";

export default function Youtube() {
  const { isMobile } = themeDevices();

  return (
    <>
      <Flex w={"100vw"} h={"75vh"} pos={"relative"} justify={"center"} align={"center"}>
        <video src="./videos/youtube/bgMovieYoutube.mp4" width={"100%"} height={"100%"} muted loop autoPlay style={{
          objectFit: "cover",
          opacity: ".3"
        }} />
        <Stack pos={"absolute"} maw={"90vw"}>
          <Group component={"span"} style={{
            overflow: "hidden",
          }}>
            <Text className="object-animated" opacity={"0"} w={"60rem"} maw={"90vw"} component={"h1"} fz={isMobile ? "h3" : "h1"} fw={"bold"} >
              Conheça nosso canal do Youtube
            </Text>
          </Group>
          <Group component={"span"} style={{
            overflow: "hidden",
          }}>
            <Text className="object-animated" opacity={"0"} w={"60rem"} maw={"90vw"} component={"h3"} inline>
              Em nosso canal temos conteúdos sobre serigrafia, esclarecendo as principais dúvidas do mundo silk.
            </Text>
          </Group>
          <Group component={"span"} style={{
            overflow: "hidden",
          }}>
            <Text className="object-animated" opacity={"0"} w={"60rem"} maw={"90vw"} component={"h3"} inline>
              Se você deseja tirar dúvidas sobre serigrafia, clique aqui e conheça o canal mais intenso.
            </Text>
          </Group>
          <Button className="object-animated" opacity={0} component="a" href="https://www.youtube.com/channel/UCwd1QoM-ApQ0c1cBZXpJMKQ" w={"max-content"} m={"auto"}>inscreva-se no nosso canal</Button>
        </Stack>
      </Flex >
    </>
  );
}
