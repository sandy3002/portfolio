type RuleProps = {
  className?: string;
};

export default function Rule({ className = "" }: RuleProps) {
  return (
    <hr
      className={`border-0 border-t border-rule w-full max-w-xs ${className}`}
      aria-hidden="true"
    />
  );
}
