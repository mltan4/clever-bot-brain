import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <Navigate to="/shopify/$slide" params={{ slide: "1" }} replace />,
});
