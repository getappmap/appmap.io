declare global {
  namespace JSX {
    interface IntrinsicElements {
      "appmap-live-trace": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        scenario?: "web" | "background" | "navie";
        speed?: string;
        static?: boolean;
      };
    }
  }
}

export {};
