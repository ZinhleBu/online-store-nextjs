import { ThemeProvider } from "next-themes";

export default function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return <ThemeProvider enableSystem={true} attribute="class">{children}</ThemeProvider>
  
}
