# acemate — Mobile Interview Task

A React Native (Expo) starter for the take-home task.

See [TASK.md](./TASK.md) for the task description and setup instructions.

## Tech Stack

- **[Expo](https://docs.expo.dev/)** — React Native framework
- **[Expo Router](https://docs.expo.dev/router/introduction/)** — File-based routing (similar to Next.js App Router)
- **[React Native](https://reactnative.dev/)** — Cross-platform mobile framework
- **TypeScript** — Type safety

## Project Structure

```
app/
  (tabs)/
    index.tsx       # Courses list screen
    profile.tsx     # Profile screen (reference)
  course/[id].tsx   # Course detail screen
src/
  api/              # Mock API client and types
  data/             # Mock data
  theme/            # Design tokens
```
