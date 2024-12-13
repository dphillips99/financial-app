// Mocked affordability calculation function
export const calculateAffordability = (
    income: number,
    bills: number,
    vehicleCost: number,
    interestRate: number,
    term: number,
    budgetStyle?: string
  ): boolean => {
    // Placeholder logic
    const monthlyPayment = (vehicleCost * (1 + interestRate / 100)) / term;
    return income - bills > monthlyPayment;
};