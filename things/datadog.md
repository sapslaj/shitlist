---
name: Datadog
added_on: 2023-06-06
---

My day job is being an Site Reliability Engineer. That requires really good obervability (o11y) tooling. I've used Datadog for a year and a half at the time of this writing and it's been disappointing.

Some highlights:

- The costs are outrageous.
- Their pricing model is wack and makes figuring out where the costs are coming from very difficult.
  - in fairness they've made some recent improvements but they are opt-in via your account rep.
- Custom metrics pricing is _especially_ bad. (seriously, why does it _have_ to have an aggregation? What if I just want to see all of the time series??)
- Metrics explorer has terrible UX coming from a Prometheus background.
- Log search is extremely frustrating because full text search only works on the message field and not other fields in a structured log message.
- Monitor management UX is also bad. (why is the query some custom query language that's different from the metrics explorer?)
