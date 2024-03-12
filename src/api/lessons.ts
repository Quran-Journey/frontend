import axios, { AxiosResponse } from 'axios';
import Lesson from '@/models/lesson/lesson';
import buildUrl from './buildUrl';

async function getLessonById(lessonId: number): Promise<Lesson> {
  try {
    const response: AxiosResponse = await axios.get(buildUrl(`/lesson/${lessonId}`));

    const lesson = new Lesson(
      response.data.data[0].lessonId,
      response.data.data[0].lessonDate,
      response.data.data[0].startVerse,
      response.data.data[0].endVerse,
      response.data.data[0].source,
      response.data.data[0].surahId,
    );

    return lesson;
  } catch (err) {
    return err;
  }
}

const lessons = {
  getLessonById,
}

export default lessons;
