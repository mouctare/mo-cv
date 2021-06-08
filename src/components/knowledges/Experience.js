import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expérience</h3>
      <div className="exp-1">
        <h4>Projet de fin de formation</h4>
        <h5>05-2021 au 07-2021</h5>
        <p>
        Pour valider le diplôme , il fallait créer une application de A-Z. C'est ainsi, que j'ai développé une application de gestion  du personnel d'une société de sécurité privée.
          Pour le  back end, j'ai utilisé Symfony, ApiPlatform et j'ai développé les taches suivantes:
          Gestions des utilisateurs, des plannings, des sites, des rapports , des indisponibilités et des services.
          Pour le frontend, J'ai utilisé la librairie React.Js .
        </p>
      </div>
      <div className="exp-2">
        <h4>Stagiaire chez IFS73</h4>
        <h5>09-2021 au 11-2021</h5>
        <p>
          Mon stage portait sur le Big-Data notamment.
          Au cours du stage , la mission qui m'a été confié était de faire du Web scraping avec les API de, Youtube, Facebbok, twitter et  instagram afin de récupérer les statistiques de certaines marques touristiques comme:
          Disneyland Paris, Futuroscope, Puy du Fou, Nigloland pour ne citer que celles-ci. Le but était de récupérer le nombre de vues, likes, dislikes, partages, commentaires etc. Afin d'évaluer le dynamisme de ces différentes marques touristiques sur les réseaux sociaux et ainsi avoir une aide à la décision afin d'être plus présent sur ces différentes plateformes numériques.
           Ce stage m'a permis de mieux comprendre le fontionnement d'une API.
        </p>
      </div>
    </div>
  );
};

export default Experience;
