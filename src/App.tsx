import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  ChartNoAxesCombined,
  Check,
  CircleDollarSign,
  Code2,
  Flame,
  LockKeyhole,
  MousePointerClick,
  Sparkles,
  Zap,
} from 'lucide-react';

import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';

const navItems = ['Approach', 'Systems', 'Outcomes', 'Contact'];

const proof = ['B2B SaaS', 'Growth systems', 'Internal tools', 'AI workflows'];

const capabilities = [
  {
    icon: MousePointerClick,
    title: 'Acquire',
    copy: 'Landing pages, attribution, CRM handoffs, and experiments that make demand measurable.',
  },
  {
    icon: Blocks,
    title: 'Operate',
    copy: 'Simple internal tools, automations, and dashboards that remove manual work from the team.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Compound',
    copy: 'Feedback loops across product, marketing, and finance so each launch improves the next one.',
  },
];

const stackItems = ['React', 'Shadcn', 'Supabase', 'Cloudflare', 'PostHog', 'Stripe'];

function App() {
  return (
    <main className="relative isolate overflow-hidden text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(54,43,29,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(54,43,29,0.06)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="group inline-flex items-center gap-3 text-sm font-semibold tracking-tight text-foreground no-underline">
          <span className="flex size-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm shadow-amber-900/10">
            <Flame className="size-4 fill-current" />
          </span>
          Warm Technologies
        </a>
        <nav className="hidden items-center rounded-full border border-border bg-card/70 px-2 py-1 shadow-sm backdrop-blur md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full px-4 py-2 text-sm text-muted-foreground no-underline transition hover:bg-secondary hover:text-foreground">
              {item}
            </a>
          ))}
        </nav>
        <Button asChild size="sm">
          <a href="mailto:hello@warm.io">Start a project</a>
        </Button>
      </header>

      <section id="top" className="mx-auto grid min-h-[calc(100vh-84px)] w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1fr_0.92fr]">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-sm text-muted-foreground shadow-sm backdrop-blur">
            <Sparkles className="size-4 text-amber-700" />
            Simple software systems for companies that want leverage.
          </div>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.055em] text-foreground sm:text-7xl lg:text-8xl">
            Build the warm layer between product, growth, and operations.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
            Warm Technologies LLC designs and ships small, durable SaaS systems: landing pages, dashboards, automations, and AI-assisted workflows that make growing companies feel easier to run.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="mailto:hello@warm.io">
                Work with Warm <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#approach">View the template</a>
            </Button>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {proof.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-card/60 px-4 py-3 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>

        <HeroConsole />
      </section>

      <section id="approach" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Research-informed one-page structure</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Product-led, proof-first, and light enough to understand in one scroll.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Inspired by simple SaaS sites like Linear, Resend, and Dub: compact nav, clear hero, realistic product visuals, early proof, concise feature modules, and a final conversion section.
          </p>
        </div>
      </section>

      <section id="systems" className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-12 sm:px-8 lg:grid-cols-3">
        {capabilities.map((item) => (
          <Card key={item.title} className="bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <item.icon className="size-5" />
              </div>
              <CardTitle className="text-2xl tracking-[-0.03em]">{item.title}</CardTitle>
              <CardDescription className="pt-2 text-base leading-7">{item.copy}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="overflow-hidden bg-primary text-primary-foreground">
          <CardHeader className="p-8 sm:p-10">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/70">
              <Code2 className="size-4" /> System map
            </div>
            <CardTitle className="mt-10 text-4xl leading-tight tracking-[-0.05em] sm:text-5xl">
              A template for a calm, credible company site.
            </CardTitle>
            <CardDescription className="mt-4 text-base leading-7 text-white/65">
              Swap in your offer, product screenshot, proof points, and CTA. The page stays intentionally simple: no maze, no bloat, no gimmicks.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="overflow-hidden bg-card/90 backdrop-blur">
          <CardContent className="p-0">
            <div className="border-b border-border bg-secondary/40 px-5 py-4 font-mono text-xs text-muted-foreground">warm-technologies / launch-plan.ts</div>
            <div className="space-y-3 p-5 font-mono text-sm leading-7">
              {[
                ['01', 'Define the sharp promise and buyer outcome'],
                ['02', 'Show a realistic product or workflow preview'],
                ['03', 'Support it with three concrete capability cards'],
                ['04', 'Name the modern stack and operating advantages'],
                ['05', 'End with one direct, easy-to-answer CTA'],
              ].map(([num, text]) => (
                <div key={num} className="flex items-start gap-4 rounded-2xl border border-border bg-background/70 p-4">
                  <span className="text-amber-700">{num}</span>
                  <span>{text}</span>
                  <Check className="ml-auto size-4 shrink-0 text-amber-700" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="outcomes" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-border bg-card/80 shadow-sm backdrop-blur lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Modern SaaS stack</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Designed for fast shipping without looking disposable.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              The template uses Vite, React, Tailwind, and shadcn-style components so it is easy to customize into a landing page, agency site, internal launch page, or SaaS homepage.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {stackItems.map((item) => (
                <span key={item} className="rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] border-t border-border bg-primary p-8 text-primary-foreground lg:border-l lg:border-t-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,195,106,0.34),transparent_18rem)]" />
            <div className="relative grid h-full content-center gap-4">
              <Metric label="Launch pages" value="1 day" icon={Zap} />
              <Metric label="Manual ops removed" value="40 hrs/mo" icon={BadgeCheck} />
              <Metric label="Secure-by-default flows" value="100%" icon={LockKeyhole} />
              <Metric label="Revenue feedback loops" value="live" icon={CircleDollarSign} />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-5xl px-5 py-24 text-center sm:px-8">
        <div className="rounded-[2rem] border border-border bg-card/80 p-8 shadow-sm backdrop-blur sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Warm Technologies LLC</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Use this as the starting point for a simple company website.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            One page, one message, one next step. Customize the copy and product panels, then connect the button to your real sales or intake flow.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <a href="mailto:hello@warm.io">hello@warm.io</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroConsole() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-amber-300/20 blur-3xl" />
      <Card className="overflow-hidden bg-card/90 shadow-2xl shadow-amber-950/10 backdrop-blur">
        <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-5 py-4">
          <div className="flex gap-2">
            <span className="size-3 rounded-full bg-[#ff6b56]" />
            <span className="size-3 rounded-full bg-[#ffc04d]" />
            <span className="size-3 rounded-full bg-[#38c172]" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">warm.systems</span>
        </div>
        <CardContent className="p-5 sm:p-7">
          <div className="grid gap-4">
            <div className="rounded-3xl border border-border bg-background p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Pipeline health</p>
                  <p className="mt-1 text-3xl font-semibold tracking-[-0.04em]">$128k influenced</p>
                </div>
                <div className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-900">+18%</div>
              </div>
              <div className="mt-6 grid grid-cols-12 items-end gap-1.5">
                {[32, 48, 42, 66, 58, 76, 70, 88, 82, 94, 86, 100].map((height, index) => (
                  <span key={index} className="rounded-t-full bg-primary/90" style={{ height: `${height}px` }} />
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <MiniPanel title="Launch checklist" lines={['Offer page', 'Lead capture', 'Attribution']} />
              <MiniPanel title="Automation queue" lines={['Invoice follow-up', 'CRM sync', 'Digest draft']} />
            </div>
            <div className="rounded-3xl border border-border bg-primary p-5 text-primary-foreground">
              <p className="font-mono text-xs text-white/50">next_action</p>
              <p className="mt-2 text-lg font-medium">Ship the smallest useful system, then measure where it creates warmth.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function MiniPanel({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-3xl border border-border bg-background/75 p-5">
      <p className="font-medium">{title}</p>
      <div className="mt-4 space-y-3">
        {lines.map((line) => (
          <div key={line} className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="size-2 rounded-full bg-amber-600" />
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

function Metric({ label, value, icon: Icon }: { label: string; value: string; icon: typeof Zap }) {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-white/55">{label}</p>
          <p className="mt-1 text-3xl font-semibold tracking-[-0.04em]">{value}</p>
        </div>
        <div className="flex size-11 items-center justify-center rounded-2xl bg-white/10">
          <Icon className="size-5" />
        </div>
      </div>
    </div>
  );
}

export default App;
