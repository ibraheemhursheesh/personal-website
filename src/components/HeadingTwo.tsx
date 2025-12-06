export default function HeadingTwo({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2 className="text-xl font-medium mt-10">{children}</h2>;
}
