export default function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center max-w-[300px] w-full gap-4"
    >
      <div className="w-16 h-16 rounded-full bg-[var(--marsilii-background-secondary)] flex items-center justify-center">
        <icon size={32} />
      </div>
      <p className="font-semibold text-center text-xl">{title}</p>
      <p className="text-center">{description}</p>
    </div>
  );
}
