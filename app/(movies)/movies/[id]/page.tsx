import { API_URL } from "../../../(home)/page";
import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

// Suspense 컴포넌트 : 안에 든 컴포넌트 fetch하려고 await
// fetching하는 동안 fallback 안에 들어있는 거 렌더링, 끝나면 컴포넌트 렌더링
