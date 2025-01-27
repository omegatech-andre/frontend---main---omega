import '@mantine/core/styles.css';
import type { Metadata } from "next";
import "../styles/globals.css";
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '@/styles/theme';

export const metadata: Metadata = {
  title: "Ômega Screen | Tintas Serigráficas",
  description: "Indústria especializada em tintas serigráficas, produzindo um padrão de qualidade desde 2021 é referência em Pernambuco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme='auto' />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme='auto'>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
