import React from "react"
import Layout from "../components/layout"
import ButtonImage from "../components/buttonImage"

export default function Home() {
    return (
        <Layout>
            <h1>Home page</h1>
            <div>
                <h1 className="home-message">Be part of something amazing</h1>
                <h3>We are the Krishna Consciousness Society</h3>
                <button>First time here?</button>
                <button>Upcoming Events</button>
            </div>

            <div>
                <h2>Make spirituality practical</h2>
                <h4>
                    We organise life-changing events, seminars, retreats, talks,
                    discussion groups and courses.
                </h4>

                <h2>What we do</h2>
                <p>
                    The Krishna Consciousness Society is a platform which brings
                    together deep thinkers and spiritual seekers for interactive
                    seminars, refreshing retreats and association of like-minded
                    people.
                </p>
                <p>
                    Would you say you’re a deep thinker? Are you interested in
                    finding out how to apply spiritual principles to your every
                    day life, to not only benefit your life, but the lives of
                    others? The Krishna Consciousness Society offers a platform
                    to evolve the mind, give direction in life, and reveal a
                    deeper level of insight with like-minded people.
                </p>
            </div>

            <h2>
                Never forget the day you went from fitting in to standing out.
            </h2>

            <div>
                <h2>Join thousands of students attending our regular events</h2>
                <h4>
                    Join the Krishna Consciousness family - it might just change
                    your life
                </h4>
                <button>Sign up</button>
            </div>

            <div>
                <h2>Follow us on Instagram</h2>
                <img src="/kcsoc-logo-color.jpg" alt="round logo" />
            </div>

            <ButtonImage text="Universities" imageUrl="/kcsoc-logo-color.jpg"/>
            <ButtonImage text="Events" imageUrl="/kcsoc-logo-color.jpg"/>
            <ButtonImage text="Retreats" imageUrl="/kcsoc-logo-color.jpg"/>

        </Layout>
    )
}
