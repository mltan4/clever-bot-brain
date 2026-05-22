import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <Navigate to="/workos/$slide" params={{ slide: "1" }} replace />,
});
