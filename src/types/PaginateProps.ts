export interface PaginateProps {
  page: number;
  pages: number;
  countPosts: number;
  setPage(page: number): void;
  setCountPosts(count: number): void;
}
