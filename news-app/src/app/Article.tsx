/** @format */

import LiveTimestamp from "./LiveTimestamp";
import ReadMoreButton from "./ReadMoreButton";

type Prop = {
  article: Article;
};
export default function Article({ article }: Prop) {
  return (
    <article
      className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 
    hover:shodow-lg shadow-lg shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out "
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col p-5">
          <h1 className="font-bold font-serif">{article.title}</h1>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-2"> {article.description}</p>
          </section>
          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>{article.source}-</p>
            <p>
              <LiveTimestamp time={article.published_at} />
            </p>
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}
