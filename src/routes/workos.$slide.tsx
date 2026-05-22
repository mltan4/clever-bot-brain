import { createFileRoute, notFound } from "@tanstack/react-router";
import { workosSlides } from "@/decks/workos";

export const Route = createFileRoute("/workos/$slide")({
  component: WorkosSlide,
  notFoundComponent: () => (
    <div className="flex items-center justify-center h-full text-muted-foreground">
      Slide not found
    </div>
  ),
});

function WorkosSlide() {
  const { slide } = Route.useParams();
  const idx = parseInt(slide, 10) - 1;
  if (isNaN(idx) || idx < 0 || idx >= workosSlides.length) throw notFound();
  const Slide = workosSlides[idx];
  return <Slide />;
}
