import React from 'react';
import { NewsItem, NewsCategory } from '@/app/page';
import Image from "next/image";

const Mainnews = ({ news, sections }: { news: NewsItem[], sections: NewsCategory[] }) => {
    console.log(news);
    const firstArticle: NewsItem = news[0];
    console.log(firstArticle);
    return (
        <div className="grid w-full max-w-[810px] grid-cols-2 gap-4">

            {/* Main News */}
            <div className="group overflow-hidden rounded-lg border border-neutral-200 bg-white">
                <figure className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                    <Image
                        src={firstArticle.imageUrl}
                        alt={firstArticle.imageAlt}
                        fill
                        className="object-cover"
                    />
                </figure>

                <div className="p-4">
                    <p className="text-xs font-semibold text-red-700">
                        {sections[0].title}
                    </p>

                    <h2 className="mt-1 text-xl font-bold leading-snug text-neutral-900 group-hover:text-red-700">
                        {firstArticle.title}
                    </h2>

                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
                        {firstArticle.description}
                    </p>
                </div>
            </div>


            {/* Side News */}
            <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
                {sections[0].articles.slice(0, 4).map((article) => (
                    <div
                        key={article.id}
                        className="border-b border-neutral-200 px-3 py-4 last:border-b-0"
                    >
                        <p className="text-xs font-semibold text-red-700">
                            {sections[0].title}
                        </p>

                        <h2 className="mt-1 text-base font-medium leading-snug text-neutral-900 hover:text-red-700">
                            {article.title}
                        </h2>
                    </div>
                ))}
            </div>

        </div>
    );
};


export default Mainnews;