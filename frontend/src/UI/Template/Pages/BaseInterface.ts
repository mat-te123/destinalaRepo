export interface BaseListingPageProps<T> {
  title: string;
  description: string;
  fetchData: (page:number) => Promise<any>;
  renderItem: (item: T) => React.ReactNode;
}

export interface PaginationStucture<T> {
  current_page: number;
  last_page: number;
  total: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  data: T[];
}
