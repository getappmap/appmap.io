type Props = {
  className?: string;
};

export function LanguageCoverage({ className = "" }: Props) {
  return (
    <div className={className}>
      <p className="text-[15px] leading-[1.6] text-[#a99fc7]">
        AppMap records Java, Kotlin, Python, Ruby, and Node.js (TypeScript and JavaScript). In alpha: .NET, React, Swift, and Go.
      </p>
      <p className="mt-2 text-[14px] leading-[1.6] text-[#a99fc7]">
        Looking for support for your language or stack? New languages appear first on{" "}
        <a
          href="https://github.com/getappmap"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#ff07aa] hover:underline"
        >
          our GitHub
        </a>
        .
      </p>
    </div>
  );
}
