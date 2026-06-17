export interface PackageMainProps {
    title: string;
    description: string;
    
    fetchData: () => Promise<any>;
}

export interface PackageResponse {
    id: number;
    destination_id: number;
    main_title: string;
    main_desc: string;
    main_image: string;
    package_video: string;
}

export interface PackageContentResponse {
    id: number;
    package_id: number;
    content_title: string;
    content_desc: string;
    content_image: string;
    display_order: number;
}

export interface PackageContentDetailResponse {
    main: PackageResponse;
    contents: PackageContentResponse[];
}