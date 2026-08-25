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
    <section className="border-line/70 relative overflow-hidden border-b py-16 sm:py-20">
      <div className="halo -top-32 -right-24" />

      <Container className="relative">
        <p className="text-orange-deep mb-4 text-sm font-bold tracking-[0.2em] uppercase">
          {eyebrow}
        </p>

        <h1 className="text-ink max-w-4xl font-serif text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
          {title}
        </h1>

        <p className="text-muted mt-5 max-w-2xl text-lg leading-8">{description}</p>
      </Container>
    </section>
  );
}
