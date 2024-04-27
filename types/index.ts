import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export interface HeaderProps {
  children: React.ReactNode;
  bgImage: string | StaticImageData;
}

export interface CardProps {
  card: CardType;
}

export type CardType = {
  id: number;
  course?: {
    name: string;
    content: string;
    courses: number;
    icon: string;
  };
  comp?: {
    name: string;
    logo: string;
    courses: number;
  };
  vacancy?: {
    name: string;
    icon: LucideIcon;
    count: number;
  };
};
