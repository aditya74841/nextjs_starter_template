import { PageWrapper } from "@/components/layout/page-wrapper";
import { TodoApp } from "@/components/todo-app";
import { 
  Terminal, 
  Layers, 
  MessageSquare, 
  ShieldAlert, 
  LayoutTemplate 
} from "lucide-react";

export default function Home() {
  return (
    <PageWrapper className="py-12 md:py-24">
      <div className="flex flex-col gap-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4 animate-in fade-in slide-in-from-top-4 duration-500">
            Next.js 16 Starter Template
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Build Faster with <span className="text-primary">Premium</span> Architecture
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            A production-ready starter with Zustand, Shadcn UI, Sonner, and 
            robust Error Boundaries pre-configured.
          </p>
        </section>

        {/* Features Showcase Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <FeatureCard 
            icon={<Layers className="size-5" />}
            title="Zustand CRUD"
            description="Fully typed state management with optimistic updates and async API calls."
          />
          <FeatureCard 
            icon={<MessageSquare className="size-5" />}
            title="Sonner Toasts"
            description="Professional, interactive notifications for every system action."
          />
          <FeatureCard 
            icon={<ShieldAlert className="size-5" />}
            title="Error Boundaries"
            description="Global and local error isolation to keep your app alive and resilient."
          />
          <FeatureCard 
            icon={<LayoutTemplate className="size-5" />}
            title="Clean Layouts"
            description="Consistent PageWrapper and responsive design using Tailwind 4."
          />
        </section>

        {/* Live Demo Section */}
        <section className="flex flex-col items-center space-y-8 py-8 border-y border-border/50">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Live CRUD Demo</h2>
            <p className="text-muted-foreground">Try it yourself. State is managed by Zustand.</p>
          </div>
          
          <TodoApp />
        </section>

        {/* Getting Started Section */}
        <section className="max-w-xl mx-auto w-full">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="size-5 text-primary" />
              <h3 className="font-semibold text-lg">Next Steps</h3>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>1. Edit <code className="bg-muted px-1.5 py-0.5 rounded text-foreground font-mono">src/app/page.tsx</code> to start building.</p>
              <p>2. Add new stores in <code className="bg-muted px-1.5 py-0.5 rounded text-foreground font-mono">src/store/</code>.</p>
              <p>3. Customize your theme in <code className="bg-muted px-1.5 py-0.5 rounded text-foreground font-mono">src/app/globals.css</code>.</p>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/20 hover:shadow-md transition-all">
      <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
