import { AppHeader } from "@/components/shared/app-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      <main className="flex-1">{children}</main>
    </>
  );
}
