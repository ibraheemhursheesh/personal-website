export default function HeadingThee({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h3 className="text-md font-bold tracking-wider mt-4">{children}</h3>;
}
