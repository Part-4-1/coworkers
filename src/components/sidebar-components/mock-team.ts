import ICONS_MAP from "../icon/icons-map";

type IconKeys = keyof typeof ICONS_MAP;

interface sidebarMenus {
  title: string;
  iconName: IconKeys;
}

export const mockTeams: sidebarMenus[] = [
  { title: "경영관리팀", iconName: "chess" },
  { title: "마케팅팀", iconName: "chess" },
  { title: "프로덕트팀", iconName: "chess" },
  { title: "콘텐츠팀", iconName: "chess" },
];
