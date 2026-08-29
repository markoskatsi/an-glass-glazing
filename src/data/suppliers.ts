export interface Supplier {
  name: string;
  url?: string;
}

export const suppliers: Supplier[] = [
  { name: "Glassparts UK", url: "https://www.glassparts.co.uk/" },
  { name: "Press Glass UK", url: "https://www.pressglass.co.uk/" },
  { name: "CT Glass", url: "https://www.ctglass.co.uk" },
  { name: "PMX Coating", url: "https://www.pmxcoating.com/" },
];
