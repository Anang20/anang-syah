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

export type skills = {
    category: 'framework' | 'language' | 'library'
    name: string,
    icon: React.ReactElement
}[]

export type contactType = {
    icon: React.ReactElement,
    label: string
}[]