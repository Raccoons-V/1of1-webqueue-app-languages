import type { TranslationKeys } from "./en";

const no: TranslationKeys = {
  // Common
  common: {
    save: "Lagre",
    cancel: "Avbryt",
    delete: "Slett",
    edit: "Rediger",
    back: "Tilbake",
    loading: "Laster...",
    confirm: "Bekreft",
    yes: "Ja",
    no: "Nei",
    enabled: "Aktivert",
    disabled: "Deaktivert",
    configured: "Konfigurert",
    not_configured: "Ikke konfigurert",
    coming_soon: "Kommer snart",
    available: "Tilgjengelig",
    click_to_manage: "Klikk for å administrere",
    click_to_setup: "Klikk for å sette opp",
    click_to_customize: "Klikk for å tilpasse",
    required: "Påkrevd",
    optional: "Valgfritt",
    search: "Søk",
    no_results: "Ingen resultater funnet",
    error: "Noe gikk galt",
    success: "Vellykket",
  },

  // Navigation / Sidebar
  nav: {
    dashboard: "Dashbord",
    queue: "Kø",
    tickets: "Billetter",
    applications: "Søknader",
    settings: "Innstillinger",
    logout: "Logg ut",
  },

  // Auth
  auth: {
    login: "Logg inn med Discord",
    logout: "Logg ut",
    login_description: "Logg inn med Discord-kontoen din for å fortsette",
  },

  // Customer dashboard
  customer: {
    welcome: "Velkommen tilbake, {name}!",
    subtitle: "Administrer konfigurasjonen av FiveM-serveren din og køinnstillinger.",
    setup_progress: "Oppsettsfremdrift",
    required_completed: "{completed} av {total} påkrevde elementer fullført",
    completed: "Fullført",
    remaining: "Gjenstår",
    all_completed: "Alle påkrevde elementer er fullført!",
    done: "Ferdig",

    // Section headers
    essential_setup: "Grunnleggende oppsett",
    discord_configuration: "Discord-konfigurasjon",
    features: "Funksjoner",
    branding: "Profilering",

    // Essential setup cards
    fivem_title: "FiveM API-konfigurasjon",
    fivem_desc_done: "FiveM-serveren din er konfigurert og klar for køhåndtering.",
    fivem_desc_pending: "Konfigurer FiveM API-innstillingene dine for å aktivere køhåndtering.",

    discord_title: "Discord-oppsett",
    discord_desc_done: "Discord-boten din er konfigurert og klar for køhåndtering.",
    discord_desc_pending: "Konfigurer Discord bot-token og guild ID for køhåndtering.",

    tebex_title: "Tebex API-konfigurasjon",
    tebex_desc_done: "Tebex API-en din er konfigurert og klar for betalingssporing.",
    tebex_desc_pending: "Konfigurer Tebex API-nøkkelen din for å aktivere sporing av kjøpshistorikk.",

    // Discord configuration cards
    dashboard_roles_title: "Oppsett av dashbordroller",
    dashboard_roles_desc: "Konfigurer hvilke Discord-roller som kan få tilgang til dashbordet og bli med i køen.",
    dashboard_roles_locked: "Fullfør Discord-oppsettet først for å konfigurere roller for dashbord- og køtilgang.",

    queue_roles_title: "Køroller",
    queue_roles_desc: "Konfigurer Discord-roller for køprioritet, bypass-plasser og ekspresspass.",
    queue_roles_desc_done: "Du har konfigurert Discord-roller for køprioritet og bypass.",
    queue_roles_locked: "Fullfør Discord-oppsettet først for å konfigurere køroller.",

    moderators_title: "Moderatorer",
    moderators_desc: "Legg til moderatorer for å hjelpe med å administrere billetter og søknader for serveren din.",
    moderators_desc_done: "Du har moderatorer med tilgang til billetter og søknader.",
    moderators_locked: "Fullfør Discord-oppsettet først for å administrere moderatorer.",
    discord_required: "Fullfør Discord-oppsettet først",

    // Features cards
    module_settings_title: "Modulinnstillinger",
    module_settings_desc: "Aktiver eller deaktiver moduler og kontroller køtilgang for spillere og moderatorer",

    application_builder_title: "Søknadsbygger",
    application_builder_desc: "Opprett og administrer søknadsskjemaer med egendefinerte spørsmål som spillere kan fylle ut.",

    tickets_title: "Billetter",
    tickets_desc: "Administrer billettkategorier og tilpass supportsystemet for spillere og moderatorer.",

    notifications_title: "Discord-varsler",
    notifications_desc: "Konfigurer Discord-varsler for kø, søknader og billetter",

    queue_builder_title: "Købygger",
    queue_builder_desc: "Bygg og tilpass køsystemet ditt med avanserte regler, prioriteringer og automatiseringsfunksjoner.",

    language_title: "Språk",
    language_desc: "Sett språket for spillergrensesnittet.",

    // Branding cards
    app_customization_title: "App-tilpasning",
    app_customization_desc: "Tilpass app-innstillinger som primærfarge som gjelder for hele applikasjonen.",

    dashboard_customization_title: "Dashbord-tilpasning",
    dashboard_customization_desc: "Tilpass logoen i dashbordets navigasjonslinje som vil være synlig for deg og alle spillere/moderatorer.",

    home_page_title: "Forside-tilpasning",
    home_page_desc: "Tilpass utseendet, innholdet og hurtiglenkene på landingssiden for spillere.",

    login_customization_title: "Innloggings-tilpasning",
    login_customization_desc: "Tilpass utseendet, profileringen og autentiseringsflyten på innloggingssiden.",

    custom_domain_title: "Egendefinert domene",
    custom_domain_desc_done: "Ditt egendefinerte domene er konfigurert og klart til bruk.",
    custom_domain_desc_pending: "Konfigurer et egendefinert domene for å bruke ditt eget domenenavn for landingssiden.",
  },

  // Language settings page
  language: {
    title: "Språk",
    description: "Sett språket for spillergrensesnittet.",
    select_label: "Grensesnittspråk",
    select_description: "Dette styrer språket spillere ser når de bruker kø, billetter og søknader.",
    select_language: "Velg språk",
    select_language_description: "Velg språket spillere vil se når de bruker kø, billetter og søknader.",
    save_success: "Språk lagret",
    save_error: "Kunne ikke lagre språk",
    english: "Engelsk",
    spanish: "Spansk",
  },

  // Queue
  queue: {
    title: "Kø",
    position: "Posisjon",
    join: "Bli med i kø",
    leave: "Forlat kø",
    players_in_queue: "{count} spillere i kø",
    your_position: "Din posisjon: {position}",
    estimated_wait: "Estimert ventetid: {time}",
    queue_closed: "Køen er stengt",
    queue_open: "Køen er åpen",
  },

  // Tickets
  tickets: {
    title: "Billetter",
    create: "Opprett billett",
    open: "Åpen",
    closed: "Lukket",
    no_tickets: "Ingen billetter ennå",
    subject: "Emne",
    description: "Beskrivelse",
    status: "Status",
    created_at: "Opprettet",
    updated_at: "Sist oppdatert",
    close_ticket: "Lukk billett",
    ticket_closed: "Billetten er lukket",
    message_placeholder: "Skriv meldingen din...",
    send: "Send",
  },

  // Applications
  applications: {
    title: "Søknader",
    submit: "Send søknad",
    no_applications: "Ingen søknader tilgjengelig",
    submitted: "Søknad sendt",
    already_submitted: "Du har allerede sendt denne søknaden",
    status: "Status",
    pending: "Avventer",
    approved: "Godkjent",
    rejected: "Avvist",
  },
};

export default no;