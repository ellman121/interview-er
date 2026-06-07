import { api } from "@/src/api/client";
import { useQuery } from "@tanstack/react-query";

export function useCourseList() {
  return useQuery({
    queryKey: [api.getCourses.name],
    queryFn: async () => await api.getCourses(),
  });
}

export function useCourseDetails(courseId?: string) {
  return useQuery({
    queryKey: [api.getCourseDetail.name, courseId],
    queryFn: async () => await api.getCourseDetail(courseId ?? ""),
    enabled: !!courseId,
  });
}
