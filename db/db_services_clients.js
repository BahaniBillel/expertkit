export default function ServiceClientsData() {
  return [
    {
      groupId: 1,
      type: "ServiceClients",
      groupName: "L'appui général Messages électroniques....",
      items: [
        {
          id: 2,
          type: "Service Clients",
          prompt: `Créer un courriel qui répond à un client qui a du mal à accéder à son compte. Fournir des instructions sur la façon de réinitialiser leur mot de passe et offrir un soutien supplémentaire si nécessaire.`,
        },
        {
          id: 3,
          type: "Service Clients",
          prompt: `Écrivez un courriel qui traite de la question de la facturation d'un client. Reconnaître leurs préoccupations et fournir des informations sur la façon de résoudre la question, y compris les formulaires ou documents nécessaires à remplir.`,
        },
        {
          id: 4,
          type: "Service Clients",
          prompt: `Créer un courriel qui répond à un client qui connaît un problème avec le site Web. Excusez-vous pour les inconvénients et fournissez des solutions ou des solutions pour les aider à accomplir leur tâche.`,
        },
        {
          id: 5,
          type: "Service Clients",
          prompt: `Écrivez un courriel qui s'adresse à la question d'un client au sujet d'une politique spécifique. Fournir une explication claire et concise de la politique et tout détail pertinent qui pourrait être important pour le client de savoir.`,
        },
        {
          id: 6,
          type: "Service Clients",
          prompt: `Créez un courriel qui répond à un client qui a une question ou une préoccupation unique qui ne correspond pas à aucune des autres catégories de support. S'adresser directement à leurs préoccupations et proposer des solutions ou des suggestions pour résoudre le problème.`,
        },
      ],
    },
    {
      groupId: 2,
      type: "ServiceClients",
      groupName: "L'écriture des courriels de confirmation de commande...",
      items: [
        {
          id: 8,
          type: "Service Clients",
          prompt: `Écrivez un courriel de confirmation de commande pour un client qui vient de faire un achat pour (produit) dans ma boutique en ligne. Utilisez un langage persuasif pour les remercier pour leur achat et les encourager à retourner pour les achats futurs.`,
        },
        {
          id: 9,
          type: "Service Clients",
          prompt: `Créer un courriel de confirmation de commande pour un client qui vient de s'inscrire à un service d'abonnement. Utilisez un ton amical et accueillant, et inclure des détails sur l'abonnement et comment il fonctionne.`,
        },
        {
          id: 10,
          type: "Service Clients",
          prompt: `Écrivez un courriel de confirmation de commande pour un client qui a effectué un achat important de (product). Utilisez un langage qui les rassure de la commande, et offrez des informations sur les prochaines étapes du processus.`,
        },
        {
          id: 11,
          type: "Service Clients",
          prompt: `Créer un courriel de confirmation de commande pour un client qui a précommandé un nouveau produit qui devrait être publié prochainement. Utilisez un langage qui crée de l'excitation sur le produit et comprend des détails sur la date de sortie et toute information d'expédition.`,
        },
        {
          id: 12,
          type: "Service Clients",
          prompt: `Écrivez un courriel de confirmation de commande pour un client qui vient de faire un achat pour (produit) en cadeau. Utilisez un langage qui les remercie pour leur achat et inclut des informations sur les options de cadeau telles que l'emballage de cadeaux ou des messages personnalisés.`,
        },
      ],
    },

    {
      groupId: 3,
      type: "ServiceClients",
      groupName: "Confirmation d'expédition Modèles de courriel...",
      items: [
        {
          id: 14,
          type: "Service Clients",
          prompt: `Chère (nom du client), ma commande a été expédiée! Nous sommes ravis de vous faire savoir que mon (nom de produit) est en route. Vous pouvez suivre mon colis en utilisant le numéro de suivi ________________ à (shipping carrier website).`,
        },
        {
          id: 15,
          type: "Service Clients",
          prompt: `Bonjour (customer name), ma commande a été expédiée et nous voulions vous donner une tête. Vous pouvez vous attendre à recevoir mon (nom du produit) par (estimated delivery date). Le numéro de suivi de mon colis est ________________. Vous pouvez utiliser ce numéro pour vérifier l'état de la livraison à (shipping carrier website).`,
        },
        {
          id: 16,
          type: "Service Clients",
          prompt: `Hey (customer name), Bonne nouvelle! mon (nom du produit) a été expédié et est actuellement en transit. Vous pouvez suivre mon colis en utilisant le numéro de suivi ________________ à (shipping carrier website). Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter à (customer support email or phone number).`,
        },
        {
          id: 17,
          type: "Service Clients",
          prompt: `Hi (customer name), Juste une note rapide pour vous faire savoir que mon (nom du produit) a été expédié et est en route pour vous. Vous pouvez suivre mon colis en utilisant le numéro de suivi ________________ à (shipping carrier website). Merci pour ma commande et nous espérons que vous apprécierez mon achat!`,
        },
        {
          id: 18,
          type: "Service Clients",
          prompt: `Chérie (customer name), mon (nom du produit) a été expédié! Vous pouvez vous attendre à recevoir ma commande par (estimated delivery date). Le numéro de suivi de mon colis est ________________, que vous pouvez utiliser pour vérifier l'état de la livraison à (shipping carrier website). Si vous avez des questions ou des préoccupations, veuillez nous contacter à (customer support email or phone number). Merci d'avoir fait vos achats avec nous!`,
        },
      ],
    },
    {
      groupId: 4,
      type: "ServiceClients",
      groupName: "L'écriture de retour & échange de courriels...",
      items: [
        {
          id: 20,
          type: "Service Clients",
          prompt: `Créer un modèle de courriel qui guide les clients à travers le processus de retour (produit) en fournissant des instructions détaillées sur les étapes nécessaires et ce qu'il faut attendre pendant le processu de retour.`,
        },
        {
          id: 21,
          type: "Service Clients",
          prompt: `Écrivez un courriel qui reconnaît la demande de retour du client et leur fournit une estimation de quand ils peuvent s'attendre à ce que leur remboursement ou échange soit traité. Inclure toute information supplémentaire qu'ils ont besoin de savoir sur le processus de retour.`,
        },
        {
          id: 22,
          type: "Service Clients",
          prompt: `Créer un modèle de courriel qui guide les clients à travers le processus d'échange (produit) pour une taille ou une couleur différente. Inclure des instructions sur la façon d'initier l'échange, ce à quoi s'attendre pendant le processus, et toute information supplémentaire qu'ils ont besoin de savoir.`,
        },
        {
          id: 23,
          type: "Service Clients",
          prompt: `Écrivez un courriel qui informe le client que leur retour a été reçu et traité, et leur fournit une mise à jour sur l'état de leur remboursement ou échange. Inclure les détails nécessaires tels que le montant remboursé ou les informations d'expédition pour l'échange.`,
        },
        {
          id: 24,
          type: "Service Clients",
          prompt: `Créer un modèle de courriel qui fournit aux clients des instructions sur la façon de demander un remboursement ou un échange pour un produit défectueux ou endommagé. Inclure des instructions détaillées sur la façon d'initier la demande et ce qu'il faut attendre pendant le processus, ainsi que toute information supplémentaire qu'ils ont besoin de savoir.`,
        },
      ],
    },
    {
      groupId: 5,
      type: "ServiceClients",
      groupName: "Le remboursement Messages électroniques... ",
      items: [
        {
          id: 26,
          type: "Service Clients",
          prompt: `Écrivez un e-mail de confirmation de remboursement à un client qui a retourné (product name). Inclure les détails du remboursement, y compris le montant et le délai prévu pour le rembouragement à traiter.`,
        },
        {
          id: 27,
          type: "Service Clients",
          prompt: `Créez un e-mail de confirmation de remboursement qui inclut un message personnalisé au client, les remerciant de leur entreprise et les assurant que leur rembourse a été traitée avec succès.`,
        },
        {
          id: 28,
          type: "Service Clients",
          prompt: `Écrivez un e-mail de confirmation de remboursement à un client qui a demandé un rembursement pour (reason for refund). Assurez-vous d'inclure toute information supplémentaire ou des instructions qu'ils pourraient avoir besoin pour le processus de remboursement.`,
        },
        {
          id: 29,
          type: "Service Clients",
          prompt: `Créer un e-mail de confirmation de remboursement qui met en évidence l'engagement de ma société en faveur de la satisfaction de la clientèle et s'assure que le processus de restitution a été terminé avec succès et en temps voulu.`,
        },
        {
          id: 30,
          type: "Service Clients",
          prompt: `Écrivez un e-mail de confirmation de remboursement qui inclut un appel à l'action pour inviter le client à laisser une évaluation ou fournir un commentaire sur leur expérience avec mon produit ou service.`,
        },
      ],
    },
    {
      groupId: 6,
      type: "ServiceClients",
      groupName: "E-mails d'assistance technique...",
      items: [
        {
          id: 32,
          type: "Service Clients",
          prompt: `Pouvez-vous m'aider à créer un courriel qui fournit des instructions étape par étape pour les clients qui rencontrent un problème technique spécifique avec (produit / site Web)?`,
        },
        {
          id: 33,
          type: "Service Clients",
          prompt: `Écrivez un courriel qui propose des conseils et des astuces pour optimiser les performances (produit / site Web) et résoudre les problèmes techniques courants que les clients peuvent rencontrer.`,
        },
        {
          id: 34,
          type: "Service Clients",
          prompt: `Pouvez-vous créer une série de 3 courriels qui fournissent un support technique pour les différentes fonctionnalités du (produit/site Web), y compris des conseils de dépannage et des ressources pour une assistance supplémentaire?`,
        },
        {
          id: 35,
          type: "Service Clients",
          prompt: `Écrivez un courriel traitant d'un problème technique spécifique que plusieurs clients ont signalé, en fournissant une explication du problème et une solution étape par étape pour le résoudre.`,
        },
        {
          id: 36,
          type: "Service Clients",
          prompt: `Pouvez-vous créer un courriel qui offre un support technique personnalisé aux clients qui nous ont contacté avec un problème technique spécifique? Inclure une demande d'informations supplémentaires qui pourraient être nécessaires pour diagnostiquer et résoudre le problème."`,
        },
      ],
    },
    {
      groupId: 7,
      type: "ServiceClients",
      groupName: "La gestion des comptes Messages électroniques...",
      items: [
        {
          id: 38,
          type: "Service Clients",
          prompt: `Écrivez un courriel qui guide les clients sur la façon de mettre à jour leurs informations de compte, y compris leur nom, leur adresse et les informations de paiement.`,
        },
        {
          id: 39,
          type: "Service Clients",
          prompt: `Créer un courriel expliquant le processus de changement d'un mot de passe pour les clients qui doivent réinitialiser leurs identifiants de connexion.`,
        },
        {
          id: 40,
          type: "Service Clients",
          prompt: `Écrivez un courriel qui informe les clients des avantages de la création d'un compte avec mon site Web, y compris le paiement plus rapide et le suivi de l'historique des commandes.`,
        },
        {
          id: 41,
          type: "Service Clients",
          prompt: `Créez un courriel qui encourage les clients à vérifier leur adresse électronique à des fins de sécurité et pour s'assurer qu'ils reçoivent des mises à jour et des notifications importantes.`,
        },
        {
          id: 42,
          type: "Service Clients",
          prompt: `Écrivez un courriel expliquant le processus de suppression du compte et ce que les clients devraient attendre après la suppression de leur compte.`,
        },
      ],
    },
    {
      groupId: 8,
      type: "ServiceClients",
      groupName: "Les e-mails d'enquête de produit...",
      items: [
        {
          id: 44,
          type: "Service Clients",
          prompt: `Écrivez un courriel d'enquête de produit qui explique les caractéristiques uniques du (produit) et comment ils profitent au client. Assurez-vous d'inclure des spécifications ou des exigences de compatibilité.`,
        },
        {
          id: 45,
          type: "Service Clients",
          prompt: `Créer un courriel qui fournit une comparaison entre (produit 1) et (produit 2), en soulignant les principales différences et en recommandant la meilleure option pour les besoins du client.`,
        },
        {
          id: 46,
          type: "Service Clients",
          prompt: `Écrivez un courriel qui traite de l'inquiétude d'un client au sujet du (produit) et explique comment il répond à leurs exigences spécifiques.`,
        },
        {
          id: 47,
          type: "Service Clients",
          prompt: `Créer un courriel expliquant comment (le produit) peut être personnalisé ou adapté pour répondre aux besoins du client. Inclure toutes les options de personnalisation pertinentes ou des fonctionnalités supplémentaires.`,
        },
        {
          id: 48,
          type: "Service Clients",
          prompt: `Écrivez un courriel qui fournit des instructions détaillées sur la façon d'utiliser (produit) pour un but ou un objectif spécifique. Assurez-vous d'inclure tous les accessoires nécessaires ou l'équipement supplémentaire qui pourrait être nécessaire.`,
        },
      ],
    },
    {
      groupId: 9,
      type: "ServiceClients",
      groupName: "Les e-mails d'enquête de ventes...",
      items: [
        {
          id: 50,
          type: "Service Clients",
          prompt: `Écrivez un courriel d'enquête de vente qui informe les clients d'une promotion ou d'un rabais à durée limitée pour un produit spécifique, et inclut un appel à l'action pour effectuer un achat.`,
        },
        {
          id: 51,
          type: "Service Clients",
          prompt: `Créer un courriel d'enquête de vente qui fournit des informations sur les avantages et les caractéristiques d'un produit, et inclut une offre spéciale ou une offre exclusive pour un temps limité.`,
        },
        {
          id: 52,
          type: "Service Clients",
          prompt: `Écrivez un courriel d'enquête de vente qui met en évidence les points de vente uniques d'un produit, et inclut les témoignages des clients ou des commentaires pour construire la crédibilité et la confiance avec les acheteurs potentiels.`,
        },
        {
          id: 53,
          type: "Service Clients",
          prompt: `Créez un courriel d'enquête de vente qui propose des recommandations de produits personnalisées en fonction des préférences ou de l'historique d'achat du client, et inclut une réduction ou une incitation spéciale pour les encourager à effectuer un achat.`,
        },
        {
          id: 54,
          type: "Service Clients",
          prompt: `Écrivez un courriel d'enquête de vente qui fournit des informations sur les différents produits ou services offerts par l'entreprise, et comprend une offre spéciale ou un rabais pour les clients de première fois ou les nouveaux abonnés.`,
        },
      ],
    },
  ];
}
