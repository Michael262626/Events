import EventListCount from "../components/EventListCount";

export default function EventsCount(){

const eventCounts = [ { count: 30, label: "Event Artists" },
     { count: 10, label: "Event Stages" },
      { count: 31, label: "Event Concerts" },
       { count: 8, label: "Event Sponsors" }, 
    ]; 
    return ( 
        <div>
            <EventListCount counts={eventCounts} />
        </div>
    )
}
