import { ryoppippi } from '@ryoppippi/eslint-config';

export default ryoppippi({
	svelte: false,
	typescript: {
		tsconfigPath: './tsconfig.json',
		overrides: {
			'ts/no-misused-promises': ['error', {
				checksVoidReturn: false,
			}],
		},
	},
});
