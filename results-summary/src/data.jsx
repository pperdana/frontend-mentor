import iconMemory from "./assets/icon-memory.svg";
import iconReaction from "./assets/icon-reaction.svg";
import iconVerbal from "./assets/icon-verbal.svg";
import iconVisual from "./assets/icon-visual.svg";

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: iconReaction,
    alt: "icon-reaction",
    iconColor: "hsl(0,100%,67%)",
  },
  {
    category: "Memory",
    score: 92,
    icon: iconMemory,
    alt: "icon-memory",
    iconColor: "hsl(39,100%,56%)",
  },
  {
    category: "Verbal",
    score: 61,
    icon: iconVerbal,
    alt: "icon-verbal",
    iconColor: "hsl(166,100%,37%)",
  },
  {
    category: "Visual",
    score: 72,
    icon: iconVisual,
    alt: "icon-visual",
    iconColor: "hsl(234,85%,45%)",
  },
];

export default data;
