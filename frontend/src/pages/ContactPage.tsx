import PageHero from "@/components/common/PageHero";

import Container from "@/components/common/Container";

import Button from "@/components/ui/Button";

import { Field, Input, Textarea } from "@/components/ui/FormControls";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Nous écrire"
        description="Une question, un retour ou un besoin concernant la communauté ?"
      />

      <Container className="py-14">
        <form
          className="surface mx-auto grid max-w-2xl gap-5 rounded-4xl p-7"
          onSubmit={(event) => event.preventDefault()}
        >
          <Field label="Nom">
            <Input placeholder="Votre nom" />
          </Field>

          <Field label="Email">
            <Input type="email" placeholder="vous@exemple.com" />
          </Field>

          <Field label="Sujet">
            <Input placeholder="Objet de votre message" />
          </Field>

          <Field label="Message">
            <Textarea placeholder="Votre message..." />
          </Field>

          <Button className="justify-self-start">Envoyer</Button>
        </form>
      </Container>
    </>
  );
}
