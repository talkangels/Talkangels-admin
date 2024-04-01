export const HaderName = (number) => {
  switch (number) {
    case "admin/dashboard":
      return "";
    case "admin/staffdetail":
      return "Staff Details";
    case "admin/feedback":
      return "Feed back";
    case "admin/userdetail":
      return "User Detail";
    case "admin/staffdetail/id":
      return "Staff Details";
    case "admin/recharge":
      return "Recharges";
    case "admin/report-and-problem":
      return "Report And Problem";
    case "admin/transactionHistory":
      return "Transaction History";
    case "admin/transactionHistory":
      return "Transaction History";
    case "admin/web-page":
      return "Web Page";
    case "admin/listener-requst":
      return "Listener";
    case "admin/setting":
      return "Setting";
    default:
      return "";
  }
};
