type Boldness = "always" | "never" | "responsive";

export default function CodeLine({
  children,
  isBold = "responsive",
}: {
  children: React.ReactNode;
  isBold?: Boldness;
}) {
  return (
    <code
      style={{ fontFamily: "inherit" }}
      className={`bg-zinc-200/70 py-0.5 px-1 text-blue-800 rounded text-sm ${isBold === "always" ? "font-bold" : isBold === "responsive" ? "font-normal sm:font-bold tracking-wider" : "font-normal"}`}
    >
      {children}
    </code>
  );
}
