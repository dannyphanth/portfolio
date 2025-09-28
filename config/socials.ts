import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@dannyphanth",
    icon: Icons.gitHub,
    link: "https://github.com/dannyphanth",
  },
];
