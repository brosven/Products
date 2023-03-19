export type BuildTreesListArgumentElementType = {
  ProductID: string;
  ParentID: string | null;
  isDeleted: boolean;
  [key: string]: unknown;
};

export type BuildTreesListReturnElementType = BuildTreesListArgumentElementType & {
  children?: BuildTreesListReturnElementType[];
};
