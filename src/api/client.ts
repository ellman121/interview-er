import { courseDetails, courses } from "../data/mock-data";
import type { Course, CourseDetail } from "./types";

/**
 * Toggle this to simulate network failure.
 * When true, all API calls will reject with a network error.
 */
export const SIMULATE_OFFLINE = false;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function maybeReject(): void {
  if (SIMULATE_OFFLINE) {
    throw new Error("Network request failed. Please check your connection.");
  }
}

export const api = {
  async getCourses(): Promise<Course[]> {
    await delay(300);
    maybeReject();
    return courses;
  },

  async getCourseDetail(id: string): Promise<CourseDetail> {
    await delay(500);
    maybeReject();
    const detail = courseDetails[id];
    if (!detail) {
      throw new Error(`Course with id "${id}" not found.`);
    }
    return detail;
  },
};
