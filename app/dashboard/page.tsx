
import {Search} from "lucide-react"
import { Input } from "@/components/ui/input"
import GroupCard from "@/components/ui/group-card"
import EmblaCarousel from "@/components/ui/EmblaCarousel"
import { EmblaOptionsType } from "embla-carousel"
import { groupCards } from "@/lib/utils"

export default function Dashboard() {
    const OPTIONS: EmblaOptionsType = {containScroll: false}
    const SLIDES = groupCards
    return (
        <div className="flex flex-col gap-4 py-4">
            <header className="sticky mt-10 w-full justify-center top-0 z-30 px-6 flex h-14 items-center gap-4 bg-background sm:static sm:h-auto sm:bg-transparent">
                <div className="relative flex-1 md:grow-0">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                    type="search"
                    placeholder="Search Groups..."
                    className="w-full rounded-full bg-background pl-8 md:w-[200px] lg:w-[1080px]"
                    />
                </div>
            </header>
            <h1 className="text-xl font-bold ml-6">Based on your Department</h1>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />

            <h1 className="text-xl font-bold ml-6 mt-6">Made by Students</h1>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    )
}
