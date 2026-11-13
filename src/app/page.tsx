import Maequee from "@/components/Maequee";
import Mainnews from "@/components/Mainnews";

export interface NewsItem {
   id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

export interface NewsCategory {
  title: string;
  curationId: string;
  curationType: string;
  link: string | null;
  count: number;
  articles: NewsItem[];
}

export default async function Home() {

  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections:NewsCategory[] = data.data;

  const mainNews:NewsItem[] = sections[0].articles;

  return (
    <div>
      <Maequee />
      <div className="max-w-7xl mx-auto grid grid-cols-3">
        <div className="mt-5 col-span-2">
          <Mainnews news={mainNews} sections={sections} />
        </div>
        <div className="col-span-1">

        </div>
      </div>
    </div>
  );
}
