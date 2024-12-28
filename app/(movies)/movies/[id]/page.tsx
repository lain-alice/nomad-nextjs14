import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching Movies : ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching Videos : ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // console.log(props); { params: { id: '121212' }, searchParams: { region: 'kr' } }
  // 백엔드에서 실행됐음, 브라우저 콘솔에 안 뜨고 터미널에
  console.log("start fetching");
  const movie = await getMovie(id);
  const videos = await getVideos(id);
  console.log("end fetching");
  return <h1>{movie.title}</h1>;
}
