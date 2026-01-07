import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		coverage: {
			provider: "v8",
			include: ["src/**/*.ts"],
			exclude: [
				"src/**/*.spec.ts",
				"src/**/*.test.ts",
				"dist/**",
				"node_modules/**",
			],
		},
		include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		exclude: ["dist/**", "node_modules/**", "**/*.d.ts"],
	},
});
