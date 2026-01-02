```markdown
# Evanalysis Personal Site Template — Roadmap & Spec (Card + Glass + Math + CMS + Private)

> 目标：做一套你自己的可复用模板（Next.js），视觉接近 Sidefolio（侧边栏 + 卡片）并升级为玻璃拟态/液态玻璃风格，同时满足：
> - SEO 友好
> - 分类 / 标签 / 目录（TOC）
> - LaTeX（数学公式）
> - 图片易插入（外链图床：Firebase / SharePoint 等）
> - 评论 + 点赞（低维护优先）
> - 后台管理（CMS，可视化编辑）
> - 私密区：Vercel 鉴权后可见（真隐藏，不把私密内容打进公开静态产物）
> - 三端通用（响应式）

---

## 1. 技术选型（推荐默认栈）

### 1.1 基础框架
- Next.js（App Router）
- TypeScript
- Tailwind CSS
- shadcn/ui（组件底座）

### 1.2 内容系统（公开区）
- MDX + Contentlayer（类型安全、文章/笔记/项目都好管）
- KaTeX（remark-math + rehype-katex）

### 1.3 SEO / Feed
- sitemap.xml
- robots.txt
- RSS
- OpenGraph / Twitter Card
- JSON-LD（结构化数据，可后加）

### 1.4 互动
- **优先**：giscus（GitHub Discussions 驱动；评论 + reactions=点赞）
- 进阶（可选）：站内点赞/热榜（Upstash Redis / Supabase）

### 1.5 CMS（后台管理）
- **优先**：TinaCMS（Git-based + 可视化编辑 + MDX）
- 备选：Decap CMS（简单粗暴）/ Sanity（更强但更重）

### 1.6 私密区（Vercel 鉴权）
- Auth.js / Clerk / Firebase Auth（三选一即可）
- 私密内容存储：Firestore / Supabase / 你自己的加密存储（推荐 Firestore 或 Supabase）

> 安全原则（重要）：私密内容 **不要** 在 build 阶段生成到公开静态文件里。必须在鉴权通过后，由服务端读取再渲染。

---

## 2. 信息架构（最终站点应该长这样）

### 2.1 公开区（Public）
- `/` 首页（侧边栏 + 卡片）
- `/about` 关于
- `/projects` 项目卡片（支持筛选 tag）
- `/blog` 博客列表（分页/搜索可选）
- `/blog/[slug]` 文章页（TOC + KaTeX + 评论）
- `/notes` 数学/课程笔记列表（可按系列/分类）
- `/tags/[tag]` 标签页
- `/categories/[cat]` 分类页

### 2.2 私密区（Private）
- `/diary` 日记列表（仅登录可见）
- `/diary/[id]` 日记内容（仅登录可见）
- `/private/*` 你想放的其他隐私页面

SEO 规则：
- 公开区：可索引
- 私密区：统一 `noindex`，并从 sitemap 排除

---

## 3. 目录结构建议（单项目 + 路由分组）

> 推荐：一个 Next.js 项目里做 route groups，维护成本最低。

```

.
├─ app
│  ├─ (public)
│  │  ├─ page.tsx
│  │  ├─ about/page.tsx
│  │  ├─ projects/page.tsx
│  │  ├─ blog/page.tsx
│  │  ├─ blog/[slug]/page.tsx
│  │  ├─ notes/page.tsx
│  │  ├─ tags/[tag]/page.tsx
│  │  ├─ categories/[cat]/page.tsx
│  │  └─ layout.tsx
│  ├─ (private)
│  │  ├─ diary/page.tsx
│  │  ├─ diary/[id]/page.tsx
│  │  └─ layout.tsx
│  ├─ api
│  │  └─ (可选：私密内容读取/写入、点赞等)
│  └─ layout.tsx
├─ components
│  ├─ ui (shadcn)
│  ├─ glass
│  │  ├─ GlassCard.tsx
│  │  ├─ GlassPanel.tsx
│  │  ├─ GlassSidebar.tsx
│  │  └─ GlassToggle.tsx (降低透明度/高对比度)
│  ├─ Toc.tsx
│  ├─ PostCard.tsx
│  └─ ...
├─ content
│  ├─ blog
│  ├─ notes
│  └─ projects
├─ lib
│  ├─ contentlayer.ts
│  ├─ seo.ts
│  ├─ auth.ts
│  ├─ db.ts
│  └─ ...
├─ public
│  └─ static (可选：本地图片兜底)
├─ middleware.ts (私密路由鉴权)
├─ contentlayer.config.ts
├─ next.config.js
└─ ...

```

---

## 4. 视觉规范（Glass + Card 的落地要点）

### 4.1 GlassCard 设计（建议统一封装）
- 圆角：`rounded-2xl`
- 背景：半透明 + 细边框 + 高光
- 模糊：`backdrop-blur`
- 阴影：轻阴影（不要太重）
- 暗色模式：对比度更高，文本更清晰

### 4.2 可读性兜底（强烈建议）
- 一个全站开关：`Reduce transparency / High contrast`
- 逻辑：降低 blur、提升背景不透明度、提高文本对比度

---

## 5. 功能实现路线（按阶段做，几乎不会返工）

### Phase 0 — 初始化 & 基础可跑
- [ ] 选择底座：以 “功能全家桶 MDX 博客底座” 起项目（内容管道、KaTeX、tags、SEO 基础）
- [ ] 跑通：dev / build / lint
- [ ] 配置部署：Vercel 项目（先只部署 public）

**验收标准**
- `pnpm dev` 能跑，首页 + blog 列表能打开
- `pnpm build` 通过

---

### Phase 1 — 外观：Sidefolio 风格 + 玻璃卡片
- [ ] 实现侧边栏布局：头像/简介/导航（移动端可折叠）
- [ ] 建立 `GlassCard / GlassSidebar / GlassPanel`
- [ ] 首页/项目/文章列表改为卡片化（grid）
- [ ] 支持暗色模式 + 可读性开关

**验收标准**
- 移动端（窄屏）侧边栏可打开/关闭
- 列表页卡片在不同屏宽下布局合理
- 高对比度开关生效

---

### Phase 2 — 内容体系：分类/标签/TOC/KaTeX/图片
- [ ] frontmatter 规范：`tags` + `category` + `toc`
- [ ] 标签页（已有就对齐样式）
- [ ] 新增分类页 `/categories/[cat]`
- [ ] 文章页 TOC：根据 headings 生成
- [ ] KaTeX：写一篇 demo（含公式、分段、列表、引用）
- [ ] 图片策略：支持外链图床 + next/image remotePatterns

**验收标准**
- 任意文章可显示目录（可开关）
- tags/cat 页面能聚合文章
- LaTeX 正确渲染
- 图片外链可显示且不报错

---

### Phase 3 — 互动：评论 + 点赞
- [ ] 接 giscus 到文章页（评论 + reactions）
- [ ]（可选）文章卡片显示“评论入口/热度”

**验收标准**
- 文章页可加载评论区
- reactions 可用

---

### Phase 4 — CMS：后台管理（公开内容）
- [ ] 接 TinaCMS（或 Decap）用于编辑 `content/blog`、`content/notes`
- [ ] 确定编辑流程：本地写作 vs 后台写作
- [ ] 图片上传策略（可先用外链，后续再做媒体库）

**验收标准**
- CMS 能创建/编辑/发布文章
- 发布后列表页可见，构建通过

---

### Phase 5 — 私密区：Vercel 鉴权 + 真隐藏
- [ ] 鉴权方案（三选一）：Auth.js / Clerk / Firebase Auth
- [ ] middleware 保护 `/diary/**`
- [ ] 私密内容存储：Firestore（推荐）或 Supabase
- [ ] 私密页面统一 `noindex` + sitemap 排除
- [ ] 可选：简单“新建/编辑日记”私密后台

**验收标准**
- 未登录访问 `/diary` 会被拦截并跳转
- 登录后可见，数据从 DB 读取
- 私密内容不出现在公开 build 产物里
- 私密页面 noindex 生效

---

## 6. 部署建议（Vercel 为主）

- Public 路由可以静态化/ISR（利于 SEO）
- Private 路由保持动态（鉴权 + DB）
- 环境变量分组：
  - 公共：站点信息、giscus 配置
  - 私密：Auth 密钥、DB 连接
- sitemap/robots：生产环境生成

---

## 7. 用 Codex 辅助开发：推荐工作流（最实用）

### 7.1 你每次给 Codex 的任务格式（强烈建议照这个写）
> **Goal（目标）**：要做什么  
> **Scope（范围）**：允许改哪些目录/文件  
> **Do not change（禁区）**：哪些不要碰  
> **Acceptance（验收）**：用什么命令验证/页面怎么检查  
> **Notes（注意）**：视觉规范/代码风格/不允许破坏 SEO 等

### 7.2 建议的 Git 流程（让 Codex 更稳）
- 每个 Phase 一个分支，例如：
  - `feat/glass-layout`
  - `feat/categories-toc`
  - `feat/giscus`
  - `feat/cms`
  - `feat/private-auth`
- 每个子任务尽量可验收、可回滚

### 7.3 直接可复制的 Codex 任务（示例）

#### Task A：做玻璃卡片组件 + 首页布局
- Goal：实现 `GlassCard/GlassSidebar`，把首页改成侧边栏 + 卡片网格
- Scope：`components/glass/*`, `app/(public)/**`, `styles`（如有）
- Do not change：内容管道、MDX 解析、SEO 配置
- Acceptance：
  - `pnpm dev` 运行
  - 首页移动端侧边栏可折叠
  - 高对比度开关可用

#### Task B：新增分类体系
- Goal：frontmatter 增加 `category`，新增 `/categories/[cat]`
- Scope：`content/**`, `app/(public)/categories/**`, 列表组件
- Do not change：tags 页面路由与数据结构
- Acceptance：
  - 任意分类可聚合文章
  - `pnpm build` 通过

#### Task C：私密区鉴权 + diary 路由
- Goal：保护 `/diary/**`，登录后从 DB 读日记
- Scope：`app/(private)/**`, `middleware.ts`, `lib/auth.ts`, `lib/db.ts`
- Do not change：公开站的静态输出与 sitemap 逻辑
- Acceptance：
  - 未登录访问 `/diary` 被拦截
  - 登录后可见
  - 私密页面 `noindex` 且不在 sitemap

---

## 8. 决策点（你只需要现在定 3 个就能开工）

1) 鉴权选哪个？
- [ ] Auth.js（通用，自己掌控）
- [ ] Clerk（上手快，托管）
- [ ] Firebase Auth（如果你已经用 Firebase 生态）

2) 私密内容存哪里？
- [ ] Firestore（配合 Firebase Auth 很顺）
- [ ] Supabase（SQL + Dashboard 好用）

3) CMS 选哪个？
- [ ] TinaCMS（推荐，MDX + Next 很顺）
- [ ] Decap CMS（更轻，功能够用）

---

## 9. 下一步（建议你现在就做）
- Step 1：用“功能全家桶的 Next MDX 博客底座”起仓库（保证 KaTeX/tags/SEO 先有）
- Step 2：Phase 1（外观）先把 Sidefolio + 玻璃卡片做出来
- Step 3：再逐步叠加分类/TOC、giscus、CMS、私密区

> 你把现有仓库的目录结构（或截图）贴出来后，我可以把上面 Phase 0~5
> 拆成更细的“Codex 任务清单”（每个任务都附具体文件路径与验收点），让你直接照着跑。
```
