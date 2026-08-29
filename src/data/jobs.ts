import staircase from "../assets/jobs/glass-staircase.jpg";
import balustradeStairs from "../assets/jobs/glass-balustrade-stairs.jpg";
import seaView from "../assets/jobs/sea-view-balustrade.jpg";
import veranda from "../assets/jobs/glass-veranda.jpg";
import splashback from "../assets/jobs/orange-splashback.jpg";
import shower from "../assets/jobs/walk-in-shower.jpg";
import stadiumBalustrade from "../assets/jobs/stadium-glass-balustrade.jpeg";
import gardenBalustrade from "../assets/jobs/garden-glass-balustrade.jpeg";

export interface Job {
  id: string;
  src: string;
  caption: string;
  alt: string;
}

export const jobs: Job[] = [
  {
    id: stadiumBalustrade,
    src: stadiumBalustrade,
    caption: "Stadium glass balustrade",
    alt: "Frameless glass balustrade dividing seating rows in a football stadium stand",
  },
  {
    id: gardenBalustrade,
    src: gardenBalustrade,
    caption: "Garden glass balustrade",
    alt: "Frameless glass balustrade in a garden setting",
  },
  {
    id: shower,
    src: shower,
    caption: "Walk-in shower enclosure",
    alt: "Frameless walk-in shower enclosure with sliding glass doors",
  },
  {
    id: staircase,
    src: staircase,
    caption: "Frameless glass staircase",
    alt: "Frameless glass balustrade on a floating glass staircase",
  },
  {
    id: veranda,
    src: veranda,
    caption: "Glass veranda enclosure",
    alt: "Glass-enclosed veranda with a sea view",
  },
  {
    id: seaView,
    src: seaView,
    caption: "Sea-view balustrade",
    alt: "Frameless glass terrace balustrade overlooking the sea",
  },
  {
    id: splashback,
    src: splashback,
    caption: "Coloured glass splashback",
    alt: "Orange toughened glass splashback wall panel",
  },
  {
    id: balustradeStairs,
    src: balustradeStairs,
    caption: "Glass balustrade on stairs",
    alt: "Frameless glass balustrade on a set of stairs",
  },
];
