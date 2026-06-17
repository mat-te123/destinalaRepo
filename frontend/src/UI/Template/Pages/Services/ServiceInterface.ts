export interface ServiceIndexRespond {
  id: number;
  main_title: string;
  main_desc: string;
  main_image: string;
}

export interface ServiceContentRespond {
  id: number;
  service_id: number;
  content_title: string;
  content_desc: string;
  content_image: string;
  display_order: number;
}

export interface ServicePage {
  current_page: number;
  data: ServiceIndexRespond[];
  last_page: number;
  total: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}

export interface ServicePageContent {
  service: ServiceIndexRespond;
  content: ServiceContentRespond[];
}
