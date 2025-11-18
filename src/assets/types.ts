export interface ListItem {
    avatar: string
    name: string
    metadata: string
    firstName: string
    lastName: string,
    icon?: string
  }
  
  export interface WidgetSection {
    title?: string
    items: ListItem[]
  }