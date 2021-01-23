export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600be71886547a1c2e7191bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zr1oqe94',
                  apiId: '47845390-e441-428b-b3e5-36a33c7142c9'
                },
                {
                  buildHookId: '600be719bd7fe433947ec600',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fk85zzsj',
                  apiId: '621ea096-926b-4540-a023-e6a822e28f15'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StainsGate/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fk85zzsj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
