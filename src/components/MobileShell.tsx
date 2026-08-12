"use client";

export default function MobileShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full justify-center bg-primary [@supports(height:100dvh)]:min-h-dvh">
      <div className="relative flex min-h-screen w-full max-w-[430px] flex-col bg-cream shadow-2xl [@supports(height:100dvh)]:min-h-dvh">
        {children}
      </div>
    </div>
  );
}