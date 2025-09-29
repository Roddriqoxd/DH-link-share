export interface Platform {
  iconKey: string;
  label: string;
  color: string;
}

export interface DropPosition {
  previousIndex: number;
  currentIndex: number;
}

export interface LinkDataUpdate {
  platform?: Platform;
  link?: string;
  position: number;
}

export interface LinkData {
  platform: Platform;
  link: string;
}
