import { createFileRoute, notFound } from "@tanstack/react-router";
import { wyzeSlides } from "@/decks/wyze";

export const Route = createFileRoute("/wyze/$slide")({
  component: WyzeSlide,
  notFoundComponent: () => (
    <div className="flex items-center justify-center h-full text-muted-foreground">
      Slide not found
    </div>
  ),
});

function WyzeSlide() {
  const { slide } = Route.useParams();
  const idx = parseInt(slide, 10) - 1;
  if (isNaN(idx) || idx < 0 || idx >= wyzeSlides.length) throw notFound();
  const Slide = wyzeSlides[idx];
  return <Slide />;
}
