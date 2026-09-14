module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/posts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "demoPosts",
    ()=>demoPosts,
    "formatDate",
    ()=>formatDate,
    "getAllPosts",
    ()=>getAllPosts,
    "getPostBySlug",
    ()=>getPostBySlug,
    "getPublishedPosts",
    ()=>getPublishedPosts,
    "slugify",
    ()=>slugify
]);
const categories = [
    'Education',
    'Company News',
    'Product Info'
];
const demoPosts = [
    {
        id: '1',
        slug: 'diabetes-and-exercise-how-physical-activity-affects-blood-glucose-levels',
        title: 'Diabetes and Exercise: How Physical Activity Affects Blood Glucose Levels',
        category: 'Education',
        excerpt: 'A practical look at how movement affects blood glucose and how to approach exercise with caution and awareness.',
        body: `<h2>Why exercise matters</h2><p>Physical activity can influence blood glucose in many ways. For people managing diabetes, understanding this relationship is essential when creating a routine that supports day-to-day wellbeing.</p><h3>What to know</h3><p>Different activities can produce different responses depending on duration, intensity and timing. A balanced plan, combined with regular monitoring and medical guidance, can help people make informed decisions about exercise.</p><p>Use your healthcare professional or product instructions as the authority for personal recommendations.</p>`,
        featured_image: 'https://colexabiosensor.com/wp-content/uploads/2023/08/Screenshot_2023-08-21_163500-removebg-preview-e1692705708812.png',
        author: 'Colexa Biosensor',
        published_at: '2025-03-14T00:00:00.000Z',
        status: 'published',
        created_at: '2025-03-01T00:00:00.000Z',
        updated_at: '2025-03-14T00:00:00.000Z'
    },
    {
        id: '2',
        slug: 'colexa-biosensor-advancing-healthcare-localization-and-self-reliance-in-africa',
        title: 'Advancing healthcare localization and self-reliance in Africa',
        category: 'Company News',
        excerpt: 'Colexa continues to build local capability, strengthen healthcare access, and support more resilient systems across the continent.',
        body: `<h2>Local manufacturing matters</h2><p>Colexa is committed to building local manufacturing capability in Nigeria and supporting more resilient healthcare systems across Africa through practical, accessible solutions.</p><p>That work depends on people, knowledge and long-term partnerships across healthcare delivery, distribution and quality assurance.</p>`,
        featured_image: 'https://colexabiosensor.com/wp-content/uploads/2025/10/Colexa-2_Copy.jpg',
        author: 'Colexa Biosensor',
        published_at: '2025-04-18T00:00:00.000Z',
        status: 'published',
        created_at: '2025-04-01T00:00:00.000Z',
        updated_at: '2025-04-18T00:00:00.000Z'
    },
    {
        id: '3',
        slug: 'standard-q-hiv-1-2-ab-3-line-test',
        title: 'STANDARD™ Q HIV 1/2 Ab 3-Line Test',
        category: 'Product Info',
        excerpt: 'Details on a rapid immunoassay product designed for rapid qualitative detection of HIV antibodies.',
        body: `<h2>Product information</h2><p>The STANDARD Q HIV 1/2 Ab 3-Line Test is a rapid chromatographic immunoassay for qualitative detection of HIV-1 and HIV-2 antibodies.</p><p>It supports healthcare professionals by helping to identify patients who may require further confirmation or follow-up care in line with clinical practice.</p>`,
        featured_image: 'https://colexabiosensor.com/wp-content/uploads/2025/03/HIV-1-2-3-2.png',
        author: 'Colexa Biosensor',
        published_at: '2025-05-05T00:00:00.000Z',
        status: 'published',
        created_at: '2025-05-01T00:00:00.000Z',
        updated_at: '2025-05-05T00:00:00.000Z'
    },
    {
        id: '4',
        slug: 'quality-policy-statement-qr-01-02',
        title: 'Quality Policy Statement QR-01-02',
        category: 'Company News',
        excerpt: 'A summary of the company’s quality policy and how it guides product development and manufacturing work.',
        body: `<h2>Our approach</h2><p>Colexa’s quality work is designed to support product reliability, transparency and healthcare confidence in the devices and diagnostics we make.</p><p>The quality policy is a practical guide for product development, process discipline and validation support.</p>`,
        featured_image: 'https://colexabiosensor.com/wp-content/uploads/2025/10/Colexa-7.jpg',
        author: 'Colexa Biosensor',
        published_at: '2025-06-12T00:00:00.000Z',
        status: 'draft',
        created_at: '2025-06-01T00:00:00.000Z',
        updated_at: '2025-06-12T00:00:00.000Z'
    }
];
function formatDate(value) {
    return new Intl.DateTimeFormat('en-NG', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(new Date(value));
}
function slugify(value) {
    return value.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
}
async function getPublishedPosts() {
    return demoPosts.filter((item)=>item.status === 'published');
}
async function getAllPosts() {
    return demoPosts;
}
async function getPostBySlug(slug) {
    return demoPosts.find((item)=>item.slug === slug) || null;
}
}),
"[project]/app/resources/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResourceArticlePage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/posts.ts [app-rsc] (ecmascript)");
;
;
;
;
async function generateStaticParams() {
    const posts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublishedPosts"])();
    return posts.map((post)=>({
            slug: post.slug
        }));
}
async function ResourceArticlePage({ params }) {
    const { slug } = await params;
    const post = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPostBySlug"])(slug);
    if (!post) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const related = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublishedPosts"])()).filter((item)=>item.category === post.category && item.slug !== post.slug).slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "article-page",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container article-shell",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "article-hero",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: post.featured_image,
                        alt: post.title
                    }, void 0, false, {
                        fileName: "[project]/app/resources/[slug]/page.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/resources/[slug]/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "article-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: post.category
                        }, void 0, false, {
                            fileName: "[project]/app/resources/[slug]/page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                                marginTop: 18
                            },
                            children: post.title
                        }, void 0, false, {
                            fileName: "[project]/app/resources/[slug]/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "meta-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "By ",
                                        post.author
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/resources/[slug]/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(post.published_at)
                                }, void 0, false, {
                                    fileName: "[project]/app/resources/[slug]/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/resources/[slug]/page.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            dangerouslySetInnerHTML: {
                                __html: post.body
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/resources/[slug]/page.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 28,
                                display: 'flex',
                                gap: 14,
                                flexWrap: 'wrap'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/resources",
                                target: "_blank",
                                rel: "noreferrer",
                                className: "secondary-btn",
                                children: "← Back to all resources"
                            }, void 0, false, {
                                fileName: "[project]/app/resources/[slug]/page.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/resources/[slug]/page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/resources/[slug]/page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                related.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: 18
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: "Related articles"
                        }, void 0, false, {
                            fileName: "[project]/app/resources/[slug]/page.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "related-grid",
                            style: {
                                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                                marginTop: 20
                            },
                            children: related.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/resources/${item.slug}`,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "related-card",
                                    style: {
                                        padding: 20
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "resource-date",
                                            children: item.category
                                        }, void 0, false, {
                                            fileName: "[project]/app/resources/[slug]/page.tsx",
                                            lineNumber: 46,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: '0 0 12px'
                                            },
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/resources/[slug]/page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Read article ↗"
                                        }, void 0, false, {
                                            fileName: "[project]/app/resources/[slug]/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/app/resources/[slug]/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/resources/[slug]/page.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/resources/[slug]/page.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/resources/[slug]/page.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/resources/[slug]/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/resources/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/resources/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__77512953._.js.map