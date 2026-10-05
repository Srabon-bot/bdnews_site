import Link from 'next/link';
import React from 'react';

interface NavlinksProps {
      slug: string;
      title: string;
      topicId: null | string;
      url: string;
      scrapable: boolean
}

const Navlinks = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();

    const navlinks: NavlinksProps[] = data.data;

    const filteredNavlinks = navlinks.filter((link) => link.scrapable);

    return (
        <div className="mx-auto max-w-7xl px-4 pb-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            <Link href="/">হোম</Link>

            {filteredNavlinks.map((link, index) => (
                <Link key={index} href={link.slug}>
                    {link.title}
                </Link>
            ))}
        </div>
    );
};

export default Navlinks;