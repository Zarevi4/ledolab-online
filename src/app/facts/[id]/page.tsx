import { notFound } from "next/navigation";
import { facts } from "@/lib/facts-data";
import FactPageClient from "./FactPageClient";

export function generateStaticParams() {
  return facts.map((f) => ({ id: f.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const f = facts.find((x) => x.id === id);
    if (!f) return { title: "Not found" };
    return { title: `${f.titles.ru} - LedoLab`, description: f.texts.ru };
  });
}

export default async function FactPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const fact = facts.find((f) => f.id === id);
  if (!fact) notFound();
  return <FactPageClient fact={fact} />;
}
