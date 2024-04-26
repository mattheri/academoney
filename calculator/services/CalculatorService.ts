import type { evaluate } from 'mathjs'

import { Action } from '../calculator';
import { tokens } from '../constants';

export class CalculatorService {
	static _instance: CalculatorService;

	static get instance() {
		return this._instance || (this._instance = new CalculatorService());
	}

	private eval: typeof evaluate | null = null;
	private initCallbacks: ((initialized: boolean) => void)[] = [];
	private tokensSymbols = tokens;
	private previousToken: string | null = null;
	_initialized = false;
	_tokens: string[] = [];
	_total = 0;

	get initialized() {
		return this._initialized;
	} 

	set initialized(value) {
		this._initialized = value;
	}

	get tokens() {
		return this._tokens;
	}

	set tokens(value) {
		this._tokens = value;
	}

	get total() {
		return this._total;
	}

	set total(value) {
		this._total = value;
	}

	private previousTokenIsNull() {
		return this.previousToken === null;
	}

	private canAddToken(token: string) {
		switch (token) {
			case Action.Equal:
				if (this.previousTokenIsNull()) return false;
				this.calculate();
				this.previousToken = token;
				return false;
			case Action.Subtract:
					this.previousToken = token;
					return true;
			case Action.Add:
			case Action.Divide:
			case Action.Multiply:
			case Action.Exponent:
			case Action.Decimal:
			case Action.Percent:
				if (this.previousTokenIsNull()) return false;
				this.previousToken = token;
				return true;
			case Action.ParenthesisOpen:
				if (!this.previousTokenIsNull()) {
					if (this.previousToken === Action.ParenthesisClose) return false;
					if (this.previousToken!.match(/[\d\)]/)) {
						this.tokens.push(this.tokensSymbols[Action.Multiply]);
					};
				}
				this.previousToken = token;
				return true;
			case Action.ParenthesisClose:
				if (this.previousTokenIsNull()) return false;
				if (this.previousToken === Action.ParenthesisOpen) return false;
				this.previousToken = token;
				return true;
			default:
				if (!this.previousTokenIsNull() && this.previousToken === Action.Equal) {
					this.clearMemory();
				}
				this.previousToken = token;
				return true;
		}
	}

	init() {
		if (this.initialized && this.eval) return;

		import('mathjs').then(({ create, all }) => {
			const math = create(all);
			this.eval = math.evaluate;
			math.import({
				import: function () { throw new Error('Function import is disabled') },
				createUnit: function () { throw new Error('Function createUnit is disabled') },
				evaluate: function () { throw new Error('Function evaluate is disabled') },
				parse: function () { throw new Error('Function parse is disabled') },
				simplify: function () { throw new Error('Function simplify is disabled') },
				derivative: function () { throw new Error('Function derivative is disabled') }
			}, { override: true });
			this.initialized = true;
			this.initCallbacks.forEach(cb => cb(true));
		})
	}

	calculate() {
		if (!this.initialized || !this.eval) {
			throw new Error('CalculatorService not initialized');
		}

		try {
			this.total = this.eval!(this.tokens.join(''));
		} catch (e) {
			const error = e as Error;

			if (
				error.message.includes('Unexpected end of expression') ||
				error.message.includes('Unexpected part')
			) {
				return;
			}
		}
	}

	addToken(action: Action | number) {
		if (!this.canAddToken(action.toString())) return;

		if (typeof action === 'number') this.tokens.push(action.toString());
		else {
			switch (action) {
				case Action.Clear:
				case Action.ClearMemory:
					return;
				default:
					this.tokens.push(this.tokensSymbols[action]);
					break;
			}
		}

		this.calculate();
	}

	clear() {
		this.tokens.pop();
		this.calculate();
	}

	clearMemory() {
		this.tokens = [];
		this.total = 0;
		this.previousToken = null;
	}

	onInit(callback: (initialized: boolean) => void) {
		this.initCallbacks.push(callback);
	}
}
