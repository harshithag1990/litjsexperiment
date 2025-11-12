export interface ListItem {
    avatar: string
    name: string
    metadata: string
  }
  
  export interface WidgetSection {
    title?: string
    items: ListItem[]
  }