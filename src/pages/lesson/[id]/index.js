// Used for each individual lesson
// [id] is what shoes in the link on browser i.e. lesson/1
// Check https://www.youtube.com/watch?v=mTz0GXj8NN0&t=1s&ab_channel=TraversyMedia at 40:30 nested pages

import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import SideBar from '../../../components/SideBar';
import SurahIntroTitle from '../../../components/SurahIntroTitle';
import BodyText from '../../../components/BodyText';

import { useRouter } from 'next/router';
import { intro } from '../../../mock_data/introData';

let info = intro.find((i) => i.id === '97');

// This will change later
// const sections = [{section: 'Name'}, {section: 'Period of Revelation'}, {section: 'Theme and Subject Matter'}]
const surah_details = {
  name: 'Surah Al-Qadr',
  name_ar: 'سُوۡرَةُ القَدر',
  verses: '5',
};

const sideBarType = { type: 'Sections' };

const surahNum = '100';

export default function LessonIntro() {
  const router = useRouter();
  // const {id} = router.query
  // const { id } = router.query
  // console.log('---------------')
  // console.log(router.pathname)
  // console.log(router.isReady)
  // console.log(router.query)
  // const params = useParams();
  // console.log(params);

  // useEffect(() => {
  //     if(!id) {
  //       return;
  //     }
  //     const fetchSomethingById = async () => {
  //       const response = await fetch(`/lesson/${id}`)
  //     }
  //     fetchSomethingById()
  //   }, [id])

  //   console.log(id)

  return (
    <>
      <Nav />
      <Container>
        <Grid container direction="row">
          <Grid item lg={9} sx={{ pr: 9, pb: 10 }}>
            <SurahIntroTitle
              name={surah_details.name}
              id={info.id}
              name_ar={surah_details.name_ar}
              verses={surah_details.verses}
            />
            {info.surah_info.map((surah) => (
              <BodyText
                heading={surah.heading}
                highlighted={surah.highlighted}
                content={surah.content}
              />
            ))}
            {/* <Link href={'/lesson/'+surahNum+'/main'}> */}
            <Button
              variant="outlined"
              color="dark"
              startIcon={<ArrowCircleRightRoundedIcon />}
              onClick={() => {
                router.push({
                  pathname: '/lesson/' + info.id + '/[page]',
                  query: { page: 'content' },
                });
              }}
            >
              Go to Lecture
            </Button>
            {/* </Link> */}
          </Grid>
          <SideBar type={sideBarType.type} sections={info.surah_info} />
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
