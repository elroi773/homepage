import { animate, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.6.0/+esm";
animate(".head1 span", { opacity: [0, 1], y: [50, 0] }, { delay: stagger(0.1), ease: "linear", duration: 1 });