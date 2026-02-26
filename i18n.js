/* ═══════════════════════════════════════════
   SEATax — Internationalization (EN / 中文)
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  const ARROW_SVG = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const ARROW_SM = '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const translations = {
    en: {
      page_title: 'SEATax — Smart Tax Returns for U.S. Sellers',
      nav_features: 'Features',
      nav_how: 'How It Works',
      nav_dashboard: 'Dashboard',
      nav_pricing: 'Pricing',
      nav_faq: 'FAQ',
      nav_signin: 'Sign In',
      nav_getstarted: 'Get Started Free',

      hero_badge: '<span class="badge-dot"></span> Tax Season 2026 — File with Confidence',
      hero_title: '<span class="title-line">Tax Returns,</span><span class="title-line title-gradient">Simplified</span><span class="title-line">for U.S. Sellers</span>',
      hero_subtitle: 'SEATax leverages intelligent automation to streamline your sales tax filing. Import transactions, auto-categorize deductions, and file — all in one place.',
      hero_cta_primary: 'Start Filing Free ' + ARROW_SVG,
      hero_cta_secondary: 'See How It Works',
      stat_sellers: 'Sellers Served',
      stat_accuracy: 'Accuracy Rate',
      stat_filing: 'Avg. Filing Time',

      preview_title: 'SEATax Dashboard',
      preview_pill: '2025 Return',
      side_overview: 'Overview',
      side_returns: 'Returns',
      side_income: 'Income',
      side_deductions: 'Deductions',
      side_documents: 'Documents',
      side_settings: 'Settings',
      card_revenue: 'Total Revenue',
      card_deductions: 'Deductions Found',
      card_tax: 'Estimated Tax',
      card_optimized: 'Optimized',
      chart_title: 'Monthly Revenue',
      chart_revenue: 'Revenue',
      chart_expenses: 'Expenses',

      logos_label: 'Trusted by sellers on',

      feat_title: 'Everything you need<br/><span class="text-gradient">to file with ease</span>',
      feat_desc: 'Built specifically for e-commerce sellers — from sole proprietors to multi-channel powerhouses.',
      feat1_title: 'Auto Import',
      feat1_desc: 'Connect your Amazon, eBay, Etsy, and Shopify stores. We pull in every transaction automatically.',
      feat2_title: 'Smart Categorization',
      feat2_desc: 'AI-powered expense categorization that learns from your data and gets smarter with each filing.',
      feat3_title: 'Deduction Finder',
      feat3_desc: 'Our engine surfaces every eligible deduction — shipping, supplies, home office, and more.',
      feat4_title: 'Multi-State Filing',
      feat4_desc: 'Sell across state lines? We handle nexus detection and multi-state return preparation seamlessly.',
      feat5_title: 'IRS-Ready Returns',
      feat5_desc: 'Generate Schedule C, 1099-K reconciliation, and all required forms in IRS-compliant format.',
      feat6_title: 'Bank-Level Security',
      feat6_desc: '256-bit encryption, SOC 2 compliance, and secure IRS e-filing integration to protect your data.',

      how_title: 'Three steps to<br/><span class="text-gradient">stress-free filing</span>',
      step1_title: 'Connect Your Stores',
      step1_desc: 'Link your Amazon, eBay, Etsy, or Shopify accounts in seconds. We securely sync all your sales data and transaction history.',
      step2_title: 'Review & Optimize',
      step2_desc: "Our AI reviews your financials, categorizes expenses, and finds every deduction you're entitled to. You stay in control.",
      step3_title: 'File & Relax',
      step3_desc: 'E-file directly with the IRS through our secure integration. Track your refund status in real-time from your dashboard.',
      opt_home: 'Home Office',
      opt_shipping: 'Shipping Costs',
      opt_equip: 'Equipment',
      opt_total: 'Total Savings',
      file_complete: 'Filing Complete',
      file_refund: 'Estimated Refund: <strong>$6,240</strong>',

      dash_title: 'Your command center for<br/><span class="text-gradient">tax intelligence</span>',
      dash_desc: 'Real-time insights, deadline tracking, and filing status — all at a glance.',
      dash_greeting: 'Welcome back, <strong>Sarah</strong>',
      dash_deadline: 'Filing Deadline: <strong>Apr 15, 2026</strong>',
      dash_days: '49 days',
      dash_status: 'Filing Status',
      dash_inprogress: 'In Progress',
      dash_sections: '3 of 4 sections complete',
      dash_income: 'Income Summary',
      dash_total: 'Total',
      dash_actions: 'Action Items',
      dash_pending: '3 pending',
      alert1: 'Upload 1099-K from Amazon',
      alert2: 'Review home office deduction',
      alert3: 'Connect bank account for expenses',

      test_tag: 'Testimonials',
      test_title: 'Loved by sellers<br/><span class="text-gradient">across the U.S.</span>',
      test1_quote: '\u201CSEATax found $8,200 in deductions I had no idea about. The auto-import from Amazon saved me hours of data entry.\u201D',
      test1_name: 'James M.',
      test1_role: 'Amazon FBA Seller, Texas',
      test2_quote: '\u201CMulti-state filing used to be my nightmare. SEATax handles it automatically \u2014 I just review and file. Game changer.\u201D',
      test2_name: 'Sarah K.',
      test2_role: 'Multi-Channel Seller, California',
      test3_quote: '\u201CWent from dreading tax season to finishing in 15 minutes. The dashboard makes everything crystal clear.\u201D',
      test3_name: 'Ryan P.',
      test3_role: 'Etsy Shop Owner, New York',

      price_title: 'Simple, transparent<br/><span class="text-gradient">pricing</span>',
      price_desc: 'No hidden fees. Pay only when you file.',
      plan1_name: 'Starter',
      plan1_desc: 'Perfect for new sellers',
      plan1_f1: '1 store connection',
      plan1_f2: 'Basic deduction finder',
      plan1_f3: 'Federal filing included',
      plan1_f4: 'Email support',
      plan_getstarted: 'Get Started',
      plan_popular: 'Most Popular',
      plan2_name: 'Pro',
      plan2_desc: 'For growing sellers',
      plan2_f1: 'Unlimited store connections',
      plan2_f2: 'AI deduction optimization',
      plan2_f3: 'Multi-state filing',
      plan2_f4: '1099-K reconciliation',
      plan2_f5: 'Priority support',
      plan_freetrial: 'Start Free Trial',
      plan3_name: 'Enterprise',
      plan3_price: 'Custom',
      plan3_desc: 'For large-scale operations',
      plan3_f1: 'Everything in Pro',
      plan3_f2: 'Dedicated account manager',
      plan3_f3: 'Custom integrations',
      plan3_f4: 'Audit defense support',
      plan3_f5: 'API access',
      plan_contact: 'Contact Sales',

      faq_title: 'Common<br/><span class="text-gradient">questions</span>',
      faq1_q: 'What types of sellers can use SEATax?',
      faq1_a: "SEATax supports all U.S.-based online sellers, including Amazon FBA, eBay, Etsy, Shopify, Walmart Marketplace, TikTok Shop, and more. Whether you're a sole proprietor, LLC, or S-Corp, we've got you covered.",
      faq2_q: 'Is my financial data secure?',
      faq2_a: 'Absolutely. We use 256-bit AES encryption, are SOC 2 Type II certified, and never share your data with third parties. Your financial information is as safe with us as it is with your bank.',
      faq3_q: 'Can SEATax handle multi-state sales tax obligations?',
      faq3_a: "Yes! Our Pro and Enterprise plans include automatic nexus detection and multi-state return preparation. We monitor economic nexus thresholds across all 50 states and alert you when you've triggered new obligations.",
      faq4_q: 'What happens if I get audited?',
      faq4_a: 'Enterprise plan users receive full audit defense support. All plan holders get organized, IRS-compliant documentation that makes responding to audits straightforward. We keep records of every deduction rationale.',

      cta_title: 'Ready to simplify your tax season?',
      cta_desc: 'Join 50,000+ sellers who file smarter with SEATax.',
      cta_btn: 'Get Started Free ' + ARROW_SVG,
      cta_note: 'No credit card required. Free federal filing included.',

      footer_tagline: 'Smart tax returns for U.S. sellers. File faster, save more.',
      footer_product: 'Product',
      footer_integrations: 'Integrations',
      footer_company: 'Company',
      footer_about: 'About',
      footer_blog: 'Blog',
      footer_careers: 'Careers',
      footer_press: 'Press',
      footer_support: 'Support',
      footer_help: 'Help Center',
      footer_contact: 'Contact',
      footer_status: 'Status',
      footer_security: 'Security',
      footer_legal: 'Legal',
      footer_privacy: 'Privacy',
      footer_terms: 'Terms',
      footer_cookie: 'Cookie Policy',
      footer_copy: '\u00A9 2026 SEATax, Inc. All rights reserved.',

      modal_title: 'Enter Invitation Code',
      modal_desc: 'SEATax is currently in early access. Enter your invitation code to get started.',
      modal_placeholder: 'e.g. SEATAX-XXXX-XXXX',
      modal_submit: 'Continue ' + ARROW_SM,
      modal_footer: 'Don\'t have a code? <a href="#">Request access</a>',
      modal_err_empty: 'Please enter your invitation code.',
      modal_err_short: 'That code looks too short. Please check and try again.',
      modal_verifying: 'Verifying...',
      modal_accepted: 'Code accepted! Redirecting...',
    },

    zh: {
      page_title: 'SEATax — 中国跨境卖家美国税务申报平台',
      nav_features: '核心功能',
      nav_how: '使用流程',
      nav_dashboard: '控制面板',
      nav_pricing: '定价方案',
      nav_faq: '常见问题',
      nav_signin: '登录',
      nav_getstarted: '免费开始',

      hero_badge: '<span class="badge-dot"></span> 2026报税季 — 跨境卖家专属服务',
      hero_title: '<span class="title-line">美国税务申报</span><span class="title-line title-gradient">一站式解决</span><span class="title-line">中国跨境卖家首选</span>',
      hero_subtitle: 'SEATax 专为中国跨境电商卖家打造，智能导入交易数据，自动分类抵扣项目，轻松完成美国税务申报。',
      hero_cta_primary: '免费开始申报 ' + ARROW_SVG,
      hero_cta_secondary: '了解使用流程',
      stat_sellers: '服务卖家数',
      stat_accuracy: '申报准确率',
      stat_filing: '平均申报时间',

      preview_title: 'SEATax 控制面板',
      preview_pill: '2025年度申报',
      side_overview: '总览',
      side_returns: '申报表',
      side_income: '收入',
      side_deductions: '抵扣项',
      side_documents: '文档',
      side_settings: '设置',
      card_revenue: '总营收',
      card_deductions: '已发现抵扣',
      card_tax: '预估税额',
      card_optimized: '已优化',
      chart_title: '月度营收',
      chart_revenue: '营收',
      chart_expenses: '支出',

      logos_label: '覆盖主流跨境电商平台',

      feat_title: '一切所需<br/><span class="text-gradient">轻松报税</span>',
      feat_desc: '专为跨境电商卖家设计 — 从个人卖家到多平台大卖，全面覆盖。',
      feat1_title: '自动导入数据',
      feat1_desc: '一键关联您的 Amazon、eBay、Etsy、Shopify 店铺，自动同步全部交易数据。',
      feat2_title: '智能分类',
      feat2_desc: 'AI 驱动的费用分类引擎，自动学习您的数据模式，每次申报更精准。',
      feat3_title: '抵扣项发现',
      feat3_desc: '自动识别所有合规抵扣项 — 国际运费、仓储费、办公费用等，不遗漏每一分。',
      feat4_title: '多州申报',
      feat4_desc: '在多个州销售？我们自动检测经济关联（Nexus），为您准备多州税务申报。',
      feat5_title: 'IRS 合规表单',
      feat5_desc: '自动生成 Schedule C、1099-K 对账及所有必需表单，完全符合 IRS 要求。',
      feat6_title: '银行级安全',
      feat6_desc: '256位加密，SOC 2合规认证，安全对接 IRS 电子申报系统，全方位保护您的数据。',

      how_title: '三步完成<br/><span class="text-gradient">无忧申报</span>',
      step1_title: '关联您的店铺',
      step1_desc: '几秒钟即可关联 Amazon、eBay、Etsy 或 Shopify 账户，安全同步所有销售数据和交易记录。',
      step2_title: '审核与优化',
      step2_desc: 'AI 自动审核您的财务数据，智能分类费用，发现每一项合规抵扣。全程您掌控一切。',
      step3_title: '申报并放心',
      step3_desc: '通过安全集成直接向 IRS 电子申报，从控制面板实时跟踪退税状态。',
      opt_home: '办公费用',
      opt_shipping: '国际运费',
      opt_equip: '设备采购',
      opt_total: '节省总额',
      file_complete: '申报完成',
      file_refund: '预估退税金额：<strong>$6,240</strong>',

      dash_title: '您的税务<br/><span class="text-gradient">智能指挥中心</span>',
      dash_desc: '实时数据洞察、截止日期提醒、申报进度追踪 — 尽在掌握。',
      dash_greeting: '欢迎回来，<strong>李明</strong>',
      dash_deadline: '申报截止日：<strong>2026年4月15日</strong>',
      dash_days: '剩余49天',
      dash_status: '申报进度',
      dash_inprogress: '进行中',
      dash_sections: '已完成 3/4 个部分',
      dash_income: '收入概览',
      dash_total: '合计',
      dash_actions: '待办事项',
      dash_pending: '3项待处理',
      alert1: '上传 Amazon 1099-K 表单',
      alert2: '审核办公费用抵扣',
      alert3: '关联银行账户同步费用',

      test_tag: '用户评价',
      test_title: '深受跨境卖家<br/><span class="text-gradient">信赖与好评</span>',
      test1_quote: '\u201CSEATax 帮我发现了 $8,200 的抵扣项，之前完全不知道可以抵扣。Amazon 数据自动导入省了我好几个小时。\u201D',
      test1_name: '张明',
      test1_role: 'Amazon FBA 卖家，深圳',
      test2_quote: '\u201C多州申报以前让我头疼不已。SEATax 全自动处理，我只需要审核确认就行。太方便了！\u201D',
      test2_name: '王丽',
      test2_role: '多平台跨境卖家，杭州',
      test3_quote: '\u201C以前最怕报税季，现在15分钟搞定。界面清晰明了，中文支持很贴心。\u201D',
      test3_name: '陈伟',
      test3_role: 'Etsy 店铺卖家，广州',

      price_title: '简单透明的<br/><span class="text-gradient">定价方案</span>',
      price_desc: '无隐藏费用，申报时才需付费。',
      plan1_name: '入门版',
      plan1_desc: '适合新手卖家',
      plan1_f1: '1个店铺关联',
      plan1_f2: '基础抵扣发现',
      plan1_f3: '联邦申报包含',
      plan1_f4: '邮件支持',
      plan_getstarted: '免费开始',
      plan_popular: '最受欢迎',
      plan2_name: '专业版',
      plan2_desc: '适合成长期卖家',
      plan2_f1: '无限店铺关联',
      plan2_f2: 'AI 智能抵扣优化',
      plan2_f3: '多州申报',
      plan2_f4: '1099-K 自动对账',
      plan2_f5: '优先支持（含中文）',
      plan_freetrial: '免费试用',
      plan3_name: '企业版',
      plan3_price: '定制',
      plan3_desc: '适合大规模运营',
      plan3_f1: '包含专业版全部功能',
      plan3_f2: '专属客户经理',
      plan3_f3: '定制化集成',
      plan3_f4: '审计防御支持',
      plan3_f5: 'API 接口',
      plan_contact: '联系销售',

      faq_title: '常见<br/><span class="text-gradient">问题解答</span>',
      faq1_q: '哪些类型的卖家可以使用 SEATax？',
      faq1_a: 'SEATax 支持所有在美国销售的跨境电商卖家，包括 Amazon FBA、eBay、Etsy、Shopify、Walmart、TikTok Shop 等平台。无论您是个体经营、LLC 还是 S-Corp，我们都能为您服务。',
      faq2_q: '我的财务数据安全吗？',
      faq2_a: '绝对安全。我们采用 256 位 AES 加密，通过 SOC 2 Type II 认证，绝不与第三方共享您的数据。您的财务信息与银行同等级别安全保障。',
      faq3_q: 'SEATax 能处理多州销售税申报吗？',
      faq3_a: '当然可以！专业版和企业版包含自动经济关联（Nexus）检测和多州申报功能。我们实时监控全美50个州的经济关联阈值，并在您触发新的申报义务时及时提醒。',
      faq4_q: '如果我被审计了怎么办？',
      faq4_a: '企业版用户享有完整的审计防御支持。所有用户都会获得有序的、符合 IRS 要求的文档，让应对审计变得简单直接。我们保留每项抵扣的详细依据记录。',

      cta_title: '准备好简化您的报税流程了吗？',
      cta_desc: '加入 50,000+ 跨境卖家，用 SEATax 智慧报税。',
      cta_btn: '免费开始使用 ' + ARROW_SVG,
      cta_note: '无需信用卡，联邦申报免费。',

      footer_tagline: '中国跨境卖家的美国税务智能助手。更快申报，更多节省。',
      footer_product: '产品',
      footer_integrations: '平台集成',
      footer_company: '公司',
      footer_about: '关于我们',
      footer_blog: '博客',
      footer_careers: '加入我们',
      footer_press: '媒体',
      footer_support: '支持',
      footer_help: '帮助中心',
      footer_contact: '联系我们',
      footer_status: '服务状态',
      footer_security: '安全',
      footer_legal: '法律条款',
      footer_privacy: '隐私政策',
      footer_terms: '服务条款',
      footer_cookie: 'Cookie 政策',
      footer_copy: '\u00A9 2026 SEATax, Inc. 保留所有权利。',

      modal_title: '输入邀请码',
      modal_desc: 'SEATax 目前处于抢先体验阶段，请输入您的邀请码开始使用。',
      modal_placeholder: '例如 SEATAX-XXXX-XXXX',
      modal_submit: '继续 ' + ARROW_SM,
      modal_footer: '没有邀请码？<a href="#">申请体验资格</a>',
      modal_err_empty: '请输入您的邀请码。',
      modal_err_short: '邀请码似乎太短了，请检查后重试。',
      modal_verifying: '验证中...',
      modal_accepted: '邀请码已验证！正在跳转...',
    }
  };

  let currentLang = 'en';

  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    currentLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = t.page_title;
    document.body.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });
  }

  function getCurrentTranslations() {
    return translations[currentLang];
  }

  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    const buttons = langSwitch.querySelectorAll('.lang-btn');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang === currentLang) return;

        buttons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        langSwitch.setAttribute('data-active', lang);

        applyTranslations(lang);
      });
    });
  }

  window.SEATaxI18n = { getCurrentTranslations, applyTranslations };
})();
