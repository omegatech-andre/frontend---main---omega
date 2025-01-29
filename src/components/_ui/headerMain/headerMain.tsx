import themeDevices from "@/styles/themeDevices";
import { carouselMockImages } from "@/utils/carouselMockImages";
import { Carousel } from "@mantine/carousel";
import { Button, Card, Flex, Image, Stack, Text } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import BtnSections from "../btnSections/btnSections";

export default function HeaderMain() {
  const { isMobile } = themeDevices();
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  const slides = carouselMockImages.map((url, index) => (
    <Carousel.Slide key={index}>
      <Image src={url} h={"60vh"} opacity={".4"} style={{
        objectPosition: "right"
      }} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Stack gap={"lg"} bg={"linear-gradient(180deg, #950000 0%, #292626 100%)"} p={"lg"}>
        <Flex component={"span"} style={{ overflow: "hidden" }} justify={"space-between"} w={"90vw"} m={"0 auto"}>
          <Button className="object-animated" opacity={0} variant="outline" color={"white"} component="a" href="/">Início</Button>
          <Button className="object-animated" opacity={0} variant="outline" color={"white"} component="a" href="/boletim-tecnico">Boletim Téc.</Button>
        </Flex>
        <Card w={"90vw"} m={"0 auto"} p={0} radius={"sm"} bg={"none"} pos={"relative"}>
          <Carousel
            className="object-animated"
            opacity={0}
            loop
            withControls={false}
            height={"auto"}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            {slides}
          </Carousel>
          <Flex pos={"absolute"} w={"100%"} h={"100%"} justify={"center"} direction={"column"} ta={"center"} align={"center"} p={"xl"} pt={"0"}>
            <Image className="object-animated" opacity={0} src={"./images/logo/logo-01.webp"} w={isMobile ? "12rem" : "20rem"} />
            <Text className="object-animated" opacity={0} fz={isMobile ? "30" : "64"} fw={"bold"} c={"white"} inline style={{
              textShadow: "2px 2px #232323"
            }}>
              SOMOS A ÔMEGA
            </Text>
            <Text className="object-animated" opacity={0} fz={isMobile ? "sm" : "md"} fw={"bold"} c={"white"} w={"33rem"} maw={"80vw"} style={{
              textShadow: "2px 2px #232323"
            }}>
              A Ômega é uma Indústria especializada em tintas serigráficas, produzindo esse padrão de qualidade desde 2021, tornando-se referência em Caruaru - PE.
            </Text>
          </Flex>
        </Card>
        <BtnSections />
      </Stack>
    </>
  );
}
