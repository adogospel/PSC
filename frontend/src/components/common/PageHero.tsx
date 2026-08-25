import Container from "@/components/common/Container";

type PageHeroProps = {
  eyebrow: string;

  title: string;

  description: string;
};

export default function PageHero({
  eyebrow,

  title,

  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line/70 py-16 sm:py-20">
      <div className="halo -right-24 -top-32" />

      <Container className="relative">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-deep">
          {eyebrow}
        </p>

        <h1 className="max-w-4xl font-serif text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          {description}
        </p>
      </Container>
    </section>
  );
}