import React from "react";
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { newContextComponents } from '@drizzle/react-components';

const {useDrizzle, useDrizzleState } = drizzleReactHooks;
const {ContractData } = newContextComponents;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	const { drizzle } = useDrizzle();
	const state = useDrizzleState(state => state);
	return (
		<div className="App">
			<div>
				<h2>Name</h2>
				<ContractData
					drizzle={drizzle}
					drizzleState={state}
					contract="MIKUTANOTOKEN"
					method="name"
				/>
			</div>
			<div>
				<h2>Symbol</h2>
				<ContractData
					drizzle={drizzle}
					drizzleState={state}
					contract="MIKUTANOTOKEN"
					method="symbol"
				/>
			</div>
			<div>
				<h2>Decimals</h2>
				<ContractData
					drizzle={drizzle}
					drizzleState={state}
					contract="MIKUTANOTOKEN"
					method="decimals"
				/>
			</div>
		</div>
	)
}
