import type { evaluate } from 'mathjs'

export class CalculatorService {
	private eval: typeof evaluate | null = null;
	private initCallbacks: ((initialized: boolean) => void)[] = [];
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

	init() {
		if (this.initialized && this.eval) return;

		import('mathjs').then(({ create, all }) => {
			console.log('mathjs loaded')
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
			this.total = this.eval!(this.tokens.join(' '));
		} catch (e) {
			const error = new Error()
			console.log(e);
		}
	}

	addToken(token: string) {
		this.tokens.push(token);
		this.calculate();
	}

	clear() {
		this.tokens.pop();
		this.calculate();
	}

	clearMemory() {
		this.tokens = [];
		this.total = 0;
	}

	onInit(callback: (initialized: boolean) => void) {
		this.initCallbacks.push(callback);
	}
}
