export const users = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `User${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: ["Admin", "User", "Manager"][index % 3],
  status: ["Active", "Inactive", "Pending"][index % 3],
}));

export const roles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "User", permissions: ["Read"] },
  { id: 2, name: "Manager", permissions: ["Read", "Write"] },
];

export const permissions = ["Read", "Write", "Delete"];
