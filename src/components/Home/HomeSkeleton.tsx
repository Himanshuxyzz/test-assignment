import React from "react";
import { View, StyleSheet } from "react-native";
import { SkeletonContainer, SkeletonItem } from "@/components/common/Skeleton";

// Course Header Skeleton (Specific to LMS)
const HeaderSkeleton = () => (
  <View style={styles.header}>
    <SkeletonItem width="70%" height={22} borderRadius={4} />
    <View style={styles.headerMeta}>
      <SkeletonItem width={80} height={14} borderRadius={4} />
      <SkeletonItem width={60} height={14} borderRadius={4} />
      <SkeletonItem width={70} height={14} borderRadius={4} />
    </View>
    <SkeletonItem
      width="100%"
      height={6}
      borderRadius={3}
      style={{ marginTop: 12 }}
    />
    <SkeletonItem
      width="40%"
      height={12}
      borderRadius={4}
      style={{ marginTop: 8 }}
    />
  </View>
);

// Lesson Item Skeleton (Specific to LMS)
const LessonSkeleton = () => (
  <View style={styles.lessonItem}>
    <SkeletonItem width={22} height={22} borderRadius={11} />
    <View style={styles.lessonContent}>
      <SkeletonItem width="80%" height={14} borderRadius={4} />
      <View style={styles.lessonMeta}>
        <SkeletonItem width={50} height={12} borderRadius={4} />
        <SkeletonItem width={35} height={12} borderRadius={4} />
      </View>
    </View>
  </View>
);

// Section Skeleton (Specific to LMS)
const SectionSkeleton = ({ lessonCount = 4 }: { lessonCount?: number }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <SkeletonItem width="60%" height={16} borderRadius={4} />
      <SkeletonItem width={80} height={12} borderRadius={4} />
    </View>
    {Array.from({ length: lessonCount }).map((_, index) => (
      <LessonSkeleton key={index} />
    ))}
  </View>
);

// Main Home Skeleton Component
const HomeSkeleton = () => {
  return (
    <SkeletonContainer>
      <HeaderSkeleton />
      <View style={styles.contentWrapper}>
        <SectionSkeleton lessonCount={4} />
        <SectionSkeleton lessonCount={3} />
        <SectionSkeleton lessonCount={2} />
      </View>
    </SkeletonContainer>
  );
};

export default HomeSkeleton;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#d1d5db",
    padding: 20,
    paddingTop: 16,
  },
  headerMeta: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
  },
  contentWrapper: {
    padding: 12,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionHeader: {
    padding: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fafafa",
  },
  lessonItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    gap: 12,
  },
  lessonContent: {
    flex: 1,
    gap: 8,
  },
  lessonMeta: {
    flexDirection: "row",
    gap: 8,
  },
});
