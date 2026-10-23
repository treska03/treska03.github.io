import { PERSONAL_LINKS, TECHNOLOGY_ICON_LINKS } from "@/constants/links";

export const projects = [
  {
    name: "Yummier",
    description: `Yummier is a community-driven platform where food enthusiasts can explore, share, and enhance everyday recipes with detailed instructions and reviews. 
            It’s built using modern technologies like React, TypeScript, Kotlin, Spring Boot, and PostgreSQL`,
    link: PERSONAL_LINKS.project_one,
    techStackIcons: [
      TECHNOLOGY_ICON_LINKS.typescript,
      TECHNOLOGY_ICON_LINKS.react,
      TECHNOLOGY_ICON_LINKS.kotlin,
      TECHNOLOGY_ICON_LINKS.spring,
      TECHNOLOGY_ICON_LINKS.postgresql,
      TECHNOLOGY_ICON_LINKS.git,
      TECHNOLOGY_ICON_LINKS.docker,
    ],
  },
  {
    name: "Golancer",
    description: `A lightweight HTTP load balancer written in Go. It reverse-proxies traffic across a pool of backend instances using round-robin, 
    with a lock-free, copy-on-write registry and a JSON API for adding and removing backends at runtime without restarts. 
    Ships with liveness/readiness probes, Docker support, and a Helm chart for Kubernetes.`,
    link: PERSONAL_LINKS.project_two,
    techStackIcons: [
      TECHNOLOGY_ICON_LINKS.go,
      TECHNOLOGY_ICON_LINKS.kubernetes,
      TECHNOLOGY_ICON_LINKS.git,
      TECHNOLOGY_ICON_LINKS.docker,
    ],
  },
  {
    name: "rock-com",
    description: `A platform for organizing and hosting paddle sports tournaments, 
    where players can easily join competitions and referees can register to officiate matches.
    Streamlined tools support match scheduling, participant management, and fair play enforcement.`,
    link: PERSONAL_LINKS.project_three,
    techStackIcons: [
      TECHNOLOGY_ICON_LINKS.react,
      TECHNOLOGY_ICON_LINKS.java,
      TECHNOLOGY_ICON_LINKS.spring,
      TECHNOLOGY_ICON_LINKS.typescript,
      TECHNOLOGY_ICON_LINKS.postgresql,
      TECHNOLOGY_ICON_LINKS.git,
      TECHNOLOGY_ICON_LINKS.docker,
    ],
  },
];
