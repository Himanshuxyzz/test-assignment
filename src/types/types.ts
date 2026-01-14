export type lessonDataTypes = {
  title: string;
  section: string;
  lessonNumber: number;
  totalLessons: number;
  duration: string;
  description: string;
  learningObjectives: string[];
  instructor: {
    name: string;
    avatar: string;
    title: string;
  };
  resources: [
    { name: string; icon: string; size: string },
    { name: string; icon: string; size: string },
    { name: string; icon: string; size: string }
  ];
  nextLesson: {
    title: string;
    duration: string;
  };
  previousLesson: {
    title: string;
    duration: string;
  };
};
