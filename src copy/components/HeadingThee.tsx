export default function HeadingThee({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h3 className="text-md font-medium mt-4">{children}</h3>;
}
