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
"[project]/app/resources/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResourcesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/posts.ts [app-rsc] (ecmascript)");
;
;
;
async function ResourcesPage() {
    const posts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublishedPosts"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "resource-page",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "eyebrow",
                    children: "Resources"
                }, void 0, false, {
                    fileName: "[project]/app/resources/page.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
                        marginTop: 16,
                        marginBottom: 18
                    },
                    children: "Knowledge, stories and product information."
                }, void 0, false, {
                    fileName: "[project]/app/resources/page.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "resource-filters",
                    "aria-label": "Resource filters",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "filter-chip active",
                            children: "All"
                        }, void 0, false, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "filter-chip",
                                children: category
                            }, category, false, {
                                fileName: "[project]/app/resources/page.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/resources/page.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "resources-grid",
                    children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/resources/${post.slug}`,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "resource-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "resource-date",
                                            children: [
                                                post.category,
                                                " · ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(post.published_at)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: post.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 24,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#5d6763',
                                                marginBottom: 18
                                            },
                                            children: post.excerpt
                                        }, void 0, false, {
                                            fileName: "[project]/app/resources/page.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Read article ↗"
                                }, void 0, false, {
                                    fileName: "[project]/app/resources/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, post.id, true, {
                            fileName: "[project]/app/resources/page.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/resources/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/resources/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/resources/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/resources/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/resources/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__86859545._.js.map