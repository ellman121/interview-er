import type { Course } from "@/src/api/types";
import { useCourseList } from "@/src/hooks/courses";
import { colors, fontSize, spacing } from "@/src/theme/tokens";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

interface CourseRowProps {
  course: Course;
}

const CourseRow = (props: CourseRowProps) => {
  const router = useRouter();

  return (
    // Some different UI libraries handle this differently, I'm generally a fan
    // of the ones that have `onPress` on all components, but it depends on your
    // UI Library most of the time
    <Pressable
      key={props.course.id}
      style={({ pressed }) => [
        styles.courseRow,
        pressed ? styles.courseRowPressed : undefined,
      ]}
      onPress={() => router.push(`/course/${props.course.id}`)}
    >
      {/* Would obviously consult the design team on which icon to use/etc. */}
      <Ionicons name="book-outline" size={spacing.lg} />
      <View style={styles.courseRowText}>
        <Text style={styles.courseRowTitle}>{props.course.title}</Text>
        <Text style={styles.courseRowSubtitle}>{props.course.subtitle}</Text>
      </View>
    </Pressable>
  );
};

export default function CoursesScreen() {
  const courses = useCourseList();

  if (courses.isLoading) return <Text>LOADING</Text>;

  if (!courses.data) return <Text>No courses found</Text>;

  return (
    <FlatList
      data={courses.data}
      renderItem={({ item: course }) => <CourseRow course={course} />}
      style={styles.list}
      contentContainerStyle={styles.listContainer}
    />
  );
}

// I generall prefer to work with a library like `Linaria`, but for the purposes
// of a demo app, I'll just stick with StyleSheets
const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    flex: 1,
  },
  courseRow: {
    flexDirection: "row",
    padding: spacing.md,
    alignItems: "center",
    gap: spacing.md,
  },
  courseRowPressed: {
    backgroundColor: colors.backgroundInteractive,
  },
  courseRowText: {
    flexDirection: "column",
  },
  courseRowTitle: {
    fontSize: fontSize.xl,
  },
  courseRowSubtitle: {
    fontSize: fontSize.md,
  },
});
