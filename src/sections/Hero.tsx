import {Button} from "../components/Button.tsx";

const Hero = () => {
    return (
        <section className="relative min-h-screen mt-32">
            <div className="container mx-auto 6">
                <div className="flex flex-col items-center justify-center gap-10">
                    <h1 className="text-5xl font-bold text-center leading-20">
                        Balancing <br/>
                        Crypto Markets
                    </h1>
                    <p className="w-110 text-center">
                        Our fully automated proprietary quantitative trading software provides 24/7
                        liquidity to 170+ crypto assets across 25+
                        centralized spot and derivative crypto exchanges.
                    </p>
                    <Button >
                        GET IN TOUCH
                    </Button>
                </div>
            </div>
        </section>
    )
}
export default Hero
