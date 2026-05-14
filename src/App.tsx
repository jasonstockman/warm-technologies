import { ArrowUpRight, Flame, Mail } from 'lucide-react';
import type { MouseEvent } from 'react';

import { Button } from './components/ui/button';

const emailUser = 'hello';
const emailDomain = 'warm';
const emailTld = 'io';
const emailAddress = `${emailUser}@${emailDomain}.${emailTld}`;

function App() {
  const handleEmailClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <main className="min-h-screen text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklch,var(--accent)_18%,transparent),transparent_34rem)]" />
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-5 sm:px-8 sm:py-8">
        <header className="flex items-center justify-between gap-4">
          <a
            href="#top"
            className="inline-flex items-center gap-3 text-sm font-medium tracking-tight text-foreground no-underline"
          >
            <span className="flex size-8 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground shadow-sm">
              <Flame className="size-4" />
            </span>
            Warm Technologies
          </a>
          <a
            href="https://warm.io"
            className="hidden items-center gap-1 text-sm text-muted-foreground no-underline transition hover:text-foreground sm:inline-flex"
          >
            warm.io
            <ArrowUpRight className="size-3.5" />
          </a>
        </header>

        <section id="top" className="flex flex-1 items-center py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center rounded-full border border-border bg-card/70 px-3 py-1.5 text-sm text-muted-foreground shadow-sm backdrop-blur">
              Warm Technologies LLC
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Making frontier technology more warm and human.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              We are a full-stack website and software development company with a focus on AI-powered tooling.
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">
              The company exists to make cutting-edge technology accessible, practical, and easy for humans to use. We believe the best software should reduce friction, clarify decisions, and feel calm in the hands of the people who rely on it.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <EmailButton onClick={handleEmailClick} />
              <p className="text-sm text-muted-foreground">
                Small, thoughtful systems for teams that care about craft.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-3 pb-10 sm:grid-cols-3">
          <SimpleCard title="Websites" copy="Clear, fast marketing sites and product surfaces." />
          <SimpleCard title="Software" copy="Full-stack apps, dashboards, internal tools, and integrations." />
          <SimpleCard title="AI tooling" copy="Human-centered workflows that make new models actually useful." />
        </section>

        <section className="pb-20">
          <a
            href="https://warm.io"
            className="group block rounded-3xl border border-border bg-card/70 p-5 text-foreground no-underline shadow-sm backdrop-blur transition hover:border-primary/30 hover:bg-card"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-5">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-3xl border border-border bg-card text-muted-foreground shadow-sm sm:size-20">
                  <Flame className="size-8 sm:size-10" strokeWidth={1.75} />
                </span>
                <div>
                  <h2 className="text-base font-medium tracking-[-0.02em]">Warm</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                    Our work is connected to Warm, the personal finance platform at warm.io. It reflects the same philosophy: modern software should make complex systems easier to understand, less intimidating, and more useful in everyday life.
                  </p>
                </div>
              </div>
              <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition group-hover:text-foreground" />
            </div>
          </a>
        </section>

        <footer className="border-t border-border py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Warm Technologies LLC
        </footer>
      </div>
    </main>
  );
}

function EmailButton({ onClick }: { onClick: (event: MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <Button asChild size="lg" className="w-fit">
      <a href="#contact" onClick={onClick} aria-label="Email Warm Technologies">
        <Mail className="size-4" />
        <ObfuscatedEmail />
        <ArrowUpRight className="size-4" />
      </a>
    </Button>
  );
}

function ObfuscatedEmail() {
  return (
    <span aria-hidden="true" className="inline-flex items-baseline gap-0 whitespace-nowrap">
      <span>{emailUser}</span>
      <span className="select-none" data-at="true">
        &#64;
      </span>
      <span>{emailDomain}</span>
      <span className="select-none">.</span>
      <span>{emailTld}</span>
    </span>
  );
}

function SimpleCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="p-5">
      <h2 className="text-base font-medium tracking-[-0.02em]">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
    </div>
  );
}

export default App;
