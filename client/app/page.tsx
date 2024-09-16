import { Header } from '@/components/layout/header';
import HomePage from '@/components/layout/home-page';

export default function Home() {
  return (
    <main className="flex h-full flex-col bg-background">
      <Header />
      <HomePage />
    </main>
  );
}
