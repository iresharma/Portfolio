import {HeroSection} from "@/components/sections/HeroSection";
import {SkillsSection} from "@/components/sections/SkillsSection";
import {ProjectSection} from "@/components/sections/ProjectSections";
import {ExperienceSection} from "@/components/sections/ExperienceSection";
import {FilterSection} from "@/components/sections/fillerSection.jsx";
import {GithubSection} from "@/components/sections/githubStatsSection";
import ContactSection from "@/components/ui/lamp";


export default function Home() {
    return (
        <>
            <HeroSection/>
            <SkillsSection/>
            <div className="max-w-[1440px] mx-auto">
                <ExperienceSection/>
                <FilterSection />
                <GithubSection />
                <ProjectSection />
                <ContactSection />
            </div>
        </>
    );
}
