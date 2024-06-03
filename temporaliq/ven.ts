interface Incomes {
  [key: string]: number;
}

const monthlyIncomes: Incomes = {
  january: 5000,
  february: 4700,
  march: 5300,
  april: 4800,
  may: 4500,
  june: 5200,
  july: 5100,
  august: 4950,
  september: 4800,
  october: 5300,
  november: 5500,
  december: 6000
};

// Optimized function to calculate the total annual income
function calculateTotalAnnualIncome(incomes: Incomes): number {
  return Object.values(incomes).reduce((total, income) => total + income, 0);
}

// Example usage
const totalAnnualIncome = calculateTotalAnnualIncome(monthlyIncomes);
console.log(`Total Annual Income: $${totalAnnualIncome}`);
