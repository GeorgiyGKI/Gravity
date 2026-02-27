import {Button} from "../components/Button.tsx";


const About = () => {
    return (
        <section className="relative mt-16">
            <div className="container mx-auto 6">
                <div className="flex flex-col items-center justify-center gap-10">
                    <h1 className="text-5xl font-bold text-center leading-20">
                        About Gravity Team
                    </h1>
                    <p className="w-110 text-center">
                        At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide.
                        We are a crypto native market maker founded by traders, developers,
                        and innovators who are strong believers and supporters
                        of the future of decentralization and digital assets.
                    </p>
                    <Button >
                        GET IN TOUCH
                    </Button>
                </div>
            </div>
        </section>
    )
}
export default About
