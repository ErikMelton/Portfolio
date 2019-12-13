export interface TemplateProps<FrontMatter extends {}> {
  uri: string
  pageContext: {
    frontmatter: FrontMatter
  }
  children: React.ReactNode
}