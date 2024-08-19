import { Suspense } from 'react'
import { fetchObjectIDs } from "../../lib/fetch-data";
import { selectRandomIDs } from "../../lib/utils";
import styles from "./page.module.css";
// Imports
import Post from '../../components/post/Post'
import Search from '../../components/search/Search'

// Access search params
export default async function Browse({ searchParams }: { searchParams: { searchTerm?: string } }) {
  console.log(searchParams.searchTerm);
  // Replace body
  const query = searchParams.searchTerm || 'flowers'
  console.log(query);
  return (
    <main className={styles.main}>
      <Search placeholder={query} />
      <p className={styles.search_result}>Search results for {query}:</p>
      <Suspense fallback={<p>Loading items...</p>}>
        <SearchResults query={query} />
      </Suspense>
    </main>
  )
}

async function SearchResults({ query }: { query: string }) {
  // console.log(query);
  const entries = await fetchObjectIDs(query)
  // console.log(entries);
  const randomObjectIDs = selectRandomIDs(
    entries.objectIDs,
    entries.total > 10 ? 10 : entries.total,
  )
  // console.log(randomObjectIDs);
  return (
    <div>
      {randomObjectIDs.map((id: number) => (
        <Suspense key={id} fallback={<p>Loading item...</p>}>
          <Post id={id} />
        </Suspense>
      ))}
    </div>
  )
}