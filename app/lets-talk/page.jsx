"use client";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

export default function LetsTalk() {
    useCalendlyEventListener({
        onProfilePageViewed: () => {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                event: "gtm_custom_event",
                datalayer_event_name: "calendly_profile_page_viewed",
            });
        },
        onDateAndTimeSelected: () => {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                event: "gtm_custom_event",
                datalayer_event_name: "calendly_date_and_time_selected",
            });
        },
        onEventTypeViewed: () => {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                event: "gtm_custom_event",
                datalayer_event_name: "calendly_event_type_viewed",
            });
        },
        onEventScheduled: (e) => {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                event: "gtm_custom_event",
                datalayer_event_name: "calendly_event_scheduled",
            });
        },
    });
    return (
        <>
            <InlineWidget
                url="https://calendly.com/shahzadaalihassan"
                styles={{
                    height: "100vh",
                    "min-width": "90vw",
                }}
            />
        </>
    );
}
