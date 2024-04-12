/** @format */

import { categories } from "../../../constants";
import fetchNews from "../../../lib/fetchnews";
import NewsList from "../NewsList";
import response from "../../../response.json"


type Props = {
  searchParams?: { term: string };
};
export default async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = response || await fetchNews(
    categories.join(","),
    searchParams?.term,
    true
  );

  return (
    <div>
      <h1 className="headerTitle">Search results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
}
