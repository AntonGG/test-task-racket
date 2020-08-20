import { PanelPost } from "./PanelPost";

export interface PostProps {
  panelPost: PanelPost;
  close(): void;
}
