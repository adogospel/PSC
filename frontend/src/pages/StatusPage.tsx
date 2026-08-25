import { useQuery } from "@tanstack/react-query";

import { CheckCircle2, CircleX } from "lucide-react";

import PageHero from "@/components/common/PageHero";

import Container from "@/components/common/Container";

import { Skeleton } from "@/components/ui/Feedback";

import { getHealth } from "@/services/api";

export default function StatusPage() {
  const query = useQuery({
    queryKey: ["health"],

    queryFn: getHealth,

    refetchInterval: 30_000,
  });

  return (
    <>
      <PageHero
        eyebrow="Technique"
        title="État de la fondation"
        description="Cette page permet de vérifier la communication entre React, FastAPI et MongoDB pendant le développement."
      />

      <Container className="py-14">
        {query.isPending ? (
          <Skeleton className="mx-auto h-44 max-w-xl" />
        ) : (
          <div className="surface mx-auto max-w-xl rounded-4xl p-7">
            {query.isError ? (
              <div className="text-red-warm flex gap-3">
                <CircleX />

                <div>
                  <h2 className="font-bold">Backend indisponible</h2>

                  <p className="text-muted mt-2 text-sm">
                    Démarre FastAPI et MongoDB puis recharge la page.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-success flex gap-3">
                <CheckCircle2 />

                <div>
                  <h2 className="font-bold">Fondation opérationnelle</h2>

                  <dl className="text-muted mt-4 grid gap-2 text-sm">
                    <div>API : {query.data.status}</div>

                    <div>Base : {query.data.database}</div>

                    <div>Environnement : {query.data.environment}</div>
                  </dl>
                </div>
              </div>
            )}
          </div>
        )}
      </Container>
    </>
  );
}
