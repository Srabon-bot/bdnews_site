import Image from "next/image";
import Navlinks from "./Navlinks";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="">
            <div className="relative max-w-6xl mx-auto h-20 flex items-center justify-end">
                
                {/* Center logo + name */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                    <Image
                        src="/logo.webp"
                        alt="Logo"
                        width={45}
                        height={45}
                    />

                    <div>
                        <h2 className="font-bold text-2xl text-red-700">Bangla News 24</h2>
                        <p className="text-xs text-neutral-500 ">{date}</p>
                    </div>
                </div>

                {/* Right buttons */}
                <div className="flex gap-2">
                    <button className="btn h-9 min-h-9 px-4">
                        সাইন ইন
                    </button>

                    <button className="btn h-9 min-h-9 px-4 bg-red-700 text-white">
                        সাইন আপ
                    </button>
                </div>

            </div>
            <Navlinks />
        </header>

    );
};

export default Header;