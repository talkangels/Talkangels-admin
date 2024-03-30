import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Routing } from "./utils/routing";
import MainLayout from "./Components/layout/mainLayout";
import PrivateRoute from "./utils/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Components/layout/spinner";

const Login = lazy(() => import("./Components/Pages/Login/login"));
const Register = lazy(() => import("./Components/Pages/Login/ragisterAdmin"));
const PrivacyPolicy = lazy(() =>
  import("./Components/Pages/Privacy-Policy/PrivacyPolicy")
);
const TermsConditions = lazy(() =>
  import("./Components/Pages/Privacy-Policy/TermsConditions")
);
const Dashboard = lazy(() => import("./Components/Pages/Dashboard/dashboard"));
const StaffDetails = lazy(() =>
  import("./Components/Pages/StaffDetails/StaffDetails")
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
const TransactionHistory = lazy(() =>
  import("./Components/Pages/TransactionHistory/TransactionHistory")
);
const Webpage = lazy(() => import("./Components/Pages/webpage/index"));
const ResetPassword = lazy(() =>
  import("./Components/Pages/Login/resetPassword")
);
const Setting = lazy(() => import("./Components/Pages/setting/Setting"));
const WebPageAdmin = lazy(() => import("./Components/Pages/webpage/admin/web"));
const Faq = lazy(() => import("./Components/Pages/webpage/Faq"));
const Listener = lazy(() => import("./Components/Pages/webpage/Listener"));

const App = () => {
  const routes = [
    {
      path: Routing.Initial,
      component: Webpage,
      isPrivateRoute: false,
    },
    {
      path: Routing.Listeners,
      component: Listener,
      isPrivateRoute: false,
    },
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
      path: Routing.Settings,
      component: Setting,
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
            <Route
              path="*"
              element={
                <>
                  <h1>The Page is not Found</h1>
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
