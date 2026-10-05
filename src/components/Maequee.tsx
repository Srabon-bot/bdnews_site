import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface NewsItem {
    id: string;
    title: string;
}

const Maequee = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=15");
    const data = await res.json();
    const news: NewsItem[] = data.data;

    return (
        <div className="bg-red-700 text-white">
            <div className="max-w-7xl mx-auto flex">
                <div className="bg-red-800 text-white py-1 font-bold">
                    <span className="px-4">সর্বশেষ</span>
                </div>

                <MarqueeText direction="right" duration={10} className="py-1">
                    {news.map((item: NewsItem) => (
                        <span key={item.id} className="px-4">{item.title}
                            <span className="ml-6">•</span>
                        </span>
                    ))}

                </MarqueeText>
            </div>
        </div>
    );
};

export default Maequee;