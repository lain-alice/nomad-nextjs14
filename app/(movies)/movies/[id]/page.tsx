export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // console.log(props); { params: { id: '121212' }, searchParams: { region: 'kr' } }
  // 백엔드에서 실행됐음, 브라우저 콘솔에 안 뜨고 터미널에
  return <h1>Movie {id}</h1>;
}
