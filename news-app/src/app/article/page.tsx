/** @format */

import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
  searchParams?: Article;
};
export default function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }
  const article: Article = searchParams;
  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-40">
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="h-50 rounded max-w-md mx-auto md:max-w-lg lg:max-w-xl"
          />
        )}
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h1 className="font-bold">By: {article.author || "unknown"}</h1>
            <h1 className="font-bold pl-4">Source: {article.source}</h1>
            <p className="pl-4">
              <LiveTimestamp time={article.published_at} />
            </p>
          </div>
          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}
