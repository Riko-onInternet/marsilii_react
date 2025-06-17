import { ReactNode } from "react";

export default function Hero({
  title,
  subtitle,
  size,
  src,
  children,
}: {
  title: string;
  subtitle?: string;
  size?: "sm" | "md";
  src?: string;
  children?: ReactNode;
}) {
  const backgroundImage = src || "/img/bannermarsilii-1024x453.jpg";

  return (
    <div
      className={`${
        size === "sm" ? "h-[315px]" : "h-[400px]"
      } flex items-center justify-center relative`}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <p className="text-4xl md:text-6xl font-bold text-[var(--marsilii-primary)]">
          {title}
        </p>
        {subtitle && (
          <p className="text-base md:text-xl text-[var(--marsilii-primary)] max-w-[800px] w-full opacity-75 px-6">
            {subtitle}
          </p>
        )}
        {children && <div>{children}</div>}
      </div>
    </div>
  );
}
