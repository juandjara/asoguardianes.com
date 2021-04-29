import React from 'react'

export default function Calendar() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl py-6 mb-6 font-bold">Calendario de eventos</h1>
      <div className="relative" style={{ paddingTop: '56.25%' }}>
        <iframe
          title="Google Calendar asociacion.guardianes@gmail.com"
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FMadrid&amp;src=YXNvY2lhY2lvbi5ndWFyZGlhbmVzQGdtYWlsLmNvbQ&amp;color=%23D50000&amp;showPrint=0&amp;showTitle=0&amp;showTz=0&amp;showCalendars=0&amp;showTabs=1&amp;title=Eventos%20Guardianes"
          frameborder="0"
          scrolling="no"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  )
}
