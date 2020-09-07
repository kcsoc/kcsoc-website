import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import CalendarMenu from "./calendarMenu"
import eventCalendarStyles from "../../styles/components/events/eventCalendar.module.scss"
import EventContext from "../contexts/eventContext"
import EventCard from "./eventCard"

export default function EventCalendar() {
    const [universities, setUniversities] = useState([])
    const [eventTypes, setEventTypes] = useState([])
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState()

    const data = useStaticQuery(graphql`
        query {
            allContentfulEvent {
                edges {
                    node {
                        name
                        speaker
                        location
                        university
                        dateAndTime(formatString: "h:mm a|Do MMMM YYYY")
                        slug
                        poster {
                            title
                            resize {
                                src
                            }
                        }
                    }
                }
            }
        }
    `)

    const eventData = [
        {
            id: 0,
            type: "weekly",
            name: "24 Hours to Live",
            speaker: "Bhuta Bhavana Das",
            university: "UCL",
            location: "Front Room",
            time: "7 pm",
            date: "18th September 2020",
            imageURL: "/weekly-poster.jpeg",
        },
        {
            id: 0,
            type: "flagship",
            name: "The Meaning of Life",
            speaker: "Radhanath Swami",
            university: undefined,
            location: "Special Room",
            time: "8 pm",
            date: "20th September 2020",
            imageURL: "/flagship-poster.jpeg",
        },
        {
            id: 0,
            type: "retreat",
            name: "November Retreat",
            speaker: undefined,
            university: undefined,
            location: "Bhaktivedanta Manor",
            time: "8am - 7pm",
            date: "28th September 2020",
            imageURL: "/retreat-poster.jpeg",
        },
    ]

    return (
        <EventContext.Provider
            value={{
                universities,
                setUniversities,
                eventTypes,
                setEventTypes,
                startDate,
                setStartDate,
                endDate,
                setEndDate,
            }}
        >
            <div className={eventCalendarStyles.outerContainer}>
                <h1 className={eventCalendarStyles.title}>Calendar</h1>
                <Fade>
                    <CalendarMenu />
                </Fade>
                <div className={eventCalendarStyles.contentContainer}>
                    {data.allContentfulEvent.edges.map(edge => (
                        <EventCard data={edge.node} />
                    ))}
                </div>
            </div>
        </EventContext.Provider>
    )
}
