export interface skillsSection {
  id: string;
  icon: React.ReactNode;
  title: string;
  heroColor: string;
  skillProps: skillSectionProps[];
}

export interface skillSectionProps {
  skillId: string;
  skillName: string;
  skillIcon: React.ReactNode;
}