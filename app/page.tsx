import { DrawerDemo } from "@/components/drawer/DrawerDemo";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <h1 className="text-xl font-bold mb-4 md:text-2xl">Nested Menu Drawer</h1>
      <DrawerDemo />
    </main>
  );
}
