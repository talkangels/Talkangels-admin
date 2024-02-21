export const HaderName = (number) => {
  switch (number) {
    case "dashboard":
      return "";
    case "staffdetail":
      return "Staff Details";
    case "feedback":
      return "Feed back";
    case "userdetail":
      return "User Detail";
    case "staffdetail/id":
      return "Staff Details";
    case "recharge":
      return "Recharges";
    case "report-and-problem":
      return "Report And Problem";
    case "transactionHistory":
      return "Transaction History";
    default:
      return "";
  }
};
