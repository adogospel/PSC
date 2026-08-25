import {
  BookOpen,
  CheckCircle2,
  Download,
  HandHeart,
  MessageCircle,
  PlayCircle,
  Share2,
} from "lucide-react";

import { Link } from "react-router";

import { Avatar, Badge } from "@/components/ui/Feedback";

import Button from "@/components/ui/Button";

import { cn, formatNumber } from "@/lib/utils";

type Prayer = {
  slug: string;

  category: string;

  title: string;

  excerpt: string;

  author: string;

  date: string;

  prayedCount: number;

  commentsCount: number;

  answered: boolean;
};

export function PrayerCard({
  prayer,

  className,
}: {
  prayer: Prayer;

  className?: string;
}) {
  return (
    <article
      data-reveal
      className={cn(
        "surface flex h-full flex-col rounded-4xl p-5 sm:p-6",

        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <Badge>{prayer.category}</Badge>

        {prayer.answered && (
          <span className="text-success inline-flex items-center gap-1.5 text-xs font-bold">
            <CheckCircle2 size={15} />
            Prière exaucée
          </span>
        )}
      </div>

      <Link to={`/prieres/${prayer.slug}`} className="mt-5">
        <h3 className="text-ink hover:text-orange-deep font-serif text-2xl font-semibold tracking-[-0.03em] transition">
          {prayer.title}
        </h3>
      </Link>

      <p className="text-muted mt-3 flex-1 text-sm leading-7">{prayer.excerpt}</p>

      <div className="border-line/70 mt-6 flex items-center gap-3 border-t pt-5">
        <Avatar name={prayer.author} />

        <div>
          <p className="text-ink text-sm font-semibold">{prayer.author}</p>

          <p className="text-muted text-xs">{prayer.date}</p>
        </div>
      </div>

      <div className="bg-orange-light/10 text-ink mt-5 rounded-2xl px-4 py-3 text-sm font-semibold">
        🙏 {formatNumber(prayer.prayedCount)} personnes ont prié
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button size="sm">
          <HandHeart size={15} />
          Amen
        </Button>

        <Button variant="secondary" size="sm">
          <MessageCircle size={15} />
          {prayer.commentsCount} prières
        </Button>

        <Button variant="ghost" size="sm" aria-label="Partager">
          <Share2 size={15} />
        </Button>
      </div>
    </article>
  );
}

export function StatCard({
  value,

  label,
}: {
  value: number;

  label: string;
}) {
  return (
    <div data-reveal className="border-line/70 rounded-3xl border bg-white/65 p-6 text-center">
      <strong className="text-gradient font-serif text-4xl font-semibold">
        {formatNumber(value)}
      </strong>

      <p className="text-muted mt-2 text-sm font-medium">{label}</p>
    </div>
  );
}

export function TestimonyCard({
  name,

  text,
}: {
  name: string;

  text: string;
}) {
  return (
    <article
      data-reveal
      className="surface min-w-[82vw] snap-start rounded-4xl p-6 sm:min-w-[430px]"
    >
      <p className="text-ink font-serif text-2xl leading-9">“{text}”</p>

      <div className="mt-6 flex items-center gap-3">
        <Avatar name={name} />

        <div>
          <p className="text-sm font-bold">{name}</p>

          <p className="text-muted text-xs">Témoignage validé</p>
        </div>
      </div>
    </article>
  );
}

export function EbookCard({
  title,

  author,

  category,

  pages,
}: {
  title: string;

  author: string;

  category: string;

  pages: number;
}) {
  return (
    <article data-reveal className="surface rounded-4xl p-5">
      <div className="from-orange-light/20 via-peach/30 to-red-warm/15 grid aspect-[4/5] place-items-center rounded-3xl bg-gradient-to-br">
        <BookOpen className="text-orange-deep" size={46} />
      </div>

      <Badge className="mt-5">{category}</Badge>

      <h3 className="mt-3 font-serif text-2xl font-semibold">{title}</h3>

      <p className="text-muted mt-2 text-sm">
        {author} · {pages} pages
      </p>

      <Button variant="secondary" size="sm" className="mt-5 w-full">
        <Download size={15} />
        Télécharger
      </Button>
    </article>
  );
}

export function SermonCard({
  title,

  preacher,

  category,

  duration,
}: {
  title: string;

  preacher: string;

  category: string;

  duration: string;
}) {
  return (
    <article data-reveal className="surface overflow-hidden rounded-4xl">
      <div className="from-ink relative grid aspect-video place-items-center bg-gradient-to-br to-[#5c3426]">
        <span className="text-orange-deep shadow-float grid size-14 place-items-center rounded-full bg-white/90">
          <PlayCircle size={28} />
        </span>

        <span className="absolute right-3 bottom-3 rounded-full bg-black/45 px-2.5 py-1 text-xs font-semibold text-white">
          {duration}
        </span>
      </div>

      <div className="p-5">
        <Badge>{category}</Badge>

        <h3 className="mt-3 font-serif text-2xl font-semibold">{title}</h3>

        <p className="text-muted mt-2 text-sm">{preacher}</p>
      </div>
    </article>
  );
}
