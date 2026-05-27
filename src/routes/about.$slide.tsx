import { createFileRoute, notFound } from "@tanstack/react-router";
import { aboutSlides } from "@/decks/about";

export const Route = createFileRoute("/about/$slide")({
  component: AboutSlide,
  notFoundComponent: () => (
    <div className="flex items-center justify-center h-full text-muted-foreground">
      Slide not found
    </div>
  ),
});

function AboutSlide() {
  const { slide } = Route.useParams();
  const idx = parseInt(slide, 10) - 1;
  if (isNaN(idx) || idx < 0 || idx >= aboutSlides.length) throw notFound();
  const Slide = aboutSlides[idx];
  return <Slide />;
}
