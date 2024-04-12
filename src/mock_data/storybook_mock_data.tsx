import { LessonButtonCardProps } from '../components/LessonButtonCard/LessonButtonCard';
import { LessonListHeaderProps } from '../components/LessonListHeader/LessonListHeader';
import { ChapterButtonCardProps } from '../components/ChapterButtonCard/ChapterButtonCard';
import { PDFEmbedProps } from '@/components/PDFEmbed/PDFEmbed';
import { VideoPlayerProps } from '@/components/VideoPlayer/VideoPlayer';
import { VideoHeaderProps } from '@/components/VideoHeader/VideoHeader';
import { PDFDownloadButtonProps } from '@/components/PDFDownloadButton/PDFDownloadButton';
import { SidebarProps } from '@/components/Sidebar/Sidebar';

// surah name mock data
export const sampleSurahName = 'Aal-E-Imran';

export const sampleSrcPDF: PDFEmbedProps = {
  src: 'https://www.pdfquran.com/download/standard1/standard1-quran.pdf',
};

export const sampleVideoSrc: VideoPlayerProps = {
  src: 'https://www.youtube.com/embed/IxTuddLOAxQ?si=2a2Qe4zZNh3n6yKp',
  title: 'Quran Journey - Surah Name - Verses 1 - 10',
};

export const samplePdfDownloadInfo: PDFDownloadButtonProps = {
  surahName: sampleSurahName,
  verseStart: '1',
  verseEnd: '10',
};

export const sampleVideoHeader: VideoHeaderProps = {
  surahName: sampleSurahName,
  surahNameArabic: 'آل عمران',
  videoNumber: '1',
  totalVideos: '200',
  verseStart: '1',
  verseEnd: '10',
};

// header mock data
export const sampleHeaader: LessonListHeaderProps = {
  surahName: sampleSurahName,
  nameTranslation: 'The Family of Imran',
  surahNameArabic: 'آل عمران',
  numberOfVerses: '200',
};

// Simple function to create mock data for the Lesson button cards
export const sampleLessonData: LessonButtonCardProps[] = Array.from(
  { length: 12 },
  (_, index) => ({
    lessonNumber: (index + 1).toString(),
    totalLessons: '12',
    verseStart: (index * 10 + 1).toString(), // Assuming 10 verses per Lesson, adjust as needed
    verseEnd: ((index + 1) * 10).toString(), // Assuming 10 verses per Lesson, adjust as needed
    surahName: sampleSurahName,
  }),
);

export const sampleChapterData: ChapterButtonCardProps[] = [
  {
    surahName: 'Al-Fatiha',
    nameTranslation: 'The Opening',
    surahNameArabic: 'الفاتحة',
    numberOfVerses: '7',
    surahNumber: '1',
    numberOfVideos: '3',
  },
  {
    surahName: 'Al-Baqarah',
    nameTranslation: 'The Cow',
    surahNameArabic: 'البقرة',
    numberOfVerses: '286',
    surahNumber: '2',
    numberOfVideos: '5',
  },
  {
    surahName: 'Aal-E-Imran',
    nameTranslation: 'The Family of Imran',
    surahNameArabic: 'آل عمران',
    numberOfVerses: '200',
    surahNumber: '3',
    numberOfVideos: '4',
  },
  {
    surahName: 'An-Nisa',
    nameTranslation: 'The Women',
    surahNameArabic: 'النساء',
    numberOfVerses: '176',
    surahNumber: '4',
    numberOfVideos: '6',
  },
  {
    surahName: "Al-Ma'idah",
    nameTranslation: 'The Table Spread',
    surahNameArabic: 'المائدة',
    numberOfVerses: '120',
    surahNumber: '5',
    numberOfVideos: '4',
  },
  {
    surahName: "Al-An'am",
    nameTranslation: 'The Cattle',
    surahNameArabic: 'الأنعام',
    numberOfVerses: '165',
    surahNumber: '6',
    numberOfVideos: '3',
  },
  {
    surahName: "Al-A'raf",
    nameTranslation: 'The Heights',
    surahNameArabic: 'الأعراف',
    numberOfVerses: '206',
    surahNumber: '7',
    numberOfVideos: '5',
  },
  {
    surahName: 'Al-Anfal',
    nameTranslation: 'The Spoils of War',
    surahNameArabic: 'الأنفال',
    numberOfVerses: '75',
    surahNumber: '8',
    numberOfVideos: '2',
  },
  {
    surahName: 'At-Tawbah',
    nameTranslation: 'The Repentance',
    surahNameArabic: 'التوبة',
    numberOfVerses: '129',
    surahNumber: '9',
    numberOfVideos: '4',
  },
  {
    surahName: 'Yunus',
    nameTranslation: 'Jonah',
    surahNameArabic: 'يونس',
    numberOfVerses: '109',
    surahNumber: '10',
    numberOfVideos: '3',
  },
];

export const mockSidebarData: SidebarProps = {
  chapterData: { allChapters: sampleChapterData },
  lessonData: {
    headerDetails: sampleHeaader,
    allLessons: sampleLessonData,
  },
};
