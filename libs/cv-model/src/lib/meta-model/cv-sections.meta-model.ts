export interface CVSection {
  componentId: string;
  content: Record<string | number | symbol, any>;
  excludeInPrint?: boolean;
  navigationId?: string;
  title: string;
  titleIcon: string;
}
