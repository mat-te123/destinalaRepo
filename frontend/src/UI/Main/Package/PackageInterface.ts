export interface CMSIndexRespond {
  id: number;
  main_title: string;
  package_contents_count: number;
  main_image: string;
  created_at: string;
}

export interface CMSPage {
  current_page: number;
  data: CMSIndexRespond[];
  last_page: number;
  total: number;
  next_page_url: string | null;
  prev_page_url: string | null;
}
