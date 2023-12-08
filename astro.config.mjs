import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import expressiveCode from "astro-expressive-code";

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
import tailwind from "@astrojs/tailwind";
const astroExpressiveCodeOptions = {
  // Example: Change the themes
  themes: ['one-dark-pro']
};


// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(astroExpressiveCodeOptions), starlight({
    title: 'Hyper Docs',
    logo: {
      src: './src/assets/hyper-docs.svg',
      replacesTitle: false
    },
		customCss: [
			// Path to your Tailwind base styles:
			'./src/tailwind.css',
		],
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3
    },
    sidebar: [
      {
        label: '指南',
        items: [
          {
            label: '新手引导',
            link: 'guides/getting-started'
          },
          {
            label: '文档编写规范',
            link: 'guides/document-writing-specification'
          }     
        ]
      },
      {
        label: '新项目示例',
        items: [
          {
            label: 'Hello World',
            link: 'new-project/hello-world'
          }
        ]
      }
    ]
  }),  tailwind({
		// Disable the default base styles:
		applyBaseStyles: false,
	}),
]
});