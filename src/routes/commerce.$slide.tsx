import { createFileRoute, notFound } from "@tanstack/react-router";
import { shopifySlides } from "@/decks/shopify";

export const Route = createFileRoute("/commerce/$slide")({
  component: ShopifySlide,
  notFoundComponent: () => (
    <div className="flex items-center justify-center h-full text-muted-foreground">
      Slide not found
    </div>
  ),
});

function CommerceSlide() {
  const { slide } = Route.useParams();
  const idx = parseInt(slide, 10) - 1;
  if (isNaN(idx) || idx < 0 || idx >= commerceSlides.length) throw notFound();
  const Slide = commerceSlides[idx];
  return <Slide />;
}
