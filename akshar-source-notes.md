# Akshar Dental Clinic — Public Site Notes

## Verified identity and contact routing

The existing public site identifies the practice as **Akshar Dental Clinic** in **Surat**. It promotes bookings via WhatsApp at **+91 94093 13494** and includes a separate appointment link to **+91 63526 67747**. The site links to Instagram at **@dentist_aneri**.

## Verified clinician profile

**Dr. Aneri Moradiya, BDS** is presented as a specialist in general and cosmetic dentistry, with over seven years of hands-on experience. The public site says the clinic serves **Katargam, Dabholi, and Amroli**.

## Publicly listed care areas

The existing site names cosmetic dentistry, pediatric dentistry, general dentistry, dental implants, root canal treatment, braces/orthodontics, full-mouth rehabilitation, smile makeovers, veneers, teeth cleaning, and teeth whitening.

## Content decisions for redesign

Use the clinic’s published WhatsApp contact as the primary conversion route. Do not invent an address or hours because neither is stated on the public Google site. Keep the doctor credentials and service names accurate; rewrite surrounding marketing language in a concise, polished, patient-friendly voice.

## Approved visual source

The public site’s Akshar Dental Clinic logo and Dr. Aneri Moradiya portrait were saved from the clinic-controlled site and uploaded for the redesign. These are the only public-source visual assets presented as clinic-specific on the new page.

## Complete public service catalogue

The clinic’s main and Services pages publicly identify **cosmetic dentistry**, **pediatric dentistry**, and **general dentistry** as core care areas. The broader treatment list is: **teeth whitening, veneers, smile makeovers, dental implants, root canal treatment, braces/orthodontics, full-mouth rehabilitation, teeth cleaning, dental examinations, fillings**, and preventive care.

## Interaction validation note

The service directory now exposes each published treatment as a dedicated navigable page. The FAQ redesign uses the installed accordion primitive, and its event-state behavior is being verified against the live page before release.

The live FAQ controls are enabled and have normal pointer interaction. The final implementation will use a direct local interaction state if needed, ensuring answer visibility is reliable on touch devices as well as desktop browsers.

The FAQ now uses direct React-managed state rather than the generic accordion primitive. Final verification is focused on confirming that a selected FAQ card reveals both its answer and the follow-up WhatsApp link.

Live validation confirmed that an expanded FAQ card visibly renders its answer text and the optional WhatsApp follow-up action, while other answers remain closed.

## Service navigation behavior

Opening an Akshar service page now records the visitor’s vertical service-list position in session storage. When the browser or device back action is used, the homepage restores that saved position with a smooth scroll; direct visits without a saved position still return to the normal services anchor.

Live validation confirmed that a service-list selection transitions to its focused treatment URL and lands at the top of that treatment page.

Using the treatment page’s All services control returned the live preview to the service directory at the prior vertical position, confirming the same destination continuity expected from browser back and phone gesture navigation.

## Personalization anchors from public content

The clinic describes a gentle, child-first philosophy for pediatric treatment and patient-focused general care built around prevention and restorative treatment. Its Clinic Photos page describes a modern dental setting with a patient-friendly environment and says it serves **Katargam, Dabholi, Amroli, and Singanpor**. The gallery contains clinic-controlled images of Dr. Aneri at work and the practice interior; these can be used as authentic supporting imagery.
