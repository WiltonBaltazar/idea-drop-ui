import api from "@/lib/axios";
import type { Idea } from "@/types";

//Fetch all ideas
export const fetchIdeas = async (): Promise<Idea[]> => {
  const res = await api.get('/ideas');
  return res.data;
}

//Fetch Idea
export const fetchIdea = async (ideaId: string): Promise<Idea> => {
  const res = await api.get(`/ideas/${ideaId}`);
  return res.data;
};