export declare class CreateProductDTO {
    title: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    subcategory: string;
    comment: string;
    price: number;
}
export declare type UpdateProductDTO = Partial<CreateProductDTO>;
