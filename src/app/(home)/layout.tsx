"use client"
import HeaderMain from "@/components/_ui/headerMain/headerMain";
import { useGSAP } from "@gsap/react";
import { Stack } from "@mantine/core";
import gsap from "gsap";
import { useRef } from "react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const homeLayout = useRef(null);

  useGSAP(() => {
    if (homeLayout.current) {
      gsap
        .set(".object-animated", {
          yPercent: 100,
          opacity: 0,
        });

      gsap
        .timeline()
        .to(".object-animated", {
          opacity: 1,
          yPercent: 0,
          duration: .5,
        });
    }
  }, { scope: homeLayout });

  return (
    <>
      <Stack ref={homeLayout} gap={"0"}>
        <HeaderMain />
        {children}
        footer
      </Stack>
    </>
  );
}
