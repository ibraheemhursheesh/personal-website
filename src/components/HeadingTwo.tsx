export default function HeadingTwo({
  children,

}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-xl font-semibold mt-10 text-blue-800/90">{children}</h2>
  );
}
