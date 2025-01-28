"use client"
import themeDevices from "@/styles/themeDevices";
import { carouselMockImages } from "@/utils/carouselMockImages";
import { Carousel } from "@mantine/carousel";
import { Button, Card, Flex, Image, Stack, Text } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function HeaderMain() {
  const { isDesktop, isMobile } = themeDevices();
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
      <Stack gap={"lg"} bg={"linear-gradient(180deg, #950000 0%, #292626 100%)"}>
        <Flex justify={"space-between"} px={isDesktop ? "10rem" : "lg"} pt={"lg"}>
          <Button variant="outline" color="white" component="a" href="/">Início</Button>
          <Button variant="outline" color="white" component="a" href="/boletim-tecnico">Boletim Téc.</Button>
        </Flex>
        <Card mx={isDesktop ? "10rem" : "lg"} m={"auto"} p={0} radius={"md"} bg={"none"} pos={"relative"}>
          <Carousel
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
            <Image src={"./images/logo/logo-01.webp"} w={isMobile ? "12rem" : "20rem"} />
            <Text fz={isMobile ? "32" : "64"} fw={"bold"} inline style={{
              textShadow: "2px 2px #232323"
            }}>
              SOMOS A ÔMEGA
            </Text>
            <Text fz={isMobile ? "sm" : "md"} fw={"bold"} w={"33rem"} maw={"80vw"} style={{
              textShadow: "2px 2px #232323"
            }}>
              A Ômega é uma Indústria especializada em tintas serigráficas, produzindo esse padrão de qualidade desde 2021, tornando-se referência em Caruaru - PE.
            </Text>
          </Flex>
        </Card>
        {/* TODO - adicionar botões de sessoes */}
      </Stack>
    </>
  );
}
