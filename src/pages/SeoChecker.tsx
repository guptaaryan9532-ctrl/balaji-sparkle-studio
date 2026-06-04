import { useEffect, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { services } from "@/data/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Loader2, RefreshCw } from "lucide-react";

const VERIFICATION_CONTENT = "pZXw5EyNd5pjd2R1PYqQgtFC0Sm83V_bs04QIoi0HN4";

const PUBLIC_ROUTES = [
  "/",
  "/services",
  "/portfolio",
  "/about",
  "/contact",
  ...services.map((s) => `/services/${s.id}`),
];

type Status = "pending" | "pass" | "fail";

interface CheckResult {
  label: string;
  status: Status;
  detail: string;
}

const StatusIcon = ({ status }: { status: Status }) => {
  if (status === "pending") return <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />;
  if (status === "pass") return <CheckCircle2 className="h-5 w-5 text-green-500" />;
  return <XCircle className="h-5 w-5 text-destructive" />;
};

const ResultRow = ({ result }: { result: CheckResult }) => (
  <div className="flex items-start gap-3 rounded-lg border border-border bg-card/50 p-3">
    <StatusIcon status={result.status} />
    <div className="min-w-0">
      <p className="font-medium text-foreground">{result.label}</p>
      <p className="break-words text-sm text-muted-foreground">{result.detail}</p>
    </div>
  </div>
);

const SeoChecker = () => {
  const [metaCheck, setMetaCheck] = useState<CheckResult>({
    label: "Google verification meta tag",
    status: "pending",
    detail: "Checking document head…",
  });
  const [sitemapCheck, setSitemapCheck] = useState<CheckResult>({
    label: "/sitemap.xml",
    status: "pending",
    detail: "Fetching…",
  });
  const [robotsCheck, setRobotsCheck] = useState<CheckResult>({
    label: "/robots.txt",
    status: "pending",
    detail: "Fetching…",
  });
  const [routeChecks, setRouteChecks] = useState<CheckResult[]>(
    PUBLIC_ROUTES.map((r) => ({ label: r, status: "pending", detail: "Fetching…" })),
  );

  const runChecks = useCallback(async () => {
    // 1. Verification meta tag (lives in static index.html head)
    const tag = document.querySelector<HTMLMetaElement>(
      'meta[name="google-site-verification"]',
    );
    if (tag && tag.content === VERIFICATION_CONTENT) {
      setMetaCheck({
        label: "Google verification meta tag",
        status: "pass",
        detail: `Present with expected content (${VERIFICATION_CONTENT.slice(0, 12)}…).`,
      });
    } else if (tag) {
      setMetaCheck({
        label: "Google verification meta tag",
        status: "fail",
        detail: `Found but content mismatch: "${tag.content}".`,
      });
    } else {
      setMetaCheck({
        label: "Google verification meta tag",
        status: "fail",
        detail: "Not found in document head.",
      });
    }

    // 2. sitemap.xml
    setSitemapCheck({ label: "/sitemap.xml", status: "pending", detail: "Fetching…" });
    try {
      const res = await fetch("/sitemap.xml", { cache: "no-store" });
      const text = await res.text();
      const ok = res.ok && text.includes("<urlset");
      const urlCount = (text.match(/<loc>/g) || []).length;
      setSitemapCheck({
        label: "/sitemap.xml",
        status: ok ? "pass" : "fail",
        detail: ok
          ? `HTTP ${res.status} · valid urlset with ${urlCount} URL(s).`
          : `HTTP ${res.status} · not a valid sitemap.`,
      });
    } catch (e) {
      setSitemapCheck({
        label: "/sitemap.xml",
        status: "fail",
        detail: `Request failed: ${(e as Error).message}`,
      });
    }

    // 3. robots.txt
    setRobotsCheck({ label: "/robots.txt", status: "pending", detail: "Fetching…" });
    try {
      const res = await fetch("/robots.txt", { cache: "no-store" });
      const text = await res.text();
      const hasSitemap = /Sitemap:\s*\S+/i.test(text);
      const ok = res.ok && /User-agent:/i.test(text);
      setRobotsCheck({
        label: "/robots.txt",
        status: ok ? "pass" : "fail",
        detail: ok
          ? `HTTP ${res.status} · ${hasSitemap ? "references a sitemap." : "no Sitemap directive."}`
          : `HTTP ${res.status} · invalid robots.txt.`,
      });
    } catch (e) {
      setRobotsCheck({
        label: "/robots.txt",
        status: "fail",
        detail: `Request failed: ${(e as Error).message}`,
      });
    }

    // 4. Public routes respond
    setRouteChecks(PUBLIC_ROUTES.map((r) => ({ label: r, status: "pending", detail: "Fetching…" })));
    const results = await Promise.all(
      PUBLIC_ROUTES.map(async (route) => {
        try {
          const res = await fetch(route, { cache: "no-store" });
          return {
            label: route,
            status: res.ok ? ("pass" as Status) : ("fail" as Status),
            detail: `HTTP ${res.status}`,
          };
        } catch (e) {
          return {
            label: route,
            status: "fail" as Status,
            detail: `Request failed: ${(e as Error).message}`,
          };
        }
      }),
    );
    setRouteChecks(results);
  }, []);

  useEffect(() => {
    runChecks();
  }, [runChecks]);

  return (
    <>
      <Helmet>
        <title>Internal SEO Checker</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Internal SEO Checker</h1>
            <p className="text-muted-foreground">
              Verifies the Google verification meta tag, sitemap/robots responses, and that all
              public routes respond.
            </p>
          </div>
          <Button onClick={runChecks} variant="outline" className="shrink-0">
            <RefreshCw className="h-4 w-4" /> Re-run
          </Button>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Core SEO files</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ResultRow result={metaCheck} />
              <ResultRow result={sitemapCheck} />
              <ResultRow result={robotsCheck} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Public routes ({PUBLIC_ROUTES.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {routeChecks.map((r) => (
                <ResultRow key={r.label} result={r} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SeoChecker;
