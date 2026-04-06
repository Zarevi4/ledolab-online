import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import CasePageClient from "./CasePageClient";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ id: cs.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const cs = caseStudies.find((c) => c.id === id);
    if (!cs) return { title: "Кейс не найден" };
    return {
      title: `${cs.title} — LedoLab`,
      description: cs.subtitle,
    };
  });
}

export default async function CasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cs = caseStudies.find((c) => c.id === id);
  if (!cs) notFound();
  return <CasePageClient caseStudy={cs} />;
}
