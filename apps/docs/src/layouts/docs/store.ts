import { Store } from "@tanstack/store";

function createLayoutStore() {
  const store = new Store({
    sidebarState: "closed",
  });

  function setLayoutSidebarState(sidebarState: "docked" | "open" | "closed") {
    store.setState((store) => ({ ...store, sidebarState }));
  }

  return {
    setLayoutSidebarState,
    store,
  };
}

export const layoutStore = createLayoutStore();
