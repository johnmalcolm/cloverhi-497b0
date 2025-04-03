import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Clover Hi',
        default: 'Clover Hi | The Celtic Digital Agency'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
          <link rel="icon" href="/favicon.svg" sizes="any" />
        </head>
        <body className="antialiased text-white bg-[#4D9AA7] min-h-screen">
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow flex flex-col">
      {children}
    </main>
    <Footer />
  </div>
</body>
      </html>
    );
}
