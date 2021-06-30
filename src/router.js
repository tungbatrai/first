
import React from "react";

const AdminMain = React.lazy(() => import("./Admin/AdminMain/AdminMain"));
const AdminMainEditContent = React.lazy(() => import("./Admin/AdminMain/AdminMainEditContent"));
const AdminMainBanners = React.lazy(() => import("./Admin/AdminMain/AdminMainBanners"));
const AdminAddVideo = React.lazy(() => import("./Admin/AdminAddVideo/AdminAddVideo"))
const AdminListMagazines = React.lazy(() => import("./Admin/AdminListMagazines/AdminListMagazines"))
const AdminRegistrationMagazines = React.lazy(() => import("./Admin/AdminListMagazines/AdminRegistrationMagazines"))
const AdminEditMagazines = React.lazy(() => import("./Admin/AdminListMagazines/AdminEditMagazines"))
const AdminDiaryClass = React.lazy(() => import("./Admin/AdminClass/AdminDiaryClass"))
const AdminListStudyClass = React.lazy(() => import("./Admin/AdminClass/AdminListStudyClass/AdminListStudyClass"))
const AdminEditClass = React.lazy(() => import("./Admin/AdminClass/AdminEditClass"))
const AdminListClass = React.lazy(() => import("./Admin/AdminClass/AdminListClass"))
const AdminListStudyEditClass = React.lazy(() => import("./Admin/AdminClass/AdminListStudyClass/AdminListStudyEditClass"))
const AdminListStudyRegistrationClass = React.lazy(() => import("./Admin/AdminClass/AdminListStudyClass/AdminListStudyRegistrationClass"))
const routes = [
    { path: "/dashboard", name: "Dashboard", component: AdminMain },
    { path: '/admin-main-edit', name: 'main', component: AdminMainEditContent, exact: true },
    { path: '/admin-main-banners', name: 'main', component: AdminMainBanners, exact: true },
    { path: '/admin-add-video', name: 'main', component: AdminAddVideo, exact: true },

    { path: '/admin-list-magazines', name: 'main', component: AdminListMagazines, exact: true },
    { path: '/admin-registration-magazines', name: 'main', component: AdminRegistrationMagazines, exact: true },
    { path: '/admin-edit-magazines', name: 'main', component: AdminEditMagazines, exact: true },

    { path: '/admin-diary-class', name: 'main', component: AdminDiaryClass, exact: true },
    { path: '/admin-list-study-class', name: 'main', component: AdminListStudyClass, exact: true },
    { path: '/admin-edit-class', name: 'main', component: AdminEditClass, exact: true },
    
    { path: '/admin-list-class', name: 'main', component: AdminListClass, exact: true },
    { path: '/admin-list-study-edit-class', name: 'main', component: AdminListStudyEditClass, exact: true },
    { path: '/admin-list-study-registration-class', name: 'main', component: AdminListStudyRegistrationClass, exact: true },
];
export default routes;
