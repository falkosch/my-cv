export interface CVSection {
  componentId: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: Record<string | number | symbol, any>;
  excludeInPrint?: boolean;
  navigationId?: string;
  title: string;
  titleIcon: string;
}
