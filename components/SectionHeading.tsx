import Reveal from "./Reveal";
export default function SectionHeading({
  title,
  sub,
}: {
  title: string;
  sub: string;
}) {
  return (
    <Reveal className="section-heading">
      <h2>{title}</h2>
      <p className="mx-auto mt-4 text-center">{sub}</p>
    </Reveal>
  );
}
