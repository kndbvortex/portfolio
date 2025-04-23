import { writable } from "svelte/store";

export const currentRoute = writable<string>(window.location.pathname || "/");

export function navigate(path: string): void {
  window.history.pushState({ path }, "", path);
  currentRoute.set(path);
}

window.addEventListener("popstate", (event) => {
  const path = event.state?.path || window.location.pathname;
  currentRoute.set(path);
});

window.history.replaceState(
  { path: window.location.pathname },
  "",
  window.location.pathname
);
