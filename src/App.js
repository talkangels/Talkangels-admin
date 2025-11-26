import React, { Suspense, lazy } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Routing } from "./utils/routing";
import MainLayout from "./Components/layout/mainLayout";
import PrivateRoute from "./utils/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Components/layout/spinner";
import AppRedirect from "./Components/Pages/AppRedirect";

const Login = lazy(() => import("./Components/Pages/Login/login"));
const Payment = lazy(() => import("./Components/Pages/payment/Index"));

const Register = lazy(() => import("./Components/Pages/Login/ragisterAdmin"));
const PrivacyPolicy = lazy(() =>
  import("./Components/Pages/Privacy-Policy/PrivacyPolicy")
);
const ChildSafetyStandards = lazy(() =>
  import("./Components/Pages/Privacy-Policy/ChildSafetyStandards")
);
const TermsConditions = lazy(() =>
  import("./Components/Pages/Privacy-Policy/TermsConditions")
);
const Dashboard = lazy(() => import("./Components/Pages/Dashboard/dashboard"));
const StaffDetails = lazy(() =>
  import("./Components/Pages/StaffDetails/StaffDetails")
);
const StaffCallingReport = lazy(() =>
  import("./Components/Pages/StaffDetails/StaffCallingReport")
);
const Staffpersonalditails = lazy(() =>
  import("./Components/Pages/StaffDetails/staffpersonalditails")
);
const FeedbackList = lazy(() =>
  import("./Components/Pages/FeedbackList/feedbackList")
);
const Recharges = lazy(() => import("./Components/Pages/Recharge/Recharge"));
const UserDetail = lazy(() => import("./Components/Pages/UserList/UserList"));
const ReportAndProblem = lazy(() =>
  import("./Components/Pages/Report/ReportAndProblem")
);
const Support = lazy(() =>
  import("./Components/Pages/Support/Support")
);
const TransactionHistory = lazy(() =>
  import("./Components/Pages/TransactionHistory/TransactionHistory")
);
const Webpage = lazy(() => import("./Components/Pages/webpage/index"));
const ResetPassword = lazy(() =>
  import("./Components/Pages/Login/resetPassword")
);
const ListenerRequst = lazy(() =>
  import("./Components/Pages/Listeners/Listeners")
);
const TransactionReport = lazy(() =>
  import("./Components/Pages/Data Reports/TransactionReport")
);
const CallingReport = lazy(() =>
  import("./Components/Pages/Data Reports/CallingReport")
);
const Setting = lazy(() => import("./Components/Pages/setting/Setting"));
const WebPageAdmin = lazy(() => import("./Components/Pages/webpage/admin/web"));
const Faq = lazy(() => import("./Components/Pages/webpage/Faq"));
// const Listener = lazy(() => import("./Components/Pages/webpage/Listener"));
// const BeListener = lazy(() => import("./Components/Pages/webpage/BeListener"));
const Refund = lazy(() => import("./Components/Pages/webpage/Refund"));
const AboutUs = lazy(() => import("./Components/Pages/webpage/AboutUs"));
const Blog = lazy(() => import("./Components/Pages/webpage/Blog"));

const App = () => {
  const routes = [
    {
      path: Routing.Initial,
      component: Webpage,
      isPrivateRoute: false,
    },
    {
      path: Routing.Payment,
      component: Payment,
      isPrivateRoute: false,
    },
    {
      path: Routing.Blog,
      component: Blog,
      isPrivateRoute: false,
    },
    {
      path: Routing.Refund,
      component: Refund,
      isPrivateRoute: false,
    },
    // {
    //   path: Routing.Listeners,
    //   component: Listener,
    //   isPrivateRoute: false,
    // },
    {
      path: Routing.About,
      component: AboutUs,
      isPrivateRoute: false,
    },
    // {
    //   path: Routing.BeListener,
    //   component: BeListener,
    //   isPrivateRoute: false,
    // },
    {
      path: Routing.Faq,
      component: Faq,
      isPrivateRoute: false,
    },
    {
      path: Routing.Admin,
      component: Login,
      isPrivateRoute: false,
    },
    {
      path: Routing.ResetPassword,
      component: ResetPassword,
      isPrivateRoute: false,
    },
    {
      path: Routing.PrivacyPolicy,
      component: PrivacyPolicy,
      isPrivateRoute: false,
    },
    {
      path: Routing.ChildSafetyStandards,
      component: ChildSafetyStandards,
      isPrivateRoute: false,
    },
    {
      path: Routing.TermsConditions,
      component: TermsConditions,
      isPrivateRoute: false,
    },
    {
      path: Routing.Login,
      component: Login,
      isPrivateRoute: false,
    },
    {
      path: Routing.Register,
      component: Register,
      isPrivateRoute: false,
    },
    {
      path: Routing.Dashboard,
      component: Dashboard,
      isPrivateRoute: true,
    },
    {
      path: Routing.StaffDetails,
      component: StaffDetails,
      isPrivateRoute: true,
    },
    {
      path: Routing.StaffCallingReport,
      component: StaffCallingReport,
      isPrivateRoute: true,
    },
    {
      path: Routing.FeedbackList,
      component: FeedbackList,
      isPrivateRoute: true,
    },
    {
      path: Routing.Staffpersonalditails,
      component: Staffpersonalditails,
      isPrivateRoute: true,
    },
    {
      path: Routing.Recharge,
      component: Recharges,
      isPrivateRoute: true,
    },
    {
      path: Routing.UserDetails,
      component: UserDetail,
      isPrivateRoute: true,
    },
    {
      path: Routing.TransactionHistory,
      component: TransactionHistory,
      isPrivateRoute: true,
    },
    {
      path: Routing.ReportAndProblem,
      component: ReportAndProblem,
      isPrivateRoute: true,
    },
    {
      path: Routing.Support,
      component: Support,
      isPrivateRoute: true,
    },
    {
      path: Routing.ListenerRequst,
      component: ListenerRequst,
      isPrivateRoute: true,
    },
    {
      path: Routing.Settings,
      component: Setting,
      isPrivateRoute: true,
    },
    {
      path: Routing.callingReport,
      component: CallingReport,
      isPrivateRoute: true,
    },
    {
      path: Routing.transctionReport,
      component: TransactionReport,
      isPrivateRoute: true,
    },
    {
      path: Routing.WebPageAdmin,
      component: WebPageAdmin,
      isPrivateRoute: true,
    },
  ];

  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Spinner />}>
        <Router>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.isPrivateRoute ? (
                    <PrivateRoute>
                      <MainLayout>
                        <route.component />
                      </MainLayout>
                    </PrivateRoute>
                  ) : (
                    <route.component />
                  )
                }
              />
            ))}
            <Route path="/open" element={<AppRedirect />} />
            <Route path="/profile" element={<AppRedirect />} />
            <Route path="/refer" element={<AppRedirect />} />
            <Route
              path="*"
              element={
                <>
                  <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
                    <h1 className="text-9xl font-extrabold text-white tracking-widest">
                      404
                    </h1>
                    <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                      Page Not Found
                    </div>
                    <button className="mt-5">
                      <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0" />
                        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                          <Link to="/">Go Home</Link>
                        </span>
                      </a>
                    </button>
                  </main>
                </>
              }
            />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};
export default App;
