export type Product = {
  ProductID: string;
  isDeleted: boolean;
  ParentID: string | null;
  Name: string | null;
  AccessType: string | null;
  Language: string | null;
  Relation: string | null;
  Type: string | null;
  colorscheme: string | null;
  descriptionen: string | null;
  descriptionru: string | null;
};

export type GetProductsType = () => Promise<Product[]>;
