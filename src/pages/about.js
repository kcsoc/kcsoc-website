import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import FadeIn from "../components/fadeIn"
import Fade from "react-reveal/Fade"
import aboutUSStyles from "../styles/components/about/aboutUS.module.scss"
import Layout from "../components/layout"

// <div className={aboutUSStyles.header}>
//                     <h1 className={aboutUSStyles.heading}>About</h1>

//                     <h2 className={aboutUSStyles.head2}>
//                         Fuelled by Knowledge and Devotion
//                     </h2>

//                     <div className={aboutUSStyles.featurebox3}>
//                         <p className={aboutUSStyles.para}>
//                             Through a dynamic philosophy of self-realization,
//                             utilizing spiritual processes like meditation and
//                             yoga for the modern day, this society is a sacred
//                             space for attaining wisdom to lead a successful and
//                             more importantly, a happy life.
//                         </p>
//                         <p className={aboutUSStyles.para}>
//                             We currently have regular weekly events in the UK,
//                             as well as in Canada and Slovenia.
//                         </p>
//                     </div>
//                 </div>

export default function Home() {
    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "book.jpg" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <Helmet>
                <title>About | KCSOC</title>
                <meta name="description" content="About KCSOC" />
            </Helmet>
            <FadeIn>
                <Header isOpaque={true} dark={true} />
                <Fade>
                    <div className={aboutUSStyles.top}>
                        <h1>About</h1>
                        <BackgroundImage
                            fluid={data.image.childImageSharp.fluid}
                            className={aboutUSStyles.subtitleContainer}
                        >
                            <div className={aboutUSStyles.blackOverlay}>
                                <h2 className={aboutUSStyles.subtitle}>
                                    Fuelled by Knowledge and Devotion
                                </h2>
                            </div>
                        </BackgroundImage>
                    </div>
                </Fade>
                <Fade>
                    <h2 className={aboutUSStyles.philosophy}>Philosophy</h2>
                    <div className={aboutUSStyles.philosophycont}>
                        <div className={aboutUSStyles.featurebox}>
                            <h2 className={aboutUSStyles.h3}>Mind</h2>

                            <p>
                                Yoga wisdom describes the mind as being harder
                                to control than the raging wind. And we can
                                relate, right? When the assignment deadlines are
                                looming and the stresses of life seem to be
                                never-ending, it’s so hard to get our stubborn
                                minds to focus and block everything else out. We
                                get so distracted by the most insignificant
                                things and face a constant internal battle.
                            </p>

                            <p>
                                That’s where meditation comes in! We’re the
                                biggest meditation fans at KCSOC and we want to
                                make it as accessible as possible for students
                                at uni. Combined with timeless teachings from
                                ancient yoga texts hand-picked by monks
                                specifically for students, you’ll leave our
                                weekly events with a greater sense of focus,
                                clarity and feeling much better equipped to take
                                on the world.
                            </p>
                        </div>
                    </div>

                    <div className={aboutUSStyles.philosophycont}>
                        <div className={aboutUSStyles.featurebox}>
                            <h2 className={aboutUSStyles.h3}>Body</h2>

                            <p>
                                Firstly, KCSOC is a society of givers and
                                whenever we meet up, we’re not letting you go
                                without feeding you a scrumptious meal of
                                vegetarian goodness. Made in a karma-free way
                                with lots and lots of love, it’s soul food. On
                                the house, of course – we’ll look after your
                                bank balance as well as your body!
                            </p>
                            <p>
                                At our termly retreats and our big summer
                                getaway at the end of the year, we’ll give you
                                the complete yoga experience. That means the
                                real deal taught by experts who are practically
                                living the yoga lifestyle and aren’t driven by
                                the money motive.
                            </p>
                        </div>
                    </div>

                    <div className={aboutUSStyles.philosophycont}>
                        <div className={aboutUSStyles.featurebox}>
                            <h2 className={aboutUSStyles.h3}>Soul</h2>
                            <p>
                                So here’s the big fat one that almost always
                                gets missed out. All of us at KCSOC want to take
                                care of you and that means the WHOLE you: your
                                body, mind and soul. That little spiritual spark
                                inside of you that gives life to the rest of
                                your body is a huge deal!
                            </p>
                            <p>
                                We’re a pretty spiritual bunch and love talking
                                about deep topics and thinking outside the box.
                                You know what they say, right? Only dead fish go
                                with the flow! We don’t stick to the status quo
                                and want to create a community of young people
                                who are conscious that there’s got to be more to
                                life. If we have so many comforts and
                                conveniences, why do we often find ourselves
                                feeling dissatisfied, empty and lacking in
                                purpose?
                            </p>
                            <p>
                                Feeding our spiritual sides and taking you on a
                                journey of self-realisation is a big part of the
                                KCSOC mission. As you gain a deeper sense of who
                                you are and make lifelong friends with
                                like-minded people, you’ll soon find a greater
                                vision for your life unfolding that you wouldn’t
                                have been able to tap into otherwise. We’ve seen
                                countless young people completely transform
                                after joining KCSOC over the years and now
                                they’re our there in the big wide world
                                contributing to society in massive and
                                previously unthinkable ways.
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade>
                    <div className={aboutUSStyles.ac}>
                        <div>
                            <h1
                                className={`${aboutUSStyles.h4} ${aboutUSStyles.inspiration}`}
                            >
                                Inspiration
                            </h1>
                            <h2 className={aboutUSStyles.h4}>
                                A.C. Bhaktivedanta Swami Prabhupada
                            </h2>
                            <Fade>
                                <img
                                    className={aboutUSStyles.img}
                                    src="/Prabhupada-clear.png"
                                    alt="Prabhupada"
                                />
                            </Fade>
                            <div className={aboutUSStyles.featurebox2}>
                                <div className={aboutUSStyles.philosophycont}>
                                    <p>
                                        KCSOC draws from the philosophical
                                        teachings of A.C. Bhaktivedanta Swami
                                        Prabhupada (known as Srila Prabhupada),
                                        a swami and saint who travelled to the
                                        West in order to complete his mission to
                                        spread the sublime bliss of spirtuality:
                                        the joy of Krishna Consciousness.
                                    </p>
                                    <p>
                                        In 1965, at the age of 69, Srila
                                        Prabhupada travelled to New York City
                                        aboard a cargo ship. The journey was
                                        treacherous, and the elderly spiritual
                                        teacher suffered two heart attacks
                                        aboard the ship. Arriving in the United
                                        States with just 7 dollars in Indian
                                        rupees and his translations of sacred
                                        Sanskrit texts, he began to spread the
                                        teachings of Krishna Consciousness. His
                                        spiritual message resonated with many
                                        young people, some of whom came forward
                                        to become serious students of the
                                        Krishna tradition. With the help of
                                        these students, Srila Prabhupada rented
                                        a small storefront on New York’s Lower
                                        East Side to use as a temple. On July
                                        11, 1966, he officially registered his
                                        organization in the state of New York,
                                        formally founding the International
                                        Society for Krishna Consciousness
                                        (ISKCON).
                                    </p>
                                    <p>
                                        In the 11 years that followed, Srila
                                        Prabhupada circled the globe 14 times on
                                        lecture tours, bringing the teachings of
                                        Lord Krishna to thousands of people on 6
                                        continents. Men and women from all
                                        backgrounds and walks of life came
                                        forward to accept his message, and with
                                        their help, Srila Prabhupada established
                                        ISKCON centers and projects throughout
                                        the world. Under his inspiration, ISCKON
                                        established temples, rural communities,
                                        and educational institutions and started
                                        what would become the world’s largest
                                        vegetarian food relief program. With the
                                        desire to nourish the roots of Krishna
                                        Consciousness in its home, Srila
                                        Prabhupada returned to India several
                                        times, where he sparked a revival of the
                                        ancient tradition. In India, he opened
                                        dozens of temples, including large
                                        centers in the auspicious towns of
                                        Vrindavana and Mayapur.
                                    </p>
                                    <p>
                                        Srila Prabhupada’s most significant
                                        contributions, perhaps, are his books.
                                        He authored over 70 volumes on the
                                        Krishna philosophy, which are highly
                                        respected by scholars for their
                                        authority, depth and fidelity to the
                                        tradition. Several of his works are used
                                        as textbooks in university courses and
                                        his writings have been translated into
                                        76 languages. His most prominent works
                                        include: Bhagavad-gita As It Is, the
                                        multi-volume Srimad-Bhagavatam and the
                                        set of Sri Caitanya-Caritamrita books.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </FadeIn>
        </Layout>
    )
}
