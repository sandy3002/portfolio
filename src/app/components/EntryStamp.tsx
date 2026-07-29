type EntryStampProps = {
  children: React.ReactNode;
  className?: string;
};

export default function EntryStamp({
  children,
  className = "",
}: EntryStampProps) {
  return (
    <span
      className={`font-mono text-xs uppercase tracking-[0.18em] text-muted ${className}`}
    >
      {children}
    </span>
  );
}
