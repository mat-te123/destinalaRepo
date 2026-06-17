export interface DestinationIndexRespond {
  id: number;
  main_title: string;
  main_description: string;
  main_image: string;
}

export interface DestinationHomeRespond {
  id: number;
  main_title: string;
  main_image: string;
}

export interface DestinationIndexContentRespond {
    id: number;
    destination_id: number;
    content_title: string;
    content_desc: string;
    content_image: string;
    display_order: number;
}

export interface DestinationPage {
  current_page: number;
  data: DestinationIndexRespond[];
  last_page: number;
  total: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}

export interface DestinationPageContent {
    main_data: DestinationIndexRespond;
    content_data: DestinationIndexContentRespond[];
}

