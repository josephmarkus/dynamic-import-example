export const PET_NAMES_BY_TYPE = {
  dog: () => import("../data/data-a.json"),
  cat: () => import("../data/data-b.json"),
  hamster: () => import("../data/data-c.json"),
};
