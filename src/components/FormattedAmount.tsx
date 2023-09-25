import { space } from "postcss/lib/list";

interface Amount {
	amount: number;
}

const FormattedAmount = ({amount}: Amount) => {
	const formattedAmount = new Number(amount).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 2,
	});
	return <span>{formattedAmount}</span>
}

export default FormattedAmount
