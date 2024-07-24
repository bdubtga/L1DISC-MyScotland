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
            <div className="grid grid-cols-2 grid-rows-3 w-full p-24 px-48 gap-10">
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

                <div className="col-span-1 row-span-1 flex flex-col items-end text-right justify-between p-10 gap-4">
                    <h3 className="text-xl font-bold">Eilean Donan</h3>
                    <p>
                        Eilean Donan (Scottish Gaelic: Eilean Donnain) is a
                        small tidal island situated at the confluence of three
                        sea lochs (Loch Duich, Loch Long and Loch Alsh) in the
                        western Highlands of Scotland, about 1 kilometre (5⁄8
                        mi) from the village of Dornie. It is connected to the
                        mainland by a footbridge that was installed early in the
                        20th century and is dominated by a picturesque castle
                        that frequently appears in photographs, film and
                        television. The island's original castle was built in
                        the thirteenth century; it became a stronghold of the
                        Clan Mackenzie and their allies, the Clan MacRae.
                        However, in response to the Mackenzies' involvement in
                        the Jacobite rebellions early in the 18th century,
                        government ships destroyed the castle in 1719. The
                        present-day castle is Lieutenant-Colonel John
                        Macrae-Gilstrap's 20th-century reconstruction of the old
                        castle.
                    </p>
                </div>
                <div
                    className="col-span-1 row-span-1"
                    style={{
                        backgroundImage: 'url("/images/eilean-donan.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div
                    className="col-span-1 row-span-1"
                    style={{
                        backgroundImage: 'url("/images/oban.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="col-span-1 row-span-1 flex flex-col justify-between p-10 gap-4">
                    <h3 className="text-xl font-bold">Oban</h3>
                    <p>
                        Prior to the 19th century, the town itself supported
                        very few households, sustaining only minor fishing,
                        trading, shipbuilding and quarrying industries, and a
                        few hardy tourists.[8] The Renfrew trading company
                        established a storehouse there around 1714, as a local
                        outlet for its merchandise, but a custom-house was not
                        deemed necessary until 1736, with "Oban being reckoned a
                        proper place for clearing out vessels for the herring
                        fishery". The modern town of Oban grew up around the
                        distillery, which was founded there in 1794. A royal
                        charter raised the town to a burgh of barony in 1811.
                        Sir Walter Scott visited the area in 1814, the year in
                        which he published his poem The Lord of the Isles;
                        interest in the poem brought many new visitors to the
                        town. The town was made a Parliamentary Burgh in 1833.
                    </p>
                </div>
                <div className="col-span-1 row-span-1 flex flex-col items-end text-right justify-between p-10 gap-4">
                    <h3 className="text-xl font-bold">Loch Ness</h3>
                    <p>
                        Loch Ness is a large freshwater loch in the Scottish
                        Highlands extending for approximately 37 kilometres (23
                        miles) southwest of Inverness. It takes its name from
                        the River Ness, which flows from the northern end. Loch
                        Ness is best known for claimed sightings of the
                        cryptozoological Loch Ness Monster, also known
                        affectionately as "Nessie" (Scottish Gaelic: Niseag). It
                        is one of a series of interconnected, murky bodies of
                        water in Scotland; its water visibility is exceptionally
                        low due to the high peat content of the surrounding
                        soil. At 56 km2 (22 sq mi), Loch Ness is the
                        second-largest Scottish loch by surface area after Loch
                        Lomond, but due to its great depth it is the largest by
                        volume in Great Britain. Its deepest point is 230 metres
                        (126 fathoms; 755 feet), making it the second deepest
                        loch in Scotland after Loch Morar.
                    </p>
                </div>
                <div
                    className="col-span-1 row-span-1"
                    style={{
                        backgroundImage: 'url("/images/lochness.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div
                    className="col-span-1 row-span-1"
                    style={{
                        backgroundImage: 'url("/images/isleofskye.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="col-span-1 row-span-1 flex flex-col justify-between p-10 gap-4">
                    <h3 className="text-xl font-bold">Isle of Skye</h3>
                    <p>
                        The Isle of Skye, or simply Skye , is the largest and
                        northernmost of the major islands in the Inner Hebrides
                        of Scotland. The island's peninsulas radiate from a
                        mountainous hub dominated by the Cuillin, the rocky
                        slopes of which provide some of the most dramatic
                        mountain scenery in the country. Although Sgitheanach
                        has been suggested to describe a winged shape, no
                        definitive agreement exists as to the name's origins.
                        The island has been occupied since the Mesolithic
                        period, and over its history has been occupied at
                        various times by Celtic tribes including the Picts and
                        the Gaels, Scandinavian Vikings, and most notably the
                        powerful integrated Norse-Gaels clans of MacLeod and
                        MacDonald.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 w-full px-20 pb-20 gap-10 h-2/3 text-white">
                <div
                    style={{
                        backgroundImage: 'url("/images/bagpipes.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="flex flex-col items-center justify-end p-10"
                >
                    <h3 className="text-4xl font-bold">BagPipes</h3>
                </div>
                <div
                    style={{
                        backgroundImage: 'url("/images/haggis.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="flex flex-col items-center justify-end p-10"
                >
                    <h3 className="text-4xl font-bold">Haggis</h3>
                </div>
                <div
                    style={{
                        backgroundImage: 'url("/images/kilt.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="flex flex-col items-center justify-end p-10"
                >
                    <h3 className="text-4xl font-bold">Kilt</h3>
                </div>
            </div>
        </section>
    );
}
