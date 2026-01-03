import { diaryEntries } from "./content";

export async function getDiaryEntries() {
  return diaryEntries;
}

export async function getDiaryEntry(id: string) {
  return diaryEntries.find((entry) => entry.id === id);
}
