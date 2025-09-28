export interface Platform {
  iconKey: string;
  label: string;
  color: string;
  id: number;
}

export interface DropPosition {
  previousIndex: number;
  currentIndex: number;
}

export interface DropdownOptionUpdate {
  dropdownOption: Platform;
  position: number;
}

export interface LinkData {
  platform: Platform;
  link: string;
  position: number;
}
