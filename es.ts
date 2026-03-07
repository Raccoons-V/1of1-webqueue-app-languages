import type { TranslationKeys } from "./en";

const es: TranslationKeys = {
  // Common
  common: {
    save: "Guardar",
    cancel: "Cancelar",
    delete: "Eliminar",
    edit: "Editar",
    back: "Volver",
    loading: "Cargando...",
    confirm: "Confirmar",
    yes: "Sí",
    no: "No",
    enabled: "Habilitado",
    disabled: "Deshabilitado",
    configured: "Configurado",
    not_configured: "Sin configurar",
    coming_soon: "Próximamente",
    available: "Disponible",
    click_to_manage: "Clic para gestionar",
    click_to_setup: "Clic para configurar",
    click_to_customize: "Clic para personalizar",
    required: "Obligatorio",
    optional: "Opcional",
    search: "Buscar",
    no_results: "Sin resultados",
    error: "Algo salió mal",
    success: "Éxito",
  },

  // Navigation / Sidebar
  nav: {
    dashboard: "Panel",
    queue: "Cola",
    tickets: "Tickets",
    applications: "Solicitudes",
    settings: "Ajustes",
    logout: "Cerrar sesión",
  },

  // Auth
  auth: {
    login: "Iniciar sesión con Discord",
    logout: "Cerrar sesión",
    login_description: "Inicia sesión con tu cuenta de Discord para continuar",
  },

  // Customer dashboard
  customer: {
    welcome: "Bienvenido de nuevo, {name}!",
    subtitle: "Gestiona la configuración de tu servidor FiveM y la cola.",
    setup_progress: "Progreso de configuración",
    required_completed: "{completed} de {total} elementos obligatorios completados",
    completed: "Completado",
    remaining: "Pendiente",
    all_completed: "¡Todos los elementos obligatorios completados!",
    done: "Listo",

    // Section headers
    essential_setup: "Configuración esencial",
    discord_configuration: "Configuración de Discord",
    features: "Funciones",
    branding: "Marca",

    // Essential setup cards
    fivem_title: "Configuración de API FiveM",
    fivem_desc_done: "Tu servidor FiveM está configurado y listo para gestionar la cola.",
    fivem_desc_pending: "Configura tu API de FiveM para habilitar la gestión de la cola.",

    discord_title: "Configuración de Discord",
    discord_desc_done: "Tu bot de Discord está configurado y listo para gestionar la cola.",
    discord_desc_pending: "Configura el token de tu bot de Discord y el ID del servidor.",

    tebex_title: "Configuración de API Tebex",
    tebex_desc_done: "Tu API de Tebex está configurada y lista para el seguimiento de pagos.",
    tebex_desc_pending: "Configura tu clave de API de Tebex para habilitar el historial de compras.",

    // Discord configuration cards
    dashboard_roles_title: "Configuración de roles del panel",
    dashboard_roles_desc: "Configura qué roles de Discord pueden acceder al panel y unirse a la cola.",
    dashboard_roles_locked: "Completa la configuración de Discord primero para configurar los roles de acceso al panel.",

    queue_roles_title: "Roles de cola",
    queue_roles_desc: "Configura roles de Discord para prioridad, slots de bypass y pase exprés.",
    queue_roles_desc_done: "Tienes roles de Discord configurados para prioridad y bypass de cola.",
    queue_roles_locked: "Completa la configuración de Discord primero para configurar los roles de cola.",

    moderators_title: "Moderadores",
    moderators_desc: "Añade moderadores para ayudar a gestionar tickets y solicitudes de tu servidor.",
    moderators_desc_done: "Tienes moderadores con acceso a tickets y solicitudes.",
    moderators_locked: "Completa la configuración de Discord primero para gestionar moderadores.",
    discord_required: "Completa la configuración de Discord primero",

    // Features cards
    module_settings_title: "Ajustes de módulos",
    module_settings_desc: "Habilita o deshabilita módulos y controla el acceso a la cola para jugadores y moderadores",

    application_builder_title: "Constructor de solicitudes",
    application_builder_desc: "Crea y gestiona formularios de solicitud con preguntas personalizadas para los jugadores.",

    tickets_title: "Tickets",
    tickets_desc: "Gestiona categorías de tickets y personaliza tu sistema de soporte para jugadores y moderadores.",

    notifications_title: "Notificaciones de Discord",
    notifications_desc: "Configura notificaciones de Discord para la cola, solicitudes y tickets",

    queue_builder_title: "Constructor de cola",
    queue_builder_desc: "Construye y personaliza tu sistema de cola con reglas avanzadas, prioridades y automatización.",

    language_title: "Idioma",
    language_desc: "Configura el idioma de la interfaz para los jugadores.",

    // Branding cards
    app_customization_title: "Personalización de la app",
    app_customization_desc: "Personaliza ajustes de toda la app como el color principal que se aplica a toda la aplicación.",

    dashboard_customization_title: "Personalización del panel",
    dashboard_customization_desc: "Personaliza el logo del panel que verán tú y todos los jugadores/moderadores.",

    home_page_title: "Personalización de la página de inicio",
    home_page_desc: "Personaliza la apariencia, el contenido y los enlaces rápidos de tu página de inicio para los jugadores.",

    login_customization_title: "Personalización del inicio de sesión",
    login_customization_desc: "Personaliza la apariencia, la marca y el flujo de autenticación de tu página de inicio de sesión.",

    custom_domain_title: "Dominio personalizado",
    custom_domain_desc_done: "Tu dominio personalizado está configurado y listo para usar.",
    custom_domain_desc_pending: "Configura un dominio personalizado para usar tu propio nombre de dominio en tu página de inicio.",
  },

  // Language settings page
  language: {
    title: "Idioma",
    description: "Configura el idioma de la interfaz para los jugadores.",
    select_label: "Idioma de la interfaz",
    select_description: "Esto controla el idioma que ven los jugadores al usar tu cola, tickets y solicitudes.",
    select_language: "Seleccionar idioma",
    select_language_description: "Elige el idioma que verán los jugadores al usar tu cola, tickets y solicitudes.",
    save_success: "Idioma guardado correctamente",
    save_error: "Error al guardar el idioma",
    english: "Inglés",
    spanish: "Español",
  },

  // Queue
  queue: {
    title: "Cola",
    position: "Posición",
    join: "Unirse a la cola",
    leave: "Salir de la cola",
    players_in_queue: "{count} jugadores en cola",
    your_position: "Tu posición: {position}",
    estimated_wait: "Espera estimada: {time}",
    queue_closed: "La cola está cerrada",
    queue_open: "La cola está abierta",
  },

  // Tickets
  tickets: {
    title: "Tickets",
    create: "Crear ticket",
    open: "Abierto",
    closed: "Cerrado",
    no_tickets: "Sin tickets",
    subject: "Asunto",
    description: "Descripción",
    status: "Estado",
    created_at: "Creado",
    updated_at: "Última actualización",
    close_ticket: "Cerrar ticket",
    ticket_closed: "Ticket cerrado",
    message_placeholder: "Escribe tu mensaje...",
    send: "Enviar",
  },

  // Applications
  applications: {
    title: "Solicitudes",
    submit: "Enviar solicitud",
    no_applications: "No hay solicitudes disponibles",
    submitted: "Solicitud enviada correctamente",
    already_submitted: "Ya enviaste esta solicitud",
    status: "Estado",
    pending: "Pendiente",
    approved: "Aprobada",
    rejected: "Rechazada",
  },
};

export default es;
