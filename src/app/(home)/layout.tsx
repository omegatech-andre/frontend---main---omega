import HeaderMain from "@/components/_ui/headerMain/headerMain";
import { Stack } from "@mantine/core";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Stack gap={"0"}>
        <HeaderMain />
        {children}
        footer
      </Stack>
    </>
  );
}
