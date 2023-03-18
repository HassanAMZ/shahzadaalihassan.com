"use client";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

export default function LetsTalk() {
    const gtm_event = ({ event_name }) => {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            event: "gtm_custom_event",
            datalayer_event_name: event_name,
            calendly_details: {
                form_id: "discovery-call-migrate-to-ga4",
                form_url:
                    "https://calendly.com/shahzadaalihassan/discovery-call-migrate-to-ga4",
                form_name: "Discovery Call Migrate To GA4 ",
            },
        });
    };

    useCalendlyEventListener({
        onProfilePageViewed: (e) => {
            gtm_event("calendly_profile_page_viewed");
        },
        onDateAndTimeSelected: (e) => {
            gtm_event("calendly_date_and_time_selected");

        },
        onEventTypeViewed: (e) => {
            gtm_event("calendly_event_type_viewed");

        },
        onEventScheduled: (e) => {
            gtm_event("calendly_event_scheduled");

        },
    });
    return (
        <InlineWidget
            url="https://calendly.com/shahzadaalihassan/discovery-call-migrate-to-ga4"
            styles={{
                height: "100vh",
                "min-width": "90vw",
            }}
        />
    );
}
