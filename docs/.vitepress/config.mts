import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/lemp/': { base: '/lemp/', items: sidebarLEMP() },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
    { text: 'LEMP', link: '/lemp/nginx', activeMatch: '/lemp/' }
  ]
}

function sidebarLEMP(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'LEMP',
      items: [
        { text: 'Nginx', link: '/nginx' },
        { text: 'PHP', link: '/php' },
        { text: 'MySQL', link: '/mysql' }
      ]
    }
  ]
}
