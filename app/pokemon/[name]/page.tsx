import { fetchPokemonByName } from "@/app/api/actions";
import PokemonCard from "@/app/PokemonCard";
import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const slug = (await params).name;
  const pokemon = await fetchPokemonByName(slug);
  
  return (
      <div className="p-6">
        <Link className="m-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"href="/">back</Link>
          <PokemonCard pokemon = {pokemon}/>
      </div>
  );
}
