import { useScramble } from '../../hooks/useScramble';

interface ScrambleTextProps {
  readonly text: string;
  readonly className?: string;
}

export function ScrambleText({ text, className }: ScrambleTextProps) {
  const output = useScramble(text);
  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{output}</span>
    </span>
  );
}
