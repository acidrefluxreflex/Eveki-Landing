


export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
    
  <main className="flex min-h-screen flex-col items-center justify-between">
          
          {children}
   
</main>
  
    );
  }

