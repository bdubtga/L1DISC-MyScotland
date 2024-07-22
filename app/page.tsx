import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
    return (
        <section className="h-screen">
            <div
                className="flex flex-col items-center justify-center h-1/2 w-full"
                style={{
                    backgroundImage: 'url("/images/hero.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h1 className="text-6xl font-semibold text-white">
                    My Scotland
                </h1>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 w-full p-24 px-48">
                <div
                    className="col-span-1 row-span-1"
                    style={{
                        backgroundImage: 'url("/images/endinburgh-castle.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="col-span-1 row-span-1 flex flex-col justify-between p-10 gap-4">
                    <h3 className="text-xl font-bold">Edinburgh Castle</h3>
                    <p>
                        Edinburgh Castle is a historic castle in Edinburgh,
                        Scotland. It stands on Castle Rock, which has been
                        occupied by humans since at least the Iron Age, although
                        the nature of the early settlement is unclear. There has
                        been a royal castle on the rock since at least the reign
                        of David I in the 12th century, and the site continued
                        to be a royal residence until 1633. From the 15th
                        century, the castle's residential role declined, and by
                        the 17th century it was principally used as military
                        barracks with a large garrison. Its importance as a part
                        of Scotland's national heritage was recognised
                        increasingly from the early 19th century onwards, and
                        various restoration programmes have been carried out
                        over the past century and a half.
                    </p>
                </div>

                <div className="col-span-1 row-span-1 flex flex-col justify-between p-10 gap-4">
                    <h3 className="text-xl font-bold">Edinburgh Castle</h3>
                    <p>
                        Edinburgh Castle is a historic castle in Edinburgh,
                        Scotland. It stands on Castle Rock, which has been
                        occupied by humans since at least the Iron Age, although
                        the nature of the early settlement is unclear. There has
                        been a royal castle on the rock since at least the reign
                        of David I in the 12th century, and the site continued
                        to be a royal residence until 1633. From the 15th
                        century, the castle's residential role declined, and by
                        the 17th century it was principally used as military
                        barracks with a large garrison. Its importance as a part
                        of Scotland's national heritage was recognised
                        increasingly from the early 19th century onwards, and
                        various restoration programmes have been carried out
                        over the past century and a half.
                    </p>
                </div>
                <div
                    className="col-span-1 row-span-1"
                    style={{
                        backgroundImage: 'url("/images/endinburgh-castle.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div
                    className="col-span-1 row-span-1"
                    style={{
                        backgroundImage: 'url("/images/endinburgh-castle.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="col-span-1 row-span-1 flex flex-col justify-between p-10 gap-4">
                    <h3 className="text-xl font-bold">Edinburgh Castle</h3>
                    <p>
                        Edinburgh Castle is a historic castle in Edinburgh,
                        Scotland. It stands on Castle Rock, which has been
                        occupied by humans since at least the Iron Age, although
                        the nature of the early settlement is unclear. There has
                        been a royal castle on the rock since at least the reign
                        of David I in the 12th century, and the site continued
                        to be a royal residence until 1633. From the 15th
                        century, the castle's residential role declined, and by
                        the 17th century it was principally used as military
                        barracks with a large garrison. Its importance as a part
                        of Scotland's national heritage was recognised
                        increasingly from the early 19th century onwards, and
                        various restoration programmes have been carried out
                        over the past century and a half.
                    </p>
                </div>
            </div>
        </section>
    );
}
