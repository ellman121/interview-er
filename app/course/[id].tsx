import R from "ramda";
import { useCourseDetails } from "@/src/hooks/courses";
import { colors, fontSize, spacing } from "@/src/theme/tokens";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialType } from "@/src/api/types";

// Would usually make this into a reused component but wont worry about it for
// the demo / take-home-test type thing
interface InfoRowProps {
  left: string;
  right: string | number;
}

const InfoRow = (props: InfoRowProps) => {
  return (
    <View>
      <Text>
        <Text style={styles.left}>{props.left}</Text>: {props.right}
      </Text>
    </View>
  );
};

// Propbably you would create an entire 'MaterialRow' component to handle this
// in the real world
const MaterialTypeDisplayName: Record<MaterialType, string> = {
  document: "Document",
  exam: "Exam",
  flashcard_deck: "Flashcards",
};

export default function CourseDetailScreen() {
  const lsp = useLocalSearchParams<{ id: string }>();
  const courseDetails = useCourseDetails(lsp.id);

  if (courseDetails.isLoading)
    // Would usually add a spinner or something, but agian would need to align
    // with the design team / etc.
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );

  if (!courseDetails.data) return <Text>No courses found</Text>;

  return (
    // Would also want to align with design for what order to show things / etc.
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{courseDetails.data.title}</Text>
        <Text style={styles.subtitle}>Information</Text>
        <InfoRow left="Title" right={courseDetails.data.title} />
        <InfoRow left="Department" right={courseDetails.data.subtitle} />
        <InfoRow left="Exams Count" right={courseDetails.data.examCount} />
        <Text style={styles.subtitle}>Materials</Text>
        {courseDetails.data.materials.map((material) => (
          <InfoRow
            key={material.id}
            left={MaterialTypeDisplayName[material.type]}
            right={material.title}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flex: 1, backgroundColor: colors.background },
  container: {
    flex: 1,
    gap: spacing.sm,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  placeholder: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
  },
  title: {
    fontSize: fontSize.xxl,
  },
  subtitle: {
    fontSize: fontSize.xl,
  },
  left: {
    fontWeight: "bold",
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
