import { carouselMockEstampador } from "@/utils/carouselMockEstampador";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function CarouselEstampador() {
  const autoplay = useRef(Autoplay({
    delay: 2000,
  }));

  const slides = carouselMockEstampador.map((url, index) => (
    <Carousel.Slide key={index}>
      <Image src={url} h={"500"} style={{
        objectPosition: "right",
        objectFit: "contain"
      }} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Carousel
        className="object-animated"
        opacity={"0"}
        loop
        withControls={false}
        height={"auto"}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
    </>
  );
}
