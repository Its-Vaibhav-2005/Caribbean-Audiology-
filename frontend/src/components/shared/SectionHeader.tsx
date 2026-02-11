interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ label, title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {label && (
        <span className="inline-block text-primary text-sm font-semibold tracking-wide uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
