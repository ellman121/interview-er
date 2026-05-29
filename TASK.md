# Take-Home Task: Course Browser

**Stack**: [Expo](https://docs.expo.dev/) (React Native) + [Expo Router](https://docs.expo.dev/router/introduction/) + TypeScript

**Time estimate**: 45 minutes. Quality over completion — we care more about the decisions you make than whether you finish everything.

---

## Background

acemate is an AI-powered learning platform that helps students study more effectively by turning their notes and university documents into summaries, quizzes, flashcards, and practice exams.

This repo is an Expo starter with tab navigation and a mock API already configured.

---

## What's Provided

- **Expo** with Expo Router (file-based routing)
- **Tab navigation** — Courses and Profile tabs already wired
- **Mock API** — `src/api/client.ts` with typed async functions and simulated latency
- **Design tokens** — `src/theme/tokens.ts` (colors, spacing, typography)
- **Profile screen** — pre-built as a reference for the visual quality bar

---

## The Task

Build a course browser that lets a student see their enrolled courses and drill into course details.

### Screen 1: Courses List — `app/(tabs)/index.tsx`

- Fetch courses using `api.getCourses()`
- Tapping a course navigates to the detail screen

### Screen 2: Course Detail — `app/course/[id].tsx`

- Fetch course details using `api.getCourseDetail(id)`
- Display the course's materials (documents, exams, flashcard decks)

---

## What We Value

Focus on quality over completion. If you get stuck or run out of time, leave a comment explaining your approach and move on — we'll continue from there in the in-person session.

---

## Setup

**Prerequisites**: Node.js 20+, pnpm

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm start
```

Scan the QR code with **Expo Go** (iOS/Android), or press `i` for the iOS Simulator / `a` for the Android Emulator.

---

## Submission

1. Fork this repo
2. Build your feature on a new branch
3. Include a short `DECISIONS.md` explaining the key choices you made and why, and anything you'd do differently with more time
4. Open a PR back to the original repo

---

## Note

This task will be continued in a live pair-programming session where we may extend it with additional features (search, pagination, monorepo integration).
