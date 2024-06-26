import type { evaluate } from "mathjs";

import { Action } from "../calculator";
import { tokens } from "../constants";

export class CalculatorService {
  static _instance: CalculatorService;

  static get instance() {
    return this._instance || (this._instance = new CalculatorService());
  }

  private eval: typeof evaluate | null = null;
  private initCallbacks: ((initialized: boolean) => void)[] = [];
  private tokensSymbols = tokens;
  private _previousToken: string | null = null;
  private _initialized = false;
  private _tokens: string[] = [];
  private _total = 0;

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

  get previousToken() {
    return this._previousToken;
  }

  set previousToken(value) {
    this._previousToken = value;
  }

  private noopThrowError(message: string) {
    return () => {
      throw new Error(message);
    };
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
          }
        }
        this.previousToken = token;
        return true;
      case Action.ParenthesisClose:
        if (this.previousTokenIsNull()) return false;
        if (this.previousToken === Action.ParenthesisOpen) return false;
        this.previousToken = token;
        return true;
      default:
        if (
          !this.previousTokenIsNull() &&
          this.previousToken === Action.Equal
        ) {
          this.clearMemory();
        }
        this.previousToken = token;
        return true;
    }
  }

  init() {
    if (this.initialized && this.eval) return;

    import("mathjs").then(({ create, all }) => {
      const math = create(all);
      this.eval = math.evaluate;
      math.import(
        {
          import: this.noopThrowError("Function import is disabled").bind(this),
          createUnit: this.noopThrowError(
            "Function createUnit is disabled"
          ).bind(this),
          evaluate: this.noopThrowError("Function evaluate is disabled").bind(
            this
          ),
          parse: this.noopThrowError("Function parse is disabled").bind(this),
          simplify: this.noopThrowError("Function simplify is disabled").bind(
            this
          ),
          derivative: this.noopThrowError(
            "Function derivative is disabled"
          ).bind(this),
        },
        { override: true }
      );
      this.initialized = true;
      this.initCallbacks.forEach((cb) => cb(true));
    });
  }

  calculate() {
    if (!this.initialized || !this.eval) {
      throw new Error("CalculatorService not initialized");
    }

    try {
      this.total = this.eval!(this.tokens.join("")) ?? 0;
    } catch (e) {
      const error = e as Error;

      if (
        error.message.includes("Unexpected end of expression") ||
        error.message.includes("Unexpected part")
      ) {
        return;
      }
    }
  }

  addToken(action: Action | number) {
    if (!this.canAddToken(action.toString())) return;

    if (typeof action === "number") this.tokens.push(action.toString());
    else {
      switch (action) {
        case Action.Clear:
          this.clear();
          this.previousToken = action;
          break;
        case Action.ClearMemory:
          this.clearMemory();
          this.previousToken = action;
          break;
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
