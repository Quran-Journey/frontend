import axios, { AxiosResponse } from 'axios';
import buildUrl from './buildUrl';

export async function getLessonById(lessonId: number): Promise<AxiosResponse> {
  try {
    return await axios.get(buildUrl(`/lessons/${lessonId}`));
  } catch (err) {
    return err;
  }
}

const lessons = {
  getLessonById,
}

export default lessons;
