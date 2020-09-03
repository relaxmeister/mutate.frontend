import React from "react";
//import PropTypes from 'prop-types';

import styles from "./style.module.css";

import toys from "../../assets/icons/toys.png";
import health from "../../assets/icons/insurance.png";
import bus from "../../assets/icons/bus.png";
import home from "../../assets/icons/home-run.png";
import gym from "../../assets/icons/gym.png";
import palm from "../../assets/icons/beach.png";
import fruit from "../../assets/icons/viburnum-fruit.png";


import PerkCard from "../../components/perkcard/PerkCard";

const array = [
  {
    icon: health,
    header: "Håll dig frisk",
    text:
      "Vi tar hand om vårt team med omfattande sjuk- , tandvårds- och synhjälpmedelsförsäkringar."
  },
  {
    icon: toys,
    header: "Föräldraförmåner",
    text:
      "Tillbringa lite kvalitetstid med nästa generation genom föräldraledighet, fertilitets-, adoptions- och surrogatförmåner."
  },
  {
    icon: palm,
    header: "Fritid",
    text:
      "Håll dig fräsch med fler än 14 dagar betalda helgdagar, sjukdagar och fyra veckors betald ledighet."
  },
  {
    icon: bus,
    header: "Pendla lugnt",
    text: "Upp till 270 $ per månad till pendling och parkering.."
  },
  {
    icon: fruit,
    header: "Förmånerna",
    text:
      "Grymma, serverade luncher och tilltugg varje dag. Skrivbordspengar så att du kan anpassa ditt eget utrymme. Allt du behöver för din datoranläggning, inklusive pengar till hörlurar."
  },
  {
    icon: gym,
    header: "Vi bjuder på din träning",
    text:
      "Träningspengar till ditt gymkort eller annan friskvård. Yoga på kontoret varje vecka."
  },
  {
    icon: home,
    header: "Omlokalisering",
    text: "Fantastiska omlokaliseringsbonusar för nyanställda."
  }
];

const Perks = props => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>Top-tier perks and benefits:</div>
        <div className={styles.perksWrapper}>
          {array.map(e => {
            return <PerkCard perk={e} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Perks;
