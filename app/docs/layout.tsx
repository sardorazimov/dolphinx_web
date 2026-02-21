import { DocsSidebar, DocsMobileNav } from "@/components/shared/docs-sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex">
      <DocsSidebar />
      <div className="flex-1 min-w-0">
        <DocsMobileNav />
        <main className="px-6 md:px-10 py-10 max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  );
}

