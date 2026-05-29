import { colors, fontSize } from "@/src/theme/tokens";
import { StyleSheet, Text, View } from "react-native";

// TODO: Build the courses list screen — see TASK.md for requirements
export default function CoursesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>Courses screen — see TASK.md</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  placeholder: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
  },
});
