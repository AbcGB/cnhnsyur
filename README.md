# Sanya Hospital Acupuncture Service - 三亚中医针灸国际患者服务平台

## 项目概述 | Project Overview | Обзор проекта

**中文：** 为来自俄罗斯及中亚地区的游客和患者提供三亚市中医院正规针灸医疗服务的俄语数字化就医协调平台。

**English:** A multilingual digital platform connecting Russian-speaking patients and visitors from Russia and Central Asia with authentic acupuncture services at Sanya Traditional Chinese Medicine Hospital, with complete patient coordination and linguistic support.

**Русский:** Многоязычная цифровая платформа, связывающая русскоязычных пациентов и туристов из России и Центральной Азии с подлинными услугами акупунктуры в Саньянской больнице традиционной китайской медицины, с полной координацией пациентов и языковой поддержкой.

---

## 核心价值主张 | Core Value Proposition

### 为什么选择我们？

**✓ 正规医疗机构** - 三亚市中医院（公立医院），非私人诊所
**✓ 指定医生** - 针灸专家蒙老师，20+年临床经验
**✓ 俄语完整服务** - 咨询、预约、首诊翻译、后续支持
**✓ 透明收费** - 医院正式收费单据，无隐性费用
**✓ 医院国际合作背景** - 三亚市中医院与俄罗斯传统东方医学专家学会正式合作
**✓ 患者流程保障** - 从咨询到疗程完成的全程协调

---

## 技术栈 | Technology Stack

- **前端框架**: Next.js 14 + React 18
- **样式**: Tailwind CSS
- **多语言**: next-i18next (中文/俄语/英文)
- **后端**: Next.js API Routes + Prisma ORM
- **数据库**: PostgreSQL
- **即时通讯**: Telegram Bot API
- **SEO**: next-sitemap, next-seo
- **托管**: Vercel / Docker

---

## 项目结构 | Project Structure

```
cnhnsyur/
├── public/                    # 静态资源
│   ├── images/               # 医院、医生、针灸图片
│   ├── videos/               # 宣传视频
│   └── locales/              # 多语言资源
├── src/
│   ├── pages/                # Next.js 页面
│   │   ├── index.tsx         # 首页
│   │   ├── about.tsx         # 关于我们
│   │   ├── services.tsx      # 服务介绍
│   │   ├── doctor.tsx        # 医生介绍
│   │   ├── pricing.tsx       # 价格
│   │   ├── faq.tsx           # 常见问题
│   │   ├── blog/             # 文章/知识库
│   │   ├── contact.tsx       # 联系我们
│   │   └── api/              # API 路由
│   ├── components/           # React 组件
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── ContactForm.tsx
│   │   ├── TelegramWidget.tsx
│   │   └── ...
│   ├── lib/                  # 工具函数
│   │   ├── api.ts            # API 调用
│   │   ├── telegram.ts       # Telegram 集成
│   │   ├── email.ts          # 邮件服务
│   │   └── seo.ts            # SEO 工具
│   ├── styles/               # 全局样式
│   ├── hooks/                # React hooks
│   └── types/                # TypeScript 类型
├── public/locales/           # i18n 翻译文件
│   ├── zh/                   # 中文
│   ├── ru/                   # 俄语
│   └── en/                   # 英文
├── prisma/
│   └── schema.prisma         # 数据库模型
├── .env.local                # 环境变量
├── next.config.js            # Next.js 配置
├── package.json
└── tsconfig.json
```

---

## 关键功能模块

### 1. 首页（Hero Section）
- 医院环境真实图片
- 医生介绍
- 6个核心问题解答
- Telegram 快速咨询按钮

### 2. 患者信息收集系统
- 俄语表单（患者基础信息、病史、症状）
- 支持上传检查报告（MRI/CT）
- 自动翻译为中文患者摘要
- 医生预审

### 3. Telegram 机器人
- 自动回复常见问题
- 预约日程管理
- 患者提醒
- 人工咨询转接

### 4. 内容管理系统
- 针灸知识库（SEO 优化）
- 患者故事/评价
- 中医健康建议
- 三语言同步发布

### 5. 多语言 SEO
- 针对 Yandex/Google 的关键词优化
- 俄语内容为主，中英文为辅
- 本地化元数据
- 结构化数据（Schema.org）

---

## 部署与运行

### 开发环境
```bash
npm install
npm run dev
# 访问 http://localhost:3000
```

### 生产环境
```bash
npm run build
npm run start
```

---

## 商业模型参考

| 模块 | 说明 |
|------|------|
| 医院医疗费 | 患者直接向医院支付（200-300 RMB/次） |
| 国际患者服务费 | 咨询、翻译、预约、后续支持 |
| 疗程套餐 | 6次/7次/10次治疗协调服务 |
| 复诊管理 | 自动提醒、后续支持费用 |

---

## 路线图 | Roadmap

- [ ] **Phase 1**: 核心网站 + Telegram 机器人 + 基础表单
- [ ] **Phase 2**: 患者信息管理后台 + 医生预审系统
- [ ] **Phase 3**: 内容管理系统 + 博客/知识库
- [ ] **Phase 4**: 支付集成 + 发票系统
- [ ] **Phase 5**: 患者 App + 视频咨询
- [ ] **Phase 6**: 中亚语言拓展 + 其他服务

---

## 法律与合规

- ✓ 医疗广告合规审查（中国《医疗广告管理办法》）
- ✓ 个人信息保护（医疗健康敏感信息处理）
- ✓ 跨境数据流转规范
- ✓ 医院品牌授权文件
- ✓ 患者知情同意

---

## 联系与支持

- **Telegram**: @sanya_acupuncture_ru
- **Email**: info@sanyaacupuncture.ru
- **微信**: sanya_tcm_service

---

## 开发团队备注

本项目基于深度市场调研和竞品分析，核心目标是：
1. 验证俄罗斯患者的真实支付意愿
2. 建立医院与俄罗斯市场的长期合作桥梁
3. 通过数字化工具降低翻译成本到20%以内
4. 形成可复制的"国际患者服务"模式

---

**最后更新**: 2026年10月2日
**版本**: 0.1.0
