"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { PET_NAMES_BY_TYPE } from "./petNames";

type PetType = keyof typeof PET_NAMES_BY_TYPE;

export default function Home() {
  const [pet, setPet] = useState<PetType | "">("");
  const petDataExists = pet && Object.keys(PET_NAMES_BY_TYPE).includes(pet);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPet(event.target.value as PetType);
  };

  useEffect(() => {
    if (petDataExists) {
      PET_NAMES_BY_TYPE[pet]().then((data) => {
        console.log("pet data:", data.default);
      });

      return;
    }

    console.log("No pet data");
  }, [pet]);

  return (
    <>
      <label htmlFor="pet-select">Choose a pet:</label>
      <select name="pets" id="pet-select" onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
    </>
  );
}
