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
                        dateAndTime
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

    const filteredData = data.allContentfulEvent.edges.filter(edge => {
        if (universities.length) {
            const names = universities.map(university => university.name)
            if (!names.includes(edge.node.university)) return false
        }
        if (eventTypes.length) {
            const types = eventTypes.map(eventType =>
                eventType.value.toLowerCase()
            )
            if (!types.includes(edge.node.slug)) return false
        }
        const nodeDate = new Date(edge.node.dateAndTime)
        if (startDate) {
            if (nodeDate < startDate) return false
        }
        if (endDate) {
            if (nodeDate > endDate) return false
        }

        return true
    })

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
                    {filteredData.map((edge, index) => (
                        <EventCard key={index} data={edge.node} />
                    ))}
                </div>
            </div>
        </EventContext.Provider>
    )
}
