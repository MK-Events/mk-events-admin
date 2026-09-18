import {
  IconCalendarEvent,
  IconDashboard,
  IconLibraryPhoto,
  IconLink,
  IconSettings,
  IconTicket,
  IconUsersGroup,
} from "@tabler/icons-react";

const IconMap = {
  dashboard: IconDashboard,
  events: IconCalendarEvent,
  gallery: IconLibraryPhoto,
  registrations: IconTicket,
  urls: IconLink,
  team: IconUsersGroup,
  settings: IconSettings,
} as const;

export interface IconManagerProps {
  iconName: string;
  strokeWidth?: number;
  iconSize?: number;
  className?: string;
  style?: React.CSSProperties;
  iconTheme?: "light" | "dark";
}

export function IconManager({
  iconName,
  strokeWidth = 1.5,
  iconSize = 24,
  className,
  style,
  iconTheme = "dark",
}: IconManagerProps) {
  if (!iconName) return null;
  const iconColor = iconTheme === "dark" ? "#fff" : "#000";
  const Icon = IconMap[iconName.toLowerCase() as keyof typeof IconMap];
  if (!Icon) return null;

  return (
    <Icon
      strokeWidth={strokeWidth}
      size={iconSize}
      className={className}
      style={style}
      color={iconColor}
    />
  );
}
