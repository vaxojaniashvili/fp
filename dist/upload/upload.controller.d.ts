export declare class UploadController {
    uploadedFile(file: any): Promise<{
        originalname: any;
        filename: any;
    }>;
    uploadMultipleFiles(files: any): Promise<any[]>;
    seeUploadedFile(image: any, res: any): any;
}
