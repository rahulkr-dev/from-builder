import { create } from "zustand";

// Create a store
const useFormBuilderStore = create((set) => ({
  title: "",
  description: "",
  logo: "",
  pages: [
    {
      name: "page1",
      elements: [],
    },
  ],

  // Actions to update state
  setTitle: (newTitle) => set((state) => ({ ...state, title: newTitle })),

  setDescription: (newDescription) => set((state) => ({ ...state, description: newDescription })),

  setLogo: (newLogo) => set((state) => ({ ...state, logo: newLogo })),

  addPage: (newPage) => set((state) => ({ ...state, pages: [...state.pages, newPage] })),

  addElement: (pageName, newElement) =>
    set((state) => {
      const updatedPages = state.pages.map((page) => {
        if (page.name === pageName) {
          return {
            ...page,
            elements: [...page.elements, newElement],
          };
        }
        return page;
      });

      return {
        ...state,
        pages: updatedPages,
      };
    }),
}));

export default useFormBuilderStore;
