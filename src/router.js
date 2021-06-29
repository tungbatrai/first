
import React from "react";

const AdminMain = React.lazy(() => import("./Admin/AdminMain/AdminMain"));
const AdminMainEditContent = React.lazy(() => import("./Admin/AdminMain/AdminMainEditContent.js"));
const AdminMainBanners = React.lazy(() => import("./Admin/AdminMain/AdminMainBanners.js"));
const AdminAddVideo = React.lazy(() => import("./Admin/AdminAddVideo/AdminAddVideo.js"))
const AdminListMagazines = React.lazy(() => import("./Admin/AdminListMagazines/AdminListMagazines.js"))
const routes = [
    { path: "/dashboard", name: "Dashboard", component: AdminMain },
    { path: '/admin-main-edit', name: 'main', component: AdminMainEditContent, exact: true },
    { path: '/admin-main-banners', name: 'main', component: AdminMainBanners, exact: true },
    { path: '/admin-add-video', name: 'main', component: AdminAddVideo, exact: true },
    { path: '/admin-list-magazines', name: 'main', component: AdminListMagazines, exact: true },
];
export default routes;
