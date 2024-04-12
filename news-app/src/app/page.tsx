/** @format */

import { categories } from "../../constants";
import fetchNews from "../../lib/fetchnews";
import NewsList from "./NewsList";
import response from "../../response.json"
export default async function Home() {
  //fetch news
  const news: NewsResponse = await fetchNews(categories.join(","));
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
