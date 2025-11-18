export interface ListItem {
    avatar?: string
    name?: string
    metadata?: string
    firstName?: string
    lastName?: string,
    icon?: string
  }
  
  export interface WidgetSection {
    title?: string
    items: ListItem[]
  }

  export interface FieldItem {
    label: string
    title: string
    icon?: string
    iconUrl?: string
    highlight?: boolean
  }