import axios, { AxiosResponse } from 'axios';
import buildUrl from './buildUrl';

export async function getSurahs(): Promise<AxiosResponse> {
  try {
    return await axios.get(buildUrl('/surahs'));
  } catch (error) {
    return error;
  }
}

export async function getSurahInformation(surahId: number): Promise<AxiosResponse> {
  try {
    return await axios.get(buildUrl(`/surahs/${surahId}`));
  } catch (err) {
    return err;
  }
}

export async function getSurahLessons(surahId: number): Promise<AxiosResponse> {
  try {
    return await axios.get(
      buildUrl(`/surahs/${surahId}/lessons`)
    );
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
