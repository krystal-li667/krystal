export type Lang = "zh" | "en";

export const content = {
  zh: {
    nav: {
      about: "关于",
      work: "作品",
      contact: "联系",
      toggleTo: "EN",
    },
    hero: {
      bandTop: "KRYSTAL",
      bandBottom: "李子悦",
      tagline: "USYD 商学硕士 · 在数据里发现故事",
      idTags: ["商科生", "数据控", "Excel 重度用户", "内容运营"],
      quote:
        "好的分析不只是算对数字，而是让人看清数字背后的决定是怎么做出来的。",
      ctaWork: "看看我的作品",
      ctaContact: "联系我",
    },
    about: {
      title: "关于我",
      body: "悉尼大学商科研究生在读，专注于用数据驱动市场分析与财务审计。擅长用 Excel 把杂乱的数据整理成可读、可追踪的结论，也喜欢在品牌竞争里寻找别人没看到的机会。抗压能力强、学东西快，擅长团队合作，喜欢和不同背景的人一起把事情做好。",
      photosButton: "看看我的照片",
      photosLabel: "照片",
    },
    skills: {
      title: "技能 & 工具",
      items: ["Microsoft Excel", "PowerPoint", "Xero"],
    },
    work: {
      title: "作品 & 经历",
      projects: [
        {
          tag: "市场分析",
          title: "品牌竞争与市场分析项目 · Island Vibes",
          desc: "独立负责竞争对手营销策略研究，分析 Bondi Sands、Belle Bronze、Spray Aus 等品牌。从目标客户、营销渠道、促销活动、品牌合作及线下推广等维度比较竞争策略，识别品牌差异及潜在市场机会。",
          link: null as string | null,
        },
        {
          tag: "数据统计",
          title: "餐饮需求统计分析项目",
          desc: "基于 361 天餐饮经营数据，用 Excel 进行数据清理、分类统计及描述性分析。运用 Welch 双样本 t 检验比较周末与工作日需求，发现周末平均需求高约 15.4%，差异具有统计显著性（p≈0.00635）。进一步建立多元线性回归模型，分析日期类型、日照时长与餐饮需求之间的关系。",
          link: null as string | null,
        },
        {
          tag: "审计实习",
          title: "信永中和会计师事务所 · 法证会计审计实习生",
          desc: "整理数千条银行流水记录，对交易信息进行分类、汇总和结构化处理，建立 Excel 交易明细台账，提升交易信息的可追踪性。跟踪不同银行账户之间的资金往来，核对交易对手、账户信息及交易记录，梳理账户间资金流转关系。协助开展交易记录交叉核对、资金流向分析及审计底稿相关工作。",
          link: null as string | null,
        },
        {
          tag: "运营实习",
          title: "西安青年时代网络科技有限公司 · 运营实习生",
          desc: "内容运营：将微信公众号长图文拆解为小红书笔记，优化标题与封面，提升音乐节志愿者招募内容阅读量。视觉设计：使用 Canva、PS 制作信息海报，促进公众号内容二次传播。用户运营：通过自动回复及人工互动解答用户疑问，引导意向用户进入私域社群。",
          link: null as string | null,
        },
      ],
    },
    volunteer: {
      title: "志愿者经历",
      role: "2026 悉尼马拉松志愿者",
    },
    contact: {
      title: "保持联系",
      email: "liziyue0919@163.com",
      emailLabel: "邮箱",
      linkedinLabel: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/ziyue-li-964580387",
      footer: "© 2026 Krystal · 用数据讲故事",
    },
  },
  en: {
    nav: {
      about: "About",
      work: "Work",
      contact: "Contact",
      toggleTo: "中",
    },
    hero: {
      bandTop: "KRYSTAL",
      bandBottom: "LI ZIYUE",
      tagline: "USYD Master of Commerce · finding stories in data",
      idTags: ["Commerce grad", "Data nerd", "Excel power user", "Content ops"],
      quote:
        "Good analysis isn't just getting the numbers right — it's making the decisions behind the numbers visible.",
      ctaWork: "See my work",
      ctaContact: "Get in touch",
    },
    about: {
      title: "About me",
      body: "Postgraduate Commerce student at the University of Sydney, focused on data-driven market analysis and financial audit. I'm good at turning messy data into clear, trackable conclusions with Excel, and I love finding the opportunities others miss in brand competition. I work well under pressure, pick things up fast, and thrive in collaborative teams.",
      photosButton: "See my photos",
      photosLabel: "Photos",
    },
    skills: {
      title: "Skills & Tools",
      items: ["Microsoft Excel", "PowerPoint", "Xero"],
    },
    work: {
      title: "Work & Experience",
      projects: [
        {
          tag: "Market Analysis",
          title: "Brand Competition & Market Analysis · Island Vibes",
          desc: "Independently led competitor marketing strategy research, analysing Bondi Sands, Belle Bronze, Spray Aus and other brands. Compared competitive strategies across target customers, marketing channels, promotions, brand partnerships and offline outreach, identifying brand differentiation and potential market opportunities.",
          link: null as string | null,
        },
        {
          tag: "Data Statistics",
          title: "Food & Beverage Demand Analysis Project",
          desc: "Based on 361 days of F&B operating data, used Excel for data cleaning, categorical statistics and descriptive analysis. Applied a Welch two-sample t-test comparing weekend vs. weekday demand, finding weekend demand ~15.4% higher with statistical significance (p≈0.00635). Built a multiple linear regression model to analyse the relationship between day type, sunshine hours and demand.",
          link: null as string | null,
        },
        {
          tag: "Audit Internship",
          title: "Shinewing · Forensic Accounting Audit Intern",
          desc: "Organised thousands of bank transaction records — classified, summarised and structured them into an Excel ledger to improve traceability. Tracked fund flows between bank accounts, verified counterparties and account details, and mapped inter-account money movement. Assisted with transaction cross-checking, fund-flow analysis and audit working papers.",
          link: null as string | null,
        },
        {
          tag: "Operations Intern",
          title: "Xi'an Youth Times Network Tech · Operations Intern",
          desc: "Content operations: broke down WeChat Official Account long-form posts into Xiaohongshu (RED) notes, optimised titles and covers, and boosted readership of music-festival volunteer recruitment content. Visual design: created infographics with Canva and Photoshop to drive secondary sharing. User operations: handled queries via auto-reply and manual interaction, guiding interested users into private community groups.",
          link: null as string | null,
        },
      ],
    },
    volunteer: {
      title: "Volunteering",
      role: "2026 Sydney Marathon Volunteer",
    },
    contact: {
      title: "Stay in touch",
      email: "liziyue0919@163.com",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/ziyue-li-964580387",
      footer: "© 2026 Krystal · telling stories with data",
    },
  },
} as const;
