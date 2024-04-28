import React, {useState} from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)


function CalendarEvent() {
  return (
    <div style={{height: '500px'}}>
      <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />

    </div>
  )
}

export default CalendarEvent