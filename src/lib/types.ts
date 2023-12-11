export type Menus = {
    title: string,
    href: string
}[]

export type Projects = {
    title: string,
    image: string,
    description: string,
    techStack: Array<{name: string, icon: React.ReactElement}>,
    url: string,
    repoUrl: string | null,
    showRepo: Boolean,
}[]