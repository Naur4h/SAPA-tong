"use client";

export default function MobileShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh w-full justify-center bg-primary">
      <div className="relative flex min-h-dvh w-full max-w-[430px] flex-col bg-cream shadow-2xl">
        {children}
      </div>
    </div>
  );
}