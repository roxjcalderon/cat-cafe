export type CafeItemCategoryType = {
    category: CafeItemType[];
};
export type CafeItemType = {
    id: number;
    item_description: string;
    size_type: string;
    values: CafeItemValueType[];
    variations: CafeItemVariantType[]
  };
 
  export type CafeItemValueType = {
    id: number;
    size_value: string;
    price: number;
  };
 
  export type CafeItemVariantType = {
    id: number;
    upcharge: number;
    variation: string;
  };
 
  