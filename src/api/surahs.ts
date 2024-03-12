import axios, { AxiosResponse } from 'axios';
import Lesson from '@/models/lesson/lesson';
import Surah from '@/models/surah/surah';
import buildUrl from './buildUrl';

async function getSurahs(): Promise<Surah[]> {
  try {
    const response: AxiosResponse = await axios.get(buildUrl('/surahs'));
    
    const surahs: Surah[] = [];

    response.data.data.forEach((responseSurah: any) => {
      const surah = new Surah(
        responseSurah.surahId,
        responseSurah.surahNumber,
        responseSurah.nameComplex,
        responseSurah.nameArabic,
      );

      surahs.push(surah);
    });

    return surahs;
  } catch (error) {
    return error;
  }
}

async function getSurahInformation(surahId: number): Promise<Surah> {
  try {
    const response: AxiosResponse = await axios.get(buildUrl(`/surah/${surahId}`));

    return new Surah(
      response.data.data[0].surahId,
      response.data.data[0].surahNumber,
      response.data.data[0].nameComplex,
      response.data.data[0].nameArabic,
    );
  } catch (err) {
    return err;
  }
}

async function getSurahLessons(surahId: number): Promise<Lesson[]> {
  try {
    const response: AxiosResponse = await axios.get(
      buildUrl(`/surah/${surahId}/lessons`)
    );

    const lessons: Lesson[] = [];

    response.data.data.forEach((responseLesson: any) => {
      const lesson = new Lesson(
        responseLesson.lessonId,
        responseLesson.lessonDate,
        responseLesson.startVerse,
        responseLesson.endVerse,
        responseLesson.source,
        surahId,
      );

      lessons.push(lesson);
    });

    return lessons;
  } catch (err) {
    return err;
  }
}

const surahs = {
  getSurahInformation,
  getSurahs,
  getSurahLessons,
}

export default surahs;
