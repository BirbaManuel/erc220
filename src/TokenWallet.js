import React from "react";
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { newContextComponents } from '@drizzle/react-components';

const {useDrizzle, useDrizzleState } = drizzleReactHooks;
const {ContractData, ContractForm } = newContextComponents;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	const { drizzle } = useDrizzle();
	const  state = useDrizzleState(  state => state);
	console.log(state.accounts)
	return (
		<div className="App">
			<div>
				<h2>Balance</h2>
				<ContractData
					drizzle={drizzle}
					drizzleState={state}
					contract="MIKUTANOTOKEN"
					method="balanceOf"
					methodArgs={[state.accounts[0]]}
				/>
				<h2>Balance account 0</h2>
				<ContractData
					drizzle={drizzle}
					drizzleState={state}
					contract="MIKUTANOTOKEN"
					method="balanceOf"
					methodArgs={[state.accounts[1]]}
				/>
			</div>
			<div>
				<h2>Transfer</h2>
				<ContractForm
					drizzle={drizzle}
					contract="MIKUTANOTOKEN"
					method="transfer"
				/>
			</div>
			<div>
				<h2>Transfer from</h2>
				<ContractForm
					drizzle={drizzle}
					contract="MIKUTANOTOKEN"
					method="transferFrom"
				/>
			</div>
			<div>
				<h2>Approve</h2>
				<ContractForm
					drizzle={drizzle}
					contract="MIKUTANOTOKEN"
					method="approve"
				/>
			</div>
		</div>
		);
};
