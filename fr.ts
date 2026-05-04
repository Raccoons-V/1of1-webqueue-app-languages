import type { TranslationKeys } from "./eng";

const fr: TranslationKeys = {
  // Common
  common: {
    save: "Enregistrer",
    cancel: "Annuler",
    delete: "Supprimer",
    edit: "Modifier",
    back: "Retour",
    loading: "Chargement...",
    confirm: "Confirmer",
    yes: "Oui",
    no: "Non",
    enabled: "Activé",
    disabled: "Désactivé",
    configured: "Configuré",
    not_configured: "Non configuré",
    coming_soon: "À venir",
    available: "Disponible",
    click_to_manage: "Cliquez pour gérer",
    click_to_setup: "Cliquez pour configurer",
    click_to_customize: "Cliquez pour personnaliser",
    required: "Obligatoire",
    optional: "Facultatif",
    search: "Rechercher",
    no_results: "Aucun résultat trouvé",
    error: "Une erreur est survenue",
    success: "Succès",
  },

  // Navigation / Sidebar
  nav: {
    dashboard: "Tableau de bord",
    queue: "File d'attente",
    tickets: "Tickets",
    applications: "Candidatures",
    settings: "Paramètres",
    logout: "Déconnexion",
  },

  // Auth
  auth: {
    login: "Connexion avec Discord",
    logout: "Déconnexion",
    login_description: "Connectez-vous avec votre compte Discord pour continuer",
  },

  // Customer dashboard
  customer: {
    welcome: "Bienvenue, {name}!",
    subtitle: "Gérez la configuration de votre serveur FiveM et les paramètres de file d'attente.",
    setup_progress: "Progression de la configuration",
    required_completed: "{completed} sur {total} éléments obligatoires complétés",
    completed: "Complété",
    remaining: "Restant",
    all_completed: "Tous les éléments obligatoires sont complétés!",
    done: "Terminé",

    // Section headers
    essential_setup: "Configuration essentielle",
    discord_configuration: "Configuration Discord",
    features: "Fonctionnalités",
    branding: "Image de marque",

    // Essential setup cards
    fivem_title: "Configuration de l'API FiveM",
    fivem_desc_done: "Votre serveur FiveM est configuré et prêt pour la gestion de la file d'attente.",
    fivem_desc_pending: "Configurez vos paramètres d'API FiveM pour activer la gestion de la file d'attente.",

    discord_title: "Configuration de Discord",
    discord_desc_done: "Votre bot Discord est configuré et prêt pour la gestion de la file d'attente.",
    discord_desc_pending: "Configurez le jeton de votre bot Discord et l'ID du serveur pour la gestion de la file d'attente.",

    tebex_title: "Configuration de l'API Tebex",
    tebex_desc_done: "Votre API Tebex est configurée et prête pour le suivi des paiements.",
    tebex_desc_pending: "Configurez votre clé d'API Tebex pour activer le suivi de l'historique d'achat.",

    // Discord configuration cards
    dashboard_roles_title: "Configuration des rôles du tableau de bord",
    dashboard_roles_desc: "Configurez quels rôles Discord peuvent accéder au tableau de bord et rejoindre la file d'attente.",
    dashboard_roles_locked: "Complétez d'abord la configuration de Discord pour configurer les rôles d'accès au tableau de bord.",

    queue_roles_title: "Rôles de file d'attente",
    queue_roles_desc: "Configurez les rôles Discord pour la priorité, les emplacements de contournement et les laissez-passer express.",
    queue_roles_desc_done: "Vous avez les rôles Discord configurés pour la priorité et le contournement de la file d'attente.",
    queue_roles_locked: "Complétez d'abord la configuration de Discord pour configurer les rôles de file d'attente.",

    moderators_title: "Modérateurs",
    moderators_desc: "Ajoutez des modérateurs pour aider à gérer les tickets et les candidatures de votre serveur.",
    moderators_desc_done: "Vous avez des modérateurs avec accès aux tickets et aux candidatures.",
    moderators_locked: "Complétez d'abord la configuration de Discord pour gérer les modérateurs.",
    discord_required: "Complétez d'abord la configuration de Discord",

    // Features cards
    module_settings_title: "Paramètres des modules",
    module_settings_desc: "Activez ou désactivez les modules et contrôlez l'accès à la file d'attente pour les joueurs et les modérateurs",

    application_builder_title: "Générateur de candidatures",
    application_builder_desc: "Créez et gérez des formulaires de candidature avec des questions personnalisées que les joueurs doivent remplir.",

    tickets_title: "Tickets",
    tickets_desc: "Gérez les catégories de tickets et personnalisez votre système d'assistance pour les joueurs et les modérateurs.",

    notifications_title: "Notifications Discord",
    notifications_desc: "Configurez les notifications Discord pour la file d'attente, les candidatures et les tickets",

    queue_builder_title: "Générateur de file d'attente",
    queue_builder_desc: "Construisez et personnalisez votre système de file d'attente avec des règles avancées, des priorités et des fonctionnalités d'automatisation.",

    language_title: "Langue",
    language_desc: "Définissez la langue de l'interface destinée aux joueurs.",

    // Branding cards
    app_customization_title: "Personnalisation de l'application",
    app_customization_desc: "Personnalisez les paramètres à l'échelle de l'application comme la couleur primaire qui s'applique à toute l'application.",

    dashboard_customization_title: "Personnalisation du tableau de bord",
    dashboard_customization_desc: "Personnalisez le logo de la barre de navigation de votre tableau de bord qui sera visible par vous et tous les joueurs/modérateurs.",

    home_page_title: "Personnalisation de la page d'accueil",
    home_page_desc: "Personnalisez l'apparence, le contenu et les liens rapides de votre page d'accueil pour les joueurs.",

    login_customization_title: "Personnalisation de la connexion",
    login_customization_desc: "Personnalisez l'apparence, l'image de marque et le flux d'authentification de votre page de connexion.",

    custom_domain_title: "Domaine personnalisé",
    custom_domain_desc_done: "Votre domaine personnalisé est configuré et prêt à l'emploi.",
    custom_domain_desc_pending: "Configurez un domaine personnalisé pour utiliser votre propre nom de domaine pour votre page d'accueil.",
  },

  // Language settings page
  language: {
    title: "Langue",
    description: "Définissez la langue de l'interface destinée aux joueurs.",
    select_label: "Langue de l'interface",
    select_description: "Cela contrôle la langue que les joueurs voient lorsqu'ils utilisent votre file d'attente, vos tickets et vos candidatures.",
    select_language: "Sélectionner la langue",
    select_language_description: "Choisissez la langue que les joueurs verront lorsqu'ils utiliseront votre file d'attente, vos tickets et vos candidatures.",
    save_success: "Langue enregistrée avec succès",
    save_error: "Erreur lors de l'enregistrement de la langue",
    english: "Anglais",
    spanish: "Espagnol",
  },

  // Queue
  queue: {
    title: "File d'attente",
    position: "Position",
    join: "Rejoindre la file d'attente",
    leave: "Quitter la file d'attente",
    players_in_queue: "{count} joueurs en file d'attente",
    your_position: "Votre position : {position}",
    estimated_wait: "Attente estimée : {time}",
    queue_closed: "La file d'attente est fermée",
    queue_open: "La file d'attente est ouverte",
  },

  // Tickets
  tickets: {
    title: "Tickets",
    create: "Créer un ticket",
    open: "Ouvert",
    closed: "Fermé",
    no_tickets: "Aucun ticket pour le moment",
    subject: "Sujet",
    description: "Description",
    status: "Statut",
    created_at: "Créé",
    updated_at: "Dernière mise à jour",
    close_ticket: "Fermer le ticket",
    ticket_closed: "Ticket fermé",
    message_placeholder: "Tapez votre message...",
    send: "Envoyer",
  },

  // Applications
  applications: {
    title: "Candidatures",
    submit: "Soumettre une candidature",
    no_applications: "Aucune candidature disponible",
    submitted: "Candidature soumise avec succès",
    already_submitted: "Vous avez déjà soumis cette candidature",
    status: "Statut",
    pending: "En attente",
    approved: "Approuvée",
    rejected: "Rejetée",
  },
};

export default fr;
