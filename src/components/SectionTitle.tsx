interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex w-full items-center gap-4">
        <span className="h-px flex-1 bg-border" />
        <h2 className="font-heading text-2xl font-extrabold text-foreground md:text-3xl">{title}</h2>
        <span className="h-px flex-1 bg-border" />
      </div>
      {subtitle && <p className="max-w-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
