export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60294c7637f509861348f09f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gomh19j4',
                  apiId: '2d5a1984-04c0-4bd8-8e23-fe65b0bb9e39'
                },
                {
                  buildHookId: '60294c7737f509891d48e9ba',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jrqhq13n',
                  apiId: '8c78dfe2-a878-42b8-bb98-98765a11d166'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tao101/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jrqhq13n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
