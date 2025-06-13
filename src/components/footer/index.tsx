import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--marsilii-primary)] py-9 px-8">
      <div className="flex flex-col sm:flex-row gap-8 items-center justify-between max-w-[1250px] w-full mx-auto">
        <Link href="/">
          <Image
            src="/img/logo-white.png"
            alt="Logo"
            width={235}
            height={40}
            className="w-[235px] h-[40px]"
          />
        </Link>

        <div className="flex flex-col items-start sm:items-end font-thin text-sm gap-1 sm:text-end text-white">
          <p>© 2024 Marsilii Serrature SRL. Tutti i diritti riservati.</p>
          <p>Leader nella sicurezza dal 1970</p>
          <p>P.I. C.F. 01937080685</p>
        </div>
      </div>
    </footer>
  );
}
