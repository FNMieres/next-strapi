/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getGames } from "./services/videoGames";
import { Pagination } from "./components/Pagination";

interface PaginationProps {
  searchParams: SearchParams;
}

interface SearchParams {
  page: string;
}

export default async function Home({ searchParams }: PaginationProps) {
  const { page = 1 } = searchParams;
  const { data: games, pagination } = await getGames({ page: +page });
  console.log(games);

  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      {games.map(({ id, title, description, cover }) => (
        <Link
          key={id}
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cover}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
        </Link>
      ))}
      <Pagination pagination={pagination} />
    </main>
  );
}
