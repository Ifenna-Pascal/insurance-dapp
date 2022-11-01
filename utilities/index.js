const toggle = (state, action) => {
  action(!state);
};

const sideIcons = [
  {
    id: 1,
    top: false,
    name: "home-4-fill",
    path: "/dashboard",
  },
  {
    id: 2,
    top: false,
    name: "wallet-fill",
    path: "/notifications",
  },
  {
    id: 3,
    top: false,
    name: "user-fill",
    path: "/dashboard/profile/ifenna",
  },
  {
    id: 4,
    top: true,
    name: "settings-fill",
    path: "/dashboard/profile/ifenna",
  },
];

const portfolios = [
  {
    id: 1,
    txHash: "qw442....3535",
    name: "Life Insurance",
    amount: "3,000",
    tx: "12",
  },
  {
    id: 2,
    txHash: "qw223...3535",
    name: "Car Insurance",
    amount: "3,000",
    tx: "12",
  },
  {
    id: 3,
    txHash: "qw442....3535",
    name: "Food Insurance",
    amount: "12,000",
    tx: "12",
  },
  {
    id: 4,
    txHash: "qw442....3535",
    name: "Property Insurance",
    amount: "20,000",
    tx: "12",
  },
];

const transanctions = [
  {
    id: 1,
    txHash: "qw442....3535",
    type: "credit",
    amount: "3,000",
    date: "12/3/11",
  },
  {
    id: 2,
    txHash: "qw223...3535",
    type: "credit",
    amount: "3,000",
    date: "11/11/22",
  },
  {
    id: 3,
    txHash: "qw442....3535",
    type: "debit",
    amount: "12,000",
    date: "12/2/22",
  },
  {
    id: 4,
    txHash: "qw442....3535",
    type: "credit",
    amount: "20,000",
    date: "1/2/2",
  },
  {
    id: 5,
    txHash: "qw442....3535",
    type: "debit",
    amount: "20,000",
    date: "1/2/2",
  },
];

export { toggle, sideIcons, portfolios, transanctions };
