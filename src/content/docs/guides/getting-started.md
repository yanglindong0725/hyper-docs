---
title: 新手指南
description: 引导新手快速上手的指南
---

本指南将帮助您新建一个项目文档。本项目基于 [Stralight](https://starlight.astro.build/) 搭建, 深入了解请参考文档。

## 创建新的项目文档
在 `src/content/docs` 目录下创建一个新的 `examples` 目录，然后创建一个 `new-project.md` 文件。`examples` 目录将包含新项目的所有文档。

## 添加文档必要信息
每个文档都需要包含以下信息：

```md
---
title: 文档标题
description: 文档描述
---
```

## 添加文档内容
文档内容可以是任何内容，包括 Markdown、HTML、YAML 等。您可以使用 Markdown 语法来格式化文档。

示例写一个关于 `Hello World` 的文档：

```md
---
title: Hello World
description: A guide in my new Starlight docs site.
---

## Hello World

This is my first guide in my new Starlight docs site.

![unsplash.com](https://source.unsplash.com/random/800x600)
```

## 添加文档到侧边栏

在 `astro.config.mjs` 文件中，找到 `sitemap` 配置数组中，添加以下内容：

```js  
{
  label: '新项目示例',
  items: [
    {
      label: 'Hello World',
      link: 'examples/new-project'
    }
  ]
}
```

至此，您已经完成了一个新项目的文档创建。关于更多文档编写规范，请参考 [文档编写规范](/docs/guides/document-writing-specification/)。
