export interface BulletedListHubsType {
  title: string;
  items: string[];
}
export interface TableHubsType {
  title: string;
  colums: string[];
  rows: string[][];
}

export interface recomendedTaskItemType {
  title: string;
  description: string;
}

export interface FinanceItemhubsType {
  title: string;
  secounText: string;
  value: string;
}

export interface ResourceItemHubsType {
  title: string;
  link: string;
}
export interface SubCategoryHubsType {
  name: string;
  tags: string[];
}
export interface recomendedTaskType {
  title: string;
  items: recomendedTaskItemType[];
}

export interface FinanceType {
  title: string;
  items: FinanceItemhubsType[];
}

export interface ResourceType {
  title: string;
  items: ResourceItemHubsType[];
}
