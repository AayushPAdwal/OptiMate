import { createRequire } from "node:module";
import { BrowserWindow, app, ipcMain } from "electron";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import * as path from "node:path";
import { join as join$1, resolve } from "node:path";
import { fileURLToPath } from "node:url";
// \0rolldown/runtime.js
var __create = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod, mod.exports), cb = null), mod.exports);
var __copyProps$1 = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames$1(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp$1.call(to, key) && key !== except) __defProp$1(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps$1(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp$1.call(mod, "default") ? __defProp$1(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __require = /* #__PURE__ */ (() => createRequire(import.meta.url))();
// node_modules/@prisma/client-runtime-utils/dist/index.js
var require_dist = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);
	var index_exports = {};
	__export(index_exports, {
		AnyNull: () => AnyNull,
		AnyNullClass: () => AnyNullClass,
		DbNull: () => DbNull,
		DbNullClass: () => DbNullClass,
		Decimal: () => Decimal,
		JsonNull: () => JsonNull,
		JsonNullClass: () => JsonNullClass,
		NullTypes: () => NullTypes,
		ObjectEnumValue: () => ObjectEnumValue,
		PrismaClientInitializationError: () => PrismaClientInitializationError,
		PrismaClientKnownRequestError: () => PrismaClientKnownRequestError,
		PrismaClientRustError: () => PrismaClientRustError,
		PrismaClientRustPanicError: () => PrismaClientRustPanicError,
		PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError,
		PrismaClientValidationError: () => PrismaClientValidationError,
		Sql: () => Sql,
		empty: () => empty,
		hasBatchIndex: () => hasBatchIndex,
		isAnyNull: () => isAnyNull,
		isDbNull: () => isDbNull,
		isJsonNull: () => isJsonNull,
		isObjectEnumValue: () => isObjectEnumValue,
		join: () => join,
		raw: () => raw,
		sql: () => sql
	});
	module.exports = __toCommonJS(index_exports);
	function hasBatchIndex(value) {
		return typeof value["batchRequestIdx"] === "number";
	}
	function setClassName(classObject, name) {
		Object.defineProperty(classObject, "name", {
			value: name,
			configurable: true
		});
	}
	var PrismaClientInitializationError = class _PrismaClientInitializationError extends Error {
		clientVersion;
		errorCode;
		retryable;
		constructor(message, clientVersion, errorCode) {
			super(message);
			this.name = "PrismaClientInitializationError";
			this.clientVersion = clientVersion;
			this.errorCode = errorCode;
			Error.captureStackTrace(_PrismaClientInitializationError);
		}
		get [Symbol.toStringTag]() {
			return "PrismaClientInitializationError";
		}
	};
	setClassName(PrismaClientInitializationError, "PrismaClientInitializationError");
	var PrismaClientKnownRequestError = class extends Error {
		code;
		meta;
		clientVersion;
		batchRequestIdx;
		constructor(message, { code, clientVersion, meta, batchRequestIdx }) {
			super(message);
			this.name = "PrismaClientKnownRequestError";
			this.code = code;
			this.clientVersion = clientVersion;
			this.meta = meta;
			Object.defineProperty(this, "batchRequestIdx", {
				value: batchRequestIdx,
				enumerable: false,
				writable: true
			});
		}
		get [Symbol.toStringTag]() {
			return "PrismaClientKnownRequestError";
		}
	};
	setClassName(PrismaClientKnownRequestError, "PrismaClientKnownRequestError");
	function getBacktrace(log3) {
		if (log3.fields?.message) {
			let str = log3.fields?.message;
			if (log3.fields?.file) {
				str += ` in ${log3.fields.file}`;
				if (log3.fields?.line) str += `:${log3.fields.line}`;
				if (log3.fields?.column) str += `:${log3.fields.column}`;
			}
			if (log3.fields?.reason) str += `
${log3.fields?.reason}`;
			return str;
		}
		return "Unknown error";
	}
	function isPanic(err) {
		return err.fields?.message === "PANIC";
	}
	var PrismaClientRustError = class extends Error {
		clientVersion;
		_isPanic;
		constructor({ clientVersion, error }) {
			const backtrace = getBacktrace(error);
			super(backtrace ?? "Unknown error");
			this._isPanic = isPanic(error);
			this.clientVersion = clientVersion;
		}
		get [Symbol.toStringTag]() {
			return "PrismaClientRustError";
		}
		isPanic() {
			return this._isPanic;
		}
	};
	setClassName(PrismaClientRustError, "PrismaClientRustError");
	var PrismaClientRustPanicError = class extends Error {
		clientVersion;
		constructor(message, clientVersion) {
			super(message);
			this.name = "PrismaClientRustPanicError";
			this.clientVersion = clientVersion;
		}
		get [Symbol.toStringTag]() {
			return "PrismaClientRustPanicError";
		}
	};
	setClassName(PrismaClientRustPanicError, "PrismaClientRustPanicError");
	var PrismaClientUnknownRequestError = class extends Error {
		clientVersion;
		batchRequestIdx;
		constructor(message, { clientVersion, batchRequestIdx }) {
			super(message);
			this.name = "PrismaClientUnknownRequestError";
			this.clientVersion = clientVersion;
			Object.defineProperty(this, "batchRequestIdx", {
				value: batchRequestIdx,
				writable: true,
				enumerable: false
			});
		}
		get [Symbol.toStringTag]() {
			return "PrismaClientUnknownRequestError";
		}
	};
	setClassName(PrismaClientUnknownRequestError, "PrismaClientUnknownRequestError");
	var PrismaClientValidationError = class extends Error {
		name = "PrismaClientValidationError";
		clientVersion;
		constructor(message, { clientVersion }) {
			super(message);
			this.clientVersion = clientVersion;
		}
		get [Symbol.toStringTag]() {
			return "PrismaClientValidationError";
		}
	};
	setClassName(PrismaClientValidationError, "PrismaClientValidationError");
	var secret = Symbol();
	var PRISMA_OBJECT_ENUM_VALUE = Symbol.for("prisma.objectEnumValue");
	var ObjectEnumValue = class {
		[PRISMA_OBJECT_ENUM_VALUE] = true;
		#representation;
		constructor(arg) {
			if (arg === secret) this.#representation = `Prisma.${this._getName()}`;
			else this.#representation = `new Prisma.${this._getNamespace()}.${this._getName()}()`;
		}
		_getName() {
			return this.constructor.name;
		}
		toString() {
			return this.#representation;
		}
	};
	function setClassName2(classObject, name) {
		Object.defineProperty(classObject, "name", {
			value: name,
			configurable: true
		});
	}
	var NullTypesEnumValue = class extends ObjectEnumValue {
		_getNamespace() {
			return "NullTypes";
		}
	};
	var DbNullClass = class extends NullTypesEnumValue {
		#_brand_DbNull;
	};
	setClassName2(DbNullClass, "DbNull");
	var JsonNullClass = class extends NullTypesEnumValue {
		#_brand_JsonNull;
	};
	setClassName2(JsonNullClass, "JsonNull");
	var AnyNullClass = class extends NullTypesEnumValue {
		#_brand_AnyNull;
	};
	setClassName2(AnyNullClass, "AnyNull");
	var NullTypes = {
		DbNull: DbNullClass,
		JsonNull: JsonNullClass,
		AnyNull: AnyNullClass
	};
	var DbNull = new DbNullClass(secret);
	var JsonNull = new JsonNullClass(secret);
	var AnyNull = new AnyNullClass(secret);
	function isObjectEnumValue(value) {
		return typeof value === "object" && value !== null && value[PRISMA_OBJECT_ENUM_VALUE] === true;
	}
	function isDbNull(value) {
		return value === DbNull;
	}
	function isJsonNull(value) {
		return value === JsonNull;
	}
	function isAnyNull(value) {
		return value === AnyNull;
	}
	var EXP_LIMIT = 9e15;
	var MAX_DIGITS = 1e9;
	var NUMERALS = "0123456789abcdef";
	var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
	var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
	var DEFAULTS = {
		precision: 20,
		rounding: 4,
		modulo: 1,
		toExpNeg: -7,
		toExpPos: 21,
		minE: -EXP_LIMIT,
		maxE: EXP_LIMIT,
		crypto: false
	};
	var inexact;
	var quadrant;
	var external = true;
	var decimalError = "[DecimalError] ";
	var invalidArgument = decimalError + "Invalid argument: ";
	var precisionLimitExceeded = decimalError + "Precision limit exceeded";
	var cryptoUnavailable = decimalError + "crypto unavailable";
	var tag = "[object Decimal]";
	var mathfloor = Math.floor;
	var mathpow = Math.pow;
	var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
	var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
	var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
	var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
	var BASE = 1e7;
	var LOG_BASE = 7;
	var MAX_SAFE_INTEGER = 9007199254740991;
	var LN10_PRECISION = LN10.length - 1;
	var PI_PRECISION = PI.length - 1;
	var P = { toStringTag: tag };
	P.absoluteValue = P.abs = function() {
		var x = new this.constructor(this);
		if (x.s < 0) x.s = 1;
		return finalise(x);
	};
	P.ceil = function() {
		return finalise(new this.constructor(this), this.e + 1, 2);
	};
	P.clampedTo = P.clamp = function(min2, max2) {
		var k, x = this, Ctor = x.constructor;
		min2 = new Ctor(min2);
		max2 = new Ctor(max2);
		if (!min2.s || !max2.s) return new Ctor(NaN);
		if (min2.gt(max2)) throw Error(invalidArgument + max2);
		k = x.cmp(min2);
		return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
	};
	P.comparedTo = P.cmp = function(y) {
		var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
		if (!xd || !yd) return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
		if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;
		if (xs !== ys) return xs;
		if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;
		xdL = xd.length;
		ydL = yd.length;
		for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
		return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
	};
	P.cosine = P.cos = function() {
		var pr, rm, x = this, Ctor = x.constructor;
		if (!x.d) return new Ctor(NaN);
		if (!x.d[0]) return new Ctor(1);
		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
		Ctor.rounding = 1;
		x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
		Ctor.precision = pr;
		Ctor.rounding = rm;
		return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
	};
	P.cubeRoot = P.cbrt = function() {
		var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
		if (!x.isFinite() || x.isZero()) return new Ctor(x);
		external = false;
		s = x.s * mathpow(x.s * x, 1 / 3);
		if (!s || Math.abs(s) == 1 / 0) {
			n = digitsToString(x.d);
			e = x.e;
			if (s = (e - n.length + 1) % 3) n += s == 1 || s == -2 ? "0" : "00";
			s = mathpow(n, 1 / 3);
			e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
			if (s == 1 / 0) n = "5e" + e;
			else {
				n = s.toExponential();
				n = n.slice(0, n.indexOf("e") + 1) + e;
			}
			r = new Ctor(n);
			r.s = x.s;
		} else r = new Ctor(s.toString());
		sd = (e = Ctor.precision) + 3;
		for (;;) {
			t = r;
			t3 = t.times(t).times(t);
			t3plusx = t3.plus(x);
			r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
			if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
				n = n.slice(sd - 3, sd + 1);
				if (n == "9999" || !rep && n == "4999") {
					if (!rep) {
						finalise(t, e + 1, 0);
						if (t.times(t).times(t).eq(x)) {
							r = t;
							break;
						}
					}
					sd += 4;
					rep = 1;
				} else {
					if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
						finalise(r, e + 1, 1);
						m = !r.times(r).times(r).eq(x);
					}
					break;
				}
			}
		}
		external = true;
		return finalise(r, e, Ctor.rounding, m);
	};
	P.decimalPlaces = P.dp = function() {
		var w, d = this.d, n = NaN;
		if (d) {
			w = d.length - 1;
			n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
			w = d[w];
			if (w) for (; w % 10 == 0; w /= 10) n--;
			if (n < 0) n = 0;
		}
		return n;
	};
	P.dividedBy = P.div = function(y) {
		return divide(this, new this.constructor(y));
	};
	P.dividedToIntegerBy = P.divToInt = function(y) {
		var x = this, Ctor = x.constructor;
		return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
	};
	P.equals = P.eq = function(y) {
		return this.cmp(y) === 0;
	};
	P.floor = function() {
		return finalise(new this.constructor(this), this.e + 1, 3);
	};
	P.greaterThan = P.gt = function(y) {
		return this.cmp(y) > 0;
	};
	P.greaterThanOrEqualTo = P.gte = function(y) {
		var k = this.cmp(y);
		return k == 1 || k === 0;
	};
	P.hyperbolicCosine = P.cosh = function() {
		var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
		if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
		if (x.isZero()) return one;
		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
		Ctor.rounding = 1;
		len = x.d.length;
		if (len < 32) {
			k = Math.ceil(len / 3);
			n = (1 / tinyPow(4, k)).toString();
		} else {
			k = 16;
			n = "2.3283064365386962890625e-10";
		}
		x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
		var cosh2_x, i = k, d8 = new Ctor(8);
		for (; i--;) {
			cosh2_x = x.times(x);
			x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
		}
		return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
	};
	P.hyperbolicSine = P.sinh = function() {
		var k, pr, rm, len, x = this, Ctor = x.constructor;
		if (!x.isFinite() || x.isZero()) return new Ctor(x);
		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
		Ctor.rounding = 1;
		len = x.d.length;
		if (len < 3) x = taylorSeries(Ctor, 2, x, x, true);
		else {
			k = 1.4 * Math.sqrt(len);
			k = k > 16 ? 16 : k | 0;
			x = x.times(1 / tinyPow(5, k));
			x = taylorSeries(Ctor, 2, x, x, true);
			var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
			for (; k--;) {
				sinh2_x = x.times(x);
				x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
			}
		}
		Ctor.precision = pr;
		Ctor.rounding = rm;
		return finalise(x, pr, rm, true);
	};
	P.hyperbolicTangent = P.tanh = function() {
		var pr, rm, x = this, Ctor = x.constructor;
		if (!x.isFinite()) return new Ctor(x.s);
		if (x.isZero()) return new Ctor(x);
		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + 7;
		Ctor.rounding = 1;
		return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
	};
	P.inverseCosine = P.acos = function() {
		var x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
		if (k !== -1) return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
		if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(.5);
		Ctor.precision = pr + 6;
		Ctor.rounding = 1;
		x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();
		Ctor.precision = pr;
		Ctor.rounding = rm;
		return x.times(2);
	};
	P.inverseHyperbolicCosine = P.acosh = function() {
		var pr, rm, x = this, Ctor = x.constructor;
		if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
		if (!x.isFinite()) return new Ctor(x);
		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
		Ctor.rounding = 1;
		external = false;
		x = x.times(x).minus(1).sqrt().plus(x);
		external = true;
		Ctor.precision = pr;
		Ctor.rounding = rm;
		return x.ln();
	};
	P.inverseHyperbolicSine = P.asinh = function() {
		var pr, rm, x = this, Ctor = x.constructor;
		if (!x.isFinite() || x.isZero()) return new Ctor(x);
		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
		Ctor.rounding = 1;
		external = false;
		x = x.times(x).plus(1).sqrt().plus(x);
		external = true;
		Ctor.precision = pr;
		Ctor.rounding = rm;
		return x.ln();
	};
	P.inverseHyperbolicTangent = P.atanh = function() {
		var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
		if (!x.isFinite()) return new Ctor(NaN);
		if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
		pr = Ctor.precision;
		rm = Ctor.rounding;
		xsd = x.sd();
		if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);
		Ctor.precision = wpr = xsd - x.e;
		x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
		Ctor.precision = pr + 4;
		Ctor.rounding = 1;
		x = x.ln();
		Ctor.precision = pr;
		Ctor.rounding = rm;
		return x.times(.5);
	};
	P.inverseSine = P.asin = function() {
		var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
		if (x.isZero()) return new Ctor(x);
		k = x.abs().cmp(1);
		pr = Ctor.precision;
		rm = Ctor.rounding;
		if (k !== -1) {
			if (k === 0) {
				halfPi = getPi(Ctor, pr + 4, rm).times(.5);
				halfPi.s = x.s;
				return halfPi;
			}
			return new Ctor(NaN);
		}
		Ctor.precision = pr + 6;
		Ctor.rounding = 1;
		x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
		Ctor.precision = pr;
		Ctor.rounding = rm;
		return x.times(2);
	};
	P.inverseTangent = P.atan = function() {
		var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
		if (!x.isFinite()) {
			if (!x.s) return new Ctor(NaN);
			if (pr + 4 <= PI_PRECISION) {
				r = getPi(Ctor, pr + 4, rm).times(.5);
				r.s = x.s;
				return r;
			}
		} else if (x.isZero()) return new Ctor(x);
		else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
			r = getPi(Ctor, pr + 4, rm).times(.25);
			r.s = x.s;
			return r;
		}
		Ctor.precision = wpr = pr + 10;
		Ctor.rounding = 1;
		k = Math.min(28, wpr / LOG_BASE + 2 | 0);
		for (i = k; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));
		external = false;
		j = Math.ceil(wpr / LOG_BASE);
		n = 1;
		x2 = x.times(x);
		r = new Ctor(x);
		px = x;
		for (; i !== -1;) {
			px = px.times(x2);
			t = r.minus(px.div(n += 2));
			px = px.times(x2);
			r = t.plus(px.div(n += 2));
			if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--;);
		}
		if (k) r = r.times(2 << k - 1);
		external = true;
		return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
	};
	P.isFinite = function() {
		return !!this.d;
	};
	P.isInteger = P.isInt = function() {
		return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
	};
	P.isNaN = function() {
		return !this.s;
	};
	P.isNegative = P.isNeg = function() {
		return this.s < 0;
	};
	P.isPositive = P.isPos = function() {
		return this.s > 0;
	};
	P.isZero = function() {
		return !!this.d && this.d[0] === 0;
	};
	P.lessThan = P.lt = function(y) {
		return this.cmp(y) < 0;
	};
	P.lessThanOrEqualTo = P.lte = function(y) {
		return this.cmp(y) < 1;
	};
	P.logarithm = P.log = function(base) {
		var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
		if (base == null) {
			base = new Ctor(10);
			isBase10 = true;
		} else {
			base = new Ctor(base);
			d = base.d;
			if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);
			isBase10 = base.eq(10);
		}
		d = arg.d;
		if (arg.s < 0 || !d || !d[0] || arg.eq(1)) return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
		if (isBase10) {
			if (d.length > 1) inf = true;
			else {
				for (k = d[0]; k % 10 === 0;) k /= 10;
				inf = k !== 1;
			}
		}
		external = false;
		sd = pr + guard;
		num = naturalLogarithm(arg, sd);
		denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
		r = divide(num, denominator, sd, 1);
		if (checkRoundingDigits(r.d, k = pr, rm)) do {
			sd += 10;
			num = naturalLogarithm(arg, sd);
			denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
			r = divide(num, denominator, sd, 1);
			if (!inf) {
				if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 0x5af3107a4000) r = finalise(r, pr + 1, 0);
				break;
			}
		} while (checkRoundingDigits(r.d, k += 10, rm));
		external = true;
		return finalise(r, pr, rm);
	};
	P.minus = P.sub = function(y) {
		var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
		y = new Ctor(y);
		if (!x.d || !y.d) {
			if (!x.s || !y.s) y = new Ctor(NaN);
			else if (x.d) y.s = -y.s;
			else y = new Ctor(y.d || x.s !== y.s ? x : NaN);
			return y;
		}
		if (x.s != y.s) {
			y.s = -y.s;
			return x.plus(y);
		}
		xd = x.d;
		yd = y.d;
		pr = Ctor.precision;
		rm = Ctor.rounding;
		if (!xd[0] || !yd[0]) {
			if (yd[0]) y.s = -y.s;
			else if (xd[0]) y = new Ctor(x);
			else return new Ctor(rm === 3 ? -0 : 0);
			return external ? finalise(y, pr, rm) : y;
		}
		e = mathfloor(y.e / LOG_BASE);
		xe = mathfloor(x.e / LOG_BASE);
		xd = xd.slice();
		k = xe - e;
		if (k) {
			xLTy = k < 0;
			if (xLTy) {
				d = xd;
				k = -k;
				len = yd.length;
			} else {
				d = yd;
				e = xe;
				len = xd.length;
			}
			i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
			if (k > i) {
				k = i;
				d.length = 1;
			}
			d.reverse();
			for (i = k; i--;) d.push(0);
			d.reverse();
		} else {
			i = xd.length;
			len = yd.length;
			xLTy = i < len;
			if (xLTy) len = i;
			for (i = 0; i < len; i++) if (xd[i] != yd[i]) {
				xLTy = xd[i] < yd[i];
				break;
			}
			k = 0;
		}
		if (xLTy) {
			d = xd;
			xd = yd;
			yd = d;
			y.s = -y.s;
		}
		len = xd.length;
		for (i = yd.length - len; i > 0; --i) xd[len++] = 0;
		for (i = yd.length; i > k;) {
			if (xd[--i] < yd[i]) {
				for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;
				--xd[j];
				xd[i] += BASE;
			}
			xd[i] -= yd[i];
		}
		for (; xd[--len] === 0;) xd.pop();
		for (; xd[0] === 0; xd.shift()) --e;
		if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);
		y.d = xd;
		y.e = getBase10Exponent(xd, e);
		return external ? finalise(y, pr, rm) : y;
	};
	P.modulo = P.mod = function(y) {
		var q, x = this, Ctor = x.constructor;
		y = new Ctor(y);
		if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);
		if (!y.d || x.d && !x.d[0]) return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
		external = false;
		if (Ctor.modulo == 9) {
			q = divide(x, y.abs(), 0, 3, 1);
			q.s *= y.s;
		} else q = divide(x, y, 0, Ctor.modulo, 1);
		q = q.times(y);
		external = true;
		return x.minus(q);
	};
	P.naturalExponential = P.exp = function() {
		return naturalExponential(this);
	};
	P.naturalLogarithm = P.ln = function() {
		return naturalLogarithm(this);
	};
	P.negated = P.neg = function() {
		var x = new this.constructor(this);
		x.s = -x.s;
		return finalise(x);
	};
	P.plus = P.add = function(y) {
		var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
		y = new Ctor(y);
		if (!x.d || !y.d) {
			if (!x.s || !y.s) y = new Ctor(NaN);
			else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);
			return y;
		}
		if (x.s != y.s) {
			y.s = -y.s;
			return x.minus(y);
		}
		xd = x.d;
		yd = y.d;
		pr = Ctor.precision;
		rm = Ctor.rounding;
		if (!xd[0] || !yd[0]) {
			if (!yd[0]) y = new Ctor(x);
			return external ? finalise(y, pr, rm) : y;
		}
		k = mathfloor(x.e / LOG_BASE);
		e = mathfloor(y.e / LOG_BASE);
		xd = xd.slice();
		i = k - e;
		if (i) {
			if (i < 0) {
				d = xd;
				i = -i;
				len = yd.length;
			} else {
				d = yd;
				e = k;
				len = xd.length;
			}
			k = Math.ceil(pr / LOG_BASE);
			len = k > len ? k + 1 : len + 1;
			if (i > len) {
				i = len;
				d.length = 1;
			}
			d.reverse();
			for (; i--;) d.push(0);
			d.reverse();
		}
		len = xd.length;
		i = yd.length;
		if (len - i < 0) {
			i = len;
			d = yd;
			yd = xd;
			xd = d;
		}
		for (carry = 0; i;) {
			carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
			xd[i] %= BASE;
		}
		if (carry) {
			xd.unshift(carry);
			++e;
		}
		for (len = xd.length; xd[--len] == 0;) xd.pop();
		y.d = xd;
		y.e = getBase10Exponent(xd, e);
		return external ? finalise(y, pr, rm) : y;
	};
	P.precision = P.sd = function(z) {
		var k, x = this;
		if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
		if (x.d) {
			k = getPrecision(x.d);
			if (z && x.e + 1 > k) k = x.e + 1;
		} else k = NaN;
		return k;
	};
	P.round = function() {
		var x = this, Ctor = x.constructor;
		return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
	};
	P.sine = P.sin = function() {
		var pr, rm, x = this, Ctor = x.constructor;
		if (!x.isFinite()) return new Ctor(NaN);
		if (x.isZero()) return new Ctor(x);
		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
		Ctor.rounding = 1;
		x = sine(Ctor, toLessThanHalfPi(Ctor, x));
		Ctor.precision = pr;
		Ctor.rounding = rm;
		return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
	};
	P.squareRoot = P.sqrt = function() {
		var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
		if (s !== 1 || !d || !d[0]) return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
		external = false;
		s = Math.sqrt(+x);
		if (s == 0 || s == 1 / 0) {
			n = digitsToString(d);
			if ((n.length + e) % 2 == 0) n += "0";
			s = Math.sqrt(n);
			e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
			if (s == 1 / 0) n = "5e" + e;
			else {
				n = s.toExponential();
				n = n.slice(0, n.indexOf("e") + 1) + e;
			}
			r = new Ctor(n);
		} else r = new Ctor(s.toString());
		sd = (e = Ctor.precision) + 3;
		for (;;) {
			t = r;
			r = t.plus(divide(x, t, sd + 2, 1)).times(.5);
			if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
				n = n.slice(sd - 3, sd + 1);
				if (n == "9999" || !rep && n == "4999") {
					if (!rep) {
						finalise(t, e + 1, 0);
						if (t.times(t).eq(x)) {
							r = t;
							break;
						}
					}
					sd += 4;
					rep = 1;
				} else {
					if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
						finalise(r, e + 1, 1);
						m = !r.times(r).eq(x);
					}
					break;
				}
			}
		}
		external = true;
		return finalise(r, e, Ctor.rounding, m);
	};
	P.tangent = P.tan = function() {
		var pr, rm, x = this, Ctor = x.constructor;
		if (!x.isFinite()) return new Ctor(NaN);
		if (x.isZero()) return new Ctor(x);
		pr = Ctor.precision;
		rm = Ctor.rounding;
		Ctor.precision = pr + 10;
		Ctor.rounding = 1;
		x = x.sin();
		x.s = 1;
		x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
		Ctor.precision = pr;
		Ctor.rounding = rm;
		return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
	};
	P.times = P.mul = function(y) {
		var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
		y.s *= x.s;
		if (!xd || !xd[0] || !yd || !yd[0]) return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
		e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
		xdL = xd.length;
		ydL = yd.length;
		if (xdL < ydL) {
			r = xd;
			xd = yd;
			yd = r;
			rL = xdL;
			xdL = ydL;
			ydL = rL;
		}
		r = [];
		rL = xdL + ydL;
		for (i = rL; i--;) r.push(0);
		for (i = ydL; --i >= 0;) {
			carry = 0;
			for (k = xdL + i; k > i;) {
				t = r[k] + yd[i] * xd[k - i - 1] + carry;
				r[k--] = t % BASE | 0;
				carry = t / BASE | 0;
			}
			r[k] = (r[k] + carry) % BASE | 0;
		}
		for (; !r[--rL];) r.pop();
		if (carry) ++e;
		else r.shift();
		y.d = r;
		y.e = getBase10Exponent(r, e);
		return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
	};
	P.toBinary = function(sd, rm) {
		return toStringBinary(this, 2, sd, rm);
	};
	P.toDecimalPlaces = P.toDP = function(dp, rm) {
		var x = this, Ctor = x.constructor;
		x = new Ctor(x);
		if (dp === void 0) return x;
		checkInt32(dp, 0, MAX_DIGITS);
		if (rm === void 0) rm = Ctor.rounding;
		else checkInt32(rm, 0, 8);
		return finalise(x, dp + x.e + 1, rm);
	};
	P.toExponential = function(dp, rm) {
		var str, x = this, Ctor = x.constructor;
		if (dp === void 0) str = finiteToString(x, true);
		else {
			checkInt32(dp, 0, MAX_DIGITS);
			if (rm === void 0) rm = Ctor.rounding;
			else checkInt32(rm, 0, 8);
			x = finalise(new Ctor(x), dp + 1, rm);
			str = finiteToString(x, true, dp + 1);
		}
		return x.isNeg() && !x.isZero() ? "-" + str : str;
	};
	P.toFixed = function(dp, rm) {
		var str, y, x = this, Ctor = x.constructor;
		if (dp === void 0) str = finiteToString(x);
		else {
			checkInt32(dp, 0, MAX_DIGITS);
			if (rm === void 0) rm = Ctor.rounding;
			else checkInt32(rm, 0, 8);
			y = finalise(new Ctor(x), dp + x.e + 1, rm);
			str = finiteToString(y, false, dp + y.e + 1);
		}
		return x.isNeg() && !x.isZero() ? "-" + str : str;
	};
	P.toFraction = function(maxD) {
		var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
		if (!xd) return new Ctor(x);
		n1 = d0 = new Ctor(1);
		d1 = n0 = new Ctor(0);
		d = new Ctor(d1);
		e = d.e = getPrecision(xd) - x.e - 1;
		k = e % LOG_BASE;
		d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
		if (maxD == null) maxD = e > 0 ? d : n1;
		else {
			n = new Ctor(maxD);
			if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
			maxD = n.gt(d) ? e > 0 ? d : n1 : n;
		}
		external = false;
		n = new Ctor(digitsToString(xd));
		pr = Ctor.precision;
		Ctor.precision = e = xd.length * LOG_BASE * 2;
		for (;;) {
			q = divide(n, d, 0, 1, 1);
			d2 = d0.plus(q.times(d1));
			if (d2.cmp(maxD) == 1) break;
			d0 = d1;
			d1 = d2;
			d2 = n1;
			n1 = n0.plus(q.times(d2));
			n0 = d2;
			d2 = d;
			d = n.minus(q.times(d2));
			n = d2;
		}
		d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
		n0 = n0.plus(d2.times(n1));
		d0 = d0.plus(d2.times(d1));
		n0.s = n1.s = x.s;
		r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
		Ctor.precision = pr;
		external = true;
		return r;
	};
	P.toHexadecimal = P.toHex = function(sd, rm) {
		return toStringBinary(this, 16, sd, rm);
	};
	P.toNearest = function(y, rm) {
		var x = this, Ctor = x.constructor;
		x = new Ctor(x);
		if (y == null) {
			if (!x.d) return x;
			y = new Ctor(1);
			rm = Ctor.rounding;
		} else {
			y = new Ctor(y);
			if (rm === void 0) rm = Ctor.rounding;
			else checkInt32(rm, 0, 8);
			if (!x.d) return y.s ? x : y;
			if (!y.d) {
				if (y.s) y.s = x.s;
				return y;
			}
		}
		if (y.d[0]) {
			external = false;
			x = divide(x, y, 0, rm, 1).times(y);
			external = true;
			finalise(x);
		} else {
			y.s = x.s;
			x = y;
		}
		return x;
	};
	P.toNumber = function() {
		return +this;
	};
	P.toOctal = function(sd, rm) {
		return toStringBinary(this, 8, sd, rm);
	};
	P.toPower = P.pow = function(y) {
		var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
		if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));
		x = new Ctor(x);
		if (x.eq(1)) return x;
		pr = Ctor.precision;
		rm = Ctor.rounding;
		if (y.eq(1)) return finalise(x, pr, rm);
		e = mathfloor(y.e / LOG_BASE);
		if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
			r = intPow(Ctor, x, k, pr);
			return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
		}
		s = x.s;
		if (s < 0) {
			if (e < y.d.length - 1) return new Ctor(NaN);
			if ((y.d[e] & 1) == 0) s = 1;
			if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
				x.s = s;
				return x;
			}
		}
		k = mathpow(+x, yn);
		e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
		if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);
		external = false;
		Ctor.rounding = x.s = 1;
		k = Math.min(12, (e + "").length);
		r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
		if (r.d) {
			r = finalise(r, pr + 5, 1);
			if (checkRoundingDigits(r.d, pr, rm)) {
				e = pr + 10;
				r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
				if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 0x5af3107a4000) r = finalise(r, pr + 1, 0);
			}
		}
		r.s = s;
		external = true;
		Ctor.rounding = rm;
		return finalise(r, pr, rm);
	};
	P.toPrecision = function(sd, rm) {
		var str, x = this, Ctor = x.constructor;
		if (sd === void 0) str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
		else {
			checkInt32(sd, 1, MAX_DIGITS);
			if (rm === void 0) rm = Ctor.rounding;
			else checkInt32(rm, 0, 8);
			x = finalise(new Ctor(x), sd, rm);
			str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
		}
		return x.isNeg() && !x.isZero() ? "-" + str : str;
	};
	P.toSignificantDigits = P.toSD = function(sd, rm) {
		var x = this, Ctor = x.constructor;
		if (sd === void 0) {
			sd = Ctor.precision;
			rm = Ctor.rounding;
		} else {
			checkInt32(sd, 1, MAX_DIGITS);
			if (rm === void 0) rm = Ctor.rounding;
			else checkInt32(rm, 0, 8);
		}
		return finalise(new Ctor(x), sd, rm);
	};
	P.toString = function() {
		var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
		return x.isNeg() && !x.isZero() ? "-" + str : str;
	};
	P.truncated = P.trunc = function() {
		return finalise(new this.constructor(this), this.e + 1, 1);
	};
	P.valueOf = P.toJSON = function() {
		var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
		return x.isNeg() ? "-" + str : str;
	};
	function digitsToString(d) {
		var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
		if (indexOfLastWord > 0) {
			str += w;
			for (i = 1; i < indexOfLastWord; i++) {
				ws = d[i] + "";
				k = LOG_BASE - ws.length;
				if (k) str += getZeroString(k);
				str += ws;
			}
			w = d[i];
			ws = w + "";
			k = LOG_BASE - ws.length;
			if (k) str += getZeroString(k);
		} else if (w === 0) return "0";
		for (; w % 10 === 0;) w /= 10;
		return str + w;
	}
	function checkInt32(i, min2, max2) {
		if (i !== ~~i || i < min2 || i > max2) throw Error(invalidArgument + i);
	}
	function checkRoundingDigits(d, i, rm, repeating) {
		var di, k = d[0], r, rd;
		for (; k >= 10; k /= 10) --i;
		if (--i < 0) {
			i += LOG_BASE;
			di = 0;
		} else {
			di = Math.ceil((i + 1) / LOG_BASE);
			i %= LOG_BASE;
		}
		k = mathpow(10, LOG_BASE - i);
		rd = d[di] % k | 0;
		if (repeating == null) {
			if (i < 3) {
				if (i == 0) rd = rd / 100 | 0;
				else if (i == 1) rd = rd / 10 | 0;
				r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
			} else r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
		} else if (i < 4) {
			if (i == 0) rd = rd / 1e3 | 0;
			else if (i == 1) rd = rd / 100 | 0;
			else if (i == 2) rd = rd / 10 | 0;
			r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
		} else r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
		return r;
	}
	function convertBase(str, baseIn, baseOut) {
		var j, arr = [0], arrL, i = 0, strL = str.length;
		for (; i < strL;) {
			for (arrL = arr.length; arrL--;) arr[arrL] *= baseIn;
			arr[0] += NUMERALS.indexOf(str.charAt(i++));
			for (j = 0; j < arr.length; j++) if (arr[j] > baseOut - 1) {
				if (arr[j + 1] === void 0) arr[j + 1] = 0;
				arr[j + 1] += arr[j] / baseOut | 0;
				arr[j] %= baseOut;
			}
		}
		return arr.reverse();
	}
	function cosine(Ctor, x) {
		var k, len, y;
		if (x.isZero()) return x;
		len = x.d.length;
		if (len < 32) {
			k = Math.ceil(len / 3);
			y = (1 / tinyPow(4, k)).toString();
		} else {
			k = 16;
			y = "2.3283064365386962890625e-10";
		}
		Ctor.precision += k;
		x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
		for (var i = k; i--;) {
			var cos2x = x.times(x);
			x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
		}
		Ctor.precision -= k;
		return x;
	}
	var divide = /* @__PURE__ */ function() {
		function multiplyInteger(x, k, base) {
			var temp, carry = 0, i = x.length;
			for (x = x.slice(); i--;) {
				temp = x[i] * k + carry;
				x[i] = temp % base | 0;
				carry = temp / base | 0;
			}
			if (carry) x.unshift(carry);
			return x;
		}
		function compare(a, b, aL, bL) {
			var i, r;
			if (aL != bL) r = aL > bL ? 1 : -1;
			else for (i = r = 0; i < aL; i++) if (a[i] != b[i]) {
				r = a[i] > b[i] ? 1 : -1;
				break;
			}
			return r;
		}
		function subtract(a, b, aL, base) {
			var i = 0;
			for (; aL--;) {
				a[aL] -= i;
				i = a[aL] < b[aL] ? 1 : 0;
				a[aL] = i * base + a[aL] - b[aL];
			}
			for (; !a[0] && a.length > 1;) a.shift();
		}
		return function(x, y, pr, rm, dp, base) {
			var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
			if (!xd || !xd[0] || !yd || !yd[0]) return new Ctor(!x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0);
			if (base) {
				logBase = 1;
				e = x.e - y.e;
			} else {
				base = BASE;
				logBase = LOG_BASE;
				e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
			}
			yL = yd.length;
			xL = xd.length;
			q = new Ctor(sign2);
			qd = q.d = [];
			for (i = 0; yd[i] == (xd[i] || 0); i++);
			if (yd[i] > (xd[i] || 0)) e--;
			if (pr == null) {
				sd = pr = Ctor.precision;
				rm = Ctor.rounding;
			} else if (dp) sd = pr + (x.e - y.e) + 1;
			else sd = pr;
			if (sd < 0) {
				qd.push(1);
				more = true;
			} else {
				sd = sd / logBase + 2 | 0;
				i = 0;
				if (yL == 1) {
					k = 0;
					yd = yd[0];
					sd++;
					for (; (i < xL || k) && sd--; i++) {
						t = k * base + (xd[i] || 0);
						qd[i] = t / yd | 0;
						k = t % yd | 0;
					}
					more = k || i < xL;
				} else {
					k = base / (yd[0] + 1) | 0;
					if (k > 1) {
						yd = multiplyInteger(yd, k, base);
						xd = multiplyInteger(xd, k, base);
						yL = yd.length;
						xL = xd.length;
					}
					xi = yL;
					rem = xd.slice(0, yL);
					remL = rem.length;
					for (; remL < yL;) rem[remL++] = 0;
					yz = yd.slice();
					yz.unshift(0);
					yd0 = yd[0];
					if (yd[1] >= base / 2) ++yd0;
					do {
						k = 0;
						cmp = compare(yd, rem, yL, remL);
						if (cmp < 0) {
							rem0 = rem[0];
							if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
							k = rem0 / yd0 | 0;
							if (k > 1) {
								if (k >= base) k = base - 1;
								prod = multiplyInteger(yd, k, base);
								prodL = prod.length;
								remL = rem.length;
								cmp = compare(prod, rem, prodL, remL);
								if (cmp == 1) {
									k--;
									subtract(prod, yL < prodL ? yz : yd, prodL, base);
								}
							} else {
								if (k == 0) cmp = k = 1;
								prod = yd.slice();
							}
							prodL = prod.length;
							if (prodL < remL) prod.unshift(0);
							subtract(rem, prod, remL, base);
							if (cmp == -1) {
								remL = rem.length;
								cmp = compare(yd, rem, yL, remL);
								if (cmp < 1) {
									k++;
									subtract(rem, yL < remL ? yz : yd, remL, base);
								}
							}
							remL = rem.length;
						} else if (cmp === 0) {
							k++;
							rem = [0];
						}
						qd[i++] = k;
						if (cmp && rem[0]) rem[remL++] = xd[xi] || 0;
						else {
							rem = [xd[xi]];
							remL = 1;
						}
					} while ((xi++ < xL || rem[0] !== void 0) && sd--);
					more = rem[0] !== void 0;
				}
				if (!qd[0]) qd.shift();
			}
			if (logBase == 1) {
				q.e = e;
				inexact = more;
			} else {
				for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
				q.e = i + e * logBase - 1;
				finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
			}
			return q;
		};
	}();
	function finalise(x, sd, rm, isTruncated) {
		var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
		out: if (sd != null) {
			xd = x.d;
			if (!xd) return x;
			for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
			i = sd - digits;
			if (i < 0) {
				i += LOG_BASE;
				j = sd;
				w = xd[xdi = 0];
				rd = w / mathpow(10, digits - j - 1) % 10 | 0;
			} else {
				xdi = Math.ceil((i + 1) / LOG_BASE);
				k = xd.length;
				if (xdi >= k) {
					if (isTruncated) {
						for (; k++ <= xdi;) xd.push(0);
						w = rd = 0;
						digits = 1;
						i %= LOG_BASE;
						j = i - LOG_BASE + 1;
					} else break out;
				} else {
					w = k = xd[xdi];
					for (digits = 1; k >= 10; k /= 10) digits++;
					i %= LOG_BASE;
					j = i - LOG_BASE + digits;
					rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
				}
			}
			isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
			roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
			if (sd < 1 || !xd[0]) {
				xd.length = 0;
				if (roundUp) {
					sd -= x.e + 1;
					xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
					x.e = -sd || 0;
				} else xd[0] = x.e = 0;
				return x;
			}
			if (i == 0) {
				xd.length = xdi;
				k = 1;
				xdi--;
			} else {
				xd.length = xdi + 1;
				k = mathpow(10, LOG_BASE - i);
				xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
			}
			if (roundUp) for (;;) if (xdi == 0) {
				for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
				j = xd[0] += k;
				for (k = 1; j >= 10; j /= 10) k++;
				if (i != k) {
					x.e++;
					if (xd[0] == BASE) xd[0] = 1;
				}
				break;
			} else {
				xd[xdi] += k;
				if (xd[xdi] != BASE) break;
				xd[xdi--] = 0;
				k = 1;
			}
			for (i = xd.length; xd[--i] === 0;) xd.pop();
		}
		if (external) {
			if (x.e > Ctor.maxE) {
				x.d = null;
				x.e = NaN;
			} else if (x.e < Ctor.minE) {
				x.e = 0;
				x.d = [0];
			}
		}
		return x;
	}
	function finiteToString(x, isExp, sd) {
		if (!x.isFinite()) return nonFiniteToString(x);
		var k, e = x.e, str = digitsToString(x.d), len = str.length;
		if (isExp) {
			if (sd && (k = sd - len) > 0) str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
			else if (len > 1) str = str.charAt(0) + "." + str.slice(1);
			str = str + (x.e < 0 ? "e" : "e+") + x.e;
		} else if (e < 0) {
			str = "0." + getZeroString(-e - 1) + str;
			if (sd && (k = sd - len) > 0) str += getZeroString(k);
		} else if (e >= len) {
			str += getZeroString(e + 1 - len);
			if (sd && (k = sd - e - 1) > 0) str = str + "." + getZeroString(k);
		} else {
			if ((k = e + 1) < len) str = str.slice(0, k) + "." + str.slice(k);
			if (sd && (k = sd - len) > 0) {
				if (e + 1 === len) str += ".";
				str += getZeroString(k);
			}
		}
		return str;
	}
	function getBase10Exponent(digits, e) {
		var w = digits[0];
		for (e *= LOG_BASE; w >= 10; w /= 10) e++;
		return e;
	}
	function getLn10(Ctor, sd, pr) {
		if (sd > LN10_PRECISION) {
			external = true;
			if (pr) Ctor.precision = pr;
			throw Error(precisionLimitExceeded);
		}
		return finalise(new Ctor(LN10), sd, 1, true);
	}
	function getPi(Ctor, sd, rm) {
		if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
		return finalise(new Ctor(PI), sd, rm, true);
	}
	function getPrecision(digits) {
		var w = digits.length - 1, len = w * LOG_BASE + 1;
		w = digits[w];
		if (w) {
			for (; w % 10 == 0; w /= 10) len--;
			for (w = digits[0]; w >= 10; w /= 10) len++;
		}
		return len;
	}
	function getZeroString(k) {
		var zs = "";
		for (; k--;) zs += "0";
		return zs;
	}
	function intPow(Ctor, x, n, pr) {
		var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
		external = false;
		for (;;) {
			if (n % 2) {
				r = r.times(x);
				if (truncate(r.d, k)) isTruncated = true;
			}
			n = mathfloor(n / 2);
			if (n === 0) {
				n = r.d.length - 1;
				if (isTruncated && r.d[n] === 0) ++r.d[n];
				break;
			}
			x = x.times(x);
			truncate(x.d, k);
		}
		external = true;
		return r;
	}
	function isOdd(n) {
		return n.d[n.d.length - 1] & 1;
	}
	function maxOrMin(Ctor, args, n) {
		var k, y, x = new Ctor(args[0]), i = 0;
		for (; ++i < args.length;) {
			y = new Ctor(args[i]);
			if (!y.s) {
				x = y;
				break;
			}
			k = x.cmp(y);
			if (k === n || k === 0 && x.s === n) x = y;
		}
		return x;
	}
	function naturalExponential(x, sd) {
		var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
		if (!x.d || !x.d[0] || x.e > 17) return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : NaN);
		if (sd == null) {
			external = false;
			wpr = pr;
		} else wpr = sd;
		t = new Ctor(.03125);
		while (x.e > -2) {
			x = x.times(t);
			k += 5;
		}
		guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
		wpr += guard;
		denominator = pow2 = sum2 = new Ctor(1);
		Ctor.precision = wpr;
		for (;;) {
			pow2 = finalise(pow2.times(x), wpr, 1);
			denominator = denominator.times(++i);
			t = sum2.plus(divide(pow2, denominator, wpr, 1));
			if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
				j = k;
				while (j--) sum2 = finalise(sum2.times(sum2), wpr, 1);
				if (sd == null) {
					if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
						Ctor.precision = wpr += 10;
						denominator = pow2 = t = new Ctor(1);
						i = 0;
						rep++;
					} else return finalise(sum2, Ctor.precision = pr, rm, external = true);
				} else {
					Ctor.precision = pr;
					return sum2;
				}
			}
			sum2 = t;
		}
	}
	function naturalLogarithm(y, sd) {
		var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
		if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
		if (sd == null) {
			external = false;
			wpr = pr;
		} else wpr = sd;
		Ctor.precision = wpr += guard;
		c = digitsToString(xd);
		c0 = c.charAt(0);
		if (Math.abs(e = x.e) < 0x5543df729c000) {
			while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
				x = x.times(y);
				c = digitsToString(x.d);
				c0 = c.charAt(0);
				n++;
			}
			e = x.e;
			if (c0 > 1) {
				x = new Ctor("0." + c);
				e++;
			} else x = new Ctor(c0 + "." + c.slice(1));
		} else {
			t = getLn10(Ctor, wpr + 2, pr).times(e + "");
			x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
			Ctor.precision = pr;
			return sd == null ? finalise(x, pr, rm, external = true) : x;
		}
		x1 = x;
		sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
		x2 = finalise(x.times(x), wpr, 1);
		denominator = 3;
		for (;;) {
			numerator = finalise(numerator.times(x2), wpr, 1);
			t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
			if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
				sum2 = sum2.times(2);
				if (e !== 0) sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
				sum2 = divide(sum2, new Ctor(n), wpr, 1);
				if (sd == null) {
					if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
						Ctor.precision = wpr += guard;
						t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
						x2 = finalise(x.times(x), wpr, 1);
						denominator = rep = 1;
					} else return finalise(sum2, Ctor.precision = pr, rm, external = true);
				} else {
					Ctor.precision = pr;
					return sum2;
				}
			}
			sum2 = t;
			denominator += 2;
		}
	}
	function nonFiniteToString(x) {
		return String(x.s * x.s / 0);
	}
	function parseDecimal(x, str) {
		var e, i, len;
		if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
		if ((i = str.search(/e/i)) > 0) {
			if (e < 0) e = i;
			e += +str.slice(i + 1);
			str = str.substring(0, i);
		} else if (e < 0) e = str.length;
		for (i = 0; str.charCodeAt(i) === 48; i++);
		for (len = str.length; str.charCodeAt(len - 1) === 48; --len);
		str = str.slice(i, len);
		if (str) {
			len -= i;
			x.e = e = e - i - 1;
			x.d = [];
			i = (e + 1) % LOG_BASE;
			if (e < 0) i += LOG_BASE;
			if (i < len) {
				if (i) x.d.push(+str.slice(0, i));
				for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));
				str = str.slice(i);
				i = LOG_BASE - str.length;
			} else i -= len;
			for (; i--;) str += "0";
			x.d.push(+str);
			if (external) {
				if (x.e > x.constructor.maxE) {
					x.d = null;
					x.e = NaN;
				} else if (x.e < x.constructor.minE) {
					x.e = 0;
					x.d = [0];
				}
			}
		} else {
			x.e = 0;
			x.d = [0];
		}
		return x;
	}
	function parseOther(x, str) {
		var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
		if (str.indexOf("_") > -1) {
			str = str.replace(/(\d)_(?=\d)/g, "$1");
			if (isDecimal.test(str)) return parseDecimal(x, str);
		} else if (str === "Infinity" || str === "NaN") {
			if (!+str) x.s = NaN;
			x.e = NaN;
			x.d = null;
			return x;
		}
		if (isHex.test(str)) {
			base = 16;
			str = str.toLowerCase();
		} else if (isBinary.test(str)) base = 2;
		else if (isOctal.test(str)) base = 8;
		else throw Error(invalidArgument + str);
		i = str.search(/p/i);
		if (i > 0) {
			p = +str.slice(i + 1);
			str = str.substring(2, i);
		} else str = str.slice(2);
		i = str.indexOf(".");
		isFloat = i >= 0;
		Ctor = x.constructor;
		if (isFloat) {
			str = str.replace(".", "");
			len = str.length;
			i = len - i;
			divisor = intPow(Ctor, new Ctor(base), i, i * 2);
		}
		xd = convertBase(str, base, BASE);
		xe = xd.length - 1;
		for (i = xe; xd[i] === 0; --i) xd.pop();
		if (i < 0) return new Ctor(x.s * 0);
		x.e = getBase10Exponent(xd, xe);
		x.d = xd;
		external = false;
		if (isFloat) x = divide(x, divisor, len * 4);
		if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
		external = true;
		return x;
	}
	function sine(Ctor, x) {
		var k, len = x.d.length;
		if (len < 3) return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
		k = 1.4 * Math.sqrt(len);
		k = k > 16 ? 16 : k | 0;
		x = x.times(1 / tinyPow(5, k));
		x = taylorSeries(Ctor, 2, x, x);
		var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
		for (; k--;) {
			sin2_x = x.times(x);
			x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
		}
		return x;
	}
	function taylorSeries(Ctor, n, x, y, isHyperbolic) {
		var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
		external = false;
		x2 = x.times(x);
		u = new Ctor(y);
		for (;;) {
			t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
			u = isHyperbolic ? y.plus(t) : y.minus(t);
			y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
			t = u.plus(y);
			if (t.d[k] !== void 0) {
				for (j = k; t.d[j] === u.d[j] && j--;);
				if (j == -1) break;
			}
			j = u;
			u = y;
			y = t;
			t = j;
			i++;
		}
		external = true;
		t.d.length = k + 1;
		return t;
	}
	function tinyPow(b, e) {
		var n = b;
		while (--e) n *= b;
		return n;
	}
	function toLessThanHalfPi(Ctor, x) {
		var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(.5);
		x = x.abs();
		if (x.lte(halfPi)) {
			quadrant = isNeg ? 4 : 1;
			return x;
		}
		t = x.divToInt(pi);
		if (t.isZero()) quadrant = isNeg ? 3 : 2;
		else {
			x = x.minus(t.times(pi));
			if (x.lte(halfPi)) {
				quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
				return x;
			}
			quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
		}
		return x.minus(pi).abs();
	}
	function toStringBinary(x, baseOut, sd, rm) {
		var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
		if (isExp) {
			checkInt32(sd, 1, MAX_DIGITS);
			if (rm === void 0) rm = Ctor.rounding;
			else checkInt32(rm, 0, 8);
		} else {
			sd = Ctor.precision;
			rm = Ctor.rounding;
		}
		if (!x.isFinite()) str = nonFiniteToString(x);
		else {
			str = finiteToString(x);
			i = str.indexOf(".");
			if (isExp) {
				base = 2;
				if (baseOut == 16) sd = sd * 4 - 3;
				else if (baseOut == 8) sd = sd * 3 - 2;
			} else base = baseOut;
			if (i >= 0) {
				str = str.replace(".", "");
				y = new Ctor(1);
				y.e = str.length - i;
				y.d = convertBase(finiteToString(y), 10, base);
				y.e = y.d.length;
			}
			xd = convertBase(str, 10, base);
			e = len = xd.length;
			for (; xd[--len] == 0;) xd.pop();
			if (!xd[0]) str = isExp ? "0p+0" : "0";
			else {
				if (i < 0) e--;
				else {
					x = new Ctor(x);
					x.d = xd;
					x.e = e;
					x = divide(x, y, sd, rm, 0, base);
					xd = x.d;
					e = x.e;
					roundUp = inexact;
				}
				i = xd[sd];
				k = base / 2;
				roundUp = roundUp || xd[sd + 1] !== void 0;
				roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
				xd.length = sd;
				if (roundUp) for (; ++xd[--sd] > base - 1;) {
					xd[sd] = 0;
					if (!sd) {
						++e;
						xd.unshift(1);
					}
				}
				for (len = xd.length; !xd[len - 1]; --len);
				for (i = 0, str = ""; i < len; i++) str += NUMERALS.charAt(xd[i]);
				if (isExp) {
					if (len > 1) {
						if (baseOut == 16 || baseOut == 8) {
							i = baseOut == 16 ? 4 : 3;
							for (--len; len % i; len++) str += "0";
							xd = convertBase(str, base, baseOut);
							for (len = xd.length; !xd[len - 1]; --len);
							for (i = 1, str = "1."; i < len; i++) str += NUMERALS.charAt(xd[i]);
						} else str = str.charAt(0) + "." + str.slice(1);
					}
					str = str + (e < 0 ? "p" : "p+") + e;
				} else if (e < 0) {
					for (; ++e;) str = "0" + str;
					str = "0." + str;
				} else if (++e > len) for (e -= len; e--;) str += "0";
				else if (e < len) str = str.slice(0, e) + "." + str.slice(e);
			}
			str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
		}
		return x.s < 0 ? "-" + str : str;
	}
	function truncate(arr, len) {
		if (arr.length > len) {
			arr.length = len;
			return true;
		}
	}
	function abs(x) {
		return new this(x).abs();
	}
	function acos(x) {
		return new this(x).acos();
	}
	function acosh(x) {
		return new this(x).acosh();
	}
	function add(x, y) {
		return new this(x).plus(y);
	}
	function asin(x) {
		return new this(x).asin();
	}
	function asinh(x) {
		return new this(x).asinh();
	}
	function atan(x) {
		return new this(x).atan();
	}
	function atanh(x) {
		return new this(x).atanh();
	}
	function atan2(y, x) {
		y = new this(y);
		x = new this(x);
		var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
		if (!y.s || !x.s) r = new this(NaN);
		else if (!y.d && !x.d) {
			r = getPi(this, wpr, 1).times(x.s > 0 ? .25 : .75);
			r.s = y.s;
		} else if (!x.d || y.isZero()) {
			r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
			r.s = y.s;
		} else if (!y.d || x.isZero()) {
			r = getPi(this, wpr, 1).times(.5);
			r.s = y.s;
		} else if (x.s < 0) {
			this.precision = wpr;
			this.rounding = 1;
			r = this.atan(divide(y, x, wpr, 1));
			x = getPi(this, wpr, 1);
			this.precision = pr;
			this.rounding = rm;
			r = y.s < 0 ? r.minus(x) : r.plus(x);
		} else r = this.atan(divide(y, x, wpr, 1));
		return r;
	}
	function cbrt(x) {
		return new this(x).cbrt();
	}
	function ceil(x) {
		return finalise(x = new this(x), x.e + 1, 2);
	}
	function clamp(x, min2, max2) {
		return new this(x).clamp(min2, max2);
	}
	function config(obj) {
		if (!obj || typeof obj !== "object") throw Error(decimalError + "Object expected");
		var i, p, v, useDefaults = obj.defaults === true, ps = [
			"precision",
			1,
			MAX_DIGITS,
			"rounding",
			0,
			8,
			"toExpNeg",
			-EXP_LIMIT,
			0,
			"toExpPos",
			0,
			EXP_LIMIT,
			"maxE",
			0,
			EXP_LIMIT,
			"minE",
			-EXP_LIMIT,
			0,
			"modulo",
			0,
			9
		];
		for (i = 0; i < ps.length; i += 3) {
			if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
			if ((v = obj[p]) !== void 0) {
				if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
				else throw Error(invalidArgument + p + ": " + v);
			}
		}
		if (p = "crypto", useDefaults) this[p] = DEFAULTS[p];
		if ((v = obj[p]) !== void 0) {
			if (v === true || v === false || v === 0 || v === 1) {
				if (v) {
					if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[p] = true;
					else throw Error(cryptoUnavailable);
				} else this[p] = false;
			} else throw Error(invalidArgument + p + ": " + v);
		}
		return this;
	}
	function cos(x) {
		return new this(x).cos();
	}
	function cosh(x) {
		return new this(x).cosh();
	}
	function clone(obj) {
		var i, p, ps;
		function Decimal2(v) {
			var e, i2, t, x = this;
			if (!(x instanceof Decimal2)) return new Decimal2(v);
			x.constructor = Decimal2;
			if (isDecimalInstance(v)) {
				x.s = v.s;
				if (external) {
					if (!v.d || v.e > Decimal2.maxE) {
						x.e = NaN;
						x.d = null;
					} else if (v.e < Decimal2.minE) {
						x.e = 0;
						x.d = [0];
					} else {
						x.e = v.e;
						x.d = v.d.slice();
					}
				} else {
					x.e = v.e;
					x.d = v.d ? v.d.slice() : v.d;
				}
				return;
			}
			t = typeof v;
			if (t === "number") {
				if (v === 0) {
					x.s = 1 / v < 0 ? -1 : 1;
					x.e = 0;
					x.d = [0];
					return;
				}
				if (v < 0) {
					v = -v;
					x.s = -1;
				} else x.s = 1;
				if (v === ~~v && v < 1e7) {
					for (e = 0, i2 = v; i2 >= 10; i2 /= 10) e++;
					if (external) {
						if (e > Decimal2.maxE) {
							x.e = NaN;
							x.d = null;
						} else if (e < Decimal2.minE) {
							x.e = 0;
							x.d = [0];
						} else {
							x.e = e;
							x.d = [v];
						}
					} else {
						x.e = e;
						x.d = [v];
					}
					return;
				}
				if (v * 0 !== 0) {
					if (!v) x.s = NaN;
					x.e = NaN;
					x.d = null;
					return;
				}
				return parseDecimal(x, v.toString());
			}
			if (t === "string") {
				if ((i2 = v.charCodeAt(0)) === 45) {
					v = v.slice(1);
					x.s = -1;
				} else {
					if (i2 === 43) v = v.slice(1);
					x.s = 1;
				}
				return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
			}
			if (t === "bigint") {
				if (v < 0) {
					v = -v;
					x.s = -1;
				} else x.s = 1;
				return parseDecimal(x, v.toString());
			}
			throw Error(invalidArgument + v);
		}
		Decimal2.prototype = P;
		Decimal2.ROUND_UP = 0;
		Decimal2.ROUND_DOWN = 1;
		Decimal2.ROUND_CEIL = 2;
		Decimal2.ROUND_FLOOR = 3;
		Decimal2.ROUND_HALF_UP = 4;
		Decimal2.ROUND_HALF_DOWN = 5;
		Decimal2.ROUND_HALF_EVEN = 6;
		Decimal2.ROUND_HALF_CEIL = 7;
		Decimal2.ROUND_HALF_FLOOR = 8;
		Decimal2.EUCLID = 9;
		Decimal2.config = Decimal2.set = config;
		Decimal2.clone = clone;
		Decimal2.isDecimal = isDecimalInstance;
		Decimal2.abs = abs;
		Decimal2.acos = acos;
		Decimal2.acosh = acosh;
		Decimal2.add = add;
		Decimal2.asin = asin;
		Decimal2.asinh = asinh;
		Decimal2.atan = atan;
		Decimal2.atanh = atanh;
		Decimal2.atan2 = atan2;
		Decimal2.cbrt = cbrt;
		Decimal2.ceil = ceil;
		Decimal2.clamp = clamp;
		Decimal2.cos = cos;
		Decimal2.cosh = cosh;
		Decimal2.div = div;
		Decimal2.exp = exp;
		Decimal2.floor = floor;
		Decimal2.hypot = hypot;
		Decimal2.ln = ln;
		Decimal2.log = log;
		Decimal2.log10 = log10;
		Decimal2.log2 = log2;
		Decimal2.max = max;
		Decimal2.min = min;
		Decimal2.mod = mod;
		Decimal2.mul = mul;
		Decimal2.pow = pow;
		Decimal2.random = random;
		Decimal2.round = round;
		Decimal2.sign = sign;
		Decimal2.sin = sin;
		Decimal2.sinh = sinh;
		Decimal2.sqrt = sqrt;
		Decimal2.sub = sub;
		Decimal2.sum = sum;
		Decimal2.tan = tan;
		Decimal2.tanh = tanh;
		Decimal2.trunc = trunc;
		if (obj === void 0) obj = {};
		if (obj) {
			if (obj.defaults !== true) {
				ps = [
					"precision",
					"rounding",
					"toExpNeg",
					"toExpPos",
					"maxE",
					"minE",
					"modulo",
					"crypto"
				];
				for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
			}
		}
		Decimal2.config(obj);
		return Decimal2;
	}
	function div(x, y) {
		return new this(x).div(y);
	}
	function exp(x) {
		return new this(x).exp();
	}
	function floor(x) {
		return finalise(x = new this(x), x.e + 1, 3);
	}
	function hypot() {
		var i, n, t = new this(0);
		external = false;
		for (i = 0; i < arguments.length;) {
			n = new this(arguments[i++]);
			if (!n.d) {
				if (n.s) {
					external = true;
					return new this(1 / 0);
				}
				t = n;
			} else if (t.d) t = t.plus(n.times(n));
		}
		external = true;
		return t.sqrt();
	}
	function isDecimalInstance(obj) {
		return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
	}
	function ln(x) {
		return new this(x).ln();
	}
	function log(x, y) {
		return new this(x).log(y);
	}
	function log2(x) {
		return new this(x).log(2);
	}
	function log10(x) {
		return new this(x).log(10);
	}
	function max() {
		return maxOrMin(this, arguments, -1);
	}
	function min() {
		return maxOrMin(this, arguments, 1);
	}
	function mod(x, y) {
		return new this(x).mod(y);
	}
	function mul(x, y) {
		return new this(x).mul(y);
	}
	function pow(x, y) {
		return new this(x).pow(y);
	}
	function random(sd) {
		var d, e, k, n, i = 0, r = new this(1), rd = [];
		if (sd === void 0) sd = this.precision;
		else checkInt32(sd, 1, MAX_DIGITS);
		k = Math.ceil(sd / LOG_BASE);
		if (!this.crypto) for (; i < k;) rd[i++] = Math.random() * 1e7 | 0;
		else if (crypto.getRandomValues) {
			d = crypto.getRandomValues(new Uint32Array(k));
			for (; i < k;) {
				n = d[i];
				if (n >= 429e7) d[i] = crypto.getRandomValues(/* @__PURE__ */ new Uint32Array(1))[0];
				else rd[i++] = n % 1e7;
			}
		} else if (crypto.randomBytes) {
			d = crypto.randomBytes(k *= 4);
			for (; i < k;) {
				n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
				if (n >= 214e7) crypto.randomBytes(4).copy(d, i);
				else {
					rd.push(n % 1e7);
					i += 4;
				}
			}
			i = k / 4;
		} else throw Error(cryptoUnavailable);
		k = rd[--i];
		sd %= LOG_BASE;
		if (k && sd) {
			n = mathpow(10, LOG_BASE - sd);
			rd[i] = (k / n | 0) * n;
		}
		for (; rd[i] === 0; i--) rd.pop();
		if (i < 0) {
			e = 0;
			rd = [0];
		} else {
			e = -1;
			for (; rd[0] === 0; e -= LOG_BASE) rd.shift();
			for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;
			if (k < LOG_BASE) e -= LOG_BASE - k;
		}
		r.e = e;
		r.d = rd;
		return r;
	}
	function round(x) {
		return finalise(x = new this(x), x.e + 1, this.rounding);
	}
	function sign(x) {
		x = new this(x);
		return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
	}
	function sin(x) {
		return new this(x).sin();
	}
	function sinh(x) {
		return new this(x).sinh();
	}
	function sqrt(x) {
		return new this(x).sqrt();
	}
	function sub(x, y) {
		return new this(x).sub(y);
	}
	function sum() {
		var i = 0, args = arguments, x = new this(args[i]);
		external = false;
		for (; x.s && ++i < args.length;) x = x.plus(args[i]);
		external = true;
		return finalise(x, this.precision, this.rounding);
	}
	function tan(x) {
		return new this(x).tan();
	}
	function tanh(x) {
		return new this(x).tanh();
	}
	function trunc(x) {
		return finalise(x = new this(x), x.e + 1, 1);
	}
	P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
	P[Symbol.toStringTag] = "Decimal";
	var Decimal = P.constructor = clone(DEFAULTS);
	LN10 = new Decimal(LN10);
	PI = new Decimal(PI);
	var Sql = class _Sql {
		constructor(rawStrings, rawValues) {
			if (rawStrings.length - 1 !== rawValues.length) {
				if (rawStrings.length === 0) throw new TypeError("Expected at least 1 string");
				throw new TypeError(`Expected ${rawStrings.length} strings to have ${rawStrings.length - 1} values`);
			}
			const valuesLength = rawValues.reduce((len, value) => len + (value instanceof _Sql ? value.values.length : 1), 0);
			this.values = new Array(valuesLength);
			this.strings = new Array(valuesLength + 1);
			this.strings[0] = rawStrings[0];
			let i = 0, pos = 0;
			while (i < rawValues.length) {
				const child = rawValues[i++];
				const rawString = rawStrings[i];
				if (child instanceof _Sql) {
					this.strings[pos] += child.strings[0];
					let childIndex = 0;
					while (childIndex < child.values.length) {
						this.values[pos++] = child.values[childIndex++];
						this.strings[pos] = child.strings[childIndex];
					}
					this.strings[pos] += rawString;
				} else {
					this.values[pos++] = child;
					this.strings[pos] = rawString;
				}
			}
		}
		get sql() {
			const len = this.strings.length;
			let i = 1;
			let value = this.strings[0];
			while (i < len) value += `?${this.strings[i++]}`;
			return value;
		}
		get statement() {
			const len = this.strings.length;
			let i = 1;
			let value = this.strings[0];
			while (i < len) value += `:${i}${this.strings[i++]}`;
			return value;
		}
		get text() {
			const len = this.strings.length;
			let i = 1;
			let value = this.strings[0];
			while (i < len) value += `$${i}${this.strings[i++]}`;
			return value;
		}
		inspect() {
			return {
				sql: this.sql,
				statement: this.statement,
				text: this.text,
				values: this.values
			};
		}
	};
	function join(values, separator = ",", prefix = "", suffix = "") {
		if (values.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
		return new Sql([
			prefix,
			...Array(values.length - 1).fill(separator),
			suffix
		], values);
	}
	function raw(value) {
		return new Sql([value], []);
	}
	var empty = raw("");
	function sql(strings, ...values) {
		return new Sql(strings, values);
	}
	0 && (module.exports = {
		AnyNull,
		AnyNullClass,
		DbNull,
		DbNullClass,
		Decimal,
		JsonNull,
		JsonNullClass,
		NullTypes,
		ObjectEnumValue,
		PrismaClientInitializationError,
		PrismaClientKnownRequestError,
		PrismaClientRustError,
		PrismaClientRustPanicError,
		PrismaClientUnknownRequestError,
		PrismaClientValidationError,
		Sql,
		empty,
		hasBatchIndex,
		isAnyNull,
		isDbNull,
		isJsonNull,
		isObjectEnumValue,
		join,
		raw,
		sql
	});
}));
/*! Bundled license information:

decimal.js/decimal.mjs:
(*!
*  decimal.js v10.5.0
*  An arbitrary-precision Decimal type for JavaScript.
*  https://github.com/MikeMcl/decimal.js
*  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
*  MIT Licence
*)
*/
// generated/prisma/internal/class.ts
var import_client = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var pu = Object.create;
	var xr = Object.defineProperty;
	var du = Object.getOwnPropertyDescriptor;
	var mu = Object.getOwnPropertyNames;
	var fu = Object.getPrototypeOf;
	var gu = Object.prototype.hasOwnProperty;
	var eo = (e, t) => () => (e && (t = e(e = 0)), t);
	var at = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
	var lt = (e, t) => {
		for (var r in t) xr(e, r, {
			get: t[r],
			enumerable: !0
		});
	};
	var to = (e, t, r, n) => {
		if (t && typeof t == "object" || typeof t == "function") for (let i of mu(t)) !gu.call(e, i) && i !== r && xr(e, i, {
			get: () => t[i],
			enumerable: !(n = du(t, i)) || n.enumerable
		});
		return e;
	};
	var Pe = (e, t, r) => (r = e != null ? pu(fu(e)) : {}, to(t || !e || !e.__esModule ? xr(r, "default", {
		value: e,
		enumerable: !0
	}) : r, e));
	var yu = (e) => to(xr({}, "__esModule", { value: !0 }), e);
	var ho = at((Rf, Lu) => {
		Lu.exports = {
			name: "@prisma/engines-version",
			version: "8.1.0-1.d1b3f377ca835d73fd50954a5e22128b9ebdd6b8",
			main: "index.js",
			types: "index.d.ts",
			license: "Apache-2.0",
			author: "Tim Suchanek <suchanek@prisma.io>",
			prisma: { enginesVersion: "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8" },
			repository: {
				type: "git",
				url: "https://github.com/prisma/engines-wrapper.git",
				directory: "packages/engines-version"
			},
			devDependencies: {
				"@types/node": "18.19.76",
				typescript: "4.9.5"
			},
			files: ["index.js", "index.d.ts"],
			scripts: { build: "tsc -d" }
		};
	});
	var wo = at((Pr) => {
		"use strict";
		Object.defineProperty(Pr, "__esModule", { value: !0 });
		Pr.enginesVersion = void 0;
		Pr.enginesVersion = ho().prisma.enginesVersion;
	});
	var bo = at((If, xo) => {
		"use strict";
		xo.exports = (e) => {
			let t = e.match(/^[ \t]*(?=\S)/gm);
			return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
		};
	});
	var So = at((Nf, vo) => {
		"use strict";
		vo.exports = (e, t = 1, r) => {
			if (r = {
				indent: " ",
				includeEmptyLines: !1,
				...r
			}, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
			if (typeof t != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
			if (typeof r.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
			if (t === 0) return e;
			let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
			return e.replace(n, r.indent.repeat(t));
		};
	});
	var Ro = at((Lf, Tr) => {
		"use strict";
		Tr.exports = (e = {}) => {
			let t;
			if (e.repoUrl) t = e.repoUrl;
			else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
			else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
			let r = new URL(`${t}/issues/new`);
			for (let i of [
				"body",
				"title",
				"labels",
				"template",
				"milestone",
				"assignee",
				"projects"
			]) {
				let o = e[i];
				if (o !== void 0) {
					if (i === "labels" || i === "projects") {
						if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
						o = o.join(",");
					}
					r.searchParams.set(i, o);
				}
			}
			return r.toString();
		};
		Tr.exports.default = Tr.exports;
	});
	var qn = at((Ig, Fo) => {
		"use strict";
		Fo.exports = function() {
			function e(t, r, n, i, o) {
				return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
			}
			return function(t, r) {
				if (t === r) return 0;
				if (t.length > r.length) {
					var n = t;
					t = r, r = n;
				}
				for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);) i--, o--;
				for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s);) s++;
				if (i -= s, o -= s, i === 0 || o < 3) return o;
				var a = 0, u, m, P, T, S, I, A, M, L, q, E, D, H = [];
				for (u = 0; u < i; u++) H.push(u + 1), H.push(t.charCodeAt(s + u));
				for (var ce = H.length - 1; a < o - 3;) for (L = r.charCodeAt(s + (m = a)), q = r.charCodeAt(s + (P = a + 1)), E = r.charCodeAt(s + (T = a + 2)), D = r.charCodeAt(s + (S = a + 3)), I = a += 4, u = 0; u < ce; u += 2) A = H[u], M = H[u + 1], m = e(A, m, P, L, M), P = e(m, P, T, q, M), T = e(P, T, S, E, M), I = e(T, S, I, D, M), H[u] = I, S = T, T = P, P = m, m = A;
				for (; a < o;) for (L = r.charCodeAt(s + (m = a)), I = ++a, u = 0; u < ce; u += 2) A = H[u], H[u] = I = e(A, m, I, L, H[u + 1]), m = A;
				return I;
			};
		}();
	});
	var qo = eo(() => {
		"use strict";
	});
	var Uo = eo(() => {
		"use strict";
	});
	var Hm = {};
	lt(Hm, {
		AnyNull: () => ee.AnyNull,
		DMMF: () => Qt,
		DbNull: () => ee.DbNull,
		Debug: () => K,
		Decimal: () => cu.Decimal,
		Extensions: () => Rn,
		JsonNull: () => ee.JsonNull,
		NullTypes: () => ee.NullTypes,
		ObjectEnumValue: () => ee.ObjectEnumValue,
		PrismaClientInitializationError: () => _.PrismaClientInitializationError,
		PrismaClientKnownRequestError: () => _.PrismaClientKnownRequestError,
		PrismaClientRustPanicError: () => _.PrismaClientRustPanicError,
		PrismaClientUnknownRequestError: () => _.PrismaClientUnknownRequestError,
		PrismaClientValidationError: () => _.PrismaClientValidationError,
		Public: () => Cn,
		Sql: () => Fe.Sql,
		createParam: () => os,
		defineDmmfProperty: () => ps,
		deserializeJsonObject: () => Ae,
		deserializeRawResult: () => Tn,
		dmmfToRuntimeDataModel: () => so,
		empty: () => Fe.empty,
		getPrismaClient: () => au,
		getRuntime: () => uu,
		isAnyNull: () => ee.isAnyNull,
		isDbNull: () => ee.isDbNull,
		isJsonNull: () => ee.isJsonNull,
		isObjectEnumValue: () => ee.isObjectEnumValue,
		join: () => Fe.join,
		makeStrictEnum: () => lu,
		makeTypedQueryFactory: () => ds,
		raw: () => Fe.raw,
		serializeJsonQuery: () => Vr,
		skip: () => Lr,
		sqltag: () => Fe.sql,
		warnOnce: () => Vn
	});
	module.exports = yu(Hm);
	var Rn = {};
	lt(Rn, {
		defineExtension: () => ro,
		getExtensionContext: () => no
	});
	function ro(e) {
		return typeof e == "function" ? e : (t) => t.$extends(e);
	}
	function no(e) {
		return e;
	}
	var Cn = {};
	lt(Cn, { validator: () => io });
	function io(...e) {
		return (t) => t;
	}
	var Ie = class {
		_map = /* @__PURE__ */ new Map();
		get(t) {
			return this._map.get(t)?.value;
		}
		set(t, r) {
			this._map.set(t, { value: r });
		}
		getOrCreate(t, r) {
			let n = this._map.get(t);
			if (n) return n.value;
			let i = r();
			return this.set(t, i), i;
		}
	};
	function qe(e) {
		return e.substring(0, 1).toLowerCase() + e.substring(1);
	}
	function oo(e, t) {
		let r = {};
		for (let n of e) {
			let i = n[t];
			r[i] = n;
		}
		return r;
	}
	function Nt(e) {
		let t;
		return { get() {
			return t || (t = { value: e() }), t.value;
		} };
	}
	function so(e) {
		return {
			models: In(e.models),
			enums: In(e.enums),
			types: In(e.types)
		};
	}
	function In(e) {
		let t = {};
		for (let { name: r, ...n } of e) t[r] = n;
		return t;
	}
	var as = require_dist();
	var br = {};
	lt(br, {
		$: () => po,
		bgBlack: () => Au,
		bgBlue: () => ku,
		bgCyan: () => Nu,
		bgGreen: () => Cu,
		bgMagenta: () => Ou,
		bgRed: () => Ru,
		bgWhite: () => Du,
		bgYellow: () => Iu,
		black: () => Eu,
		blue: () => He,
		bold: () => Ee,
		cyan: () => _e,
		dim: () => Dt,
		gray: () => $t,
		green: () => Ft,
		grey: () => Su,
		hidden: () => bu,
		inverse: () => xu,
		italic: () => wu,
		magenta: () => Tu,
		red: () => ze,
		reset: () => hu,
		strikethrough: () => Pu,
		underline: () => Mt,
		white: () => vu,
		yellow: () => _t
	});
	var kn;
	var ao;
	var lo;
	var uo;
	var co = !0;
	typeof process < "u" && ({FORCE_COLOR: kn, NODE_DISABLE_COLORS: ao, NO_COLOR: lo, TERM: uo} = process.env || {}, co = process.stdout && process.stdout.isTTY);
	var po = { enabled: !ao && lo == null && uo !== "dumb" && (kn != null && kn !== "0" || co) };
	function B(e, t) {
		let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
		return function(o) {
			return !po.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
		};
	}
	var hu = B(0, 0);
	var Ee = B(1, 22);
	var Dt = B(2, 22);
	var wu = B(3, 23);
	var Mt = B(4, 24);
	var xu = B(7, 27);
	var bu = B(8, 28);
	var Pu = B(9, 29);
	var Eu = B(30, 39);
	var ze = B(31, 39);
	var Ft = B(32, 39);
	var _t = B(33, 39);
	var He = B(34, 39);
	var Tu = B(35, 39);
	var _e = B(36, 39);
	var vu = B(37, 39);
	var $t = B(90, 39);
	var Su = B(90, 39);
	var Au = B(40, 49);
	var Ru = B(41, 49);
	var Cu = B(42, 49);
	var Iu = B(43, 49);
	var ku = B(44, 49);
	var Ou = B(45, 49);
	var Nu = B(46, 49);
	var Du = B(47, 49);
	var Mu = 100;
	var mo = [
		"green",
		"yellow",
		"blue",
		"magenta",
		"cyan",
		"red"
	];
	var Lt = [];
	var fo = Date.now();
	var Fu = 0;
	var On = typeof process < "u" ? process.env : {};
	globalThis.DEBUG ??= On.DEBUG ?? "";
	globalThis.DEBUG_COLORS ??= On.DEBUG_COLORS ? On.DEBUG_COLORS === "true" : !0;
	var Vt = {
		enable(e) {
			typeof e == "string" && (globalThis.DEBUG = e);
		},
		disable() {
			let e = globalThis.DEBUG;
			return globalThis.DEBUG = "", e;
		},
		enabled(e) {
			let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? !1 : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? !1 : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
			return r && !n;
		},
		log: (...e) => {
			let [t, r, ...n] = e;
			(console.warn ?? console.log)(`${t} ${r}`, ...n);
		},
		formatters: {}
	};
	function _u(e) {
		let t = {
			color: mo[Fu++ % mo.length],
			enabled: Vt.enabled(e),
			namespace: e,
			log: Vt.log,
			extend: () => {}
		}, r = (...n) => {
			let { enabled: i, namespace: o, color: s, log: a } = t;
			if (n.length !== 0 && Lt.push([o, ...n]), Lt.length > Mu && Lt.shift(), Vt.enabled(o) || i) {
				let u = n.map((P) => typeof P == "string" ? P : $u(P)), m = `+${Date.now() - fo}ms`;
				fo = Date.now(), globalThis.DEBUG_COLORS ? a(br[s](Ee(o)), ...u, br[s](m)) : a(o, ...u, m);
			}
		};
		return new Proxy(r, {
			get: (n, i) => t[i],
			set: (n, i, o) => t[i] = o
		});
	}
	var K = new Proxy(_u, {
		get: (e, t) => Vt[t],
		set: (e, t, r) => Vt[t] = r
	});
	function $u(e, t = 2) {
		let r = /* @__PURE__ */ new Set();
		return JSON.stringify(e, (n, i) => {
			if (typeof i == "object" && i !== null) {
				if (r.has(i)) return "[Circular *]";
				r.add(i);
			} else if (typeof i == "bigint") return i.toString();
			return i;
		}, t);
	}
	function go(e = 7500) {
		let t = Lt.map(([r, ...n]) => `${r} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
		return t.length < e ? t : t.slice(-e);
	}
	function yo() {
		Lt.length = 0;
	}
	function $e(e, t) {
		throw new Error(t);
	}
	var Po = Pe(bo(), 1);
	function Nn(e) {
		let t = (0, Po.default)(e);
		if (t === 0) return e;
		let r = new RegExp(`^[ \\t]{${t}}`, "gm");
		return e.replace(r, "");
	}
	var Er = `prisma+postgres:`;
	function To(e) {
		return e?.toString().startsWith(`${Er}//`) ?? !1;
	}
	function Dn(e) {
		if (!To(e)) return !1;
		let { host: t } = new URL(e);
		return t.includes("localhost") || t.includes("127.0.0.1") || t.includes("[::1]");
	}
	var Ut = {};
	lt(Ut, {
		error: () => Uu,
		info: () => qu,
		log: () => Vu,
		query: () => ju,
		should: () => Ao,
		tags: () => qt,
		warn: () => Mn
	});
	var qt = {
		error: ze("prisma:error"),
		warn: _t("prisma:warn"),
		info: _e("prisma:info"),
		query: He("prisma:query")
	};
	var Ao = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
	function Vu(...e) {
		console.log(...e);
	}
	function Mn(e, ...t) {
		Ao.warn() && console.warn(`${qt.warn} ${e}`, ...t);
	}
	function qu(e, ...t) {
		console.info(`${qt.info} ${e}`, ...t);
	}
	function Uu(e, ...t) {
		console.error(`${qt.error} ${e}`, ...t);
	}
	function ju(e, ...t) {
		console.log(`${qt.query} ${e}`, ...t);
	}
	function Fn({ onlyFirst: e = !1 } = {}) {
		let r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
		return new RegExp(r, e ? void 0 : "g");
	}
	var Bu = Fn();
	function ut(e) {
		if (typeof e != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
		return e.replace(Bu, "");
	}
	var jt = Pe(__require("node:path"));
	function _n(e) {
		return jt.default.sep === jt.default.posix.sep ? e : e.split(jt.default.sep).join(jt.default.posix.sep);
	}
	function $n(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	function vr(e, t) {
		let r = {};
		for (let n of Object.keys(e)) r[n] = t(e[n], n);
		return r;
	}
	function Ln(e, t) {
		if (e.length === 0) return;
		let r = e[0];
		for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
		return r;
	}
	function Bt(e, t) {
		Object.defineProperty(e, "name", {
			value: t,
			configurable: !0
		});
	}
	var Co = /* @__PURE__ */ new Set();
	var Vn = (e, t, ...r) => {
		Co.has(e) || (Co.add(e), Mn(t, ...r));
	};
	function ct(e) {
		return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
	}
	function pt(e) {
		return e.toString() !== "Invalid Date";
	}
	var Io = require_dist();
	function dt(e) {
		return Io.Decimal.isDecimal(e) ? !0 : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
	}
	var Yo = require_dist();
	var Qt = {};
	lt(Qt, {
		ModelAction: () => mt,
		datamodelEnumToSchemaEnum: () => Qu
	});
	function Qu(e) {
		return {
			name: e.name,
			values: e.values.map((t) => t.name)
		};
	}
	var mt = ((D) => (D.findUnique = "findUnique", D.findUniqueOrThrow = "findUniqueOrThrow", D.findFirst = "findFirst", D.findFirstOrThrow = "findFirstOrThrow", D.findMany = "findMany", D.create = "create", D.createMany = "createMany", D.createManyAndReturn = "createManyAndReturn", D.update = "update", D.updateMany = "updateMany", D.updateManyAndReturn = "updateManyAndReturn", D.upsert = "upsert", D.delete = "delete", D.deleteMany = "deleteMany", D.groupBy = "groupBy", D.count = "count", D.aggregate = "aggregate", D.findRaw = "findRaw", D.aggregateRaw = "aggregateRaw", D))(mt || {});
	var Mo = Pe(So());
	var Do = Pe(__require("node:fs"));
	var ko = {
		keyword: _e,
		entity: _e,
		value: (e) => Ee(He(e)),
		punctuation: He,
		directive: _e,
		function: _e,
		variable: (e) => Ee(He(e)),
		string: (e) => Ee(Ft(e)),
		boolean: _t,
		number: _e,
		comment: $t
	};
	var Ju = (e) => e;
	var Sr = {};
	var Gu = 0;
	var O = {
		manual: Sr.Prism && Sr.Prism.manual,
		disableWorkerMessageHandler: Sr.Prism && Sr.Prism.disableWorkerMessageHandler,
		util: {
			encode: function(e) {
				if (e instanceof Te) {
					let t = e;
					return new Te(t.type, O.util.encode(t.content), t.alias);
				} else return Array.isArray(e) ? e.map(O.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
			},
			type: function(e) {
				return Object.prototype.toString.call(e).slice(8, -1);
			},
			objId: function(e) {
				return e.__id || Object.defineProperty(e, "__id", { value: ++Gu }), e.__id;
			},
			clone: function e(t, r) {
				let n, i, o = O.util.type(t);
				switch (r = r || {}, o) {
					case "Object":
						if (i = O.util.objId(t), r[i]) return r[i];
						n = {}, r[i] = n;
						for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
						return n;
					case "Array": return i = O.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
						n[a] = e(s, r);
					}), n);
					default: return t;
				}
			}
		},
		languages: {
			extend: function(e, t) {
				let r = O.util.clone(O.languages[e]);
				for (let n in t) r[n] = t[n];
				return r;
			},
			insertBefore: function(e, t, r, n) {
				n = n || O.languages;
				let i = n[e], o = {};
				for (let a in i) if (i.hasOwnProperty(a)) {
					if (a == t) for (let u in r) r.hasOwnProperty(u) && (o[u] = r[u]);
					r.hasOwnProperty(a) || (o[a] = i[a]);
				}
				let s = n[e];
				return n[e] = o, O.languages.DFS(O.languages, function(a, u) {
					u === s && a != e && (this[a] = o);
				}), o;
			},
			DFS: function e(t, r, n, i) {
				i = i || {};
				let o = O.util.objId;
				for (let s in t) if (t.hasOwnProperty(s)) {
					r.call(t, s, t[s], n || s);
					let a = t[s], u = O.util.type(a);
					u === "Object" && !i[o(a)] ? (i[o(a)] = !0, e(a, r, null, i)) : u === "Array" && !i[o(a)] && (i[o(a)] = !0, e(a, r, s, i));
				}
			}
		},
		plugins: {},
		highlight: function(e, t, r) {
			let n = {
				code: e,
				grammar: t,
				language: r
			};
			return O.hooks.run("before-tokenize", n), n.tokens = O.tokenize(n.code, n.grammar), O.hooks.run("after-tokenize", n), Te.stringify(O.util.encode(n.tokens), n.language);
		},
		matchGrammar: function(e, t, r, n, i, o, s) {
			for (let M in r) {
				if (!r.hasOwnProperty(M) || !r[M]) continue;
				if (M == s) return;
				let L = r[M];
				L = O.util.type(L) === "Array" ? L : [L];
				for (let q = 0; q < L.length; ++q) {
					let E = L[q], D = E.inside, H = !!E.lookbehind, ce = !!E.greedy, ie = 0, be = E.alias;
					if (ce && !E.pattern.global) {
						let l = E.pattern.toString().match(/[imuy]*$/)[0];
						E.pattern = RegExp(E.pattern.source, l + "g");
					}
					E = E.pattern || E;
					for (let l = n, c = i; l < t.length; c += t[l].length, ++l) {
						let p = t[l];
						if (t.length > e.length) return;
						if (p instanceof Te) continue;
						if (ce && l != t.length - 1) {
							E.lastIndex = c;
							var T = E.exec(e);
							if (!T) break;
							var P = T.index + (H ? T[1].length : 0), S = T.index + T[0].length, a = l, u = c;
							for (let g = t.length; a < g && (u < S || !t[a].type && !t[a - 1].greedy); ++a) u += t[a].length, P >= u && (++l, c = u);
							if (t[l] instanceof Te) continue;
							m = a - l, p = e.slice(c, u), T.index -= c;
						} else {
							E.lastIndex = 0;
							var T = E.exec(p), m = 1;
						}
						if (!T) {
							if (o) break;
							continue;
						}
						H && (ie = T[1] ? T[1].length : 0);
						var P = T.index + ie, T = T[0].slice(ie), S = P + T.length, I = p.slice(0, P), A = p.slice(S);
						let h = [l, m];
						I && (++l, c += I.length, h.push(I));
						let f = new Te(M, D ? O.tokenize(T, D) : T, be, T, ce);
						if (h.push(f), A && h.push(A), Array.prototype.splice.apply(t, h), m != 1 && O.matchGrammar(e, t, r, l, c, !0, M), o) break;
					}
				}
			}
		},
		tokenize: function(e, t) {
			let r = [e], n = t.rest;
			if (n) {
				for (let i in n) t[i] = n[i];
				delete t.rest;
			}
			return O.matchGrammar(e, r, t, 0, 0, !1), r;
		},
		hooks: {
			all: {},
			add: function(e, t) {
				let r = O.hooks.all;
				r[e] = r[e] || [], r[e].push(t);
			},
			run: function(e, t) {
				let r = O.hooks.all[e];
				if (!(!r || !r.length)) for (var n = 0, i; i = r[n++];) i(t);
			}
		},
		Token: Te
	};
	O.languages.clike = {
		comment: [{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: !0
		}, {
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: !0,
			greedy: !0
		}],
		string: {
			pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: !0
		},
		"class-name": {
			pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
			lookbehind: !0,
			inside: { punctuation: /[.\\]/ }
		},
		keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
		boolean: /\b(?:true|false)\b/,
		function: /\w+(?=\()/,
		number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
		operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
		punctuation: /[{}[\];(),.:]/
	};
	O.languages.javascript = O.languages.extend("clike", {
		"class-name": [O.languages.clike["class-name"], {
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: !0
		}],
		keyword: [{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: !0
		}, {
			pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: !0
		}],
		number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
		function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
		operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
	});
	O.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
	O.languages.insertBefore("javascript", "keyword", {
		regex: {
			pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
			lookbehind: !0,
			greedy: !0
		},
		"function-variable": {
			pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
			alias: "function"
		},
		parameter: [
			{
				pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
				lookbehind: !0,
				inside: O.languages.javascript
			},
			{
				pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
				inside: O.languages.javascript
			},
			{
				pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
				lookbehind: !0,
				inside: O.languages.javascript
			},
			{
				pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
				lookbehind: !0,
				inside: O.languages.javascript
			}
		],
		constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
	});
	O.languages.markup && O.languages.markup.tag.addInlined("script", "javascript");
	O.languages.js = O.languages.javascript;
	O.languages.typescript = O.languages.extend("javascript", {
		keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
		builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
	});
	O.languages.ts = O.languages.typescript;
	function Te(e, t, r, n, i) {
		this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
	}
	Te.stringify = function(e, t) {
		return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
			return Te.stringify(r, t);
		}).join("") : zu(e.type)(e.content);
	};
	function zu(e) {
		return ko[e] || Ju;
	}
	function Oo(e) {
		return Hu(e, O.languages.javascript);
	}
	function Hu(e, t) {
		return O.tokenize(e, t).map((n) => Te.stringify(n)).join("");
	}
	function No(e) {
		return Nn(e);
	}
	var Ar = class e {
		firstLineNumber;
		lines;
		static read(t) {
			let r;
			try {
				r = Do.default.readFileSync(t, "utf-8");
			} catch {
				return null;
			}
			return e.fromContent(r);
		}
		static fromContent(t) {
			let r = t.split(/\r?\n/);
			return new e(1, r);
		}
		constructor(t, r) {
			this.firstLineNumber = t, this.lines = r;
		}
		get lastLineNumber() {
			return this.firstLineNumber + this.lines.length - 1;
		}
		mapLineAt(t, r) {
			if (t < this.firstLineNumber || t > this.lastLineNumber) return this;
			let n = t - this.firstLineNumber, i = [...this.lines];
			return i[n] = r(i[n]), new e(this.firstLineNumber, i);
		}
		mapLines(t) {
			return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
		}
		lineAt(t) {
			return this.lines[t - this.firstLineNumber];
		}
		prependSymbolAt(t, r) {
			return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
		}
		slice(t, r) {
			let n = Math.max(t, this.firstLineNumber), i = Math.min(r, this.lastLineNumber);
			if (n > i) return new e(t, []);
			let o = this.lines.slice(n - this.firstLineNumber, i - this.firstLineNumber + 1).join(`
`);
			return new e(n, No(o).split(`
`));
		}
		highlight() {
			let t = Oo(this.toString());
			return new e(this.firstLineNumber, t.split(`
`));
		}
		toString() {
			return this.lines.join(`
`);
		}
	};
	var Wu = {
		red: ze,
		gray: $t,
		dim: Dt,
		bold: Ee,
		underline: Mt,
		highlightSource: (e) => e.highlight()
	};
	var Ku = {
		red: (e) => e,
		gray: (e) => e,
		dim: (e) => e,
		bold: (e) => e,
		underline: (e) => e,
		highlightSource: (e) => e
	};
	function Zu({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
		return {
			functionName: `prisma.${t}()`,
			message: e,
			isPanic: r ?? !1,
			callArguments: n
		};
	}
	function Xu({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
		let s = Zu({
			message: t,
			originalMethod: r,
			isPanic: n,
			callArguments: i
		});
		if (!e || typeof window < "u" || process.env.NODE_ENV === "production") return s;
		let a = e.getLocation();
		if (!a || !a.lineNumber || !a.columnNumber) return s;
		let u = Math.max(1, a.lineNumber - 3), m = Ar.read(a.fileName)?.slice(u, a.lineNumber), P = m?.lineAt(a.lineNumber);
		if (m && P) {
			let T = ec(P), S = Yu(P);
			if (!S) return s;
			s.functionName = `${S.code})`, s.location = a, n || (m = m.mapLineAt(a.lineNumber, (A) => A.slice(0, S.openingBraceIndex))), m = o.highlightSource(m);
			let I = String(m.lastLineNumber).length;
			if (s.contextLines = m.mapLines((A, M) => o.gray(String(M).padStart(I)) + " " + A).mapLines((A) => o.dim(A)).prependSymbolAt(a.lineNumber, o.bold(o.red("→"))), i) {
				let A = T + I + 1;
				A += 2, s.callArguments = (0, Mo.default)(i, A).slice(A);
			}
		}
		return s;
	}
	function Yu(e) {
		let t = Object.keys(mt).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
		if (n) {
			let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
			return {
				code: e.slice(o, i),
				openingBraceIndex: i
			};
		}
		return null;
	}
	function ec(e) {
		let t = 0;
		for (let r = 0; r < e.length; r++) {
			if (e.charAt(r) !== " ") return t;
			t++;
		}
		return t;
	}
	function tc({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
		let a = [""], u = t ? " in" : ":";
		if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${u}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)), t && a.push(s.underline(rc(t))), i) {
			a.push("");
			let m = [i.toString()];
			o && (m.push(o), m.push(s.dim(")"))), a.push(m.join("")), o && a.push("");
		} else a.push(""), o && a.push(o), a.push("");
		return a.push(r), a.join(`
`);
	}
	function rc(e) {
		let t = [e.fileName];
		return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
	}
	function Rr(e) {
		let t = e.showColors ? Wu : Ku, r;
		return r = Xu(e, t), tc(r, t);
	}
	var Bo = Pe(qn());
	function Lo(e, t, r) {
		let o = oc(nc(Vo(e)));
		o ? Cr(o, t, r) : t.addErrorMessage(() => "Unknown error");
	}
	function Vo(e) {
		return e.errors.flatMap((t) => t.kind === "Union" ? Vo(t) : [t]);
	}
	function nc(e) {
		let t = /* @__PURE__ */ new Map(), r = [];
		for (let n of e) {
			if (n.kind !== "InvalidArgumentType") {
				r.push(n);
				continue;
			}
			let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
			o ? t.set(i, {
				...n,
				argument: {
					...n.argument,
					typeNames: ic(o.argument.typeNames, n.argument.typeNames)
				}
			}) : t.set(i, n);
		}
		return r.push(...t.values()), r;
	}
	function ic(e, t) {
		return [...new Set(e.concat(t))];
	}
	function oc(e) {
		return Ln(e, (t, r) => {
			let n = _o(t), i = _o(r);
			return n !== i ? n - i : $o(t) - $o(r);
		});
	}
	function _o(e) {
		let t = 0;
		return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
	}
	function $o(e) {
		switch (e.kind) {
			case "InvalidArgumentValue":
			case "ValueTooLarge": return 20;
			case "InvalidArgumentType": return 10;
			case "RequiredArgumentMissing": return -10;
			default: return 0;
		}
	}
	var pe = class {
		constructor(t, r) {
			this.name = t;
			this.value = r;
		}
		isRequired = !1;
		makeRequired() {
			return this.isRequired = !0, this;
		}
		write(t) {
			let { colors: { green: r } } = t.context;
			t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
		}
	};
	Uo();
	var ft = class {
		constructor(t = 0, r) {
			this.context = r;
			this.currentIndent = t;
		}
		lines = [];
		currentLine = "";
		currentIndent = 0;
		marginSymbol;
		afterNextNewLineCallback;
		write(t) {
			return typeof t == "string" ? this.currentLine += t : t.write(this), this;
		}
		writeJoined(t, r, n = (i, o) => o.write(i)) {
			let i = r.length - 1;
			for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t);
			return this;
		}
		writeLine(t) {
			return this.write(t).newLine();
		}
		newLine() {
			this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
			let t = this.afterNextNewLineCallback;
			return this.afterNextNewLineCallback = void 0, t?.(), this;
		}
		withIndent(t) {
			return this.indent(), t(this), this.unindent(), this;
		}
		afterNextNewline(t) {
			return this.afterNextNewLineCallback = t, this;
		}
		indent() {
			return this.currentIndent++, this;
		}
		unindent() {
			return this.currentIndent > 0 && this.currentIndent--, this;
		}
		addMarginSymbol(t) {
			return this.marginSymbol = t, this;
		}
		toString() {
			return this.lines.concat(this.indentedCurrentLine()).join(`
`);
		}
		getCurrentLineLength() {
			return this.currentLine.length;
		}
		indentedCurrentLine() {
			let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
			return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
		}
	};
	qo();
	var Ir = class {
		constructor(t) {
			this.value = t;
		}
		write(t) {
			t.write(this.value);
		}
		markAsError() {
			this.value.markAsError();
		}
	};
	var kr = (e) => e;
	var Or = {
		bold: kr,
		red: kr,
		green: kr,
		dim: kr,
		enabled: !1
	};
	var jo = {
		bold: Ee,
		red: ze,
		green: Ft,
		dim: Dt,
		enabled: !0
	};
	var gt = { write(e) {
		e.writeLine(",");
	} };
	var ke = class {
		constructor(t) {
			this.contents = t;
		}
		isUnderlined = !1;
		color = (t) => t;
		underline() {
			return this.isUnderlined = !0, this;
		}
		setColor(t) {
			return this.color = t, this;
		}
		write(t) {
			let r = t.getCurrentLineLength();
			t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
				t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
			});
		}
	};
	var Ue = class {
		hasError = !1;
		markAsError() {
			return this.hasError = !0, this;
		}
	};
	var yt = class extends Ue {
		items = [];
		addItem(t) {
			return this.items.push(new Ir(t)), this;
		}
		getField(t) {
			return this.items[t];
		}
		getPrintWidth() {
			return this.items.length === 0 ? 2 : Math.max(...this.items.map((r) => r.value.getPrintWidth())) + 2;
		}
		write(t) {
			if (this.items.length === 0) {
				this.writeEmpty(t);
				return;
			}
			this.writeWithItems(t);
		}
		writeEmpty(t) {
			let r = new ke("[]");
			this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
		}
		writeWithItems(t) {
			let { colors: r } = t.context;
			t.writeLine("[").withIndent(() => t.writeJoined(gt, this.items).newLine()).write("]"), this.hasError && t.afterNextNewline(() => {
				t.writeLine(r.red("~".repeat(this.getPrintWidth())));
			});
		}
		asObject() {}
	};
	var ht = class e extends Ue {
		fields = {};
		suggestions = [];
		addField(t) {
			this.fields[t.name] = t;
		}
		addSuggestion(t) {
			this.suggestions.push(t);
		}
		getField(t) {
			return this.fields[t];
		}
		getDeepField(t) {
			let [r, ...n] = t, i = this.getField(r);
			if (!i) return;
			let o = i;
			for (let s of n) {
				let a;
				if (o.value instanceof e ? a = o.value.getField(s) : o.value instanceof yt && (a = o.value.getField(Number(s))), !a) return;
				o = a;
			}
			return o;
		}
		getDeepFieldValue(t) {
			return t.length === 0 ? this : this.getDeepField(t)?.value;
		}
		hasField(t) {
			return !!this.getField(t);
		}
		removeAllFields() {
			this.fields = {};
		}
		removeField(t) {
			delete this.fields[t];
		}
		getFields() {
			return this.fields;
		}
		isEmpty() {
			return Object.keys(this.fields).length === 0;
		}
		getFieldValue(t) {
			return this.getField(t)?.value;
		}
		getDeepSubSelectionValue(t) {
			let r = this;
			for (let n of t) {
				if (!(r instanceof e)) return;
				let i = r.getSubSelectionValue(n);
				if (!i) return;
				r = i;
			}
			return r;
		}
		getDeepSelectionParent(t) {
			let r = this.getSelectionParent();
			if (!r) return;
			let n = r;
			for (let i of t) {
				let o = n.value.getFieldValue(i);
				if (!o || !(o instanceof e)) return;
				let s = o.getSelectionParent();
				if (!s) return;
				n = s;
			}
			return n;
		}
		getSelectionParent() {
			let t = this.getField("select")?.value.asObject();
			if (t) return {
				kind: "select",
				value: t
			};
			let r = this.getField("include")?.value.asObject();
			if (r) return {
				kind: "include",
				value: r
			};
		}
		getSubSelectionValue(t) {
			return this.getSelectionParent()?.value.fields[t].value;
		}
		getPrintWidth() {
			let t = Object.values(this.fields);
			return t.length == 0 ? 2 : Math.max(...t.map((n) => n.getPrintWidth())) + 2;
		}
		write(t) {
			let r = Object.values(this.fields);
			if (r.length === 0 && this.suggestions.length === 0) {
				this.writeEmpty(t);
				return;
			}
			this.writeWithContents(t, r);
		}
		asObject() {
			return this;
		}
		writeEmpty(t) {
			let r = new ke("{}");
			this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
		}
		writeWithContents(t, r) {
			t.writeLine("{").withIndent(() => {
				t.writeJoined(gt, [...r, ...this.suggestions]).newLine();
			}), t.write("}"), this.hasError && t.afterNextNewline(() => {
				t.writeLine(t.context.colors.red("~".repeat(this.getPrintWidth())));
			});
		}
	};
	var Z = class extends Ue {
		constructor(r) {
			super();
			this.text = r;
		}
		getPrintWidth() {
			return this.text.length;
		}
		write(r) {
			let n = new ke(this.text);
			this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
		}
		asObject() {}
	};
	var Jt = class {
		fields = [];
		addField(t, r) {
			return this.fields.push({ write(n) {
				let { green: i, dim: o } = n.context.colors;
				n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
			} }), this;
		}
		write(t) {
			let { colors: { green: r } } = t.context;
			t.writeLine(r("{")).withIndent(() => {
				t.writeJoined(gt, this.fields).newLine();
			}).write(r("}")).addMarginSymbol(r("+"));
		}
	};
	function Cr(e, t, r) {
		switch (e.kind) {
			case "MutuallyExclusiveFields":
				sc(e, t);
				break;
			case "IncludeOnScalar":
				ac(e, t);
				break;
			case "EmptySelection":
				lc(e, t, r);
				break;
			case "UnknownSelectionField":
				dc(e, t);
				break;
			case "InvalidSelectionValue":
				mc(e, t);
				break;
			case "UnknownArgument":
				fc(e, t);
				break;
			case "UnknownInputField":
				gc(e, t);
				break;
			case "RequiredArgumentMissing":
				yc(e, t);
				break;
			case "InvalidArgumentType":
				hc(e, t);
				break;
			case "InvalidArgumentValue":
				wc(e, t);
				break;
			case "ValueTooLarge":
				xc(e, t);
				break;
			case "SomeFieldsMissing":
				bc(e, t);
				break;
			case "TooManyFieldsGiven":
				Pc(e, t);
				break;
			case "Union":
				Lo(e, t, r);
				break;
			default: throw new Error("not implemented: " + e.kind);
		}
	}
	function sc(e, t) {
		let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
		r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
	}
	function ac(e, t) {
		let [r, n] = wt(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
		if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new pe(s.name, "true"));
		t.addErrorMessage((s) => {
			let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
			return i ? a += ` on model ${s.bold(i.name)}. ${Gt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
		});
	}
	function lc(e, t, r) {
		let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
		if (n) {
			let i = n.getField("omit")?.value.asObject();
			if (i) {
				uc(e, t, i);
				return;
			}
			if (n.hasField("select")) {
				cc(e, t);
				return;
			}
		}
		if (r?.[qe(e.outputType.name)]) {
			pc(e, t);
			return;
		}
		t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
	}
	function uc(e, t, r) {
		r.removeAllFields();
		for (let n of e.outputType.fields) r.addSuggestion(new pe(n.name, "false"));
		t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
	}
	function cc(e, t) {
		let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? !1;
		n && (n.removeAllFields(), Go(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${Gt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
	}
	function pc(e, t) {
		let r = new Jt();
		for (let i of e.outputType.fields) i.isRelation || r.addField(i.name, "false");
		let n = new pe("omit", r).makeRequired();
		if (e.selectionPath.length === 0) t.arguments.addSuggestion(n);
		else {
			let [i, o] = wt(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
			if (a) {
				let u = a?.value.asObject() ?? new ht();
				u.addSuggestion(n), a.value = u;
			}
		}
		t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
	}
	function dc(e, t) {
		let r = zo(e.selectionPath, t);
		if (r.parentKind !== "unknown") {
			r.field.markAsError();
			let n = r.parent;
			switch (r.parentKind) {
				case "select":
					Go(n, e.outputType);
					break;
				case "include":
					Ec(n, e.outputType);
					break;
				case "omit": Tc(n, e.outputType);
			}
		}
		t.addErrorMessage((n) => {
			let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
			return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(Gt(n)), i.join(" ");
		});
	}
	function mc(e, t) {
		let r = zo(e.selectionPath, t);
		r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
	}
	function fc(e, t) {
		let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
		n && (n.getField(r)?.markAsError(), vc(n, e.arguments)), t.addErrorMessage((i) => Qo(i, r, e.arguments.map((o) => o.name)));
	}
	function gc(e, t) {
		let [r, n] = wt(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
		if (i) {
			i.getDeepField(e.argumentPath)?.markAsError();
			let o = i.getDeepFieldValue(r)?.asObject();
			o && Ho(o, e.inputType);
		}
		t.addErrorMessage((o) => Qo(o, n, e.inputType.fields.map((s) => s.name)));
	}
	function Qo(e, t, r) {
		let n = [`Unknown argument \`${e.red(t)}\`.`], i = Ac(t, r);
		return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(Gt(e)), n.join(" ");
	}
	function yc(e, t) {
		let r;
		t.addErrorMessage((u) => r?.value instanceof Z && r.value.text === "null" ? `Argument \`${u.green(o)}\` must not be ${u.red("null")}.` : `Argument \`${u.green(o)}\` is missing.`);
		let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
		if (!n) return;
		let [i, o] = wt(e.argumentPath), s = new Jt(), a = n.getDeepFieldValue(i)?.asObject();
		if (a) {
			if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
				for (let u of e.inputTypes[0].fields) s.addField(u.name, u.typeNames.join(" | "));
				a.addSuggestion(new pe(o, s).makeRequired());
			} else {
				let u = e.inputTypes.map(Jo).join(" | ");
				a.addSuggestion(new pe(o, u).makeRequired());
			}
			if (e.dependentArgumentPath) {
				n.getDeepField(e.dependentArgumentPath)?.markAsError();
				let [, u] = wt(e.dependentArgumentPath);
				t.addErrorMessage((m) => `Argument \`${m.green(o)}\` is required because argument \`${m.green(u)}\` was provided.`);
			}
		}
	}
	function Jo(e) {
		return e.kind === "list" ? `${Jo(e.elementType)}[]` : e.name;
	}
	function hc(e, t) {
		let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
		n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
			let o = Nr("or", e.argument.typeNames.map((s) => i.green(s)));
			return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
		});
	}
	function wc(e, t) {
		let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
		n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
			let o = [`Invalid value for argument \`${i.bold(r)}\``];
			if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
				let s = Nr("or", e.argument.typeNames.map((a) => i.green(a)));
				o.push(` Expected ${s}.`);
			}
			return o.join("");
		});
	}
	function xc(e, t) {
		let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
		if (n) {
			let s = n.getDeepField(e.argumentPath)?.value;
			s?.markAsError(), s instanceof Z && (i = s.text);
		}
		t.addErrorMessage((o) => {
			let s = ["Unable to fit value"];
			return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
		});
	}
	function bc(e, t) {
		let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
		if (n) {
			let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
			i && Ho(i, e.inputType);
		}
		t.addErrorMessage((i) => {
			let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
			return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Nr("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(Gt(i)), o.join(" ");
		});
	}
	function Pc(e, t) {
		let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
		if (n) {
			let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
			o && (o.markAsError(), i = Object.keys(o.getFields()));
		}
		t.addErrorMessage((o) => {
			let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
			return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Nr("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
		});
	}
	function Go(e, t) {
		for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new pe(r.name, "true"));
	}
	function Ec(e, t) {
		for (let r of t.fields) r.isRelation && !e.hasField(r.name) && e.addSuggestion(new pe(r.name, "true"));
	}
	function Tc(e, t) {
		for (let r of t.fields) !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new pe(r.name, "true"));
	}
	function vc(e, t) {
		for (let r of t) e.hasField(r.name) || e.addSuggestion(new pe(r.name, r.typeNames.join(" | ")));
	}
	function zo(e, t) {
		let [r, n] = wt(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
		if (!i) return {
			parentKind: "unknown",
			fieldName: n
		};
		let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), u = o?.getField(n);
		return o && u ? {
			parentKind: "select",
			parent: o,
			field: u,
			fieldName: n
		} : (u = s?.getField(n), s && u ? {
			parentKind: "include",
			field: u,
			parent: s,
			fieldName: n
		} : (u = a?.getField(n), a && u ? {
			parentKind: "omit",
			field: u,
			parent: a,
			fieldName: n
		} : {
			parentKind: "unknown",
			fieldName: n
		}));
	}
	function Ho(e, t) {
		if (t.kind === "object") for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new pe(r.name, r.typeNames.join(" | ")));
	}
	function wt(e) {
		let t = [...e], r = t.pop();
		if (!r) throw new Error("unexpected empty path");
		return [t, r];
	}
	function Gt({ green: e, enabled: t }) {
		return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
	}
	function Nr(e, t) {
		if (t.length === 1) return t[0];
		let r = [...t], n = r.pop();
		return `${r.join(", ")} ${e} ${n}`;
	}
	var Sc = 3;
	function Ac(e, t) {
		let r = 1 / 0, n;
		for (let i of t) {
			let o = (0, Bo.default)(e, i);
			o > Sc || o < r && (r = o, n = i);
		}
		return n;
	}
	var Ko = require_dist();
	var zt = class {
		modelName;
		name;
		typeName;
		isList;
		isEnum;
		constructor(t, r, n, i, o) {
			this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
		}
		_toGraphQLInputType() {
			return `${this.isList ? "List" : ""}${this.isEnum ? "Enum" : ""}${this.typeName}FieldRefInput<${this.modelName}>`;
		}
	};
	function xt(e) {
		return e instanceof zt;
	}
	var Wo = ": ";
	var Dr = class {
		constructor(t, r) {
			this.name = t;
			this.value = r;
		}
		hasError = !1;
		markAsError() {
			this.hasError = !0;
		}
		getPrintWidth() {
			return this.name.length + this.value.getPrintWidth() + Wo.length;
		}
		write(t) {
			let r = new ke(this.name);
			this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Wo).write(this.value);
		}
	};
	var jn = class {
		arguments;
		errorMessages = [];
		constructor(t) {
			this.arguments = t;
		}
		write(t) {
			t.write(this.arguments);
		}
		addErrorMessage(t) {
			this.errorMessages.push(t);
		}
		renderAllMessages(t) {
			return this.errorMessages.map((r) => r(t)).join(`
`);
		}
	};
	function bt(e) {
		return new jn(Zo(e));
	}
	function Zo(e) {
		let t = new ht();
		for (let [r, n] of Object.entries(e)) {
			let i = new Dr(r, Xo(n));
			t.addField(i);
		}
		return t;
	}
	function Xo(e) {
		if (typeof e == "string") return new Z(JSON.stringify(e));
		if (typeof e == "number" || typeof e == "boolean") return new Z(String(e));
		if (typeof e == "bigint") return new Z(`${e}n`);
		if (e === null) return new Z("null");
		if (e === void 0) return new Z("undefined");
		if (dt(e)) return new Z(`new Prisma.Decimal("${e.toFixed()}")`);
		if (e instanceof Uint8Array) return Buffer.isBuffer(e) ? new Z(`Buffer.alloc(${e.byteLength})`) : new Z(`new Uint8Array(${e.byteLength})`);
		if (e instanceof Date) return new Z(`new Date("${pt(e) ? e.toISOString() : "Invalid Date"}")`);
		return (0, Ko.isObjectEnumValue)(e) ? new Z(`Prisma.${e._getName()}`) : xt(e) ? new Z(`prisma.${qe(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Rc(e) : typeof e == "object" ? Zo(e) : new Z(Object.prototype.toString.call(e));
	}
	function Rc(e) {
		let t = new yt();
		for (let r of e) t.addItem(Xo(r));
		return t;
	}
	function Mr(e, t) {
		let r = t === "pretty" ? jo : Or;
		return {
			message: e.renderAllMessages(r),
			args: new ft(0, { colors: r }).write(e).toString()
		};
	}
	function Fr({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
		let a = bt(e);
		for (let T of t) Cr(T, a, s);
		let { message: u, args: m } = Mr(a, r), P = Rr({
			message: u,
			callsite: n,
			originalMethod: i,
			showColors: r === "pretty",
			callArguments: m
		});
		throw new Yo.PrismaClientValidationError(P, { clientVersion: o });
	}
	function Oe(e) {
		return e.replace(/^./, (t) => t.toLowerCase());
	}
	function ts(e, t, r) {
		let n = Oe(r);
		return !t.result || !(t.result.$allModels || t.result[n]) ? e : Cc({
			...e,
			...es(t.name, e, t.result.$allModels),
			...es(t.name, e, t.result[n])
		});
	}
	function Cc(e) {
		let t = new Ie(), r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
		return vr(e, (n) => ({
			...n,
			needs: r(n.name, /* @__PURE__ */ new Set())
		}));
	}
	function es(e, t, r) {
		return r ? vr(r, ({ needs: n, compute: i }, o) => ({
			name: o,
			needs: n ? Object.keys(n).filter((s) => n[s]) : [],
			compute: Ic(t, o, i)
		})) : {};
	}
	function Ic(e, t, r) {
		let n = e?.[t]?.compute;
		return n ? (i, o) => r({
			...i,
			[t]: n(i, o)
		}, o) : r;
	}
	function rs(e, t) {
		if (!t) return e;
		let r = { ...e };
		for (let n of Object.values(t)) if (e[n.name]) for (let i of n.needs) r[i] = !0;
		return r;
	}
	function ns(e, t) {
		if (!t) return e;
		let r = { ...e };
		for (let n of Object.values(t)) if (!e[n.name]) for (let i of n.needs) delete r[i];
		return r;
	}
	var _r = class {
		constructor(t, r) {
			this.extension = t;
			this.previous = r;
		}
		computedFieldsCache = new Ie();
		modelExtensionsCache = new Ie();
		queryCallbacksCache = new Ie();
		clientExtensions = Nt(() => this.extension.client ? {
			...this.previous?.getAllClientExtensions(),
			...this.extension.client
		} : this.previous?.getAllClientExtensions());
		batchCallbacks = Nt(() => {
			let t = this.previous?.getAllBatchQueryCallbacks() ?? [], r = this.extension.query?.$__internalBatch;
			return r ? t.concat(r) : t;
		});
		getAllComputedFields(t) {
			return this.computedFieldsCache.getOrCreate(t, () => ts(this.previous?.getAllComputedFields(t), this.extension, t));
		}
		getAllClientExtensions() {
			return this.clientExtensions.get();
		}
		getAllModelExtensions(t) {
			return this.modelExtensionsCache.getOrCreate(t, () => {
				let r = Oe(t);
				return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : {
					...this.previous?.getAllModelExtensions(t),
					...this.extension.model.$allModels,
					...this.extension.model[r]
				};
			});
		}
		getAllQueryCallbacks(t, r) {
			return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
				let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
				return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
			});
		}
		getAllBatchQueryCallbacks() {
			return this.batchCallbacks.get();
		}
	};
	var Pt = class e {
		constructor(t) {
			this.head = t;
		}
		static empty() {
			return new e();
		}
		static single(t) {
			return new e(new _r(t));
		}
		isEmpty() {
			return this.head === void 0;
		}
		append(t) {
			return new e(new _r(t, this.head));
		}
		getAllComputedFields(t) {
			return this.head?.getAllComputedFields(t);
		}
		getAllClientExtensions() {
			return this.head?.getAllClientExtensions();
		}
		getAllModelExtensions(t) {
			return this.head?.getAllModelExtensions(t);
		}
		getAllQueryCallbacks(t, r) {
			return this.head?.getAllQueryCallbacks(t, r) ?? [];
		}
		getAllBatchQueryCallbacks() {
			return this.head?.getAllBatchQueryCallbacks() ?? [];
		}
	};
	var $r = class {
		constructor(t) {
			this.name = t;
		}
	};
	function is(e) {
		return e instanceof $r;
	}
	function os(e) {
		return new $r(e);
	}
	var ss = Symbol();
	var Ht = class {
		constructor(t) {
			if (t !== ss) throw new Error("Skip instance can not be constructed directly");
		}
		ifUndefined(t) {
			return t === void 0 ? Lr : t;
		}
	};
	var Lr = new Ht(ss);
	function fe(e) {
		return e instanceof Ht;
	}
	var kc = {
		findUnique: "findUnique",
		findUniqueOrThrow: "findUniqueOrThrow",
		findFirst: "findFirst",
		findFirstOrThrow: "findFirstOrThrow",
		findMany: "findMany",
		count: "aggregate",
		create: "createOne",
		createMany: "createMany",
		createManyAndReturn: "createManyAndReturn",
		update: "updateOne",
		updateMany: "updateMany",
		updateManyAndReturn: "updateManyAndReturn",
		upsert: "upsertOne",
		delete: "deleteOne",
		deleteMany: "deleteMany",
		executeRaw: "executeRaw",
		queryRaw: "queryRaw",
		aggregate: "aggregate",
		groupBy: "groupBy",
		runCommandRaw: "runCommandRaw",
		findRaw: "findRaw",
		aggregateRaw: "aggregateRaw"
	};
	var ls = "explicitly `undefined` values are not allowed";
	function Vr({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = Pt.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: u, previewFeatures: m, globalOmit: P, wrapRawValues: T }) {
		let S = new Bn({
			runtimeDataModel: n,
			modelName: e,
			action: t,
			rootArgs: r,
			callsite: o,
			extensions: i,
			selectionPath: [],
			argumentPath: [],
			originalMethod: s,
			errorFormat: a,
			clientVersion: u,
			previewFeatures: m,
			globalOmit: P,
			wrapRawValues: T
		});
		return {
			modelName: e,
			action: kc[t],
			query: Wt(r, S)
		};
	}
	function Wt({ select: e, include: t, ...r } = {}, n) {
		let i = r.omit;
		return delete r.omit, {
			arguments: cs(r, n),
			selection: Oc(e, t, i, n)
		};
	}
	function Oc(e, t, r, n) {
		return e ? (t ? n.throwValidationError({
			kind: "MutuallyExclusiveFields",
			firstField: "include",
			secondField: "select",
			selectionPath: n.getSelectionPath()
		}) : r && n.throwValidationError({
			kind: "MutuallyExclusiveFields",
			firstField: "omit",
			secondField: "select",
			selectionPath: n.getSelectionPath()
		}), Fc(e, n)) : Nc(n, t, r);
	}
	function Nc(e, t, r) {
		let n = {};
		return e.modelOrType && !e.isRawAction() && (n.$composites = !0, n.$scalars = !0), t && Dc(n, t, e), Mc(n, r, e), n;
	}
	function Dc(e, t, r) {
		for (let [n, i] of Object.entries(t)) {
			if (fe(i)) continue;
			let o = r.nestSelection(n);
			if (Qn(i, o), i === !1 || i === void 0) {
				e[n] = !1;
				continue;
			}
			let s = r.findField(n);
			if (s && s.kind !== "object" && r.throwValidationError({
				kind: "IncludeOnScalar",
				selectionPath: r.getSelectionPath().concat(n),
				outputType: r.getOutputTypeDescription()
			}), s) {
				e[n] = Wt(i === !0 ? {} : i, o);
				continue;
			}
			if (i === !0) {
				e[n] = !0;
				continue;
			}
			e[n] = Wt(i, o);
		}
	}
	function Mc(e, t, r) {
		let n = r.getComputedFields(), o = ns({
			...r.getGlobalOmit(),
			...t
		}, n);
		for (let [s, a] of Object.entries(o)) {
			if (fe(a)) continue;
			Qn(a, r.nestSelection(s));
			let u = r.findField(s);
			n?.[s] && !u || (e[s] = !a);
		}
	}
	function Fc(e, t) {
		let r = {}, n = t.getComputedFields(), i = rs(e, n);
		for (let [o, s] of Object.entries(i)) {
			if (fe(s)) continue;
			let a = t.nestSelection(o);
			Qn(s, a);
			let u = t.findField(o);
			if (!(n?.[o] && !u)) {
				if (s === !1 || s === void 0 || fe(s)) {
					r[o] = !1;
					continue;
				}
				if (s === !0) {
					u?.kind === "object" ? r[o] = Wt({}, a) : r[o] = !0;
					continue;
				}
				r[o] = Wt(s, a);
			}
		}
		return r;
	}
	function us(e, t) {
		if (e === null) return null;
		if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
		if (typeof e == "bigint") return {
			$type: "BigInt",
			value: String(e)
		};
		if (ct(e)) {
			if (pt(e)) return {
				$type: "DateTime",
				value: e.toISOString()
			};
			t.throwValidationError({
				kind: "InvalidArgumentValue",
				selectionPath: t.getSelectionPath(),
				argumentPath: t.getArgumentPath(),
				argument: {
					name: t.getArgumentName(),
					typeNames: ["Date"]
				},
				underlyingError: "Provided Date object is invalid"
			});
		}
		if (is(e)) return {
			$type: "Param",
			value: e.name
		};
		if (xt(e)) return {
			$type: "FieldRef",
			value: {
				_ref: e.name,
				_container: e.modelName
			}
		};
		if (Array.isArray(e)) return _c(e, t);
		if (ArrayBuffer.isView(e)) {
			let { buffer: r, byteOffset: n, byteLength: i } = e;
			return {
				$type: "Bytes",
				value: Buffer.from(r, n, i).toString("base64")
			};
		}
		if ($c(e)) return e.values;
		if (dt(e)) return {
			$type: "Decimal",
			value: e.toFixed()
		};
		if ((0, as.isObjectEnumValue)(e)) {
			let r = e._getName();
			if (r !== "DbNull" && r !== "JsonNull" && r !== "AnyNull") throw new Error(`Invalid ObjectEnumValue: expected DbNull, JsonNull, or AnyNull, got ${r}`);
			return {
				$type: "Enum",
				value: r
			};
		}
		if (Lc(e)) return e.toJSON();
		if (typeof e == "object") return cs(e, t);
		t.throwValidationError({
			kind: "InvalidArgumentValue",
			selectionPath: t.getSelectionPath(),
			argumentPath: t.getArgumentPath(),
			argument: {
				name: t.getArgumentName(),
				typeNames: []
			},
			underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`
		});
	}
	function cs(e, t) {
		if (t.shouldWrapRawValues() && e.$type) return {
			$type: "Raw",
			value: e
		};
		let r = {};
		for (let n in e) {
			let i = e[n], o = t.nestArgument(n);
			fe(i) || (i !== void 0 ? r[n] = us(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({
				kind: "InvalidArgumentValue",
				argumentPath: o.getArgumentPath(),
				selectionPath: t.getSelectionPath(),
				argument: {
					name: t.getArgumentName(),
					typeNames: []
				},
				underlyingError: ls
			}));
		}
		return r;
	}
	function _c(e, t) {
		let r = [];
		for (let n = 0; n < e.length; n++) {
			let i = t.nestArgument(String(n)), o = e[n];
			if (o === void 0 || fe(o)) {
				let s = o === void 0 ? "undefined" : "Prisma.skip";
				t.throwValidationError({
					kind: "InvalidArgumentValue",
					selectionPath: i.getSelectionPath(),
					argumentPath: i.getArgumentPath(),
					argument: {
						name: `${t.getArgumentName()}[${n}]`,
						typeNames: []
					},
					underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values`
				});
			}
			r.push(us(o, i));
		}
		return r;
	}
	function $c(e) {
		return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
	}
	function Lc(e) {
		return typeof e == "object" && e !== null && typeof e.toJSON == "function";
	}
	function Qn(e, t) {
		e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({
			kind: "InvalidSelectionValue",
			selectionPath: t.getSelectionPath(),
			underlyingError: ls
		});
	}
	var Bn = class e {
		constructor(t) {
			this.params = t;
			this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
		}
		modelOrType;
		throwValidationError(t) {
			Fr({
				errors: [t],
				originalMethod: this.params.originalMethod,
				args: this.params.rootArgs ?? {},
				callsite: this.params.callsite,
				errorFormat: this.params.errorFormat,
				clientVersion: this.params.clientVersion,
				globalOmit: this.params.globalOmit
			});
		}
		getSelectionPath() {
			return this.params.selectionPath;
		}
		getArgumentPath() {
			return this.params.argumentPath;
		}
		getArgumentName() {
			return this.params.argumentPath[this.params.argumentPath.length - 1];
		}
		getOutputTypeDescription() {
			if (!(!this.params.modelName || !this.modelOrType)) return {
				name: this.params.modelName,
				fields: this.modelOrType.fields.map((t) => ({
					name: t.name,
					typeName: "boolean",
					isRelation: t.kind === "object"
				}))
			};
		}
		isRawAction() {
			return [
				"executeRaw",
				"queryRaw",
				"runCommandRaw",
				"findRaw",
				"aggregateRaw"
			].includes(this.params.action);
		}
		isPreviewFeatureOn(t) {
			return this.params.previewFeatures.includes(t);
		}
		shouldWrapRawValues() {
			return this.params.wrapRawValues ?? !0;
		}
		getComputedFields() {
			if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
		}
		findField(t) {
			return this.modelOrType?.fields.find((r) => r.name === t);
		}
		nestSelection(t) {
			let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
			return new e({
				...this.params,
				modelName: n,
				selectionPath: this.params.selectionPath.concat(t)
			});
		}
		getGlobalOmit() {
			return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[qe(this.params.modelName)] ?? {} : {};
		}
		shouldApplyGlobalOmit() {
			switch (this.params.action) {
				case "findFirst":
				case "findFirstOrThrow":
				case "findUniqueOrThrow":
				case "findMany":
				case "upsert":
				case "findUnique":
				case "createManyAndReturn":
				case "create":
				case "update":
				case "updateManyAndReturn":
				case "delete": return !0;
				case "executeRaw":
				case "aggregateRaw":
				case "runCommandRaw":
				case "findRaw":
				case "createMany":
				case "deleteMany":
				case "groupBy":
				case "updateMany":
				case "count":
				case "aggregate":
				case "queryRaw": return !1;
				default: $e(this.params.action, "Unknown action");
			}
		}
		nestArgument(t) {
			return new e({
				...this.params,
				argumentPath: this.params.argumentPath.concat(t)
			});
		}
	};
	function ps(e, t) {
		let r = Nt(() => Vc(t));
		Object.defineProperty(e, "dmmf", { get: () => r.get() });
	}
	function Vc(e) {
		return { datamodel: {
			models: Jn(e.models),
			enums: Jn(e.enums),
			types: Jn(e.types)
		} };
	}
	function Jn(e) {
		return Object.entries(e).map(([t, r]) => ({
			name: t,
			...r
		}));
	}
	var Gn = /* @__PURE__ */ new WeakMap();
	var qr = "$$PrismaTypedSql";
	var Kt = class {
		constructor(t, r) {
			Gn.set(this, {
				sql: t,
				values: r
			}), Object.defineProperty(this, qr, { value: qr });
		}
		get sql() {
			return Gn.get(this).sql;
		}
		get values() {
			return Gn.get(this).values;
		}
	};
	function ds(e) {
		return (...t) => new Kt(e, t);
	}
	function Ur(e) {
		return e != null && e[qr] === qr;
	}
	var nu = require_dist();
	var iu = __require("node:async_hooks");
	var ou = __require("node:events");
	function Zt(e) {
		return {
			getKeys() {
				return Object.keys(e);
			},
			getPropertyValue(t) {
				return e[t];
			}
		};
	}
	function ae(e, t) {
		return {
			getKeys() {
				return [e];
			},
			getPropertyValue() {
				return t();
			}
		};
	}
	function We(e) {
		let t = new Ie();
		return {
			getKeys() {
				return e.getKeys();
			},
			getPropertyValue(r) {
				return t.getOrCreate(r, () => e.getPropertyValue(r));
			},
			getPropertyDescriptor(r) {
				return e.getPropertyDescriptor?.(r);
			}
		};
	}
	var jr = {
		enumerable: !0,
		configurable: !0,
		writable: !0
	};
	function Br(e) {
		let t = new Set(e);
		return {
			getPrototypeOf: () => Object.prototype,
			getOwnPropertyDescriptor: () => jr,
			has: (r, n) => t.has(n),
			set: (r, n, i) => t.add(n) && Reflect.set(r, n, i),
			ownKeys: () => [...t]
		};
	}
	var ms = Symbol.for("nodejs.util.inspect.custom");
	function ve(e, t) {
		let r = qc(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, {
			get(o, s) {
				if (n.has(s)) return o[s];
				let a = r.get(s);
				return a ? a.getPropertyValue(s) : o[s];
			},
			has(o, s) {
				if (n.has(s)) return !0;
				let a = r.get(s);
				return a ? a.has?.(s) ?? !0 : Reflect.has(o, s);
			},
			ownKeys(o) {
				let s = fs(Reflect.ownKeys(o), r), a = fs(Array.from(r.keys()), r);
				return [.../* @__PURE__ */ new Set([
					...s,
					...a,
					...n
				])];
			},
			set(o, s, a) {
				return r.get(s)?.getPropertyDescriptor?.(s)?.writable === !1 ? !1 : (n.add(s), Reflect.set(o, s, a));
			},
			getOwnPropertyDescriptor(o, s) {
				let a = Reflect.getOwnPropertyDescriptor(o, s);
				if (a && !a.configurable) return a;
				let u = r.get(s);
				return u ? u.getPropertyDescriptor ? {
					...jr,
					...u?.getPropertyDescriptor(s)
				} : jr : a;
			},
			defineProperty(o, s, a) {
				return n.add(s), Reflect.defineProperty(o, s, a);
			},
			getPrototypeOf: () => Object.prototype
		});
		return i[ms] = function() {
			let o = { ...this };
			return delete o[ms], o;
		}, i;
	}
	function qc(e) {
		let t = /* @__PURE__ */ new Map();
		for (let r of e) {
			let n = r.getKeys();
			for (let i of n) t.set(i, r);
		}
		return t;
	}
	function fs(e, t) {
		return e.filter((r) => t.get(r)?.has?.(r) ?? !0);
	}
	function Et(e) {
		return {
			getKeys() {
				return e;
			},
			has() {
				return !1;
			},
			getPropertyValue() {}
		};
	}
	function gs(e) {
		if (e === void 0) return "";
		let t = bt(e);
		return new ft(0, { colors: Or }).write(t).toString();
	}
	var Xt = "<unknown>";
	function ys(e) {
		return e.split(`
`).reduce(function(r, n) {
			var i = Bc(n) || Jc(n) || Hc(n) || Xc(n) || Kc(n);
			return i && r.push(i), r;
		}, []);
	}
	var Uc = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
	var jc = /\((\S*)(?::(\d+))(?::(\d+))\)/;
	function Bc(e) {
		var t = Uc.exec(e);
		if (!t) return null;
		var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = jc.exec(t[2]);
		return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), {
			file: r ? null : t[2],
			methodName: t[1] || Xt,
			arguments: r ? [t[2]] : [],
			lineNumber: t[3] ? +t[3] : null,
			column: t[4] ? +t[4] : null
		};
	}
	var Qc = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
	function Jc(e) {
		var t = Qc.exec(e);
		return t ? {
			file: t[2],
			methodName: t[1] || Xt,
			arguments: [],
			lineNumber: +t[3],
			column: t[4] ? +t[4] : null
		} : null;
	}
	var Gc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
	var zc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
	function Hc(e) {
		var t = Gc.exec(e);
		if (!t) return null;
		var r = t[3] && t[3].indexOf(" > eval") > -1, n = zc.exec(t[3]);
		return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), {
			file: t[3],
			methodName: t[1] || Xt,
			arguments: t[2] ? t[2].split(",") : [],
			lineNumber: t[4] ? +t[4] : null,
			column: t[5] ? +t[5] : null
		};
	}
	var Wc = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
	function Kc(e) {
		var t = Wc.exec(e);
		return t ? {
			file: t[3],
			methodName: t[1] || Xt,
			arguments: [],
			lineNumber: +t[4],
			column: t[5] ? +t[5] : null
		} : null;
	}
	var Zc = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
	function Xc(e) {
		var t = Zc.exec(e);
		return t ? {
			file: t[2],
			methodName: t[1] || Xt,
			arguments: [],
			lineNumber: +t[3],
			column: t[4] ? +t[4] : null
		} : null;
	}
	var zn = class {
		getLocation() {
			return null;
		}
	};
	var Hn = class {
		_error;
		constructor() {
			this._error = /* @__PURE__ */ new Error();
		}
		getLocation() {
			let t = this._error.stack;
			if (!t) return null;
			let n = ys(t).find((i) => {
				if (!i.file) return !1;
				let o = _n(i.file);
				return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/client.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
			});
			return !n || !n.file ? null : {
				fileName: n.file,
				lineNumber: n.lineNumber,
				columnNumber: n.column
			};
		}
	};
	function je(e) {
		return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new zn() : new Hn();
	}
	var hs = {
		_avg: !0,
		_count: !0,
		_sum: !0,
		_min: !0,
		_max: !0
	};
	function Tt(e = {}) {
		let t = ep(e);
		return Object.entries(t).reduce((n, [i, o]) => (hs[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
	}
	function ep(e = {}) {
		return typeof e._count == "boolean" ? {
			...e,
			_count: { _all: e._count }
		} : e;
	}
	function Qr(e = {}) {
		return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
	}
	function ws(e, t) {
		return t({
			action: "aggregate",
			unpacker: Qr(e),
			argsMapper: Tt
		})(e);
	}
	function tp(e = {}) {
		let { select: t, ...r } = e;
		return typeof t == "object" ? Tt({
			...r,
			_count: t
		}) : Tt({
			...r,
			_count: { _all: !0 }
		});
	}
	function rp(e = {}) {
		return typeof e.select == "object" ? (t) => Qr(e)(t)._count : (t) => Qr(e)(t)._count._all;
	}
	function xs(e, t) {
		return t({
			action: "count",
			unpacker: rp(e),
			argsMapper: tp
		})(e);
	}
	function np(e = {}) {
		let t = Tt(e);
		if (Array.isArray(t.by)) for (let r of t.by) typeof r == "string" && (t.select[r] = !0);
		else typeof t.by == "string" && (t.select[t.by] = !0);
		return t;
	}
	function ip(e = {}) {
		return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
			r._count = r._count._all;
		}), t);
	}
	function bs(e, t) {
		return t({
			action: "groupBy",
			unpacker: ip(e),
			argsMapper: np
		})(e);
	}
	function Ps(e, t, r) {
		if (t === "aggregate") return (n) => ws(n, r);
		if (t === "count") return (n) => xs(n, r);
		if (t === "groupBy") return (n) => bs(n, r);
	}
	function Es(e, t) {
		let n = oo(t.fields.filter((i) => !i.relationName), "name");
		return new Proxy({}, {
			get(i, o) {
				if (o in i || typeof o == "symbol") return i[o];
				let s = n[o];
				if (s) return new zt(e, o, s.type, s.isList, s.kind === "enum");
			},
			...Br(Object.keys(n))
		});
	}
	var Ts = (e) => Array.isArray(e) ? e : e.split(".");
	var Wn = (e, t) => Ts(t).reduce((r, n) => r && r[n], e);
	var vs = (e, t, r) => Ts(t).reduceRight((n, i, o, s) => Object.assign({}, Wn(e, s.slice(0, o)), { [i]: n }), r);
	function op(e, t) {
		return e === void 0 || t === void 0 ? [] : [
			...t,
			"select",
			e
		];
	}
	function sp(e, t, r) {
		return t === void 0 ? e ?? {} : vs(t, r, e || !0);
	}
	function Kn(e, t, r, n, i, o) {
		let s = e._runtimeDataModel.models[t], a;
		return (u) => {
			let m = je(e._errorFormat), P = op(n, i), T = sp(u, o, P), S = r({
				dataPath: P,
				callsite: m
			})(T), I = ap(e, t);
			return new Proxy(S, {
				get(A, M) {
					if (!I.includes(M)) return A[M];
					a ??= Object.fromEntries(s.fields.map((D) => [D.name, D]));
					let q = [
						a[M].type,
						r,
						M
					], E = [P, T];
					return Kn(e, ...q, ...E);
				},
				...Br([...I, ...Object.getOwnPropertyNames(S)])
			});
		};
	}
	function ap(e, t) {
		return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
	}
	var lp = [
		"findUnique",
		"findUniqueOrThrow",
		"findFirst",
		"findFirstOrThrow",
		"create",
		"update",
		"upsert",
		"delete"
	];
	var up = [
		"aggregate",
		"count",
		"groupBy"
	];
	function Zn(e, t) {
		let r = e._extensions.getAllModelExtensions(t) ?? {};
		return ve({}, [
			cp(e, t),
			dp(e, t),
			Zt(r),
			ae("name", () => t),
			ae("$name", () => t),
			ae("$parent", () => e._appliedParent)
		]);
	}
	function cp(e, t) {
		let r = Oe(t), n = Object.keys(mt).concat("count");
		return {
			getKeys() {
				return n;
			},
			getPropertyValue(i) {
				let o = i, s = (a) => (u) => {
					let m = je(e._errorFormat);
					return e._createPrismaPromise((P) => {
						let T = {
							args: u,
							dataPath: [],
							action: o,
							model: t,
							clientMethod: `${r}.${i}`,
							jsModelName: r,
							transaction: P,
							callsite: m
						};
						return e._request({
							...T,
							...a
						});
					}, {
						action: o,
						args: u,
						model: t
					});
				};
				return lp.includes(o) ? Kn(e, t, s) : pp(i) ? Ps(e, i, s) : s({});
			}
		};
	}
	function pp(e) {
		return up.includes(e);
	}
	function dp(e, t) {
		return We(ae("fields", () => {
			let r = e._runtimeDataModel.models[t];
			return Es(t, r);
		}));
	}
	function Ss(e) {
		return e.replace(/^./, (t) => t.toUpperCase());
	}
	var Xn = Symbol();
	function Yt(e) {
		let t = [
			mp(e),
			fp(e),
			ae(Xn, () => e),
			ae("$parent", () => e._appliedParent)
		], r = e._extensions.getAllClientExtensions();
		return r && t.push(Zt(r)), ve(e, t);
	}
	function mp(e) {
		let t = Object.getPrototypeOf(e._originalClient), r = [...new Set(Object.getOwnPropertyNames(t))];
		return {
			getKeys() {
				return r;
			},
			getPropertyValue(n) {
				return e[n];
			}
		};
	}
	function fp(e) {
		let t = Object.keys(e._runtimeDataModel.models), r = t.map(Oe), n = [...new Set(t.concat(r))];
		return We({
			getKeys() {
				return n;
			},
			getPropertyValue(i) {
				let o = Ss(i);
				if (e._runtimeDataModel.models[o] !== void 0) return Zn(e, o);
				if (e._runtimeDataModel.models[i] !== void 0) return Zn(e, i);
			},
			getPropertyDescriptor(i) {
				if (!r.includes(i)) return { enumerable: !1 };
			}
		});
	}
	function As(e) {
		return e[Xn] ? e[Xn] : e;
	}
	function Rs(e) {
		if (typeof e == "function") return e(this);
		return Yt(Object.create(this._originalClient, {
			_extensions: { value: this._extensions.append(e) },
			_appliedParent: {
				value: this,
				configurable: !0
			},
			$on: { value: void 0 }
		}));
	}
	function Cs({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
		let o = i.getAllComputedFields(t);
		if (!o) return e;
		let s = [], a = [];
		for (let u of Object.values(o)) {
			if (n) {
				if (n[u.name]) continue;
				let m = u.needs.filter((P) => n[P]);
				m.length > 0 && a.push(Et(m));
			} else if (r) {
				if (!r[u.name]) continue;
				let m = u.needs.filter((P) => !r[P]);
				m.length > 0 && a.push(Et(m));
			}
			gp(e, u.needs) && s.push(yp(u, ve(e, s), t));
		}
		return s.length > 0 || a.length > 0 ? ve(e, [...s, ...a]) : e;
	}
	function gp(e, t) {
		return t.every((r) => $n(e, r));
	}
	function yp(e, t, r) {
		return We(ae(e.name, () => e.compute(t, r)));
	}
	function Jr({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
		if (Array.isArray(t)) {
			for (let s = 0; s < t.length; s++) t[s] = Jr({
				result: t[s],
				args: r,
				modelName: i,
				runtimeDataModel: n,
				visitor: e
			});
			return t;
		}
		let o = e(t, i, r) ?? t;
		return r.include && Is({
			includeOrSelect: r.include,
			result: o,
			parentModelName: i,
			runtimeDataModel: n,
			visitor: e
		}), r.select && Is({
			includeOrSelect: r.select,
			result: o,
			parentModelName: i,
			runtimeDataModel: n,
			visitor: e
		}), o;
	}
	function Is({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
		for (let [o, s] of Object.entries(e)) {
			if (!s || t[o] == null || fe(s)) continue;
			let u = n.models[r].fields.find((P) => P.name === o);
			if (!u || u.kind !== "object" || !u.relationName) continue;
			let m = typeof s == "object" ? s : {};
			t[o] = Jr({
				visitor: i,
				result: t[o],
				args: m,
				modelName: u.type,
				runtimeDataModel: n
			});
		}
	}
	function ks({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
		return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : Jr({
			result: e,
			args: r ?? {},
			modelName: t,
			runtimeDataModel: i,
			visitor: (a, u, m) => {
				let P = Oe(u);
				return Cs({
					result: a,
					modelName: P,
					select: m.select,
					omit: m.select ? void 0 : {
						...o?.[P],
						...m.omit
					},
					extensions: n
				});
			}
		});
	}
	var Ke = require_dist();
	var Os = [
		"$connect",
		"$disconnect",
		"$on",
		"$use",
		"$extends"
	];
	function Ns(e) {
		if (e instanceof Ke.Sql) return wp(e);
		if (Ur(e)) return xp(e);
		if (Array.isArray(e)) {
			let r = [e[0]];
			for (let n = 1; n < e.length; n++) r[n] = er(e[n]);
			return r;
		}
		let t = {};
		for (let r in e) t[r] = er(e[r]);
		return t;
	}
	function wp(e) {
		return new Ke.Sql(e.strings, e.values);
	}
	function xp(e) {
		return new Kt(e.sql, e.values);
	}
	function er(e) {
		if (typeof e != "object" || e == null || (0, Ke.isObjectEnumValue)(e) || xt(e) || fe(e)) return e;
		if (dt(e)) return new Ke.Decimal(e.toFixed());
		if (ct(e)) return /* @__PURE__ */ new Date(+e);
		if (ArrayBuffer.isView(e)) return e.slice(0);
		if (Array.isArray(e)) {
			let t = e.length, r;
			for (r = Array(t); t--;) r[t] = er(e[t]);
			return r;
		}
		if (typeof e == "object") {
			let t = {};
			for (let r in e) r === "__proto__" ? Object.defineProperty(t, r, {
				value: er(e[r]),
				configurable: !0,
				enumerable: !0,
				writable: !0
			}) : t[r] = er(e[r]);
			return t;
		}
		$e(e, "Unknown value");
	}
	function Ms(e, t, r, n = 0) {
		return e._createPrismaPromise((i) => {
			let o = t.customDataProxyFetch;
			return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({
				model: t.model,
				operation: t.model ? t.action : t.clientMethod,
				args: Ns(t.args ?? {}),
				__internalParams: t,
				query: (s, a = t) => {
					let u = a.customDataProxyFetch;
					return a.customDataProxyFetch = Ls(o, u), a.args = s, Ms(e, a, r, n + 1);
				}
			});
		});
	}
	function Fs(e, t) {
		let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
		if (e._extensions.isEmpty()) return e._executeRequest(t);
		return Ms(e, t, e._extensions.getAllQueryCallbacks(r ?? "$none", o));
	}
	function _s(e) {
		return (t) => {
			let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
			return n.length ? $s(r, n, 0, e) : e(r);
		};
	}
	function $s(e, t, r, n) {
		if (r === t.length) return n(e);
		let i = e.customDataProxyFetch, o = e.requests[0].transaction;
		return t[r]({
			args: {
				queries: e.requests.map((s) => ({
					model: s.modelName,
					operation: s.action,
					args: s.args
				})),
				transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0
			},
			__internalParams: e,
			query(s, a = e) {
				let u = a.customDataProxyFetch;
				return a.customDataProxyFetch = Ls(i, u), $s(a, t, r + 1, n);
			}
		});
	}
	var Ds = (e) => e;
	function Ls(e = Ds, t = Ds) {
		return (r) => e(t(r));
	}
	function qs({ dataPath: e, modelName: t, args: r, runtimeDataModel: n }) {
		let i = {
			modelName: t,
			args: r ?? {}
		}, o = bp(e);
		if (!o || o.length === 0) return i;
		let s = t, a = r ?? {};
		for (let u of o) {
			let m = n.models[s];
			if (!m) return i;
			let P = m.fields.find((T) => T.name === u);
			if (!P) throw new Error(`Could not resolve relation field "${u}" on model "${s}" from dataPath "${e.join(".")}"`);
			if (P.kind !== "object" || !P.relationName) return i;
			s = P.type, a = Pp(a, u);
		}
		return {
			modelName: s,
			args: a
		};
	}
	function bp(e) {
		let t = [];
		for (let r = 0; r < e.length; r += 2) {
			let n = e[r], i = e[r + 1];
			if (n !== "select" && n !== "include" || i === void 0) return;
			t.push(i);
		}
		return t;
	}
	function Pp(e, t) {
		let r = e.select?.[t];
		if (Vs(r)) return r;
		let n = e.include?.[t];
		return Vs(n) ? n : {};
	}
	function Vs(e) {
		return !!e && typeof e == "object" && !Array.isArray(e);
	}
	var Gs = require_dist();
	var tr = require_dist();
	function vt(e) {
		return ArrayBuffer.isView(e) && Object.prototype.toString.call(e) === "[object Uint8Array]";
	}
	function rr(e) {
		return Object.prototype.toString.call(e) === "[object Date]";
	}
	function V(e, t) {
		throw new Error(t);
	}
	function ei(e, t) {
		return e === t || e !== null && t !== null && typeof e == "object" && typeof t == "object" && Object.keys(e).length === Object.keys(t).length && Object.keys(e).every((r) => ei(e[r], t[r]));
	}
	function St(e, t) {
		let r = Object.keys(e), n = Object.keys(t);
		return (r.length < n.length ? r : n).every((o) => {
			if (typeof e[o] == typeof t[o] && typeof e[o] != "object") return e[o] === t[o];
			if (tr.Decimal.isDecimal(e[o]) || tr.Decimal.isDecimal(t[o])) {
				let s = Us(e[o]), a = Us(t[o]);
				return s && a && s.equals(a);
			} else if (vt(e[o]) || vt(t[o])) {
				let s = js(e[o]), a = js(t[o]);
				return s && a && s.equals(a);
			} else {
				if (rr(e[o]) || rr(t[o])) return Bs(e[o])?.getTime() === Bs(t[o])?.getTime();
				if (typeof e[o] == "bigint" || typeof t[o] == "bigint") return Qs(e[o]) === Qs(t[o]);
				if (typeof e[o] == "number" || typeof t[o] == "number") return Js(e[o]) === Js(t[o]);
			}
			return ei(e[o], t[o]);
		});
	}
	function Us(e) {
		return tr.Decimal.isDecimal(e) ? e : typeof e == "number" || typeof e == "string" ? new tr.Decimal(e) : void 0;
	}
	function js(e) {
		return Buffer.isBuffer(e) ? e : vt(e) ? Buffer.from(e.buffer, e.byteOffset, e.byteLength) : typeof e == "string" ? Buffer.from(e, "base64") : void 0;
	}
	function Bs(e) {
		return rr(e) ? e : typeof e == "string" || typeof e == "number" ? new Date(e) : void 0;
	}
	function Qs(e) {
		return typeof e == "bigint" ? e : typeof e == "number" || typeof e == "string" ? BigInt(e) : void 0;
	}
	function Js(e) {
		return typeof e == "number" ? e : typeof e == "string" ? Number(e) : void 0;
	}
	function Se(e) {
		return JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() : ArrayBuffer.isView(r) ? Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString("base64") : r);
	}
	var Yn = 8192;
	function Gr(e, t) {
		if (t.length <= Yn) {
			e.push(...t);
			return;
		}
		for (let r = 0; r < t.length; r += Yn) e.push(...t.slice(r, r + Yn));
	}
	function Ep(e) {
		return e !== null && typeof e == "object" && typeof e.$type == "string";
	}
	function Tp(e, t) {
		let r = {};
		for (let n of Object.keys(e)) r[n] = t(e[n], n);
		return r;
	}
	function Ae(e) {
		return e === null ? e : Array.isArray(e) ? e.map(Ae) : typeof e == "object" ? Ep(e) ? vp(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : Tp(e, Ae) : e;
	}
	function vp({ $type: e, value: t }) {
		switch (e) {
			case "BigInt": return BigInt(t);
			case "Bytes": return new Uint8Array(Buffer.from(t, "base64"));
			case "DateTime": return new Date(t);
			case "Decimal": return new Gs.Decimal(t);
			case "Json": return JSON.parse(t);
			case "Raw": return t;
			case "FieldRef": throw new Error("FieldRef tagged values cannot be deserialized to JavaScript values");
			case "Enum": return t;
			default: V(t, "Unknown tagged value");
		}
	}
	function zr(e) {
		return e.name === "DriverAdapterError" && typeof e.cause == "object";
	}
	var k = {
		Int32: 0,
		Int64: 1,
		Float: 2,
		Double: 3,
		Numeric: 4,
		Boolean: 5,
		Character: 6,
		Text: 7,
		Date: 8,
		Time: 9,
		DateTime: 10,
		Json: 11,
		Enum: 12,
		Bytes: 13,
		Set: 14,
		Uuid: 15,
		Int32Array: 64,
		Int64Array: 65,
		FloatArray: 66,
		DoubleArray: 67,
		NumericArray: 68,
		BooleanArray: 69,
		CharacterArray: 70,
		TextArray: 71,
		DateArray: 72,
		TimeArray: 73,
		DateTimeArray: 74,
		JsonArray: 75,
		EnumArray: 76,
		BytesArray: 77,
		UuidArray: 78,
		UnknownNumber: 128
	};
	var X = class extends Error {
		name = "UserFacingError";
		code;
		meta;
		constructor(t, r, n) {
			super(t), this.code = r, this.meta = n ?? {};
		}
		toQueryResponseErrorObject() {
			return {
				error: this.message,
				user_facing_error: {
					is_panic: !1,
					message: this.message,
					meta: this.meta,
					error_code: this.code
				}
			};
		}
	};
	function Be(e) {
		if (!zr(e)) throw e;
		let t = Cp(e), r = Hs(e);
		if (t !== void 0 && r !== void 0) {
			let n = { driverAdapterError: e };
			throw e.cause.kind === "UniqueConstraintViolation" && e.cause.table && (n.table = e.cause.table), new X(r, t, n);
		}
		throw Rp(e.cause.kind) ? Ap(e) : e;
	}
	function ri(e) {
		throw zr(e) ? Sp(e) : e;
	}
	function Sp(e) {
		return new X(`Raw query failed. Code: \`${e.cause.originalCode ?? "N/A"}\`. Message: \`${zs(e)}\``, "P2010", { driverAdapterError: e });
	}
	function Ap(e) {
		return new X(`Database error. Code: \`${e.cause.originalCode ?? "N/A"}\`. Message: \`${zs(e)}\``, "P2039", { driverAdapterError: e });
	}
	function zs(e) {
		return e.cause.originalMessage ?? Hs(e) ?? e.message ?? "N/A";
	}
	function Rp(e) {
		switch (e) {
			case "postgres":
			case "mysql":
			case "sqlite":
			case "mssql": return !0;
			default: return !1;
		}
	}
	function Cp(e) {
		switch (e.cause.kind) {
			case "AuthenticationFailed": return "P1000";
			case "DatabaseNotReachable": return "P1001";
			case "DatabaseDoesNotExist": return "P1003";
			case "SocketTimeout": return "P1008";
			case "DatabaseAlreadyExists": return "P1009";
			case "DatabaseAccessDenied": return "P1010";
			case "TlsConnectionError": return "P1011";
			case "ConnectionClosed": return "P1017";
			case "TransactionAlreadyClosed": return "P1018";
			case "LengthMismatch": return "P2000";
			case "UniqueConstraintViolation": return "P2002";
			case "ForeignKeyConstraintViolation":
			case "RestrictViolation": return "P2003";
			case "InvalidInputValue": return "P2007";
			case "UnsupportedNativeDataType": return "P2010";
			case "NullConstraintViolation": return "P2011";
			case "ValueOutOfRange": return "P2020";
			case "TableDoesNotExist": return "P2021";
			case "ColumnNotFound": return "P2022";
			case "InvalidIsolationLevel":
			case "InconsistentColumnData": return "P2023";
			case "MissingFullTextSearchIndex": return "P2030";
			case "TransactionWriteConflict": return "P2034";
			case "GenericJs": return "P2036";
			case "TooManyConnections": return "P2037";
			case "postgres":
			case "sqlite":
			case "mysql":
			case "mssql": return;
			default: V(e.cause, `Unknown error: ${Se(e.cause)}`);
		}
	}
	function Hs(e) {
		switch (e.cause.kind) {
			case "AuthenticationFailed": return `Authentication failed against the database server, the provided database credentials for \`${e.cause.user ?? "(not available)"}\` are not valid`;
			case "DatabaseNotReachable": {
				let t = e.cause.host && e.cause.port ? `${e.cause.host}:${e.cause.port}` : e.cause.host;
				return `Can't reach database server${t ? ` at ${t}` : ""}`;
			}
			case "DatabaseDoesNotExist": return `Database \`${e.cause.db ?? "(not available)"}\` does not exist on the database server`;
			case "SocketTimeout": return "Operation has timed out";
			case "DatabaseAlreadyExists": return `Database \`${e.cause.db ?? "(not available)"}\` already exists on the database server`;
			case "DatabaseAccessDenied": return `User was denied access on the database \`${e.cause.db ?? "(not available)"}\``;
			case "TlsConnectionError": return `Error opening a TLS connection: ${e.cause.reason}`;
			case "ConnectionClosed": return "Server has closed the connection.";
			case "TransactionAlreadyClosed": return e.cause.cause;
			case "LengthMismatch": return `The provided value for the column is too long for the column's type. Column: ${e.cause.column ?? "(not available)"}`;
			case "UniqueConstraintViolation": return `Unique constraint failed on the ${ti(e.cause.constraint)}`;
			case "ForeignKeyConstraintViolation":
			case "RestrictViolation": return `Foreign key constraint violated on the ${ti(e.cause.constraint)}`;
			case "UnsupportedNativeDataType": return `Failed to deserialize column of type '${e.cause.type}'. If you're using $queryRaw and this column is explicitly marked as \`Unsupported\` in your Prisma schema, try casting this column to any supported Prisma type such as \`String\`.`;
			case "NullConstraintViolation": return `Null constraint violation on the ${ti(e.cause.constraint)}`;
			case "ValueOutOfRange": return `Value out of range for the type: ${e.cause.cause}`;
			case "TableDoesNotExist": return `The table \`${e.cause.table ?? "(not available)"}\` does not exist in the current database.`;
			case "ColumnNotFound": return `The column \`${e.cause.column ?? "(not available)"}\` does not exist in the current database.`;
			case "InvalidIsolationLevel": return `Error in connector: Conversion error: ${e.cause.level}`;
			case "InconsistentColumnData": return `Inconsistent column data: ${e.cause.cause}`;
			case "MissingFullTextSearchIndex": return "Cannot find a fulltext index to use for the native search, try adding a @@fulltext([Fields...]) to your schema";
			case "TransactionWriteConflict": return "Transaction failed due to a write conflict or a deadlock. Please retry your transaction";
			case "GenericJs": return `Error in external connector (id ${e.cause.id})`;
			case "TooManyConnections": return `Too many database connections opened: ${e.cause.cause}`;
			case "InvalidInputValue": return `Invalid input value: ${e.cause.message}`;
			case "sqlite":
			case "postgres":
			case "mysql":
			case "mssql": return;
			default: V(e.cause, `Unknown error: ${Se(e.cause)}`);
		}
	}
	function ti(e) {
		return e && "fields" in e ? `fields: (${e.fields.map((t) => `\`${t}\``).join(", ")})` : e && "index" in e ? `constraint: \`${e.index}\`` : e && "foreignKey" in e ? "foreign key" : "(not available)";
	}
	function Ip(e) {
		if (typeof e != "object" || e === null) return !1;
		let t = e;
		return "$type" in t && t.$type === "Param" || "prisma__type" in t && t.prisma__type === "param";
	}
	function kp(e) {
		return "prisma__type" in e ? e.prisma__value?.name : e.value.name;
	}
	function Op(e, t) {
		let r = {};
		for (let [n, i] of Object.entries(e)) if (r[n] = i, Ip(i)) {
			let o = kp(i);
			o && o in t && (r[n] = t[o]);
		}
		return r;
	}
	function Ws(e, t, r = {}) {
		let n = e.map((o) => t.keys.reduce((s, a) => (s[a] = Ae(o[a]), s), {})), i = new Set(t.nestedSelection);
		return t.arguments.map((o) => {
			let s = Op(o, r), a = n.findIndex((u) => St(u, s));
			if (a === -1) return t.expectNonEmpty ? new X("An operation failed because it depends on one or more records that were required but not found", "P2025") : null;
			{
				let u = Object.entries(e[a]).filter(([m]) => i.has(m));
				return Object.fromEntries(u);
			}
		});
	}
	var Xs = require_dist();
	var Q = class extends X {
		name = "DataMapperError";
		constructor(t, r) {
			super(t, "P2023", r);
		}
	};
	var Ks = /* @__PURE__ */ new WeakMap();
	function Np(e) {
		let t = Ks.get(e);
		return t || (t = Object.entries(e), Ks.set(e, t)), t;
	}
	function ii(e, t, r) {
		switch (t.type) {
			case "affectedRows":
				if (typeof e != "number") throw new Q(`Expected an affected rows count, got: ${typeof e} (${e})`);
				return { count: e };
			case "object": return oi(e, t.fields, r, t.skipNulls);
			case "field": return ni(e, "<result>", t.fieldType, r);
			default: V(t, `Invalid data mapping type: '${t.type}'`);
		}
	}
	function oi(e, t, r, n) {
		if (e === null) return null;
		if (Array.isArray(e)) {
			let i = e;
			return n && (i = i.filter((o) => o !== null)), i.map((o) => Zs(o, t, r));
		}
		if (typeof e == "object") return Zs(e, t, r);
		if (typeof e == "string") {
			let i;
			try {
				i = JSON.parse(e);
			} catch (o) {
				throw new Q("Expected an array or object, got a string that is not valid JSON", { cause: o });
			}
			return oi(i, t, r, n);
		}
		throw new Q(`Expected an array or an object, got: ${typeof e}`);
	}
	function Zs(e, t, r) {
		if (typeof e != "object") throw new Q(`Expected an object, but got '${typeof e}'`);
		let n = {};
		for (let [i, o] of Np(t)) switch (o.type) {
			case "affectedRows": throw new Q(`Unexpected 'AffectedRows' node in data mapping for field '${i}'`);
			case "object": {
				let { serializedName: s, fields: a, skipNulls: u } = o;
				if (s !== null && !Object.hasOwn(e, s)) throw new Q(`Missing data field (Object): '${i}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e)}`);
				n[i] = oi(s !== null ? e[s] : e, a, r, u);
				break;
			}
			case "field":
				{
					let s = o.dbName;
					if (Object.hasOwn(e, s)) n[i] = Dp(e[s], s, o.fieldType, r);
					else throw new Q(`Missing data field (Value): '${s}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e)}`);
				}
				break;
			default: V(o, `DataMapper: Invalid data mapping node type: '${o.type}'`);
		}
		return n;
	}
	function Dp(e, t, r, n) {
		return e === null ? r.arity === "list" ? [] : null : r.arity === "list" ? e.map((o, s) => ni(o, `${t}[${s}]`, r, n)) : ni(e, t, r, n);
	}
	function ni(e, t, r, n) {
		switch (r.type) {
			case "unsupported": return e;
			case "string":
				if (typeof e != "string") throw new Q(`Expected a string in column '${t}', got ${typeof e}: ${e}`);
				return e;
			case "int": switch (typeof e) {
				case "number": return Math.trunc(e);
				case "string": {
					let i = Math.trunc(Number(e));
					if (Number.isNaN(i) || !Number.isFinite(i)) throw new Q(`Expected an integer in column '${t}', got string: ${e}`);
					if (!Number.isSafeInteger(i)) throw new Q(`Integer value in column '${t}' is too large to represent as a JavaScript number without loss of precision, got: ${e}. Consider using BigInt type.`);
					return i;
				}
				default: throw new Q(`Expected an integer in column '${t}', got ${typeof e}: ${e}`);
			}
			case "bigint":
				if (typeof e != "number" && typeof e != "string") throw new Q(`Expected a bigint in column '${t}', got ${typeof e}: ${e}`);
				return {
					$type: "BigInt",
					value: e
				};
			case "float":
				if (typeof e == "number") return e;
				if (typeof e == "string") {
					let i = Number(e);
					if (Number.isNaN(i) && !/^[-+]?nan$/.test(e.toLowerCase())) throw new Q(`Expected a float in column '${t}', got string: ${e}`);
					return i;
				}
				throw new Q(`Expected a float in column '${t}', got ${typeof e}: ${e}`);
			case "boolean":
				if (typeof e == "boolean") return e;
				if (typeof e == "number") return e === 1;
				if (typeof e == "string") {
					if (e === "true" || e === "TRUE" || e === "1") return !0;
					if (e === "false" || e === "FALSE" || e === "0") return !1;
					throw new Q(`Expected a boolean in column '${t}', got ${typeof e}: ${e}`);
				}
				if (Array.isArray(e) || vt(e)) {
					for (let i of e) if (i !== 0) return !0;
					return !1;
				}
				throw new Q(`Expected a boolean in column '${t}', got ${typeof e}: ${e}`);
			case "decimal":
				if (typeof e != "number" && typeof e != "string" && !Xs.Decimal.isDecimal(e)) throw new Q(`Expected a decimal in column '${t}', got ${typeof e}: ${e}`);
				return {
					$type: "Decimal",
					value: e
				};
			case "datetime":
				if (typeof e == "string") return {
					$type: "DateTime",
					value: Fp(e)
				};
				if (typeof e == "number" || rr(e)) return {
					$type: "DateTime",
					value: e
				};
				throw new Q(`Expected a date in column '${t}', got ${typeof e}: ${e}`);
			case "object": return {
				$type: "Json",
				value: Se(e)
			};
			case "json": return {
				$type: "Json",
				value: `${e}`
			};
			case "bytes":
				switch (r.encoding) {
					case "base64":
						if (typeof e != "string") throw new Q(`Expected a base64-encoded byte array in column '${t}', got ${typeof e}: ${e}`);
						return {
							$type: "Bytes",
							value: e
						};
					case "hex":
						if (typeof e != "string" || !e.startsWith("\\x")) throw new Q(`Expected a hex-encoded byte array in column '${t}', got ${typeof e}: ${e}`);
						return {
							$type: "Bytes",
							value: Buffer.from(e.slice(2), "hex").toString("base64")
						};
					case "array":
						if (Array.isArray(e)) return {
							$type: "Bytes",
							value: Buffer.from(e).toString("base64")
						};
						if (vt(e)) return {
							$type: "Bytes",
							value: Buffer.from(e).toString("base64")
						};
						throw new Q(`Expected a byte array in column '${t}', got ${typeof e}: ${e}`);
					default: V(r.encoding, `DataMapper: Unknown bytes encoding: ${r.encoding}`);
				}
				break;
			case "enum": {
				let i = n[r.name];
				if (i === void 0) throw new Q(`Unknown enum '${r.name}'`);
				let o = i[`${e}`];
				if (o === void 0) throw new Q(`Value '${e}' not found in enum '${r.name}'`);
				return o;
			}
			default: V(r, `DataMapper: Unknown result type: ${r.type}`);
		}
	}
	var Mp = /\d{2}:\d{2}:\d{2}(?:\.\d+)?(Z|[+-]\d{2}(:?\d{2})?)?$/;
	function Fp(e) {
		let t = Mp.exec(e);
		if (t === null) return `${e}T00:00:00Z`;
		let r = e, [n, i, o] = t;
		if (i !== void 0 && i !== "Z" && o === void 0 ? r = `${e}:00` : i === void 0 && (r = `${e}Z`), n.length === e.length) return `1970-01-01T${r}`;
		let s = t.index - 1;
		return r[s] === " " && (r = `${r.slice(0, s)}T${r.slice(s + 1)}`), r;
	}
	function ge(e) {
		if (typeof e != "object") return e;
		var t, r, n = Object.prototype.toString.call(e);
		if (n === "[object Object]") {
			if (e.constructor !== Object && typeof e.constructor == "function") {
				r = new e.constructor();
				for (t in e) e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = ge(e[t]));
			} else {
				r = {};
				for (t in e) t === "__proto__" ? Object.defineProperty(r, t, {
					value: ge(e[t]),
					configurable: !0,
					enumerable: !0,
					writable: !0
				}) : r[t] = ge(e[t]);
			}
			return r;
		}
		if (n === "[object Array]") {
			for (t = e.length, r = Array(t); t--;) r[t] = ge(e[t]);
			return r;
		}
		return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(i) {
			r.add(ge(i));
		}), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(i, o) {
			r.set(ge(o), ge(i));
		}), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : n === "[object DataView]" ? new e.constructor(ge(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
	}
	function _p(e) {
		let t = Object.entries(e);
		return t.length === 0 ? "" : (t.sort(([n], [i]) => n.localeCompare(i)), `/*${t.map(([n, i]) => {
			return `${encodeURIComponent(n)}='${encodeURIComponent(i).replace(/'/g, "\\'")}'`;
		}).join(",")}*/`);
	}
	function Hr(e, t) {
		let r = {};
		for (let n of e) {
			let i = n(ge(t));
			for (let [o, s] of Object.entries(i)) s !== void 0 && (r[o] = s);
		}
		return r;
	}
	function Ys(e, t) {
		return _p(Hr(e, t));
	}
	function ea(e, t) {
		return t ? `${e} ${t}` : e;
	}
	var nr;
	(function(e) {
		e[e.INTERNAL = 0] = "INTERNAL", e[e.SERVER = 1] = "SERVER", e[e.CLIENT = 2] = "CLIENT", e[e.PRODUCER = 3] = "PRODUCER", e[e.CONSUMER = 4] = "CONSUMER";
	})(nr || (nr = {}));
	function $p(e) {
		switch (e) {
			case "postgresql":
			case "postgres":
			case "prisma+postgres": return "postgresql";
			case "sqlserver": return "mssql";
			case "mysql":
			case "sqlite":
			case "cockroachdb":
			case "mongodb": return e;
			default: V(e, `Unknown provider: ${e}`);
		}
	}
	async function Wr({ query: e, tracingHelper: t, provider: r, onQuery: n, execute: i }) {
		let o = n === void 0 ? i : async () => {
			let s = /* @__PURE__ */ new Date(), a = performance.now(), u = await i();
			return n({
				timestamp: s,
				duration: performance.now() - a,
				query: e.sql,
				params: e.args
			}), u;
		};
		return t.isEnabled() ? await t.runInChildSpan({
			name: "db_query",
			kind: nr.CLIENT,
			attributes: {
				"db.query.text": e.sql,
				"db.system.name": $p(r)
			}
		}, o) : o();
	}
	function Ze(e, t) {
		var r = "000000000" + e;
		return r.substr(r.length - t);
	}
	var ta = Pe(__require("node:os"), 1);
	function Lp() {
		try {
			return ta.default.hostname();
		} catch {
			return process.env._CLUSTER_NETWORK_NAME_ || process.env.COMPUTERNAME || "hostname";
		}
	}
	var ra = 2;
	var Vp = Ze(process.pid.toString(36), ra);
	var na = Lp();
	var qp = na.length;
	var Up = Ze(na.split("").reduce(function(e, t) {
		return +e + t.charCodeAt(0);
	}, +qp + 36).toString(36), ra);
	function si() {
		return Vp + Up;
	}
	function Kr(e) {
		return typeof e == "string" && /^c[a-z0-9]{20,32}$/.test(e);
	}
	function ai(e) {
		let n = Math.pow(36, 4), i = 0;
		function o() {
			return Ze((Math.random() * n << 0).toString(36), 4);
		}
		function s() {
			return i = i < n ? i : 0, i++, i - 1;
		}
		function a() {
			var u = "c", m = (/* @__PURE__ */ new Date()).getTime().toString(36), P = Ze(s().toString(36), 4), T = e(), S = o() + o();
			return u + m + P + T + S;
		}
		return a.fingerprint = e, a.isCuid = Kr, a;
	}
	var ia = ai(si);
	var Zr = BigInt(4294967295);
	var oa = BigInt(32);
	function Bp(e, t = !1) {
		return t ? {
			h: Number(e & Zr),
			l: Number(e >> oa & Zr)
		} : {
			h: Number(e >> oa & Zr) | 0,
			l: Number(e & Zr) | 0
		};
	}
	function sa(e, t = !1) {
		let r = e.length, n = new Uint32Array(r), i = new Uint32Array(r);
		for (let o = 0; o < r; o++) {
			let { h: s, l: a } = Bp(e[o], t);
			[n[o], i[o]] = [s, a];
		}
		return [n, i];
	}
	var aa = (e, t, r) => e << r | t >>> 32 - r;
	var la = (e, t, r) => t << r | e >>> 32 - r;
	var ua = (e, t, r) => t << r - 32 | e >>> 64 - r;
	var ca = (e, t, r) => e << r - 32 | t >>> 64 - r;
	function Qp(e) {
		return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in e && e.BYTES_PER_ELEMENT === 1;
	}
	function Xr(e, t = "") {
		if (typeof e != "number") {
			let r = t && `"${t}" `;
			throw new TypeError(`${r}expected number, got ${typeof e}`);
		}
		if (!Number.isSafeInteger(e) || e < 0) {
			let r = t && `"${t}" `;
			throw new RangeError(`${r}expected integer >= 0, got ${e}`);
		}
	}
	function Yr(e, t, r = "") {
		let n = Qp(e), i = e?.length, o = t !== void 0;
		if (!n || o && i !== t) {
			let s = r && `"${r}" `, a = o ? ` of length ${t}` : "", u = n ? `length=${i}` : `type=${typeof e}`, m = s + "expected Uint8Array" + a + ", got " + u;
			throw n ? new RangeError(m) : new TypeError(m);
		}
		return e;
	}
	function li(e, t = !0) {
		if (e.destroyed) throw new Error("Hash instance has been destroyed");
		if (t && e.finished) throw new Error("Hash#digest() has already been called");
	}
	function pa(e, t) {
		Yr(e, void 0, "digestInto() output");
		let r = t.outputLen;
		if (e.length < r) throw new RangeError("\"digestInto() output\" expected to be of length >=" + r);
	}
	function da(e) {
		return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
	}
	function ui(...e) {
		for (let t = 0; t < e.length; t++) e[t].fill(0);
	}
	var Jp = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
	function Gp(e) {
		return e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
	}
	function zp(e) {
		for (let t = 0; t < e.length; t++) e[t] = Gp(e[t]);
		return e;
	}
	var ci = Jp ? (e) => e : zp;
	function ma(e, t = {}) {
		let r = (i, o) => e(o).update(i).digest(), n = e(void 0);
		return r.outputLen = n.outputLen, r.blockLen = n.blockLen, r.canXOF = n.canXOF, r.create = (i) => e(i), Object.assign(r, t), Object.freeze(r);
	}
	var fa = (e) => ({ oid: Uint8Array.from([
		6,
		9,
		96,
		134,
		72,
		1,
		101,
		3,
		4,
		2,
		e
	]) });
	var Hp = BigInt(0);
	var ir = BigInt(1);
	var Wp = BigInt(2);
	var Kp = BigInt(7);
	var Zp = BigInt(256);
	var Xp = BigInt(113);
	var ha = [];
	var wa = [];
	var xa = [];
	for (let e = 0, t = ir, r = 1, n = 0; e < 24; e++) {
		[r, n] = [n, (2 * r + 3 * n) % 5], ha.push(2 * (5 * n + r)), wa.push((e + 1) * (e + 2) / 2 % 64);
		let i = Hp;
		for (let o = 0; o < 7; o++) t = (t << ir ^ (t >> Kp) * Xp) % Zp, t & Wp && (i ^= ir << (ir << BigInt(o)) - ir);
		xa.push(i);
	}
	var ba = sa(xa, !0);
	var Yp = ba[0];
	var ed = ba[1];
	var ga = (e, t, r) => r > 32 ? ua(e, t, r) : aa(e, t, r);
	var ya = (e, t, r) => r > 32 ? ca(e, t, r) : la(e, t, r);
	function td(e, t = 24) {
		if (Xr(t, "rounds"), t < 1 || t > 24) throw new Error("\"rounds\" expected integer 1..24");
		let r = /* @__PURE__ */ new Uint32Array(10);
		for (let n = 24 - t; n < 24; n++) {
			for (let s = 0; s < 10; s++) r[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40];
			for (let s = 0; s < 10; s += 2) {
				let a = (s + 8) % 10, u = (s + 2) % 10, m = r[u], P = r[u + 1], T = ga(m, P, 1) ^ r[a], S = ya(m, P, 1) ^ r[a + 1];
				for (let I = 0; I < 50; I += 10) e[s + I] ^= T, e[s + I + 1] ^= S;
			}
			let i = e[2], o = e[3];
			for (let s = 0; s < 24; s++) {
				let a = wa[s], u = ga(i, o, a), m = ya(i, o, a), P = ha[s];
				i = e[P], o = e[P + 1], e[P] = u, e[P + 1] = m;
			}
			for (let s = 0; s < 50; s += 10) {
				let a = e[s], u = e[s + 1], m = e[s + 2], P = e[s + 3];
				e[s] ^= ~e[s + 2] & e[s + 4], e[s + 1] ^= ~e[s + 3] & e[s + 5], e[s + 2] ^= ~e[s + 4] & e[s + 6], e[s + 3] ^= ~e[s + 5] & e[s + 7], e[s + 4] ^= ~e[s + 6] & e[s + 8], e[s + 5] ^= ~e[s + 7] & e[s + 9], e[s + 6] ^= ~e[s + 8] & a, e[s + 7] ^= ~e[s + 9] & u, e[s + 8] ^= ~a & m, e[s + 9] ^= ~u & P;
			}
			e[0] ^= Yp[n], e[1] ^= ed[n];
		}
		ui(r);
	}
	var pi = class e {
		state;
		pos = 0;
		posOut = 0;
		finished = !1;
		state32;
		destroyed = !1;
		blockLen;
		suffix;
		outputLen;
		canXOF;
		enableXOF = !1;
		rounds;
		constructor(t, r, n, i = !1, o = 24) {
			if (this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = i, this.canXOF = i, this.rounds = o, Xr(n, "outputLen"), !(0 < t && t < 200)) throw new Error("only keccak-f1600 function is supported");
			this.state = /* @__PURE__ */ new Uint8Array(200), this.state32 = da(this.state);
		}
		clone() {
			return this._cloneInto();
		}
		keccak() {
			ci(this.state32), td(this.state32, this.rounds), ci(this.state32), this.posOut = 0, this.pos = 0;
		}
		update(t) {
			li(this), Yr(t);
			let { blockLen: r, state: n } = this, i = t.length;
			for (let o = 0; o < i;) {
				let s = Math.min(r - this.pos, i - o);
				for (let a = 0; a < s; a++) n[this.pos++] ^= t[o++];
				this.pos === r && this.keccak();
			}
			return this;
		}
		finish() {
			if (this.finished) return;
			this.finished = !0;
			let { state: t, suffix: r, pos: n, blockLen: i } = this;
			t[n] ^= r, r & 128 && n === i - 1 && this.keccak(), t[i - 1] ^= 128, this.keccak();
		}
		writeInto(t) {
			li(this, !1), Yr(t), this.finish();
			let r = this.state, { blockLen: n } = this;
			for (let i = 0, o = t.length; i < o;) {
				this.posOut >= n && this.keccak();
				let s = Math.min(n - this.posOut, o - i);
				t.set(r.subarray(this.posOut, this.posOut + s), i), this.posOut += s, i += s;
			}
			return t;
		}
		xofInto(t) {
			if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
			return this.writeInto(t);
		}
		xof(t) {
			return Xr(t), this.xofInto(new Uint8Array(t));
		}
		digestInto(t) {
			if (pa(t, this), this.finished) throw new Error("digest() was already called");
			this.writeInto(t.subarray(0, this.outputLen)), this.destroy();
		}
		digest() {
			let t = new Uint8Array(this.outputLen);
			return this.digestInto(t), t;
		}
		destroy() {
			this.destroyed = !0, ui(this.state);
		}
		_cloneInto(t) {
			let { blockLen: r, suffix: n, outputLen: i, rounds: o, enableXOF: s } = this;
			return t ||= new e(r, n, i, s, o), t.blockLen = r, t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = n, t.outputLen = i, t.enableXOF = s, t.canXOF = this.canXOF, t.destroyed = this.destroyed, t;
		}
	};
	var rd = (e, t, r, n = {}) => ma(() => new pi(t, e, r), n);
	var Pa = rd(6, 72, 64, fa(10));
	var nd = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;
	var di = Math.ceil;
	var he = Math.floor;
	var le = "[BigNumber Error] ";
	var Ea = le + "Number primitive has more than 15 significant digits: ";
	var Re = 0x5af3107a4000;
	var N = 14;
	var mi = 9007199254740991;
	var fi = [
		1,
		10,
		100,
		1e3,
		1e4,
		1e5,
		1e6,
		1e7,
		1e8,
		1e9,
		1e10,
		1e11,
		0xe8d4a51000,
		0x9184e72a000
	];
	var Qe = 1e7;
	var Y = 1e9;
	function Ta(e) {
		var t, r, n, i = E.prototype = {
			constructor: E,
			toString: null,
			valueOf: null
		}, o = new E(1), s = 20, a = 4, u = -7, m = 21, P = -1e7, T = 1e7, S = !1, I = 1, A = 0, M = {
			prefix: "",
			groupSize: 3,
			secondaryGroupSize: 0,
			groupSeparator: ",",
			decimalSeparator: ".",
			fractionGroupSize: 0,
			fractionGroupSeparator: "\xA0",
			suffix: ""
		}, L = "0123456789abcdefghijklmnopqrstuvwxyz", q = !0;
		function E(l, c) {
			var p, h, f, y, b, d, g, x, w = this;
			if (!(w instanceof E)) return new E(l, c);
			if (c == null) {
				if (l && l._isBigNumber === !0) {
					w.s = l.s, !l.c || l.e > T ? w.c = w.e = null : l.e < P ? w.c = [w.e = 0] : (w.e = l.e, w.c = l.c.slice());
					return;
				}
				if ((d = typeof l == "number") && l * 0 == 0) {
					if (w.s = 1 / l < 0 ? (l = -l, -1) : 1, l === ~~l) {
						for (y = 0, b = l; b >= 10; b /= 10, y++);
						y > T ? w.c = w.e = null : (w.e = y, w.c = [l]);
						return;
					}
					x = String(l);
				} else {
					if (!nd.test(x = String(l))) return n(w, x, d);
					w.s = x.charCodeAt(0) == 45 ? (x = x.slice(1), -1) : 1;
				}
				(y = x.indexOf(".")) > -1 && (x = x.replace(".", "")), (b = x.search(/e/i)) > 0 ? (y < 0 && (y = b), y += +x.slice(b + 1), x = x.substring(0, b)) : y < 0 && (y = x.length);
			} else {
				if (J(c, 2, L.length, "Base"), c == 10 && q) return w = new E(l), ie(w, s + w.e + 1, a);
				if (x = String(l), d = typeof l == "number") {
					if (l * 0 != 0) return n(w, x, d, c);
					if (w.s = 1 / l < 0 ? (x = x.slice(1), -1) : 1, E.DEBUG && x.replace(/^0\.0*|\./, "").length > 15) throw Error(Ea + l);
				} else w.s = x.charCodeAt(0) === 45 ? (x = x.slice(1), -1) : 1;
				for (p = L.slice(0, c), y = b = 0, g = x.length; b < g; b++) if (p.indexOf(h = x.charAt(b)) < 0) {
					if (h == ".") {
						if (b > y) {
							y = g;
							continue;
						}
					} else if (!f && (x == x.toUpperCase() && (x = x.toLowerCase()) || x == x.toLowerCase() && (x = x.toUpperCase()))) {
						f = !0, b = -1, y = 0;
						continue;
					}
					return n(w, String(l), d, c);
				}
				d = !1, x = r(x, c, 10, w.s), (y = x.indexOf(".")) > -1 ? x = x.replace(".", "") : y = x.length;
			}
			for (b = 0; x.charCodeAt(b) === 48; b++);
			for (g = x.length; x.charCodeAt(--g) === 48;);
			if (x = x.slice(b, ++g)) {
				if (g -= b, d && E.DEBUG && g > 15 && (l > mi || l !== he(l))) throw Error(Ea + w.s * l);
				if ((y = y - b - 1) > T) w.c = w.e = null;
				else if (y < P) w.c = [w.e = 0];
				else {
					if (w.e = y, w.c = [], b = (y + 1) % N, y < 0 && (b += N), b < g) {
						for (b && w.c.push(+x.slice(0, b)), g -= N; b < g;) w.c.push(+x.slice(b, b += N));
						b = N - (x = x.slice(b)).length;
					} else b -= g;
					for (; b--; x += "0");
					w.c.push(+x);
				}
			} else w.c = [w.e = 0];
		}
		E.clone = Ta, E.ROUND_UP = 0, E.ROUND_DOWN = 1, E.ROUND_CEIL = 2, E.ROUND_FLOOR = 3, E.ROUND_HALF_UP = 4, E.ROUND_HALF_DOWN = 5, E.ROUND_HALF_EVEN = 6, E.ROUND_HALF_CEIL = 7, E.ROUND_HALF_FLOOR = 8, E.EUCLID = 9, E.config = E.set = function(l) {
			var c, p;
			if (l != null) if (typeof l == "object") {
				if (l.hasOwnProperty(c = "DECIMAL_PLACES") && (p = l[c], J(p, 0, Y, c), s = p), l.hasOwnProperty(c = "ROUNDING_MODE") && (p = l[c], J(p, 0, 8, c), a = p), l.hasOwnProperty(c = "EXPONENTIAL_AT") && (p = l[c], p && p.pop ? (J(p[0], -Y, 0, c), J(p[1], 0, Y, c), u = p[0], m = p[1]) : (J(p, -Y, Y, c), u = -(m = p < 0 ? -p : p))), l.hasOwnProperty(c = "RANGE")) if (p = l[c], p && p.pop) J(p[0], -Y, -1, c), J(p[1], 1, Y, c), P = p[0], T = p[1];
				else if (J(p, -Y, Y, c), p) P = -(T = p < 0 ? -p : p);
				else throw Error(le + c + " cannot be zero: " + p);
				if (l.hasOwnProperty(c = "CRYPTO")) if (p = l[c], p === !!p) if (p) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) S = p;
				else throw S = !p, Error(le + "crypto unavailable");
				else S = p;
				else throw Error(le + c + " not true or false: " + p);
				if (l.hasOwnProperty(c = "MODULO_MODE") && (p = l[c], J(p, 0, 9, c), I = p), l.hasOwnProperty(c = "POW_PRECISION") && (p = l[c], J(p, 0, Y, c), A = p), l.hasOwnProperty(c = "FORMAT")) if (p = l[c], typeof p == "object") M = p;
				else throw Error(le + c + " not an object: " + p);
				if (l.hasOwnProperty(c = "ALPHABET")) if (p = l[c], typeof p == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(p)) q = p.slice(0, 10) == "0123456789", L = p;
				else throw Error(le + c + " invalid: " + p);
			} else throw Error(le + "Object expected: " + l);
			return {
				DECIMAL_PLACES: s,
				ROUNDING_MODE: a,
				EXPONENTIAL_AT: [u, m],
				RANGE: [P, T],
				CRYPTO: S,
				MODULO_MODE: I,
				POW_PRECISION: A,
				FORMAT: M,
				ALPHABET: L
			};
		}, E.isBigNumber = function(l) {
			if (!l || l._isBigNumber !== !0) return !1;
			if (!E.DEBUG) return !0;
			var c, p, h = l.c, f = l.e, y = l.s;
			e: if ({}.toString.call(h) == "[object Array]") {
				if ((y === 1 || y === -1) && f >= -Y && f <= Y && f === he(f)) {
					if (h[0] === 0) {
						if (f === 0 && h.length === 1) return !0;
						break e;
					}
					if (c = (f + 1) % N, c < 1 && (c += N), String(h[0]).length == c) {
						for (c = 0; c < h.length; c++) if (p = h[c], p < 0 || p >= Re || p !== he(p)) break e;
						if (p !== 0) return !0;
					}
				}
			} else if (h === null && f === null && (y === null || y === 1 || y === -1)) return !0;
			throw Error(le + "Invalid BigNumber: " + l);
		}, E.maximum = E.max = function() {
			return H(arguments, -1);
		}, E.minimum = E.min = function() {
			return H(arguments, 1);
		}, E.random = function() {
			var l = 9007199254740992, c = Math.random() * l & 2097151 ? function() {
				return he(Math.random() * l);
			} : function() {
				return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
			};
			return function(p) {
				var h, f, y, b, d, g = 0, x = [], w = new E(o);
				if (p == null ? p = s : J(p, 0, Y), b = di(p / N), S) if (crypto.getRandomValues) {
					for (h = crypto.getRandomValues(new Uint32Array(b *= 2)); g < b;) d = h[g] * 131072 + (h[g + 1] >>> 11), d >= 9e15 ? (f = crypto.getRandomValues(/* @__PURE__ */ new Uint32Array(2)), h[g] = f[0], h[g + 1] = f[1]) : (x.push(d % 0x5af3107a4000), g += 2);
					g = b / 2;
				} else if (crypto.randomBytes) {
					for (h = crypto.randomBytes(b *= 7); g < b;) d = (h[g] & 31) * 281474976710656 + h[g + 1] * 1099511627776 + h[g + 2] * 4294967296 + h[g + 3] * 16777216 + (h[g + 4] << 16) + (h[g + 5] << 8) + h[g + 6], d >= 9e15 ? crypto.randomBytes(7).copy(h, g) : (x.push(d % 0x5af3107a4000), g += 7);
					g = b / 7;
				} else throw S = !1, Error(le + "crypto unavailable");
				if (!S) for (; g < b;) d = c(), d < 9e15 && (x[g++] = d % 0x5af3107a4000);
				for (b = x[--g], p %= N, b && p && (d = fi[N - p], x[g] = he(b / d) * d); x[g] === 0; x.pop(), g--);
				if (g < 0) x = [y = 0];
				else {
					for (y = -1; x[0] === 0; x.splice(0, 1), y -= N);
					for (g = 1, d = x[0]; d >= 10; d /= 10, g++);
					g < N && (y -= N - g);
				}
				return w.e = y, w.c = x, w;
			};
		}(), E.sum = function() {
			for (var l = 1, c = arguments, p = new E(c[0]); l < c.length;) p = p.plus(c[l++]);
			return p;
		}, r = function() {
			var l = "0123456789";
			function c(p, h, f, y) {
				for (var b, d = [0], g, x = 0, w = p.length; x < w;) {
					for (g = d.length; g--; d[g] *= h);
					for (d[0] += y.indexOf(p.charAt(x++)), b = 0; b < d.length; b++) d[b] > f - 1 && (d[b + 1] ?? (d[b + 1] = 0), d[b + 1] += d[b] / f | 0, d[b] %= f);
				}
				return d.reverse();
			}
			return function(p, h, f, y, b) {
				var d, g, x, w, v, R, C, $, G = p.indexOf("."), W = s, F = a;
				for (G >= 0 && (w = A, A = 0, p = p.replace(".", ""), $ = new E(h), R = $.pow(p.length - G), A = w, $.c = c(Le(ye(R.c), R.e, "0"), 10, f, l), $.e = $.c.length), C = c(p, h, f, b ? (d = L, l) : (d = l, L)), x = w = C.length; C[--w] == 0; C.pop());
				if (!C[0]) return d.charAt(0);
				if (G < 0 ? --x : (R.c = C, R.e = x, R.s = y, R = t(R, $, W, F, f), C = R.c, v = R.r, x = R.e), g = x + W + 1, G = C[g], w = f / 2, v = v || g < 0 || C[g + 1] != null, v = F < 4 ? (G != null || v) && (F == 0 || F == (R.s < 0 ? 3 : 2)) : G > w || G == w && (F == 4 || v || F == 6 && C[g - 1] & 1 || F == (R.s < 0 ? 8 : 7)), g < 1 || !C[0]) p = v ? Le(d.charAt(1), -W, d.charAt(0)) : d.charAt(0);
				else {
					if (C.length = g, v) for (--f; ++C[--g] > f;) C[g] = 0, g || (++x, C = [1].concat(C));
					for (w = C.length; !C[--w];);
					for (G = 0, p = ""; G <= w; p += d.charAt(C[G++]));
					p = Le(p, x, d.charAt(0));
				}
				return p;
			};
		}(), t = function() {
			function l(h, f, y) {
				var b, d, g, x, w = 0, v = h.length, R = f % Qe, C = f / Qe | 0;
				for (h = h.slice(); v--;) g = h[v] % Qe, x = h[v] / Qe | 0, b = C * g + x * R, d = R * g + b % Qe * Qe + w, w = (d / y | 0) + (b / Qe | 0) + C * x, h[v] = d % y;
				return w && (h = [w].concat(h)), h;
			}
			function c(h, f, y, b) {
				var d, g;
				if (y != b) g = y > b ? 1 : -1;
				else for (d = g = 0; d < y; d++) if (h[d] != f[d]) {
					g = h[d] > f[d] ? 1 : -1;
					break;
				}
				return g;
			}
			function p(h, f, y, b) {
				for (var d = 0; y--;) h[y] -= d, d = h[y] < f[y] ? 1 : 0, h[y] = d * b + h[y] - f[y];
				for (; !h[0] && h.length > 1; h.splice(0, 1));
			}
			return function(h, f, y, b, d) {
				var g, x, w, v, R, C, $, G, W, F, U, oe, wr, Sn, An, Ce, Ot, me = h.s == f.s ? 1 : -1, se = h.c, z = f.c;
				if (!se || !se[0] || !z || !z[0]) return new E(!h.s || !f.s || (se ? z && se[0] == z[0] : !z) ? NaN : se && se[0] == 0 || !z ? me * 0 : me / 0);
				for (G = new E(me), W = G.c = [], x = h.e - f.e, me = y + x + 1, d || (d = Re, x = we(h.e / N) - we(f.e / N), me = me / N | 0), w = 0; z[w] == (se[w] || 0); w++);
				if (z[w] > (se[w] || 0) && x--, me < 0) W.push(1), v = !0;
				else {
					for (Sn = se.length, Ce = z.length, w = 0, me += 2, R = he(d / (z[0] + 1)), R > 1 && (z = l(z, R, d), se = l(se, R, d), Ce = z.length, Sn = se.length), wr = Ce, F = se.slice(0, Ce), U = F.length; U < Ce; F[U++] = 0);
					Ot = z.slice(), Ot = [0].concat(Ot), An = z[0], z[1] >= d / 2 && An++;
					do {
						if (R = 0, g = c(z, F, Ce, U), g < 0) {
							if (oe = F[0], Ce != U && (oe = oe * d + (F[1] || 0)), R = he(oe / An), R > 1) for (R >= d && (R = d - 1), C = l(z, R, d), $ = C.length, U = F.length; c(C, F, $, U) == 1;) R--, p(C, Ce < $ ? Ot : z, $, d), $ = C.length, g = 1;
							else R == 0 && (g = R = 1), C = z.slice(), $ = C.length;
							if ($ < U && (C = [0].concat(C)), p(F, C, U, d), U = F.length, g == -1) for (; c(z, F, Ce, U) < 1;) R++, p(F, Ce < U ? Ot : z, U, d), U = F.length;
						} else g === 0 && (R++, F = [0]);
						W[w++] = R, F[0] ? F[U++] = se[wr] || 0 : (F = [se[wr]], U = 1);
					} while ((wr++ < Sn || F[0] != null) && me--);
					v = F[0] != null, W[0] || W.splice(0, 1);
				}
				if (d == Re) {
					for (w = 1, me = W[0]; me >= 10; me /= 10, w++);
					ie(G, y + (G.e = w + x * N - 1) + 1, b, v);
				} else G.e = x, G.r = +v;
				return G;
			};
		}();
		function D(l, c, p, h) {
			var f, y, b, d, g;
			if (p == null ? p = a : J(p, 0, 8), !l.c) return l.toString();
			if (f = l.c[0], b = l.e, c == null) g = ye(l.c), g = h == 1 || h == 2 && (b <= u || b >= m) ? tn(g, b) : Le(g, b, "0");
			else if (l = ie(new E(l), c, p), y = l.e, g = ye(l.c), d = g.length, h == 1 || h == 2 && (c <= y || y <= u)) {
				for (; d < c; g += "0", d++);
				g = tn(g, y);
			} else if (c -= b + (h === 2 && y > b), g = Le(g, y, "0"), y + 1 > d) {
				if (--c > 0) for (g += "."; c--; g += "0");
			} else if (c += y - d, c > 0) for (y + 1 == d && (g += "."); c--; g += "0");
			return l.s < 0 && f ? "-" + g : g;
		}
		function H(l, c) {
			for (var p, h, f = 1, y = new E(l[0]); f < l.length; f++) h = new E(l[f]), (!h.s || (p = Xe(y, h)) === c || p === 0 && y.s === c) && (y = h);
			return y;
		}
		function ce(l, c, p) {
			for (var h = 1, f = c.length; !c[--f]; c.pop());
			for (f = c[0]; f >= 10; f /= 10, h++);
			return (p = h + p * N - 1) > T ? l.c = l.e = null : p < P ? l.c = [l.e = 0] : (l.e = p, l.c = c), l;
		}
		n = function() {
			var l = /^(-?)0([xbo])(?=\w[\w.]*$)/i, c = /^([^.]+)\.$/, p = /^\.([^.]+)$/, h = /^-?(Infinity|NaN)$/, f = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
			return function(y, b, d, g) {
				var x, w = d ? b : b.replace(f, "");
				if (h.test(w)) y.s = isNaN(w) ? null : w < 0 ? -1 : 1;
				else {
					if (!d && (w = w.replace(l, function(v, R, C) {
						return x = (C = C.toLowerCase()) == "x" ? 16 : C == "b" ? 2 : 8, !g || g == x ? R : v;
					}), g && (x = g, w = w.replace(c, "$1").replace(p, "0.$1")), b != w)) return new E(w, x);
					if (E.DEBUG) throw Error(le + "Not a" + (g ? " base " + g : "") + " number: " + b);
					y.s = null;
				}
				y.c = y.e = null;
			};
		}();
		function ie(l, c, p, h) {
			var f, y, b, d, g, x, w, v = l.c, R = fi;
			if (v) {
				e: {
					for (f = 1, d = v[0]; d >= 10; d /= 10, f++);
					if (y = c - f, y < 0) y += N, b = c, g = v[x = 0], w = he(g / R[f - b - 1] % 10);
					else if (x = di((y + 1) / N), x >= v.length) if (h) {
						for (; v.length <= x; v.push(0));
						g = w = 0, f = 1, y %= N, b = y - N + 1;
					} else break e;
					else {
						for (g = d = v[x], f = 1; d >= 10; d /= 10, f++);
						y %= N, b = y - N + f, w = b < 0 ? 0 : he(g / R[f - b - 1] % 10);
					}
					if (h = h || c < 0 || v[x + 1] != null || (b < 0 ? g : g % R[f - b - 1]), h = p < 4 ? (w || h) && (p == 0 || p == (l.s < 0 ? 3 : 2)) : w > 5 || w == 5 && (p == 4 || h || p == 6 && (y > 0 ? b > 0 ? g / R[f - b] : 0 : v[x - 1]) % 10 & 1 || p == (l.s < 0 ? 8 : 7)), c < 1 || !v[0]) return v.length = 0, h ? (c -= l.e + 1, v[0] = R[(N - c % N) % N], l.e = -c || 0) : v[0] = l.e = 0, l;
					if (y == 0 ? (v.length = x, d = 1, x--) : (v.length = x + 1, d = R[N - y], v[x] = b > 0 ? he(g / R[f - b] % R[b]) * d : 0), h) for (;;) if (x == 0) {
						for (y = 1, b = v[0]; b >= 10; b /= 10, y++);
						for (b = v[0] += d, d = 1; b >= 10; b /= 10, d++);
						y != d && (l.e++, v[0] == Re && (v[0] = 1));
						break;
					} else {
						if (v[x] += d, v[x] != Re) break;
						v[x--] = 0, d = 1;
					}
					for (y = v.length; v[--y] === 0; v.pop());
				}
				l.e > T ? l.c = l.e = null : l.e < P && (l.c = [l.e = 0]);
			}
			return l;
		}
		function be(l) {
			var c, p = l.e;
			return p === null ? l.toString() : (c = ye(l.c), c = p <= u || p >= m ? tn(c, p) : Le(c, p, "0"), l.s < 0 ? "-" + c : c);
		}
		return i.absoluteValue = i.abs = function() {
			var l = new E(this);
			return l.s < 0 && (l.s = 1), l;
		}, i.comparedTo = function(l, c) {
			return Xe(this, new E(l, c));
		}, i.decimalPlaces = i.dp = function(l, c) {
			var p, h, f, y = this;
			if (l != null) return J(l, 0, Y), c == null ? c = a : J(c, 0, 8), ie(new E(y), l + y.e + 1, c);
			if (!(p = y.c)) return null;
			if (h = ((f = p.length - 1) - we(this.e / N)) * N, f = p[f]) for (; f % 10 == 0; f /= 10, h--);
			return h < 0 && (h = 0), h;
		}, i.dividedBy = i.div = function(l, c) {
			return t(this, new E(l, c), s, a);
		}, i.dividedToIntegerBy = i.idiv = function(l, c) {
			return t(this, new E(l, c), 0, 1);
		}, i.exponentiatedBy = i.pow = function(l, c) {
			var p, h, f, y, b, d, g, x, w, v = this;
			if (l = new E(l), l.c && !l.isInteger()) throw Error(le + "Exponent not an integer: " + be(l));
			if (c != null && (c = new E(c)), d = l.e > 14, !v.c || !v.c[0] || v.c[0] == 1 && !v.e && v.c.length == 1 || !l.c || !l.c[0]) return w = new E(Math.pow(+be(v), d ? l.s * (2 - en(l)) : +be(l))), c ? w.mod(c) : w;
			if (g = l.s < 0, c) {
				if (c.c ? !c.c[0] : !c.s) return new E(NaN);
				h = !g && v.isInteger() && c.isInteger(), h && (v = v.mod(c));
			} else {
				if (l.e > 9 && (v.e > 0 || v.e < -1 || (v.e == 0 ? v.c[0] > 1 || d && v.c[1] >= 24e7 : v.c[0] < 8e13 || d && v.c[0] <= 9999975e7))) return y = v.s < 0 && en(l) ? -0 : 0, v.e > -1 && (y = 1 / y), new E(g ? 1 / y : y);
				A && (y = di(A / N + 2));
			}
			for (d ? (p = new E(.5), g && (l.s = 1), x = en(l)) : (f = Math.abs(+be(l)), x = f % 2), w = new E(o);;) {
				if (x) {
					if (w = w.times(v), !w.c) break;
					y ? w.c.length > y && (w.c.length = y) : h && (w = w.mod(c));
				}
				if (f) {
					if (f = he(f / 2), f === 0) break;
					x = f % 2;
				} else if (l = l.times(p), ie(l, l.e + 1, 1), l.e > 14) x = en(l);
				else {
					if (f = +be(l), f === 0) break;
					x = f % 2;
				}
				v = v.times(v), y ? v.c && v.c.length > y && (v.c.length = y) : h && (v = v.mod(c));
			}
			return h ? w : (g && (w = o.div(w)), c ? w.mod(c) : y ? ie(w, A, a, b) : w);
		}, i.integerValue = function(l) {
			var c = new E(this);
			return l == null ? l = a : J(l, 0, 8), ie(c, c.e + 1, l);
		}, i.isEqualTo = i.eq = function(l, c) {
			return Xe(this, new E(l, c)) === 0;
		}, i.isFinite = function() {
			return !!this.c;
		}, i.isGreaterThan = i.gt = function(l, c) {
			return Xe(this, new E(l, c)) > 0;
		}, i.isGreaterThanOrEqualTo = i.gte = function(l, c) {
			return (c = Xe(this, new E(l, c))) === 1 || c === 0;
		}, i.isInteger = function() {
			return !!this.c && we(this.e / N) > this.c.length - 2;
		}, i.isLessThan = i.lt = function(l, c) {
			return Xe(this, new E(l, c)) < 0;
		}, i.isLessThanOrEqualTo = i.lte = function(l, c) {
			return (c = Xe(this, new E(l, c))) === -1 || c === 0;
		}, i.isNaN = function() {
			return !this.s;
		}, i.isNegative = function() {
			return this.s < 0;
		}, i.isPositive = function() {
			return this.s > 0;
		}, i.isZero = function() {
			return !!this.c && this.c[0] == 0;
		}, i.minus = function(l, c) {
			var p, h, f, y, b = this, d = b.s;
			if (l = new E(l, c), c = l.s, !d || !c) return new E(NaN);
			if (d != c) return l.s = -c, b.plus(l);
			var g = b.e / N, x = l.e / N, w = b.c, v = l.c;
			if (!g || !x) {
				if (!w || !v) return w ? (l.s = -c, l) : new E(v ? b : NaN);
				if (!w[0] || !v[0]) return v[0] ? (l.s = -c, l) : new E(w[0] ? b : a == 3 ? -0 : 0);
			}
			if (g = we(g), x = we(x), w = w.slice(), d = g - x) {
				for ((y = d < 0) ? (d = -d, f = w) : (x = g, f = v), f.reverse(), c = d; c--; f.push(0));
				f.reverse();
			} else for (h = (y = (d = w.length) < (c = v.length)) ? d : c, d = c = 0; c < h; c++) if (w[c] != v[c]) {
				y = w[c] < v[c];
				break;
			}
			if (y && (f = w, w = v, v = f, l.s = -l.s), c = (h = v.length) - (p = w.length), c > 0) for (; c--; w[p++] = 0);
			for (c = Re - 1; h > d;) {
				if (w[--h] < v[h]) {
					for (p = h; p && !w[--p]; w[p] = c);
					--w[p], w[h] += Re;
				}
				w[h] -= v[h];
			}
			for (; w[0] == 0; w.splice(0, 1), --x);
			return w[0] ? ce(l, w, x) : (l.s = a == 3 ? -1 : 1, l.c = [l.e = 0], l);
		}, i.modulo = i.mod = function(l, c) {
			var p, h, f = this;
			return l = new E(l, c), !f.c || !l.s || l.c && !l.c[0] ? new E(NaN) : !l.c || f.c && !f.c[0] ? new E(f) : (I == 9 ? (h = l.s, l.s = 1, p = t(f, l, 0, 3), l.s = h, p.s *= h) : p = t(f, l, 0, I), l = f.minus(p.times(l)), !l.c[0] && I == 1 && (l.s = f.s), l);
		}, i.multipliedBy = i.times = function(l, c) {
			var p, h, f, y, b, d, g, x, w, v, R, C, $, G, W, F = this, U = F.c, oe = (l = new E(l, c)).c;
			if (!U || !oe || !U[0] || !oe[0]) return !F.s || !l.s || U && !U[0] && !oe || oe && !oe[0] && !U ? l.c = l.e = l.s = null : (l.s *= F.s, !U || !oe ? l.c = l.e = null : (l.c = [0], l.e = 0)), l;
			for (h = we(F.e / N) + we(l.e / N), l.s *= F.s, g = U.length, v = oe.length, g < v && ($ = U, U = oe, oe = $, f = g, g = v, v = f), f = g + v, $ = []; f--; $.push(0));
			for (G = Re, W = Qe, f = v; --f >= 0;) {
				for (p = 0, R = oe[f] % W, C = oe[f] / W | 0, b = g, y = f + b; y > f;) x = U[--b] % W, w = U[b] / W | 0, d = C * x + w * R, x = R * x + d % W * W + $[y] + p, p = (x / G | 0) + (d / W | 0) + C * w, $[y--] = x % G;
				$[y] = p;
			}
			return p ? ++h : $.splice(0, 1), ce(l, $, h);
		}, i.negated = function() {
			var l = new E(this);
			return l.s = -l.s || null, l;
		}, i.plus = function(l, c) {
			var p, h = this, f = h.s;
			if (l = new E(l, c), c = l.s, !f || !c) return new E(NaN);
			if (f != c) return l.s = -c, h.minus(l);
			var y = h.e / N, b = l.e / N, d = h.c, g = l.c;
			if (!y || !b) {
				if (!d || !g) return new E(f / 0);
				if (!d[0] || !g[0]) return g[0] ? l : new E(d[0] ? h : f * 0);
			}
			if (y = we(y), b = we(b), d = d.slice(), f = y - b) {
				for (f > 0 ? (b = y, p = g) : (f = -f, p = d), p.reverse(); f--; p.push(0));
				p.reverse();
			}
			for (f = d.length, c = g.length, f - c < 0 && (p = g, g = d, d = p, c = f), f = 0; c;) f = (d[--c] = d[c] + g[c] + f) / Re | 0, d[c] = Re === d[c] ? 0 : d[c] % Re;
			return f && (d = [f].concat(d), ++b), ce(l, d, b);
		}, i.precision = i.sd = function(l, c) {
			var p, h, f, y = this;
			if (l != null && l !== !!l) return J(l, 1, Y), c == null ? c = a : J(c, 0, 8), ie(new E(y), l, c);
			if (!(p = y.c)) return null;
			if (f = p.length - 1, h = f * N + 1, f = p[f]) {
				for (; f % 10 == 0; f /= 10, h--);
				for (f = p[0]; f >= 10; f /= 10, h++);
			}
			return l && y.e + 1 > h && (h = y.e + 1), h;
		}, i.shiftedBy = function(l) {
			return J(l, -mi, mi), this.times("1e" + l);
		}, i.squareRoot = i.sqrt = function() {
			var l, c, p, h, f, y = this, b = y.c, d = y.s, g = y.e, x = s + 4, w = new E("0.5");
			if (d !== 1 || !b || !b[0]) return new E(!d || d < 0 && (!b || b[0]) ? NaN : b ? y : 1 / 0);
			if (d = Math.sqrt(+be(y)), d == 0 || d == 1 / 0 ? (c = ye(b), (c.length + g) % 2 == 0 && (c += "0"), d = Math.sqrt(+c), g = we((g + 1) / 2) - (g < 0 || g % 2), d == 1 / 0 ? c = "5e" + g : (c = d.toExponential(), c = c.slice(0, c.indexOf("e") + 1) + g), p = new E(c)) : p = new E(d + ""), p.c[0]) {
				for (g = p.e, d = g + x, d < 3 && (d = 0);;) if (f = p, p = w.times(f.plus(t(y, f, x, 1))), ye(f.c).slice(0, d) === (c = ye(p.c)).slice(0, d)) if (p.e < g && --d, c = c.slice(d - 3, d + 1), c == "9999" || !h && c == "4999") {
					if (!h && (ie(f, f.e + s + 2, 0), f.times(f).eq(y))) {
						p = f;
						break;
					}
					x += 4, d += 4, h = 1;
				} else {
					(!+c || !+c.slice(1) && c.charAt(0) == "5") && (ie(p, p.e + s + 2, 1), l = !p.times(p).eq(y));
					break;
				}
			}
			return ie(p, p.e + s + 1, a, l);
		}, i.toExponential = function(l, c) {
			return l != null && (J(l, 0, Y), l++), D(this, l, c, 1);
		}, i.toFixed = function(l, c) {
			return l != null && (J(l, 0, Y), l = l + this.e + 1), D(this, l, c);
		}, i.toFormat = function(l, c, p) {
			var h, f = this;
			if (p == null) l != null && c && typeof c == "object" ? (p = c, c = null) : l && typeof l == "object" ? (p = l, l = c = null) : p = M;
			else if (typeof p != "object") throw Error(le + "Argument not an object: " + p);
			if (h = f.toFixed(l, c), f.c) {
				var y, b = h.split("."), d = +p.groupSize, g = +p.secondaryGroupSize, x = p.groupSeparator || "", w = b[0], v = b[1], R = f.s < 0, C = R ? w.slice(1) : w, $ = C.length;
				if (g && (y = d, d = g, g = y, $ -= y), d > 0 && $ > 0) {
					for (y = $ % d || d, w = C.substr(0, y); y < $; y += d) w += x + C.substr(y, d);
					g > 0 && (w += x + C.slice(y)), R && (w = "-" + w);
				}
				h = v ? w + (p.decimalSeparator || "") + ((g = +p.fractionGroupSize) ? v.replace(new RegExp("\\d{" + g + "}\\B", "g"), "$&" + (p.fractionGroupSeparator || "")) : v) : w;
			}
			return (p.prefix || "") + h + (p.suffix || "");
		}, i.toFraction = function(l) {
			var c, p, h, f, y, b, d, g, x, w, v, R, C = this, $ = C.c;
			if (l != null && (d = new E(l), !d.isInteger() && (d.c || d.s !== 1) || d.lt(o))) throw Error(le + "Argument " + (d.isInteger() ? "out of range: " : "not an integer: ") + be(d));
			if (!$) return new E(C);
			for (c = new E(o), x = p = new E(o), h = g = new E(o), R = ye($), y = c.e = R.length - C.e - 1, c.c[0] = fi[(b = y % N) < 0 ? N + b : b], l = !l || d.comparedTo(c) > 0 ? y > 0 ? c : x : d, b = T, T = 1 / 0, d = new E(R), g.c[0] = 0; w = t(d, c, 0, 1), f = p.plus(w.times(h)), f.comparedTo(l) != 1;) p = h, h = f, x = g.plus(w.times(f = x)), g = f, c = d.minus(w.times(f = c)), d = f;
			return f = t(l.minus(p), h, 0, 1), g = g.plus(f.times(x)), p = p.plus(f.times(h)), g.s = x.s = C.s, y = y * 2, v = t(x, h, y, a).minus(C).abs().comparedTo(t(g, p, y, a).minus(C).abs()) < 1 ? [x, h] : [g, p], T = b, v;
		}, i.toNumber = function() {
			return +be(this);
		}, i.toPrecision = function(l, c) {
			return l != null && J(l, 1, Y), D(this, l, c, 2);
		}, i.toString = function(l) {
			var c, p = this, h = p.s, f = p.e;
			return f === null ? h ? (c = "Infinity", h < 0 && (c = "-" + c)) : c = "NaN" : (l == null ? c = f <= u || f >= m ? tn(ye(p.c), f) : Le(ye(p.c), f, "0") : l === 10 && q ? (p = ie(new E(p), s + f + 1, a), c = Le(ye(p.c), p.e, "0")) : (J(l, 2, L.length, "Base"), c = r(Le(ye(p.c), f, "0"), 10, l, h, !0)), h < 0 && p.c[0] && (c = "-" + c)), c;
		}, i.valueOf = i.toJSON = function() {
			return be(this);
		}, i._isBigNumber = !0, i[Symbol.toStringTag] = "BigNumber", i[Symbol.for("nodejs.util.inspect.custom")] = i.valueOf, e != null && E.set(e), E;
	}
	function we(e) {
		var t = e | 0;
		return e > 0 || e === t ? t : t - 1;
	}
	function ye(e) {
		for (var t, r, n = 1, i = e.length, o = e[0] + ""; n < i;) {
			for (t = e[n++] + "", r = N - t.length; r--; t = "0" + t);
			o += t;
		}
		for (i = o.length; o.charCodeAt(--i) === 48;);
		return o.slice(0, i + 1 || 1);
	}
	function Xe(e, t) {
		var r, n, i = e.c, o = t.c, s = e.s, a = t.s, u = e.e, m = t.e;
		if (!s || !a) return null;
		if (r = i && !i[0], n = o && !o[0], r || n) return r ? n ? 0 : -a : s;
		if (s != a) return s;
		if (r = s < 0, n = u == m, !i || !o) return n ? 0 : !i ^ r ? 1 : -1;
		if (!n) return u > m ^ r ? 1 : -1;
		for (a = (u = i.length) < (m = o.length) ? u : m, s = 0; s < a; s++) if (i[s] != o[s]) return i[s] > o[s] ^ r ? 1 : -1;
		return u == m ? 0 : u > m ^ r ? 1 : -1;
	}
	function J(e, t, r, n) {
		if (e < t || e > r || e !== he(e)) throw Error(le + (n || "Argument") + (typeof e == "number" ? e < t || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e));
	}
	function en(e) {
		var t = e.c.length - 1;
		return we(e.e / N) == t && e.c[t] % 2 != 0;
	}
	function tn(e, t) {
		return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t;
	}
	function Le(e, t, r) {
		var n, i;
		if (t < 0) {
			for (i = r + "."; ++t; i += r);
			e = i + e;
		} else if (n = e.length, ++t > n) {
			for (i = r, t -= n; --t; i += r);
			e += i;
		} else t < n && (e = e.slice(0, t) + "." + e.slice(t));
		return e;
	}
	var va = Ta();
	var od = 24;
	var or = 32;
	var sd = () => typeof globalThis < "u" && globalThis.crypto && typeof globalThis.crypto.getRandomValues == "function" ? () => {
		let e = /* @__PURE__ */ new Uint32Array(1);
		return globalThis.crypto.getRandomValues(e), e[0] / 4294967296;
	} : Math.random;
	var yi = sd();
	var gi = (e = 4, t = yi) => {
		let r = "";
		for (; r.length < e;) r = r + Math.floor(t() * 36).toString(36);
		return r;
	};
	function ad(e) {
		let t = new va(0);
		for (let r of e.values()) t = t.multipliedBy(256).plus(r);
		return t;
	}
	var Aa = (e = "") => {
		return ad(Pa(new TextEncoder().encode(e))).toString(36).slice(1);
	};
	var Sa = Array.from({ length: 26 }, (e, t) => String.fromCharCode(t + 97));
	var ld = (e) => Sa[Math.floor(e() * Sa.length)];
	var ud = ({ globalObj: e = typeof global < "u" ? global : typeof window < "u" ? window : {}, random: t = yi } = {}) => {
		let r = Object.keys(e).toString();
		return Aa(r.length ? r + gi(or, t) : gi(or, t)).substring(0, or);
	};
	var cd = (e) => () => e++;
	var pd = 476782367;
	var Ra = ({ random: e = yi, counter: t = cd(Math.floor(e() * pd)), length: r = od, fingerprint: n = ud({ random: e }) } = {}) => {
		if (r > or) throw new Error(`Length must be between 2 and ${or}. Received: ${r}`);
		return function() {
			let o = ld(e), s = Date.now().toString(36), a = t().toString(36);
			return `${o + Aa(`${s + gi(r, e) + a + n}`).substring(1, r)}`;
		};
	};
	var hi = dd(Ra);
	function dd(e) {
		let t;
		return () => (t || (t = e()), t());
	}
	var wi = __require("node:crypto");
	var Ca = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
	var md = 128;
	var Je;
	var At;
	function fd(e) {
		if (e < 0) throw new RangeError("Wrong ID size");
		try {
			!Je || Je.length < e ? (Je = Buffer.allocUnsafe(e * md), wi.webcrypto.getRandomValues(Je), At = 0) : At + e > Je.length && (wi.webcrypto.getRandomValues(Je), At = 0);
		} catch (t) {
			throw Je = void 0, t;
		}
		At += e;
	}
	function xi(e = 21) {
		fd(e |= 0);
		let t = "";
		for (let r = At - e; r < At; r++) t += Ca[Je[r] & 63];
		return t;
	}
	var sr = Pe(__require("node:crypto"), 1);
	var ka = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
	var ar = 32;
	var gd = 16;
	var Oa = 10;
	var Ia = 0xffffffffffff;
	var Ye;
	(function(e) {
		e.Base32IncorrectEncoding = "B32_ENC_INVALID", e.DecodeTimeInvalidCharacter = "DEC_TIME_CHAR", e.DecodeTimeValueMalformed = "DEC_TIME_MALFORMED", e.EncodeTimeNegative = "ENC_TIME_NEG", e.EncodeTimeSizeExceeded = "ENC_TIME_SIZE_EXCEED", e.EncodeTimeValueMalformed = "ENC_TIME_MALFORMED", e.PRNGDetectFailure = "PRNG_DETECT", e.ULIDInvalid = "ULID_INVALID", e.Unexpected = "UNEXPECTED", e.UUIDInvalid = "UUID_INVALID";
	})(Ye || (Ye = {}));
	var et = class extends Error {
		constructor(t, r) {
			super(`${r} (${t})`), this.name = "ULIDError", this.code = t;
		}
	};
	function yd(e) {
		let t = Math.floor(e() * ar);
		return t === ar && (t = ar - 1), ka.charAt(t);
	}
	function hd(e) {
		let t = wd(), r = t && (t.crypto || t.msCrypto) || (typeof sr.default < "u" ? sr.default : null);
		if (typeof r?.getRandomValues == "function") return () => {
			let n = /* @__PURE__ */ new Uint8Array(1);
			return r.getRandomValues(n), n[0] / 255;
		};
		if (typeof r?.randomBytes == "function") return () => r.randomBytes(1).readUInt8() / 255;
		if (sr.default?.randomBytes) return () => sr.default.randomBytes(1).readUInt8() / 255;
		throw new et(Ye.PRNGDetectFailure, "Failed to find a reliable PRNG");
	}
	function wd() {
		return Pd() ? self : typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : null;
	}
	function xd(e, t) {
		let r = "";
		for (; e > 0; e--) r = yd(t) + r;
		return r;
	}
	function bd(e, t = Oa) {
		if (isNaN(e)) throw new et(Ye.EncodeTimeValueMalformed, `Time must be a number: ${e}`);
		if (e > Ia) throw new et(Ye.EncodeTimeSizeExceeded, `Cannot encode a time larger than ${Ia}: ${e}`);
		if (e < 0) throw new et(Ye.EncodeTimeNegative, `Time must be positive: ${e}`);
		if (Number.isInteger(e) === !1) throw new et(Ye.EncodeTimeValueMalformed, `Time must be an integer: ${e}`);
		let r, n = "";
		for (let i = t; i > 0; i--) r = e % ar, n = ka.charAt(r) + n, e = (e - r) / ar;
		return n;
	}
	function Pd() {
		return typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
	}
	function Na(e, t) {
		let r = t || hd();
		return bd(!e || isNaN(e) ? Date.now() : e, Oa) + xd(gd, r);
	}
	var te = [];
	for (let e = 0; e < 256; ++e) te.push((e + 256).toString(16).slice(1));
	function rn(e, t = 0) {
		return (te[e[t + 0]] + te[e[t + 1]] + te[e[t + 2]] + te[e[t + 3]] + "-" + te[e[t + 4]] + te[e[t + 5]] + "-" + te[e[t + 6]] + te[e[t + 7]] + "-" + te[e[t + 8]] + te[e[t + 9]] + "-" + te[e[t + 10]] + te[e[t + 11]] + te[e[t + 12]] + te[e[t + 13]] + te[e[t + 14]] + te[e[t + 15]]).toLowerCase();
	}
	var Ed = /* @__PURE__ */ new Uint8Array(16);
	function Rt() {
		return crypto.getRandomValues(Ed);
	}
	function Td(e, t, r) {
		return !t && !e && crypto.randomUUID ? crypto.randomUUID() : vd(e, t, r);
	}
	function vd(e, t, r) {
		e = e || {};
		let n = e.random ?? e.rng?.() ?? Rt();
		if (n.length < 16) throw new Error("Random bytes length must be >= 16");
		if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
			if (r = r || 0, r < 0 || r + 16 > t.length) throw new RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
			for (let i = 0; i < 16; ++i) t[r + i] = n[i];
			return t;
		}
		return rn(n);
	}
	var bi = Td;
	var Pi = {};
	function Sd(e, t, r) {
		let n;
		if (e) n = Da(e.random ?? e.rng?.() ?? Rt(), e.msecs, e.seq, t, r);
		else {
			let i = Date.now(), o = Rt();
			Ad(Pi, i, o), n = Da(o, Pi.msecs, Pi.seq, t, r);
		}
		return t ?? rn(n);
	}
	function Ad(e, t, r) {
		return e.msecs ??= -1 / 0, e.seq ??= 0, t > e.msecs ? (e.seq = r[6] << 23 | r[7] << 16 | r[8] << 8 | r[9], e.msecs = t) : (e.seq = e.seq + 1 | 0, e.seq === 0 && e.msecs++), e;
	}
	function Da(e, t, r, n, i = 0) {
		if (e.length < 16) throw new Error("Random bytes length must be >= 16");
		if (!n) n = /* @__PURE__ */ new Uint8Array(16), i = 0;
		else if (i < 0 || i + 16 > n.length) throw new RangeError(`UUID byte range ${i}:${i + 15} is out of buffer bounds`);
		return t ??= Date.now(), r ??= e[6] * 127 << 24 | e[7] << 16 | e[8] << 8 | e[9], n[i++] = t / 1099511627776 & 255, n[i++] = t / 4294967296 & 255, n[i++] = t / 16777216 & 255, n[i++] = t / 65536 & 255, n[i++] = t / 256 & 255, n[i++] = t & 255, n[i++] = 112 | r >>> 28 & 15, n[i++] = r >>> 20 & 255, n[i++] = 128 | r >>> 14 & 63, n[i++] = r >>> 6 & 255, n[i++] = r << 2 & 255 | e[10] & 3, n[i++] = e[11], n[i++] = e[12], n[i++] = e[13], n[i++] = e[14], n[i++] = e[15], n;
	}
	var Ei = Sd;
	var nn = class {
		#e = {};
		constructor() {
			this.register("uuid", new vi()), this.register("cuid", new Si()), this.register("ulid", new Ai()), this.register("nanoid", new Ri()), this.register("product", new Ci());
		}
		snapshot() {
			return Object.create(this.#e, { now: { value: new Ti() } });
		}
		register(t, r) {
			this.#e[t] = r;
		}
	};
	var Ti = class {
		#e;
		generate() {
			return this.#e === void 0 && (this.#e = /* @__PURE__ */ new Date()), this.#e.toISOString();
		}
	};
	var vi = class {
		generate(t) {
			if (t === 4) return bi();
			if (t === 7) return Ei();
			throw new Error("Invalid UUID generator arguments");
		}
	};
	var Si = class {
		generate(t) {
			if (t === 1) return ia();
			if (t === 2) return hi();
			throw new Error("Invalid CUID generator arguments");
		}
	};
	var Ai = class {
		generate() {
			return Na();
		}
	};
	var Ri = class {
		generate(t) {
			if (typeof t == "number") return xi(t);
			if (t === void 0) return xi();
			throw new Error("Invalid Nanoid generator arguments");
		}
	};
	var Ci = class {
		generate(t, r) {
			if (t === void 0 || r === void 0) throw new Error("Invalid Product generator arguments");
			return Array.isArray(t) && Array.isArray(r) ? t.flatMap((n) => r.map((i) => [n, i])) : Array.isArray(t) ? t.map((n) => [n, r]) : Array.isArray(r) ? r.map((n) => [t, n]) : [[t, r]];
		}
	};
	function lr(e, t) {
		return e == null ? e : typeof e == "string" ? lr(JSON.parse(e), t) : Array.isArray(e) ? Cd(e, t) : Rd(e, t);
	}
	function Rd(e, t) {
		if (t.pagination) {
			let { skip: r, take: n, cursor: i } = t.pagination;
			if (r !== null && r > 0 || n === 0 || i !== null && !St(e, i)) return null;
		}
		return Fa(e, t.nested);
	}
	function Fa(e, t) {
		for (let [r, n] of Object.entries(t)) e[r] = lr(e[r], n);
		return e;
	}
	function Cd(e, t) {
		if (t.distinct !== null) {
			let r = t.linkingFields !== null ? [...t.distinct, ...t.linkingFields] : t.distinct;
			e = Id(e, r);
		}
		return t.pagination && (e = kd(e, t.pagination, t.linkingFields)), t.reverse && e.reverse(), Object.keys(t.nested).length === 0 ? e : e.map((r) => Fa(r, t.nested));
	}
	function Id(e, t) {
		let r = /* @__PURE__ */ new Set(), n = [];
		for (let i of e) {
			let o = tt(i, t);
			r.has(o) || (r.add(o), n.push(i));
		}
		return n;
	}
	function kd(e, t, r) {
		if (r === null) return Ma(e, t);
		let n = /* @__PURE__ */ new Map();
		for (let o of e) {
			let s = tt(o, r);
			n.has(s) || n.set(s, []), n.get(s).push(o);
		}
		let i = Array.from(n.entries());
		return i.sort(([o], [s]) => o < s ? -1 : o > s ? 1 : 0), i.flatMap(([, o]) => Ma(o, t));
	}
	function Ma(e, { cursor: t, skip: r, take: n }) {
		let i = t !== null ? e.findIndex((a) => St(a, t)) : 0;
		if (i === -1) return [];
		let o = i + (r ?? 0), s = n !== null ? o + n : e.length;
		return e.slice(o, s);
	}
	function tt(e, t, r) {
		let n = t.map((i, o) => r?.[o] ? e[i] !== null ? r[o](e[i]) : null : e[i]);
		return JSON.stringify(n);
	}
	function Ii(e) {
		return typeof e == "object" && e !== null && e.prisma__type === "param";
	}
	function ki(e) {
		return typeof e == "object" && e !== null && e.prisma__type === "generatorCall";
	}
	function Di(e, t, r, n) {
		let i = e.args.map((o) => de(o, t, r));
		switch (e.type) {
			case "rawSql": return [Dd(e.sql, i, e.argTypes)];
			case "templateSql": return (e.chunkable ? Fd(e.fragments, i, n) : [i]).map((s) => {
				let a = Od(e.fragments, e.placeholderFormat, s, e.argTypes);
				if (n !== void 0 && a.args.length > n) throw new X("The query parameter limit supported by your database is exceeded.", "P2029");
				return a;
			});
			default: V(e.type, "Invalid query type");
		}
	}
	function de(e, t, r) {
		for (; Md(e);) if (Ii(e)) {
			let n = t[e.prisma__value.name];
			if (n === void 0) throw new Error(`Missing value for query variable ${e.prisma__value.name}`);
			e.prisma__value.type === "DateTime" && typeof n == "string" ? e = new Date(n) : e = n;
		} else if (ki(e)) {
			let { name: n, args: i } = e.prisma__value, o = r[n];
			if (!o) throw new Error(`Encountered an unknown generator '${n}'`);
			e = o.generate(...i.map((s) => de(s, t, r)));
		} else V(e, `Unexpected unevaluated value type: ${e}`);
		return Array.isArray(e) && (e = e.map((n) => de(n, t, r))), e;
	}
	function Od(e, t, r, n) {
		let i = "", o = { placeholderNumber: 1 }, s = [], a = [];
		for (let u of Ni(e, r, n)) {
			if (i += Nd(u, t, o), u.type === "stringChunk") continue;
			let m = Array.from(_a(u)), P = m.length;
			if (Gr(s, m), u.argType.arity === "tuple") {
				if (P % u.argType.elements.length !== 0) throw new Error(`Malformed query template. Expected the number of parameters to match the tuple arity, but got ${P} parameters for a tuple of arity ${u.argType.elements.length}.`);
				for (let T = 0; T < P / u.argType.elements.length; T++) a.push(...u.argType.elements);
			} else for (let T = 0; T < P; T++) a.push(u.argType);
		}
		return {
			sql: i,
			args: s,
			argTypes: a
		};
	}
	function Nd(e, t, r) {
		let n = e.type;
		switch (n) {
			case "parameter": return Oi(t, r.placeholderNumber++);
			case "stringChunk": return e.chunk;
			case "parameterTuple": return `(${e.value.length == 0 ? "NULL" : e.value.map(() => {
				let o = Oi(t, r.placeholderNumber++);
				return `${e.itemPrefix}${o}${e.itemSuffix}`;
			}).join(e.itemSeparator)})`;
			case "parameterTupleList": return e.value.map((i) => {
				let o = i.map(() => Oi(t, r.placeholderNumber++)).join(e.itemSeparator);
				return `${e.itemPrefix}${o}${e.itemSuffix}`;
			}).join(e.groupSeparator);
			default: V(n, "Invalid fragment type");
		}
	}
	function Oi(e, t) {
		return e.hasNumbering ? `${e.prefix}${t}` : e.prefix;
	}
	function Dd(e, t, r) {
		return {
			sql: e,
			args: t,
			argTypes: r
		};
	}
	function Md(e) {
		return Ii(e) || ki(e);
	}
	function* Ni(e, t, r) {
		let n = 0;
		for (let i of e) switch (i.type) {
			case "parameter":
				if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
				yield {
					...i,
					value: t[n],
					argType: r?.[n]
				}, n++;
				break;
			case "stringChunk":
				yield i;
				break;
			case "parameterTuple": {
				if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
				let o = t[n];
				yield {
					...i,
					value: Array.isArray(o) ? o : [o],
					argType: r?.[n]
				}, n++;
				break;
			}
			case "parameterTupleList": {
				if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
				let o = t[n];
				if (!Array.isArray(o)) throw new Error("Malformed query template. Tuple list expected.");
				if (o.length === 0) throw new Error("Malformed query template. Tuple list cannot be empty.");
				for (let s of o) if (!Array.isArray(s)) throw new Error("Malformed query template. Tuple expected.");
				yield {
					...i,
					value: o,
					argType: r?.[n]
				}, n++;
				break;
			}
		}
	}
	function* _a(e) {
		switch (e.type) {
			case "parameter":
				yield e.value;
				break;
			case "stringChunk": break;
			case "parameterTuple":
				yield* e.value;
				break;
			case "parameterTupleList": for (let t of e.value) yield* t;
		}
	}
	function Fd(e, t, r) {
		let n = 0, i = 0;
		for (let s of Ni(e, t, void 0)) {
			let a = 0;
			for (let u of _a(s)) a++;
			i = Math.max(i, a), n += a;
		}
		let o = [[]];
		for (let s of Ni(e, t, void 0)) switch (s.type) {
			case "parameter":
				for (let a of o) a.push(s.value);
				break;
			case "stringChunk": break;
			case "parameterTuple": {
				let a = s.value.length, u = [];
				if (r && o.length === 1 && a === i && n > r && n - a < r) {
					let m = r - (n - a);
					u = _d(s.value, m);
				} else u = [s.value];
				o = o.flatMap((m) => u.map((P) => [...m, P]));
				break;
			}
			case "parameterTupleList": {
				let a = s.value.reduce((T, S) => T + S.length, 0), u = [], m = [], P = 0;
				for (let T of s.value) r && o.length === 1 && a === i && m.length > 0 && n - a + P + T.length > r && (u.push(m), m = [], P = 0), m.push(T), P += T.length;
				m.length > 0 && u.push(m), o = o.flatMap((T) => u.map((S) => [...T, S]));
				break;
			}
		}
		return o;
	}
	function _d(e, t) {
		let r = [];
		for (let n = 0; n < e.length; n += t) r.push(e.slice(n, n + t));
		return r;
	}
	function $a(e) {
		return e.rows.map((t) => t.reduce((r, n, i) => (r[e.columnNames[i]] = n, r), {}));
	}
	function La(e) {
		return {
			columns: e.columnNames,
			types: e.columnTypes.map((t) => $d(t)),
			rows: e.rows.map((t) => t.map((r, n) => ur(r, e.columnTypes[n])))
		};
	}
	function ur(e, t) {
		if (e === null) return null;
		switch (t) {
			case k.Int32: switch (typeof e) {
				case "number": return Math.trunc(e);
				case "string": return Math.trunc(Number(e));
				default: throw new Error(`Cannot serialize value of type ${typeof e} as Int32`);
			}
			case k.Int32Array:
				if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as Int32Array`);
				return e.map((r) => ur(r, k.Int32));
			case k.Int64: switch (typeof e) {
				case "number": return BigInt(Math.trunc(e));
				case "string": return e;
				default: throw new Error(`Cannot serialize value of type ${typeof e} as Int64`);
			}
			case k.Int64Array:
				if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as Int64Array`);
				return e.map((r) => ur(r, k.Int64));
			case k.Json: switch (typeof e) {
				case "string": return JSON.parse(e);
				default: throw new Error(`Cannot serialize value of type ${typeof e} as Json`);
			}
			case k.JsonArray:
				if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as JsonArray`);
				return e.map((r) => ur(r, k.Json));
			case k.Boolean: switch (typeof e) {
				case "boolean": return e;
				case "string": return e === "true" || e === "1";
				case "number": return e === 1;
				default: throw new Error(`Cannot serialize value of type ${typeof e} as Boolean`);
			}
			case k.BooleanArray:
				if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as BooleanArray`);
				return e.map((r) => ur(r, k.Boolean));
			default: return e;
		}
	}
	function $d(e) {
		switch (e) {
			case k.Int32: return "int";
			case k.Int64: return "bigint";
			case k.Float: return "float";
			case k.Double: return "double";
			case k.Text: return "string";
			case k.Enum: return "enum";
			case k.Bytes: return "bytes";
			case k.Boolean: return "bool";
			case k.Character: return "char";
			case k.Numeric: return "decimal";
			case k.Json: return "json";
			case k.Uuid: return "uuid";
			case k.DateTime: return "datetime";
			case k.Date: return "date";
			case k.Time: return "time";
			case k.Int32Array: return "int-array";
			case k.Int64Array: return "bigint-array";
			case k.FloatArray: return "float-array";
			case k.DoubleArray: return "double-array";
			case k.TextArray: return "string-array";
			case k.EnumArray: return "string-array";
			case k.BytesArray: return "bytes-array";
			case k.BooleanArray: return "bool-array";
			case k.CharacterArray: return "char-array";
			case k.NumericArray: return "decimal-array";
			case k.JsonArray: return "json-array";
			case k.UuidArray: return "uuid-array";
			case k.DateTimeArray: return "datetime-array";
			case k.DateArray: return "date-array";
			case k.TimeArray: return "time-array";
			case k.UnknownNumber: return "unknown";
			case k.Set: return "string";
			default: V(e, `Unexpected column type: ${e}`);
		}
	}
	function Mi(e, t, r) {
		if (!t.every((n) => on(e, n))) throw new X(Ld(e, r), Vd(r), r.context);
	}
	function on(e, t) {
		switch (t.type) {
			case "rowCountEq": return Array.isArray(e) ? e.length === t.args : e === null ? t.args === 0 : t.args === 1;
			case "rowCountNeq": return Array.isArray(e) ? e.length !== t.args : e === null ? t.args !== 0 : t.args !== 1;
			case "affectedRowCountEq": return e === t.args;
			case "never": return !1;
			default: V(t, `Unknown rule type: ${t.type}`);
		}
	}
	function Ld(e, t) {
		switch (t.errorIdentifier) {
			case "RELATION_VIOLATION": return `The change you are trying to make would violate the required relation '${t.context.relation}' between the \`${t.context.modelA}\` and \`${t.context.modelB}\` models.`;
			case "MISSING_RECORD": return `An operation failed because it depends on one or more records that were required but not found. No record was found for ${t.context.operation}.`;
			case "MISSING_RELATED_RECORD": {
				let r = t.context.neededFor ? ` (needed to ${t.context.neededFor})` : "";
				return `An operation failed because it depends on one or more records that were required but not found. No '${t.context.model}' record${r} was found for ${t.context.operation} on ${t.context.relationType} relation '${t.context.relation}'.`;
			}
			case "INCOMPLETE_CONNECT_INPUT": return `An operation failed because it depends on one or more records that were required but not found. Expected ${t.context.expectedRows} records to be connected, found only ${Array.isArray(e) ? e.length : e}.`;
			case "INCOMPLETE_CONNECT_OUTPUT": return `The required connected records were not found. Expected ${t.context.expectedRows} records to be connected after connect operation on ${t.context.relationType} relation '${t.context.relation}', found ${Array.isArray(e) ? e.length : e}.`;
			case "RECORDS_NOT_CONNECTED": return `The records for relation \`${t.context.relation}\` between the \`${t.context.parent}\` and \`${t.context.child}\` models are not connected.`;
			default: V(t, `Unknown error identifier: ${t}`);
		}
	}
	function Vd(e) {
		switch (e.errorIdentifier) {
			case "RELATION_VIOLATION": return "P2014";
			case "RECORDS_NOT_CONNECTED": return "P2017";
			case "INCOMPLETE_CONNECT_OUTPUT": return "P2018";
			case "MISSING_RECORD":
			case "MISSING_RELATED_RECORD":
			case "INCOMPLETE_CONNECT_INPUT": return "P2025";
			default: V(e, `Unknown error identifier: ${e}`);
		}
	}
	var qd = K("prisma:client:queryInterpreter");
	var dr = class e {
		#e;
		#t = new nn();
		#r;
		#i;
		#o;
		#s;
		#a;
		constructor({ onQuery: t, tracingHelper: r, serializer: n, rawSerializer: i, provider: o, connectionInfo: s }) {
			this.#e = t, this.#r = r, this.#i = n, this.#o = i ?? n, this.#s = o, this.#a = s;
		}
		static forSql(t) {
			return new e({
				onQuery: t.onQuery,
				tracingHelper: t.tracingHelper,
				serializer: $a,
				rawSerializer: La,
				provider: t.provider,
				connectionInfo: t.connectionInfo
			});
		}
		async run(t, r) {
			let n = this.#t.snapshot(), i = {
				...r,
				generators: n
			}, o = jd(t, (a) => this.interpretNode(a, i))?.catch((a) => Be(a));
			if (o) try {
				return this.#n(await o, i.scope, n).value;
			} catch (a) {
				Be(a);
			}
			let { value: s } = await this.interpretNode(t, i).catch((a) => Be(a));
			return s;
		}
		async interpretNode(t, r) {
			switch (t.type) {
				case "value": return {
					value: de(t.args, r.scope, r.generators),
					lastInsertId: t.lastInsertId
				};
				case "seq": {
					let n;
					for (let i of t.args) n = await this.interpretNode(i, r);
					return n ?? { value: void 0 };
				}
				case "let": {
					let n = Object.create(r.scope);
					for (let i of t.args.bindings) {
						let { value: o } = await this.interpretNode(i.expr, {
							...r,
							scope: n
						});
						n[i.name] = o;
					}
					return this.interpretNode(t.args.expr, {
						...r,
						scope: n
					});
				}
				case "concat": {
					let n = await Promise.all(t.args.map((i) => this.interpretNode(i, r).then((o) => o.value)));
					return { value: n.length > 0 ? n.reduce((i, o) => i.concat(Ct(o)), []) : [] };
				}
				case "sum": {
					let n = await Promise.all(t.args.map((i) => this.interpretNode(i, r).then((o) => o.value)));
					return { value: n.length > 0 ? n.reduce((i, o) => xe(i) + xe(o)) : 0 };
				}
				case "execute": {
					let n = Di(t.args, r.scope, r.generators, this.#p());
					return this.#u(n.length, r, async (i) => {
						let o = 0;
						for (let s of n) {
							let a = ja(s, i.sqlCommenter);
							o += await this.#d(a, i.queryable, () => i.queryable.executeRaw(sn(a)).catch((u) => t.args.type === "rawSql" ? ri(u) : Be(u)));
						}
						return { value: o };
					});
				}
				case "query": {
					let n = Di(t.args, r.scope, r.generators, this.#p());
					return this.#u(n.length, r, async (i) => {
						let o;
						for (let s of n) {
							let a = ja(s, i.sqlCommenter), u = await this.#d(a, i.queryable, () => i.queryable.queryRaw(sn(a)).catch((m) => t.args.type === "rawSql" ? ri(m) : Be(m)));
							o === void 0 ? o = u : (Gr(o.rows, u.rows), o.lastInsertId = u.lastInsertId);
						}
						return {
							value: t.args.type === "rawSql" ? this.#o(o) : this.#i(o),
							lastInsertId: o?.lastInsertId
						};
					});
				}
				case "reverse": {
					let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
					return {
						value: Array.isArray(n) ? n.reverse() : n,
						lastInsertId: i
					};
				}
				case "unique": {
					let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
					if (!Array.isArray(n)) return {
						value: n,
						lastInsertId: i
					};
					if (n.length > 1) throw new Error(`Expected zero or one element, got ${n.length}`);
					return {
						value: n[0] ?? null,
						lastInsertId: i
					};
				}
				case "required": {
					let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
					if (Fi(n)) throw new Error("Required value is empty");
					return {
						value: n,
						lastInsertId: i
					};
				}
				case "mapField": {
					let { value: n, lastInsertId: i } = await this.interpretNode(t.args.records, r);
					return {
						value: _i(n, t.args.field),
						lastInsertId: i
					};
				}
				case "join": {
					let { value: n, lastInsertId: i } = await this.interpretNode(t.args.parent, r);
					if (n === null) return {
						value: null,
						lastInsertId: i
					};
					return {
						value: Va(n, await Promise.all(t.args.children.map(async (s) => ({
							joinExpr: s,
							childRecords: (await this.interpretNode(s.child, r)).value
						}))), t.args.canAssumeStrictEquality),
						lastInsertId: i
					};
				}
				case "transaction": return this.#l(r, (n) => this.interpretNode(t.args, n));
				case "dataMap": {
					let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r);
					return {
						value: ii(n, t.args.structure, t.args.enums),
						lastInsertId: i
					};
				}
				case "validate": {
					let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r);
					return Mi(n, t.args.rules, t.args), {
						value: n,
						lastInsertId: i
					};
				}
				case "if": {
					let { value: n } = await this.interpretNode(t.args.value, r);
					return on(n, t.args.rule) ? await this.interpretNode(t.args.then, r) : await this.interpretNode(t.args.else, r);
				}
				case "diff": {
					let { value: n } = await this.interpretNode(t.args.from, r), { value: i } = await this.interpretNode(t.args.to, r), o = (a) => a !== null ? tt(rt(a), t.args.fields) : null, s = new Set(Ct(i).map(o));
					return { value: Ct(n).filter((a) => !s.has(o(a))) };
				}
				case "process": {
					let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r), o = sn(t.args.operations);
					return $i(o, r.scope, r.generators), {
						value: lr(n, o),
						lastInsertId: i
					};
				}
				case "initializeRecord": {
					let { lastInsertId: n } = await this.interpretNode(t.args.expr, r), i = {};
					for (let [o, s] of Object.entries(t.args.fields)) i[o] = qa(s, n, r.scope, r.generators);
					return {
						value: i,
						lastInsertId: n
					};
				}
				case "mapRecord": {
					let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r), o = n === null ? {} : rt(n);
					for (let [s, a] of Object.entries(t.args.fields)) o[s] = Ua(a, o[s], r.scope, r.generators);
					return {
						value: o,
						lastInsertId: i
					};
				}
				default: return this.#n(t, r.scope, r.generators);
			}
		}
		#n(t, r, n) {
			switch (t.type) {
				case "value": return {
					value: de(t.args, r, n),
					lastInsertId: t.lastInsertId
				};
				case "seq": {
					let i;
					for (let o of t.args) i = this.#n(o, r, n);
					return i ?? { value: void 0 };
				}
				case "get": return { value: r[t.args.name] };
				case "let": {
					let i = Object.create(r);
					for (let o of t.args.bindings) {
						let { value: s } = this.#n(o.expr, i, n);
						i[o.name] = s;
					}
					return this.#n(t.args.expr, i, n);
				}
				case "getFirstNonEmpty":
					for (let i of t.args.names) {
						let o = r[i];
						if (!Fi(o)) return { value: o };
					}
					return { value: [] };
				case "concat": {
					let i = t.args.map((o) => this.#n(o, r, n).value);
					return { value: i.length > 0 ? i.reduce((o, s) => o.concat(Ct(s)), []) : [] };
				}
				case "sum": {
					let i = t.args.map((o) => this.#n(o, r, n).value);
					return { value: i.length > 0 ? i.reduce((o, s) => xe(o) + xe(s)) : 0 };
				}
				case "reverse": {
					let { value: i, lastInsertId: o } = this.#n(t.args, r, n);
					return {
						value: Array.isArray(i) ? i.reverse() : i,
						lastInsertId: o
					};
				}
				case "unique": {
					let { value: i, lastInsertId: o } = this.#n(t.args, r, n);
					if (!Array.isArray(i)) return {
						value: i,
						lastInsertId: o
					};
					if (i.length > 1) throw new Error(`Expected zero or one element, got ${i.length}`);
					return {
						value: i[0] ?? null,
						lastInsertId: o
					};
				}
				case "required": {
					let { value: i, lastInsertId: o } = this.#n(t.args, r, n);
					if (Fi(i)) throw new Error("Required value is empty");
					return {
						value: i,
						lastInsertId: o
					};
				}
				case "mapField": {
					let { value: i, lastInsertId: o } = this.#n(t.args.records, r, n);
					return {
						value: _i(i, t.args.field),
						lastInsertId: o
					};
				}
				case "join": {
					let { value: i, lastInsertId: o } = this.#n(t.args.parent, r, n);
					if (i === null) return {
						value: null,
						lastInsertId: o
					};
					return {
						value: Va(i, t.args.children.map((a) => ({
							joinExpr: a,
							childRecords: this.#n(a.child, r, n).value
						})), t.args.canAssumeStrictEquality),
						lastInsertId: o
					};
				}
				case "dataMap": {
					let { value: i, lastInsertId: o } = this.#n(t.args.expr, r, n);
					return {
						value: ii(i, t.args.structure, t.args.enums),
						lastInsertId: o
					};
				}
				case "validate": {
					let { value: i, lastInsertId: o } = this.#n(t.args.expr, r, n);
					return Mi(i, t.args.rules, t.args), {
						value: i,
						lastInsertId: o
					};
				}
				case "if": {
					let { value: i } = this.#n(t.args.value, r, n);
					return on(i, t.args.rule) ? this.#n(t.args.then, r, n) : this.#n(t.args.else, r, n);
				}
				case "unit": return { value: void 0 };
				case "diff": {
					let { value: i } = this.#n(t.args.from, r, n), { value: o } = this.#n(t.args.to, r, n), s = (u) => u !== null ? tt(rt(u), t.args.fields) : null, a = new Set(Ct(o).map(s));
					return { value: Ct(i).filter((u) => !a.has(s(u))) };
				}
				case "process": {
					let { value: i, lastInsertId: o } = this.#n(t.args.expr, r, n), s = sn(t.args.operations);
					return $i(s, r, n), {
						value: lr(i, s),
						lastInsertId: o
					};
				}
				case "initializeRecord": {
					let { lastInsertId: i } = this.#n(t.args.expr, r, n), o = {};
					for (let [s, a] of Object.entries(t.args.fields)) o[s] = qa(a, i, r, n);
					return {
						value: o,
						lastInsertId: i
					};
				}
				case "mapRecord": {
					let { value: i, lastInsertId: o } = this.#n(t.args.expr, r, n), s = i === null ? {} : rt(i);
					for (let [a, u] of Object.entries(t.args.fields)) s[a] = Ua(u, s[a], r, n);
					return {
						value: s,
						lastInsertId: o
					};
				}
				default: V(t, `Unexpected node type: ${t.type}`);
			}
		}
		#u(t, r, n) {
			return t <= 1 ? n(r) : this.#l(r, n);
		}
		async #l(t, r) {
			if (!t.transactionManager.enabled) return r(t);
			let n = t.transactionManager.manager, i = await n.startInternalTransaction(), o = await n.getTransaction(i, "query");
			try {
				let s = await r({
					...t,
					queryable: o,
					transactionManager: { enabled: !1 }
				});
				return await n.commitTransaction(i.id), s;
			} catch (s) {
				try {
					await n.rollbackTransaction(i.id);
				} catch (a) {
					qd("failed to roll back an internal transaction", a);
				}
				throw s;
			}
		}
		#p() {
			return this.#a?.maxBindValues !== void 0 ? this.#a.maxBindValues : this.#c();
		}
		#c() {
			if (this.#s !== void 0) switch (this.#s) {
				case "cockroachdb":
				case "postgres":
				case "postgresql":
				case "prisma+postgres": return 32766;
				case "mysql": return 65535;
				case "sqlite": return 999;
				case "sqlserver": return 2098;
				case "mongodb": return;
				default: V(this.#s, `Unexpected provider: ${this.#s}`);
			}
		}
		#d(t, r, n) {
			return Wr({
				query: t,
				execute: n,
				provider: this.#s ?? r.provider,
				tracingHelper: this.#r,
				onQuery: this.#e
			});
		}
	};
	function Fi(e) {
		return Array.isArray(e) ? e.length === 0 : e == null;
	}
	function Ct(e) {
		return Array.isArray(e) ? e : [e];
	}
	function xe(e) {
		if (typeof e == "number") return e;
		if (typeof e == "string") return Number(e);
		throw new Error(`Expected number, got ${typeof e}`);
	}
	function rt(e) {
		if (typeof e == "object" && e !== null) return e;
		throw new Error(`Expected object, got ${typeof e}`);
	}
	function _i(e, t) {
		return Array.isArray(e) ? e.map((r) => _i(r, t)) : typeof e == "object" && e !== null ? e[t] ?? null : e;
	}
	function Va(e, t, r) {
		for (let { joinExpr: n, childRecords: i } of t) {
			let o = n.on.map(([P]) => P), s = n.on.map(([, P]) => P), a = {}, u = Array.isArray(e) ? e : [e];
			for (let P of u) {
				let T = rt(P), S = tt(T, o);
				a[S] || (a[S] = []), a[S].push(T), n.isRelationUnique ? T[n.parentField] = null : T[n.parentField] = [];
			}
			let m = r ? void 0 : Ud(u, o);
			for (let P of Array.isArray(i) ? i : [i]) {
				if (P === null) continue;
				let T = tt(rt(P), s, m);
				for (let S of a[T] ?? []) n.isRelationUnique ? S[n.parentField] = P : S[n.parentField].push(P);
			}
		}
		return e;
	}
	function Ud(e, t) {
		function r(o) {
			switch (o) {
				case "number": return Number;
				case "string": return String;
				case "boolean": return Boolean;
				case "bigint": return BigInt;
				default: return;
			}
		}
		let n = Array.from({ length: t.length }), i = 0;
		for (let o of e) {
			let s = rt(o);
			for (let [a, u] of t.entries()) if (s[u] !== null && n[a] === void 0) {
				let m = r(typeof s[u]);
				m !== void 0 && (n[a] = m), i++;
			}
			if (i === t.length) break;
		}
		return n;
	}
	function qa(e, t, r, n) {
		switch (e.type) {
			case "value": return de(e.value, r, n);
			case "lastInsertId": return t;
			default: V(e, `Unexpected field initializer type: ${e.type}`);
		}
	}
	function Ua(e, t, r, n) {
		switch (e.type) {
			case "set": return de(e.value, r, n);
			case "add": return xe(t) + xe(de(e.value, r, n));
			case "subtract": return xe(t) - xe(de(e.value, r, n));
			case "multiply": return xe(t) * xe(de(e.value, r, n));
			case "divide": {
				let i = xe(t), o = xe(de(e.value, r, n));
				return o === 0 ? null : i / o;
			}
			default: V(e, `Unexpected field operation type: ${e.type}`);
		}
	}
	function jd(e, t) {
		let r = pr(e);
		if (r) return t(r).then((n) => {
			let i = {
				type: "value",
				args: n.value,
				lastInsertId: n.lastInsertId
			}, o = cr(e, r, i);
			if (!o) throw new Error("Could not substitute the evaluated impure node into the query plan");
			return o;
		});
	}
	function cr(e, t, r) {
		if (e === t) return r;
		switch (e.type) {
			case "seq":
			case "sum":
			case "concat":
				for (let n = 0; n < e.args.length; n++) {
					let i = cr(e.args[n], t, r);
					if (i) return {
						...e,
						args: e.args.map((o, s) => s === n ? i : o)
					};
				}
				return;
			case "dataMap":
			case "validate":
			case "initializeRecord":
			case "mapRecord":
			case "process": {
				let n = cr(e.args.expr, t, r);
				return n && {
					...e,
					args: {
						...e.args,
						expr: n
					}
				};
			}
			case "mapField": {
				let n = cr(e.args.records, t, r);
				return n && {
					...e,
					args: {
						...e.args,
						records: n
					}
				};
			}
			case "reverse":
			case "unique":
			case "required": {
				let n = cr(e.args, t, r);
				return n && {
					...e,
					args: n
				};
			}
			default: return;
		}
	}
	function pr(e) {
		switch (e.type) {
			case "query":
			case "execute": return e;
			case "seq":
			case "sum":
			case "concat": {
				let t;
				for (let r of e.args) {
					let n = pr(r);
					if (n === null) return null;
					if (n) {
						if (t) return null;
						t = n;
					}
				}
				return t;
			}
			case "dataMap":
			case "validate":
			case "initializeRecord":
			case "mapRecord":
			case "process": return pr(e.args.expr);
			case "mapField": return pr(e.args.records);
			case "reverse":
			case "unique":
			case "required": return pr(e.args);
			case "let":
			case "join":
			case "diff":
			case "if":
			case "transaction": return null;
			case "value":
			case "get":
			case "getFirstNonEmpty":
			case "unit": return;
			default: V(e, `Unexpected node type: ${e.type}`);
		}
	}
	function ja(e, t) {
		if (!t || t.plugins.length === 0) return e;
		let r = Ys(t.plugins, {
			query: t.queryInfo,
			sql: e.sql
		});
		return r ? {
			...e,
			sql: ea(e.sql, r)
		} : e;
	}
	function $i(e, t, r) {
		let n = e.pagination?.cursor;
		if (n) for (let [i, o] of Object.entries(n)) n[i] = de(o, t, r);
		for (let i of Object.values(e.nested)) $i(i, t, r);
	}
	function sn(e) {
		return ge(e);
	}
	function Ba(e) {
		return new Li(e).deserialize();
	}
	function Bd(e) {
		return Buffer.from(e, "base64url");
	}
	var Li = class {
		#e;
		#t;
		#r = 0;
		constructor(t) {
			this.#e = t;
			let r = Bd(t.graph);
			this.#t = new DataView(r.buffer, r.byteOffset, r.byteLength);
		}
		deserialize() {
			let { inputNodeCount: t, outputNodeCount: r, rootCount: n } = this.#n(), i = this.#u(t), o = this.#l(r), s = this.#p(n);
			return {
				strings: this.#e.strings,
				inputNodes: i,
				outputNodes: o,
				roots: s
			};
		}
		#i() {
			let t = 0, r = 0, n;
			do
				n = this.#t.getUint8(this.#r++), t |= (n & 127) << r, r += 7;
			while (n >= 128);
			return t;
		}
		#o() {
			let t = this.#i();
			return t === 0 ? void 0 : t - 1;
		}
		#s() {
			let t = this.#t.getUint8(this.#r);
			return this.#r += 1, t;
		}
		#a() {
			let t = this.#t.getUint16(this.#r, !0);
			return this.#r += 2, t;
		}
		#n() {
			return {
				inputNodeCount: this.#i(),
				outputNodeCount: this.#i(),
				rootCount: this.#i()
			};
		}
		#u(t) {
			let r = [];
			for (let n = 0; n < t; n++) {
				let i = this.#i(), o = {};
				for (let s = 0; s < i; s++) {
					let a = this.#i(), u = this.#a(), m = this.#o(), P = this.#o(), S = { flags: this.#s() };
					u !== 0 && (S.scalarMask = u), m !== void 0 && (S.childNodeId = m), P !== void 0 && (S.enumNameIndex = P), o[a] = S;
				}
				r.push({ edges: o });
			}
			return r;
		}
		#l(t) {
			let r = [];
			for (let n = 0; n < t; n++) {
				let i = this.#i(), o = {};
				for (let s = 0; s < i; s++) {
					let a = this.#i(), u = this.#o(), m = this.#o(), P = {};
					u !== void 0 && (P.argsNodeId = u), m !== void 0 && (P.outputNodeId = m), o[a] = P;
				}
				r.push({ edges: o });
			}
			return r;
		}
		#p(t) {
			let r = {};
			for (let n = 0; n < t; n++) {
				let i = this.#i(), o = this.#o(), s = this.#o(), a = this.#e.strings[i], u = {};
				o !== void 0 && (u.argsNodeId = o), s !== void 0 && (u.outputNodeId = s), r[a] = u;
			}
			return r;
		}
	};
	var mr = class e {
		#e;
		#t;
		#r;
		constructor(t, r) {
			this.#e = t, this.#r = r, this.#t = /* @__PURE__ */ new Map();
			for (let n = 0; n < t.strings.length; n++) this.#t.set(t.strings[n], n);
		}
		static deserialize(t, r) {
			let n = Ba(t);
			return new e(n, r);
		}
		static fromData(t, r) {
			return new e(t, r);
		}
		root(t) {
			let r = this.#e.roots[t];
			if (r) return {
				argsNodeId: r.argsNodeId,
				outputNodeId: r.outputNodeId
			};
		}
		inputNode(t) {
			if (!(t === void 0 || t < 0 || t >= this.#e.inputNodes.length)) return { id: t };
		}
		outputNode(t) {
			if (!(t === void 0 || t < 0 || t >= this.#e.outputNodes.length)) return { id: t };
		}
		inputEdge(t, r) {
			if (!t) return;
			let n = this.#e.inputNodes[t.id];
			if (!n) return;
			let i = this.#t.get(r);
			if (i === void 0) return;
			let o = n.edges[i];
			if (o) return {
				flags: o.flags,
				childNodeId: o.childNodeId,
				scalarMask: o.scalarMask ?? 0,
				enumNameIndex: o.enumNameIndex
			};
		}
		outputEdge(t, r) {
			if (!t) return;
			let n = this.#e.outputNodes[t.id];
			if (!n) return;
			let i = this.#t.get(r);
			if (i === void 0) return;
			let o = n.edges[i];
			if (o) return {
				argsNodeId: o.argsNodeId,
				outputNodeId: o.outputNodeId
			};
		}
		enumValues(t) {
			if (t?.enumNameIndex === void 0) return;
			let r = this.#e.strings[t.enumNameIndex];
			if (r) return this.#r(r);
		}
		getString(t) {
			return this.#e.strings[t];
		}
	};
	var Ne = {
		ParamScalar: 1,
		ParamEnum: 2,
		ParamListScalar: 4,
		ParamListEnum: 8,
		ListObject: 16,
		Object: 32
	};
	var re = {
		String: 1,
		Int: 2,
		BigInt: 4,
		Float: 8,
		Decimal: 16,
		Boolean: 32,
		DateTime: 64,
		Json: 128,
		Bytes: 256
	};
	function De(e, t) {
		return (e.flags & t) !== 0;
	}
	function Ge(e) {
		return e.scalarMask;
	}
	var Qd = /* @__PURE__ */ new Set([
		"DateTime",
		"Decimal",
		"BigInt",
		"Bytes",
		"Json",
		"Raw"
	]);
	function an(e) {
		if (e == null) return { kind: "null" };
		if (typeof e == "string") return {
			kind: "primitive",
			value: e
		};
		if (typeof e == "number") return {
			kind: "primitive",
			value: e
		};
		if (typeof e == "boolean") return {
			kind: "primitive",
			value: e
		};
		if (Array.isArray(e)) return {
			kind: "array",
			items: e
		};
		if (typeof e == "object") {
			let t = e;
			if ("$type" in t && typeof t.$type == "string") {
				let r = t.$type;
				return Qd.has(r) ? {
					kind: "taggedScalar",
					tag: r,
					value: t.value
				} : {
					kind: "structural",
					value: t.value
				};
			}
			return {
				kind: "object",
				entries: t
			};
		}
		return {
			kind: "structural",
			value: e
		};
	}
	function Qa(e) {
		return typeof e == "object" && e !== null && !Array.isArray(e) && !("$type" in e);
	}
	function Ja(e) {
		return typeof e == "object" && e !== null && "$type" in e && typeof e.$type == "string";
	}
	function Vi(e, t) {
		let r = new ln(t), n = e.modelName ? `${e.modelName}.${e.action}` : e.action, i = t.root(n);
		return {
			parameterizedQuery: {
				...e,
				query: r.parameterizeFieldSelection(e.query, i?.argsNodeId, i?.outputNodeId)
			},
			placeholderValues: r.getPlaceholderValues()
		};
	}
	function qi(e, t) {
		let r = new ln(t), n = [];
		for (let i = 0; i < e.batch.length; i++) {
			let o = e.batch[i], s = o.modelName ? `${o.modelName}.${o.action}` : o.action, a = t.root(s);
			n.push({
				...o,
				query: r.parameterizeFieldSelection(o.query, a?.argsNodeId, a?.outputNodeId)
			});
		}
		return {
			parameterizedBatch: {
				...e,
				batch: n
			},
			placeholderValues: r.getPlaceholderValues()
		};
	}
	var ln = class {
		#e;
		#t = /* @__PURE__ */ new Map();
		#r = /* @__PURE__ */ new Map();
		#i = 1;
		constructor(t) {
			this.#e = t;
		}
		getPlaceholderValues() {
			return Object.fromEntries(this.#t);
		}
		#o(t, r) {
			let n = Gd(t, r), i = this.#r.get(n);
			if (i !== void 0) return Ga(i, r);
			let o = `%${this.#i++}`;
			return this.#r.set(n, o), this.#t.set(o, t), Ga(o, r);
		}
		parameterizeFieldSelection(t, r, n) {
			let i = this.#e.inputNode(r), o = this.#e.outputNode(n), s = { ...t };
			return t.arguments && t.arguments.$type !== "Raw" && (s.arguments = this.#s(t.arguments, i)), t.selection && (s.selection = this.#c(t.selection, o)), s;
		}
		#s(t, r) {
			if (!r) return t;
			let n = {};
			for (let [i, o] of Object.entries(t)) {
				let s = this.#e.inputEdge(r, i);
				s ? n[i] = this.#a(o, s) : n[i] = o;
			}
			return n;
		}
		#a(t, r) {
			let n = an(t);
			switch (n.kind) {
				case "null": return t;
				case "structural": return t;
				case "primitive": return this.#n(n.value, r);
				case "taggedScalar": return this.#u(t, n.tag, r);
				case "array": return this.#l(n.items, t, r);
				case "object": return this.#p(n.entries, r);
				default: throw new Error(`Unknown value kind ${n.kind}`);
			}
		}
		#n(t, r) {
			if (De(r, Ne.ParamEnum) && r.enumNameIndex !== void 0 && typeof t == "string") {
				let o = this.#e.enumValues(r);
				if (o && Object.hasOwn(o, t)) return this.#o(o[t], { type: "Enum" });
			}
			if (!De(r, Ne.ParamScalar)) return t;
			let n = Ge(r);
			if (n === 0) return t;
			let i = Ui(t);
			return Ha(i, n) ? (n & re.Json && (t = JSON.stringify(t)), this.#o(t, i)) : t;
		}
		#u(t, r, n) {
			if (!De(n, Ne.ParamScalar)) return t;
			let i = Ge(n);
			if (i === 0 || !Ka(r, i)) return t;
			let o = Wa(t.$type), s = Za(t);
			return this.#o(s, o);
		}
		#l(t, r, n) {
			if (De(n, Ne.ParamScalar) && Ge(n) & re.Json) {
				let i = Se(Ae(t));
				return this.#o(i, { type: "Json" });
			}
			if (De(n, Ne.ParamEnum)) {
				let i = this.#e.enumValues(n);
				if (i && t.every((o) => typeof o == "string" && Object.hasOwn(i, o))) return this.#o(t, {
					type: "List",
					inner: { type: "Enum" }
				});
			}
			if (De(n, Ne.ParamListScalar) && t.every((o) => Zd(o, n)) && t.length > 0) {
				let o = t.map((u) => Xd(u)), a = {
					type: "List",
					inner: Wd(t)
				};
				return this.#o(o, a);
			}
			if (De(n, Ne.ListObject)) {
				let i = this.#e.inputNode(n.childNodeId);
				if (i) return t.map((o) => Qa(o) ? this.#s(o, i) : o);
			}
			return r;
		}
		#p(t, r) {
			if (De(r, Ne.Object)) {
				let i = this.#e.inputNode(r.childNodeId);
				if (i) return this.#s(t, i);
			}
			if (Ge(r) & re.Json) {
				let i = Se(Ae(t));
				return this.#o(i, { type: "Json" });
			}
			return t;
		}
		#c(t, r) {
			if (!t || !r) return t;
			let n = {};
			for (let [i, o] of Object.entries(t)) {
				if (i === "$scalars" || i === "$composites" || typeof o == "boolean") {
					n[i] = o;
					continue;
				}
				let s = this.#e.outputEdge(r, i);
				if (s) {
					let a = o, u = this.#e.inputNode(s.argsNodeId), m = this.#e.outputNode(s.outputNodeId), P = { selection: a.selection ? this.#c(a.selection, m) : {} };
					a.arguments && (P.arguments = this.#s(a.arguments, u)), n[i] = P;
				} else n[i] = o;
			}
			return n;
		}
	};
	function Ga(e, t) {
		return {
			$type: "Param",
			value: {
				name: e,
				...t
			}
		};
	}
	function za(e) {
		return e.type === "List" ? `List<${za(e.inner)}>` : e.type;
	}
	function Jd(e) {
		return ArrayBuffer.isView(e) ? Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64") : JSON.stringify(e);
	}
	function Gd(e, t) {
		return `${za(t)}:${Jd(e)}`;
	}
	var zd = 2 ** 31 - 1;
	var Hd = -(2 ** 31);
	function Ui(e) {
		switch (typeof e) {
			case "boolean": return { type: "Boolean" };
			case "number": return Number.isInteger(e) ? Hd <= e && e <= zd ? { type: "Int" } : { type: "BigInt" } : { type: "Float" };
			case "string": return { type: "String" };
			default: throw new Error("unreachable");
		}
	}
	function Ha({ type: e }, t) {
		switch (e) {
			case "Boolean": return (t & re.Boolean) !== 0;
			case "Int": return (t & (re.Int | re.BigInt | re.Float)) !== 0;
			case "BigInt": return (t & re.BigInt) !== 0;
			case "Float": return (t & re.Float) !== 0;
			case "String": return (t & re.String) !== 0;
			default: return !1;
		}
	}
	function Wa(e) {
		switch (e) {
			case "BigInt":
			case "Bytes":
			case "DateTime":
			case "Json": return { type: e };
			case "Decimal": return { type: "Float" };
			default: return;
		}
	}
	function Wd(e) {
		let t = { type: "Any" };
		for (let r of e) {
			let n = an(r), i;
			switch (n.kind) {
				case "primitive":
					i = Ui(n.value);
					break;
				case "taggedScalar":
					i = Wa(n.tag) ?? { type: "Any" };
					break;
				default: return { type: "Any" };
			}
			t = Kd(t, i);
		}
		return t;
	}
	function Kd(e, t) {
		if (e.type === "Any") return t;
		if (t.type === "Any" || e.type === t.type) return e;
		let r = {
			Int: 0,
			BigInt: 1,
			Float: 2
		}, n = r[e.type], i = r[t.type];
		return n !== void 0 && i !== void 0 ? n >= i ? e : t : { type: "Any" };
	}
	function Ka(e, t) {
		switch (e) {
			case "DateTime": return (t & re.DateTime) !== 0;
			case "Decimal": return (t & re.Decimal) !== 0;
			case "BigInt": return (t & re.BigInt) !== 0;
			case "Bytes": return (t & re.Bytes) !== 0;
			case "Json": return (t & re.Json) !== 0;
			default: return !1;
		}
	}
	function Zd(e, t) {
		let r = an(e);
		switch (r.kind) {
			case "structural": return !1;
			case "null": return !1;
			case "primitive": {
				let n = Ui(r.value), i = Ge(t);
				return i !== 0 && Ha(n, i);
			}
			case "taggedScalar": {
				let n = Ge(t);
				return n !== 0 && Ka(r.tag, n);
			}
			default: return !1;
		}
	}
	function Xd(e) {
		return Ja(e) ? Za(e) : e;
	}
	function Za(e) {
		return e.value;
	}
	async function Yd() {
		return globalThis.crypto ?? await import("node:crypto");
	}
	async function Xa() {
		return (await Yd()).randomUUID();
	}
	async function Ya(e, t) {
		return new Promise((r) => {
			e.addEventListener(t, r, { once: !0 });
		});
	}
	var ue = class extends X {
		name = "TransactionManagerError";
		constructor(t, r) {
			super("Transaction API error: " + t, "P2028", r);
		}
	};
	var nt = class extends ue {
		constructor() {
			super("Transaction not found. Transaction ID is invalid, refers to an old closed transaction Prisma doesn't have information about anymore, or was obtained before disconnecting.");
		}
	};
	var un = class extends ue {
		constructor(t) {
			super(`Transaction already closed: A ${t} cannot be executed on a committed transaction.`);
		}
	};
	var cn = class extends ue {
		constructor(t) {
			super(`Transaction already closed: A ${t} cannot be executed on a transaction that was rolled back.`);
		}
	};
	var fr = class extends ue {
		constructor() {
			super("Unable to start a transaction in the given time.");
		}
	};
	var pn = class extends ue {
		constructor(t, { timeout: r, timeTaken: n }) {
			super(`A ${t} cannot be executed on an expired transaction. The timeout for this transaction was ${r} ms, however ${n} ms passed since the start of the transaction. Consider increasing the interactive transaction timeout or doing less work in the transaction.`, {
				operation: t,
				timeout: r,
				timeTaken: n
			});
		}
	};
	var Me = class extends ue {
		constructor(t) {
			super(`Internal Consistency Error: ${t}`);
		}
	};
	var dn = class extends ue {
		constructor(t) {
			super(`Invalid isolation level: ${t}`, { isolationLevel: t });
		}
	};
	var em = 100;
	var tm = 2e3;
	function rm() {
		let e, t = new Promise((r) => {
			e = r;
		});
		return {
			abortController: new AbortController(),
			settled: t,
			markSettled: e
		};
	}
	var it = K("prisma:client:transactionManager");
	var nm = () => ({
		sql: "COMMIT",
		args: [],
		argTypes: []
	});
	var el = () => ({
		sql: "ROLLBACK",
		args: [],
		argTypes: []
	});
	var im = () => ({
		sql: "-- Implicit \"COMMIT\" query via underlying driver",
		args: [],
		argTypes: []
	});
	var om = () => ({
		sql: "-- Implicit \"ROLLBACK\" query via underlying driver",
		args: [],
		argTypes: []
	});
	var gr = class {
		transactions = /* @__PURE__ */ new Map();
		closedTransactions = [];
		#e = /* @__PURE__ */ new Set();
		driverAdapter;
		transactionOptions;
		tracingHelper;
		#t;
		#r;
		constructor({ driverAdapter: t, transactionOptions: r, tracingHelper: n, onQuery: i, provider: o }) {
			this.driverAdapter = t, this.transactionOptions = r, this.tracingHelper = n, this.#t = i, this.#r = o;
		}
		async startInternalTransaction(t) {
			let r = t !== void 0 ? this.#y(t) : {};
			return await this.tracingHelper.runInChildSpan("start_transaction", () => this.#i(r));
		}
		async startTransaction(t) {
			let r = t !== void 0 ? this.#y(t) : this.transactionOptions;
			return await this.tracingHelper.runInChildSpan("start_transaction", () => this.#i(r));
		}
		async #i(t) {
			if (t.newTxId) return await this.#d(t.newTxId, "start", async (o) => {
				if (o.status !== "running") throw new Me(`Transaction in invalid state ${o.status} when starting a nested transaction.`);
				if (!o.transaction) throw new Me("Transaction missing underlying driver transaction when starting a nested transaction.");
				o.depth += 1;
				let s = this.#a(o);
				o.savepoints.push(s);
				try {
					await this.#n(o.transaction)(s);
				} catch (a) {
					throw o.depth -= 1, o.savepoints.pop(), a;
				}
				return { id: o.id };
			});
			let r = rm(), { abortController: n } = r;
			this.#e.add(r);
			let i;
			try {
				let o = {
					id: await Xa(),
					status: "waiting",
					timer: void 0,
					timeout: t.timeout,
					startedAt: Date.now(),
					transaction: void 0,
					operationQueue: Promise.resolve(),
					depth: 1,
					savepoints: [],
					savepointCounter: 0
				};
				if (n.signal.aborted) throw new fr();
				let s = tl(() => n.abort(), t.maxWait);
				s?.unref?.();
				let a = this.driverAdapter.startTransaction(t.isolationLevel).catch(Be);
				switch (o.transaction = await Promise.race([a.finally(() => clearTimeout(s)), Ya(n.signal, "abort").then(() => {})]), this.transactions.set(o.id, o), o.status) {
					case "waiting":
						if (n.signal.aborted) throw o.transaction = void 0, i = this.#o(a), await this.#f(o, "timed_out"), new fr();
						return o.status = "running", o.startedAt = Date.now(), o.timer = this.#c(o.id, t.timeout), { id: o.id };
					case "timed_out":
					case "running":
					case "committed":
					case "rolled_back": throw new Me(`Transaction in invalid state ${o.status} although it just finished startup.`);
					default: return V(o.status, "Unknown transaction status.");
				}
			} finally {
				this.#e.delete(r), i ? i.finally(r.markSettled) : r.markSettled();
			}
		}
		async #o(t) {
			try {
				let r = await t;
				if (r.options.usePhantomQuery) await r.rollback();
				else try {
					await r.executeRaw(el());
				} finally {
					await r.rollback();
				}
			} catch (r) {
				it("error in discarded transaction:", r);
			}
		}
		async commitTransaction(t) {
			return await this.tracingHelper.runInChildSpan("commit_transaction", async () => {
				await this.#d(t, "commit", async (r) => {
					if (r.depth > 1) {
						if (!r.transaction) throw new nt();
						let n = r.savepoints.at(-1);
						if (!n) throw new Me(`Missing savepoint for nested commit. Depth: ${r.depth}, transactionId: ${r.id}`);
						try {
							await this.#l(r.transaction, n);
						} finally {
							r.savepoints.pop(), r.depth -= 1;
						}
						return;
					}
					await this.#f(r, "committed");
				});
			});
		}
		async rollbackTransaction(t) {
			return await this.tracingHelper.runInChildSpan("rollback_transaction", async () => {
				await this.#d(t, "rollback", async (r) => {
					if (r.depth > 1) {
						if (!r.transaction) throw new nt();
						let n = r.savepoints.at(-1);
						if (!n) throw new Me(`Missing savepoint for nested rollback. Depth: ${r.depth}, transactionId: ${r.id}`);
						try {
							await this.#u(r.transaction)(n), await this.#l(r.transaction, n);
						} finally {
							r.savepoints.pop(), r.depth -= 1;
						}
						return;
					}
					await this.#f(r, "rolled_back");
				});
			});
		}
		async getTransaction(t, r) {
			let n = this.#s(t.id, r);
			if (n.status === "closing" && (await n.closing, n = this.#s(t.id, r)), !n.transaction) throw new nt();
			return n.transaction;
		}
		#s(t, r) {
			let n = this.transactions.get(t);
			if (!n) {
				let i = this.closedTransactions.find((o) => o.id === t);
				if (i) switch (it("Transaction already closed.", {
					transactionId: t,
					status: i.status
				}), i.status) {
					case "closing":
					case "waiting":
					case "running": throw new Me("Active transaction found in closed transactions list.");
					case "committed": throw new un(r);
					case "rolled_back": throw new cn(r);
					case "timed_out": throw new pn(r, {
						timeout: i.timeout,
						timeTaken: Date.now() - i.startedAt
					});
				}
				else throw it("Transaction not found.", t), new nt();
			}
			if ([
				"committed",
				"rolled_back",
				"timed_out"
			].includes(n.status)) throw new Me("Closed transaction found in active transactions map.");
			return n;
		}
		async cancelAllTransactions() {
			let t = [...this.#e];
			for (let { abortController: r } of t) r.abort();
			await Promise.allSettled([...[...this.transactions.values()].map((r) => this.#m(r, async () => {
				let n = this.transactions.get(r.id);
				n && await this.#f(n, "rolled_back");
			})), ...t.map(({ settled: r }) => sm(r, tm))]);
		}
		#a(t) {
			return `prisma_sp_${t.savepointCounter++}`;
		}
		#n(t) {
			if (t.createSavepoint) return t.createSavepoint.bind(t);
			throw new ue(`Nested transactions are not supported by adapter "${t.adapterName}" (${t.provider}): createSavepoint is not implemented.`);
		}
		#u(t) {
			if (t.rollbackToSavepoint) return t.rollbackToSavepoint.bind(t);
			throw new ue(`Nested transactions are not supported by adapter "${t.adapterName}" (${t.provider}): rollbackToSavepoint is not implemented.`);
		}
		async #l(t, r) {
			t.releaseSavepoint && await t.releaseSavepoint(r);
		}
		#p(t) {
			it("Transaction already committed or rolled back when timeout happened.", t);
		}
		#c(t, r) {
			let n = Date.now(), i = tl(async () => {
				try {
					it("Transaction timed out.", {
						transactionId: t,
						timeoutStartedAt: n,
						timeout: r
					});
					let o = this.transactions.get(t);
					if (!o) {
						this.#p(t);
						return;
					}
					await this.#m(o, async () => {
						let s = this.transactions.get(t);
						s && ["running", "waiting"].includes(s.status) ? await this.#f(s, "timed_out") : this.#p(t);
					});
				} catch (o) {
					it("Error while closing timed-out transaction.", {
						transactionId: t,
						error: o
					});
				}
			}, r);
			return i?.unref?.(), i;
		}
		async #d(t, r, n) {
			let i = this.#s(t, r);
			return await this.#m(i, async () => {
				return await n(this.#s(t, r));
			});
		}
		async #m(t, r) {
			let n = t.operationQueue, i;
			t.operationQueue = new Promise((o) => {
				i = o;
			}), await n;
			try {
				return await r();
			} finally {
				i();
			}
		}
		async #f(t, r) {
			let n = async () => {
				it("Closing transaction.", {
					transactionId: t.id,
					status: r
				});
				try {
					if (t.transaction && r === "committed") if (t.transaction.options.usePhantomQuery) await this.#g(im(), t.transaction, () => t.transaction.commit());
					else {
						let i = nm();
						await this.#g(i, t.transaction, () => t.transaction.executeRaw(i)).then(() => t.transaction.commit(), (o) => {
							let s = () => Promise.reject(o);
							return t.transaction.rollback().then(s, s);
						});
					}
					else if (t.transaction) if (t.transaction.options.usePhantomQuery) await this.#g(om(), t.transaction, () => t.transaction.rollback());
					else {
						let i = el();
						try {
							await this.#g(i, t.transaction, () => t.transaction.executeRaw(i));
						} finally {
							await t.transaction.rollback();
						}
					}
				} finally {
					t.status = r, clearTimeout(t.timer), t.timer = void 0, this.transactions.delete(t.id), this.closedTransactions.push(t), this.closedTransactions.length > em && this.closedTransactions.shift();
				}
			};
			t.status === "closing" ? (await t.closing, this.#s(t.id, r === "committed" ? "commit" : "rollback")) : await Object.assign(t, {
				status: "closing",
				reason: r,
				closing: n()
			}).closing;
		}
		#y(t) {
			if (!t.timeout) throw new ue("timeout is required");
			if (!t.maxWait) throw new ue("maxWait is required");
			if (t.isolationLevel === "SNAPSHOT") throw new dn(t.isolationLevel);
			return {
				...t,
				timeout: t.timeout,
				maxWait: t.maxWait
			};
		}
		#g(t, r, n) {
			return Wr({
				query: t,
				execute: n,
				provider: this.#r ?? r.provider,
				tracingHelper: this.tracingHelper,
				onQuery: this.#t
			});
		}
	};
	function tl(e, t) {
		return t !== void 0 ? setTimeout(e, t) : void 0;
	}
	function sm(e, t) {
		let r, n = new Promise((i) => {
			r = setTimeout(i, t), r?.unref?.();
		});
		return Promise.race([e, n]).finally(() => clearTimeout(r));
	}
	var ne = require_dist();
	var mn = "7.10.1";
	var rl = {
		bigint: "bigint",
		date: "datetime",
		decimal: "decimal",
		bytes: "bytes"
	};
	function il(e) {
		let t;
		try {
			t = JSON.parse(e);
		} catch (i) {
			throw new Error(`Received invalid serialized parameters: ${i.message}`);
		}
		if (!Array.isArray(t)) throw new Error("Received invalid serialized parameters: expected an array");
		return {
			args: t.map((i) => ol(i)),
			argTypes: t.map((i) => lm(i))
		};
	}
	function ol(e) {
		if (Array.isArray(e)) return e.map((t) => ol(t));
		if (typeof e == "object" && e !== null && "prisma__value" in e) {
			if (!("prisma__type" in e)) throw new Error("Invalid serialized parameter, prisma__type should be present when prisma__value is present");
			return `${e.prisma__value}`;
		}
		return typeof e == "object" && e !== null ? JSON.stringify(e) : e;
	}
	function lm(e) {
		return Array.isArray(e) ? {
			scalarType: e.length > 0 ? nl(e[0]) : "unknown",
			arity: "list"
		} : {
			scalarType: nl(e),
			arity: "scalar"
		};
	}
	function nl(e) {
		return typeof e == "object" && e !== null && "prisma__type" in e && typeof e.prisma__type == "string" && e.prisma__type in rl ? rl[e.prisma__type] : typeof e == "number" ? "decimal" : typeof e == "string" ? "string" : "unknown";
	}
	function sl(e, t) {
		return {
			batch: e,
			transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0
		};
	}
	function al(e) {
		return e ? e.replace(/"(?:[^"\\]|\\.)*"/g, "\"X\"").replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
	}
	function ll(e) {
		return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
	}
	var ul = Pe(Ro());
	function cl({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
		return (0, ul.default)({
			user: t,
			repo: r,
			template: n,
			title: e,
			body: i
		});
	}
	function pl({ version: e, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
		let u = ll(ut(go(6e3 - (s?.length ?? 0)))), m = n ? `# Description
\`\`\`
${n}
\`\`\`` : "";
		return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${Mt(cl({
			title: r,
			body: ut(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${m}

## Logs
\`\`\`
${u}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? al(s) : ""}
\`\`\`
`)
		}))}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
	}
	var fn = class e {
		#e;
		#t;
		#r;
		#i;
		#o;
		constructor(t, r, n) {
			this.#e = t, this.#t = r, this.#r = n, this.#i = r.getConnectionInfo?.(), this.#o = dr.forSql({
				onQuery: this.#e.onQuery,
				tracingHelper: this.#e.tracingHelper,
				provider: this.#e.provider,
				connectionInfo: this.#i
			});
		}
		static async connect(t) {
			let r, n;
			try {
				r = await t.driverAdapterFactory.connect(), n = new gr({
					driverAdapter: r,
					transactionOptions: t.transactionOptions,
					tracingHelper: t.tracingHelper,
					onQuery: t.onQuery,
					provider: t.provider
				});
			} catch (i) {
				throw await r?.dispose(), i;
			}
			return new e(t, r, n);
		}
		getConnectionInfo() {
			let t = this.#i ?? { supportsRelationJoins: !1 };
			return Promise.resolve({
				provider: this.#t.provider,
				connectionInfo: t
			});
		}
		async execute({ plan: t, placeholderValues: r, transaction: n, batchIndex: i, queryInfo: o }) {
			let s = n ? await this.#r.getTransaction(n, i !== void 0 ? "batch query" : "query") : this.#t;
			return await this.#o.run(t, {
				queryable: s,
				transactionManager: n ? { enabled: !1 } : {
					enabled: !0,
					manager: this.#r
				},
				scope: r,
				sqlCommenter: this.#e.sqlCommenters && {
					plugins: this.#e.sqlCommenters,
					queryInfo: o
				}
			});
		}
		async startTransaction(t) {
			return {
				...await this.#r.startTransaction(t),
				payload: void 0
			};
		}
		async commitTransaction(t) {
			await this.#r.commitTransaction(t.id);
		}
		async rollbackTransaction(t) {
			await this.#r.rollbackTransaction(t.id);
		}
		async disconnect() {
			try {
				await this.#r.cancelAllTransactions();
			} finally {
				await this.#t.dispose();
			}
		}
		apiKey() {
			return null;
		}
	};
	var gn = class {
		#e;
		#t;
		#r;
		constructor(t = 1e3) {
			this.#e = /* @__PURE__ */ new Map(), this.#t = /* @__PURE__ */ new Map(), this.#r = t;
		}
		getSingle(t) {
			let r = this.#e.get(t);
			return r && (this.#e.delete(t), this.#e.set(t, r)), r;
		}
		setSingle(t, r) {
			if (this.#e.has(t)) {
				this.#e.delete(t), this.#e.set(t, r);
				return;
			}
			if (this.#e.size >= this.#r) {
				let n = this.#e.keys().next().value;
				n !== void 0 && this.#e.delete(n);
			}
			this.#e.set(t, r);
		}
		getBatch(t) {
			let r = this.#t.get(t);
			return r && (this.#t.delete(t), this.#t.set(t, r)), r;
		}
		setBatch(t, r) {
			if (this.#t.has(t)) {
				this.#t.delete(t), this.#t.set(t, r);
				return;
			}
			if (this.#t.size >= this.#r) {
				let n = this.#t.keys().next().value;
				n !== void 0 && this.#t.delete(n);
			}
			this.#t.set(t, r);
		}
		clear() {
			this.#e.clear(), this.#t.clear();
		}
		get size() {
			return this.#e.size + this.#t.size;
		}
		get singleCacheSize() {
			return this.#e.size;
		}
		get batchCacheSize() {
			return this.#t.size;
		}
	};
	var hl = require_dist();
	var yn = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
	function dl(e, t, r) {
		let n = r || {}, i = n.encode || encodeURIComponent;
		if (typeof i != "function") throw new TypeError("option encode is invalid");
		if (!yn.test(e)) throw new TypeError("argument name is invalid");
		let o = i(t);
		if (o && !yn.test(o)) throw new TypeError("argument val is invalid");
		let s = e + "=" + o;
		if (n.maxAge !== void 0 && n.maxAge !== null) {
			let a = n.maxAge - 0;
			if (Number.isNaN(a) || !Number.isFinite(a)) throw new TypeError("option maxAge is invalid");
			s += "; Max-Age=" + Math.floor(a);
		}
		if (n.domain) {
			if (!yn.test(n.domain)) throw new TypeError("option domain is invalid");
			s += "; Domain=" + n.domain;
		}
		if (n.path) {
			if (!yn.test(n.path)) throw new TypeError("option path is invalid");
			s += "; Path=" + n.path;
		}
		if (n.expires) {
			if (!um(n.expires) || Number.isNaN(n.expires.valueOf())) throw new TypeError("option expires is invalid");
			s += "; Expires=" + n.expires.toUTCString();
		}
		if (n.httpOnly && (s += "; HttpOnly"), n.secure && (s += "; Secure"), n.priority) switch (typeof n.priority == "string" ? n.priority.toLowerCase() : n.priority) {
			case "low":
				s += "; Priority=Low";
				break;
			case "medium":
				s += "; Priority=Medium";
				break;
			case "high":
				s += "; Priority=High";
				break;
			default: throw new TypeError("option priority is invalid");
		}
		if (n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
			case !0:
				s += "; SameSite=Strict";
				break;
			case "lax":
				s += "; SameSite=Lax";
				break;
			case "strict":
				s += "; SameSite=Strict";
				break;
			case "none":
				s += "; SameSite=None";
				break;
			default: throw new TypeError("option sameSite is invalid");
		}
		return n.partitioned && (s += "; Partitioned"), s;
	}
	function um(e) {
		return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date;
	}
	function ml(e, t) {
		let r = (e || "").split(";").filter((u) => typeof u == "string" && !!u.trim()), i = cm(r.shift() || ""), o = i.name, s = i.value;
		try {
			s = t?.decode === !1 ? s : (t?.decode || decodeURIComponent)(s);
		} catch {}
		let a = {
			name: o,
			value: s
		};
		for (let u of r) {
			let m = u.split("="), P = (m.shift() || "").trimStart().toLowerCase(), T = m.join("=");
			switch (P) {
				case "expires":
					a.expires = new Date(T);
					break;
				case "max-age":
					a.maxAge = Number.parseInt(T, 10);
					break;
				case "secure":
					a.secure = !0;
					break;
				case "httponly":
					a.httpOnly = !0;
					break;
				case "samesite":
					a.sameSite = T;
					break;
				default: a[P] = T;
			}
		}
		return a;
	}
	function cm(e) {
		let t = "", r = "", n = e.split("=");
		return n.length > 1 ? (t = n.shift(), r = n.join("=")) : r = e, {
			name: t,
			value: r
		};
	}
	var hn = class extends Error {
		clientVersion;
		cause;
		constructor(t, r) {
			super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
		}
		get [Symbol.toStringTag]() {
			return this.name;
		}
	};
	var wn = class extends hn {
		isRetryable;
		constructor(t, r) {
			super(t, r), this.isRetryable = r.isRetryable ?? !0;
		}
	};
	function fl(e, t) {
		return {
			...e,
			isRetryable: t
		};
	}
	var ot = class extends wn {
		name = "InvalidDatasourceError";
		code = "P6001";
		constructor(t, r) {
			super(t, fl(r, !1));
		}
	};
	Bt(ot, "InvalidDatasourceError");
	function gl(e) {
		let t = { clientVersion: e.clientVersion }, r;
		try {
			r = new URL(e.accelerateUrl);
		} catch (u) {
			let m = u.message;
			throw new ot(`Error validating \`accelerateUrl\`, the URL cannot be parsed, reason: ${m}`, t);
		}
		let { protocol: n, searchParams: i } = r;
		if (n !== "prisma:" && n !== Er) throw new ot("Error validating `accelerateUrl`: the URL must start with the protocol `prisma://` or `prisma+postgres://`", t);
		let o = i.get("api_key");
		if (o === null || o.length < 1) throw new ot("Error validating `accelerateUrl`: the URL must contain a valid API key", t);
		let s = Dn(r) ? "http:" : "https:";
		process.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && r.searchParams.has("use_http") && (s = "http:");
		return {
			apiKey: o,
			url: new URL(r.href.replace(n, s))
		};
	}
	var yl = Pe(wo());
	var xn = class {
		apiKey;
		tracingHelper;
		logLevel;
		logQueries;
		engineHash;
		constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
			this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
		}
		build({ traceparent: t, transactionId: r } = {}) {
			let n = {
				Accept: "application/json",
				Authorization: `Bearer ${this.apiKey}`,
				"Content-Type": "application/json",
				"Prisma-Engine-Hash": this.engineHash,
				"Prisma-Engine-Version": yl.enginesVersion
			};
			this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-Transaction-Id"] = r);
			let i = this.#e();
			return i.length > 0 && (n["X-Capture-Telemetry"] = i.join(", ")), n;
		}
		#e() {
			let t = [];
			return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
		}
	};
	function pm(e) {
		return e[0] * 1e3 + e[1] / 1e6;
	}
	function ji(e) {
		return new Date(pm(e));
	}
	var wl = K("prisma:client:clientEngine:remoteExecutor");
	var bn = class {
		#e;
		#t;
		#r;
		#i;
		#o;
		#s;
		constructor(t) {
			this.#e = t.clientVersion, this.#i = t.logEmitter, this.#o = t.tracingHelper, this.#s = t.sqlCommenters;
			let { url: r, apiKey: n } = gl({
				clientVersion: t.clientVersion,
				accelerateUrl: t.accelerateUrl
			});
			this.#r = new Bi(r), this.#t = new xn({
				apiKey: n,
				engineHash: t.clientVersion,
				logLevel: t.logLevel,
				logQueries: t.logQueries,
				tracingHelper: t.tracingHelper
			});
		}
		async getConnectionInfo() {
			return await this.#a({
				path: "/connection-info",
				method: "GET"
			});
		}
		async execute({ plan: t, placeholderValues: r, batchIndex: n, model: i, operation: o, transaction: s, customFetch: a, queryInfo: u }) {
			let m = u && this.#s?.length ? Hr(this.#s, { query: u }) : void 0;
			return (await this.#a({
				path: s ? `/transaction/${s.id}/query` : "/query",
				method: "POST",
				body: {
					model: i,
					operation: o,
					plan: t,
					params: r,
					comments: m && Object.keys(m).length > 0 ? m : void 0
				},
				batchRequestIdx: n,
				fetch: a
			})).data;
		}
		async startTransaction(t) {
			return {
				...await this.#a({
					path: "/transaction/start",
					method: "POST",
					body: t
				}),
				payload: void 0
			};
		}
		async commitTransaction(t) {
			await this.#a({
				path: `/transaction/${t.id}/commit`,
				method: "POST"
			});
		}
		async rollbackTransaction(t) {
			await this.#a({
				path: `/transaction/${t.id}/rollback`,
				method: "POST"
			});
		}
		disconnect() {
			return Promise.resolve();
		}
		apiKey() {
			return this.#t.apiKey;
		}
		async #a({ path: t, method: r, body: n, fetch: i = globalThis.fetch, batchRequestIdx: o }) {
			let s = await this.#r.request({
				method: r,
				path: t,
				headers: this.#t.build(),
				body: n,
				fetch: i
			});
			s.ok || await this.#n(s, o);
			let a = await s.json();
			return typeof a.extensions == "object" && a.extensions !== null && this.#u(a.extensions), a;
		}
		async #n(t, r) {
			let n = t.headers.get("Prisma-Error-Code"), i = await t.text(), o, s = i;
			try {
				o = JSON.parse(i);
			} catch {
				o = {};
			}
			typeof o.code == "string" && (n = o.code), typeof o.error == "string" ? s = o.error : typeof o.message == "string" ? s = o.message : typeof o.InvalidRequestError == "object" && o.InvalidRequestError !== null && typeof o.InvalidRequestError.reason == "string" && (s = o.InvalidRequestError.reason), s = s || `HTTP ${t.status}: ${t.statusText}`;
			let a = typeof o.meta == "object" && o.meta !== null ? o.meta : o;
			throw new hl.PrismaClientKnownRequestError(s, {
				clientVersion: this.#e,
				code: n ?? "P6000",
				batchRequestIdx: r,
				meta: a
			});
		}
		#u(t) {
			let r = t.logs ?? [];
			if (t.spans) this.#o.dispatchEngineSpans(t.spans, r, (n) => this.#l(n));
			else for (let n of r) this.#l(n);
		}
		#l(t) {
			switch (t.level) {
				case "debug":
				case "trace":
					wl(t);
					break;
				case "error":
				case "warn":
				case "info":
					this.#i.emit(t.level, {
						timestamp: ji(t.timestamp),
						message: t.attributes.message ?? "",
						target: t.target ?? "RemoteExecutor"
					});
					break;
				case "query":
					this.#i.emit("query", {
						query: t.attributes.query ?? "",
						timestamp: ji(t.timestamp),
						duration: t.attributes.duration_ms ?? 0,
						params: t.attributes.params ?? "",
						target: t.target ?? "RemoteExecutor"
					});
					break;
				default: throw new Error(`Unexpected log level: ${t.level}`);
			}
		}
	};
	var Bi = class {
		#e;
		#t;
		#r;
		constructor(t) {
			this.#e = t, this.#t = /* @__PURE__ */ new Map();
		}
		async request({ method: t, path: r, headers: n, body: i, fetch: o }) {
			let s = new URL(r, this.#e), a = this.#i(s);
			a && (n.Cookie = a), this.#r && (n["Accelerate-Query-Engine-Jwt"] = this.#r);
			let u = await o(s.href, {
				method: t,
				body: i !== void 0 ? JSON.stringify(i) : void 0,
				headers: n
			});
			return wl(t, s, u.status, u.statusText), this.#r = u.headers.get("Accelerate-Query-Engine-Jwt") ?? void 0, this.#o(s, u), u;
		}
		#i(t) {
			let r = [], n = /* @__PURE__ */ new Date();
			for (let [i, o] of this.#t) {
				if (o.expires && o.expires < n) {
					this.#t.delete(i);
					continue;
				}
				let s = o.domain ?? t.hostname, a = o.path ?? "/";
				t.hostname.endsWith(s) && t.pathname.startsWith(a) && r.push(dl(o.name, o.value));
			}
			return r.length > 0 ? r.join("; ") : void 0;
		}
		#o(t, r) {
			let n = r.headers.getSetCookie?.() || [];
			if (n.length === 0) {
				let i = r.headers.get("Set-Cookie");
				i && n.push(i);
			}
			for (let i of n) {
				let o = ml(i), s = o.domain ?? t.hostname, a = o.path ?? "/", u = `${s}:${a}:${o.name}`;
				this.#t.set(u, {
					name: o.name,
					value: o.value,
					domain: s,
					path: a,
					expires: o.expires
				});
			}
		}
	};
	var Ji = require_dist();
	var Qi = {};
	var xl = { async loadQueryCompiler(e) {
		let { clientVersion: t, compilerWasm: r } = e;
		if (r === void 0) throw new Ji.PrismaClientInitializationError("WASM query compiler was unexpectedly `undefined`", t);
		let n;
		return e.activeProvider === void 0 || Qi[e.activeProvider] === void 0 ? (n = (async () => {
			let i = await r.getRuntime(), o = await r.getQueryCompilerWasmModule();
			if (o == null) throw new Ji.PrismaClientInitializationError("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
			let s = { [r.importName]: i }, a = new WebAssembly.Instance(o, s), u = a.exports.__wbindgen_start;
			return i.__wbg_set_wasm(a.exports), u(), i.QueryCompiler;
		})(), e.activeProvider !== void 0 && (Qi[e.activeProvider] = n)) : n = Qi[e.activeProvider], await n;
	} };
	var dm = "P2038";
	var Ve = K("prisma:client:clientEngine");
	var Tl = globalThis;
	Tl.PRISMA_WASM_PANIC_REGISTRY = { set_message(e) {
		throw new ne.PrismaClientRustPanicError(e, mn);
	} };
	var yr = class {
		name = "ClientEngine";
		#e;
		#t = { type: "disconnected" };
		#r;
		#i;
		#o;
		#s;
		config;
		datamodel;
		logEmitter;
		logQueries;
		logLevel;
		tracingHelper;
		#a;
		constructor(t, r) {
			if (t.accelerateUrl !== void 0) this.#i = {
				remote: !0,
				accelerateUrl: t.accelerateUrl
			};
			else if (t.adapter) this.#i = {
				remote: !1,
				driverAdapterFactory: t.adapter
			}, Ve("Using driver adapter: %O", t.adapter);
			else throw new ne.PrismaClientInitializationError("PrismaClient requires a driver adapter to connect to your database, but none was provided. Pass one to the PrismaClient constructor, e.g. `new PrismaClient({ adapter })`. Learn more: https://pris.ly/d/driver-adapters", t.clientVersion, dm);
			this.#r = r ?? xl, this.config = t, this.logQueries = t.logQueries ?? !1, this.logLevel = t.logLevel ?? "error", this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, this.tracingHelper = t.tracingHelper, this.#o = t.queryPlanCacheMaxSize === 0 ? void 0 : new gn(t.queryPlanCacheMaxSize), this.#s = mr.deserialize(t.parameterizationSchema, (n) => {
				if (!Object.hasOwn(t.runtimeDataModel.enums, n)) return;
				let i = {};
				for (let o of t.runtimeDataModel.enums[n].values) i[o.name] = o.dbName ?? o.name;
				return i;
			}), t.enableDebugLogs && (this.logLevel = "debug"), this.logQueries && (this.#a = (n) => {
				this.logEmitter.emit("query", {
					...n,
					params: Se(n.params),
					target: "ClientEngine"
				});
			});
		}
		async #n() {
			switch (this.#t.type) {
				case "disconnected": {
					let t = this.tracingHelper.runInChildSpan("connect", async () => {
						let r, n;
						try {
							r = await this.#u(), n = await this.#l(r);
						} catch (o) {
							throw this.#t = { type: "disconnected" }, n?.free(), await r?.disconnect(), o;
						}
						let i = {
							executor: r,
							queryCompiler: n
						};
						return this.#t = {
							type: "connected",
							engine: i
						}, i;
					});
					return this.#t = {
						type: "connecting",
						promise: t
					}, await t;
				}
				case "connecting": return await this.#t.promise;
				case "connected": return this.#t.engine;
				case "disconnecting": return await this.#t.promise, await this.#n();
			}
		}
		async #u() {
			return this.#i.remote ? new bn({
				clientVersion: this.config.clientVersion,
				accelerateUrl: this.#i.accelerateUrl,
				logEmitter: this.logEmitter,
				logLevel: this.logLevel,
				logQueries: this.logQueries,
				tracingHelper: this.tracingHelper,
				sqlCommenters: this.config.sqlCommenters
			}) : await fn.connect({
				driverAdapterFactory: this.#i.driverAdapterFactory,
				tracingHelper: this.tracingHelper,
				transactionOptions: {
					...this.config.transactionOptions,
					isolationLevel: this.#g(this.config.transactionOptions.isolationLevel)
				},
				onQuery: this.#a,
				provider: this.config.activeProvider,
				sqlCommenters: this.config.sqlCommenters
			});
		}
		async #l(t) {
			let r = this.#e;
			r === void 0 && (r = await this.#r.loadQueryCompiler(this.config), this.#e = r);
			let { provider: n, connectionInfo: i } = await t.getConnectionInfo();
			try {
				return this.#m(() => new r({
					datamodel: this.datamodel,
					provider: n,
					connectionInfo: i
				}), void 0, !1);
			} catch (o) {
				throw this.#p(o);
			}
		}
		#p(t) {
			if (t instanceof ne.PrismaClientRustPanicError) return t;
			try {
				let r = JSON.parse(t.message);
				return new ne.PrismaClientInitializationError(r.message, this.config.clientVersion, r.error_code);
			} catch {
				return t;
			}
		}
		#c(t, r) {
			if (t instanceof ne.PrismaClientInitializationError) return t;
			if (t.code === "GenericFailure" && t.message?.startsWith("PANIC:")) return new ne.PrismaClientRustPanicError(bl(this, t.message, r), this.config.clientVersion);
			if (t instanceof X) return new ne.PrismaClientKnownRequestError(t.message, {
				code: t.code,
				meta: t.meta,
				clientVersion: this.config.clientVersion
			});
			try {
				let n = JSON.parse(t);
				return new ne.PrismaClientUnknownRequestError(`${n.message}
${n.backtrace}`, { clientVersion: this.config.clientVersion });
			} catch {
				return t;
			}
		}
		#d(t) {
			return t instanceof ne.PrismaClientRustPanicError ? t : typeof t.message == "string" && typeof t.code == "string" ? new ne.PrismaClientKnownRequestError(t.message, {
				code: t.code,
				meta: t.meta,
				clientVersion: this.config.clientVersion
			}) : typeof t.message == "string" ? new ne.PrismaClientUnknownRequestError(t.message, { clientVersion: this.config.clientVersion }) : t;
		}
		#m(t, r, n = !0) {
			let i = Tl.PRISMA_WASM_PANIC_REGISTRY.set_message, o;
			global.PRISMA_WASM_PANIC_REGISTRY.set_message = (s) => {
				o = s;
			};
			try {
				return t();
			} finally {
				if (global.PRISMA_WASM_PANIC_REGISTRY.set_message = i, o) throw this.#e = void 0, n && this.stop().catch((s) => Ve("failed to disconnect:", s)), new ne.PrismaClientRustPanicError(bl(this, o, r), this.config.clientVersion);
			}
		}
		onBeforeExit() {
			throw new Error("\"beforeExit\" hook is not applicable to the client engine, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.");
		}
		async start() {
			await this.#n();
		}
		async stop() {
			switch (this.#t.type) {
				case "disconnected": return;
				case "connecting": return await this.#t.promise, await this.stop();
				case "connected": {
					let t = this.#t.engine, r = this.tracingHelper.runInChildSpan("disconnect", async () => {
						try {
							await t.executor.disconnect(), t.queryCompiler.free();
						} finally {
							this.#t = { type: "disconnected" };
						}
					});
					return this.#t = {
						type: "disconnecting",
						promise: r
					}, await r;
				}
				case "disconnecting": return await this.#t.promise;
			}
		}
		version() {
			return "unknown";
		}
		async transaction(t, r, n) {
			let i, { executor: o } = await this.#n();
			try {
				if (t === "start") {
					let s = n;
					i = await o.startTransaction({
						...s,
						isolationLevel: this.#g(s.isolationLevel)
					});
				} else if (t === "commit") {
					let s = n;
					await o.commitTransaction(s);
				} else if (t === "rollback") {
					let s = n;
					await o.rollbackTransaction(s);
				} else $e(t, "Invalid transaction action.");
			} catch (s) {
				throw this.#c(s);
			}
			return i ? {
				id: i.id,
				payload: void 0
			} : void 0;
		}
		async request(t, { interactiveTransaction: r, customDataProxyFetch: n }) {
			Ve("sending request");
			let { executor: i, queryCompiler: o } = await this.#n().catch((m) => {
				throw this.#c(m, JSON.stringify(t));
			}), s, a = {}, u = t.query;
			if (Pl(t)) s = El(t);
			else {
				let { parameterizedQuery: m, placeholderValues: P } = Vi(t, this.#s), T = JSON.stringify(m);
				a = P, u = m.query;
				let S = t.action !== "createMany" && t.action !== "createManyAndReturn", I = S ? this.#o?.getSingle(T) : void 0;
				I ? (Ve("query plan cache hit"), s = I) : (Ve("query plan cache miss"), s = this.#f(m, T, o), S && this.#o?.setSingle(T, s));
			}
			try {
				Ve("query plan created", s);
				let m = await i.execute({
					plan: s,
					model: t.modelName,
					operation: t.action,
					placeholderValues: a,
					transaction: r,
					batchIndex: void 0,
					customFetch: n?.(globalThis.fetch),
					queryInfo: {
						type: "single",
						modelName: t.modelName,
						action: t.action,
						query: u
					}
				});
				return Ve("query plan executed"), { data: { [t.action]: m } };
			} catch (m) {
				throw this.#c(m, JSON.stringify(t));
			}
		}
		async requestBatch(t, { transaction: r, customDataProxyFetch: n }) {
			if (t.length === 0) return [];
			let i = t[0].action, o = t[0].modelName, s = sl(t, r), a = JSON.stringify(s), { executor: u, queryCompiler: m } = await this.#n().catch((A) => {
				throw this.#c(A, a);
			}), P = o === void 0, T, S = {}, I = t.map((A) => A.query);
			if (P) T = this.#y(t, a, m);
			else {
				let { parameterizedBatch: A, placeholderValues: M } = qi(s, this.#s), L = JSON.stringify(A);
				S = M, I = A.batch.map((E) => E.query);
				let q = this.#o?.getBatch(L);
				if (q) Ve("batch query plan cache hit"), T = q;
				else {
					Ve("batch query plan cache miss");
					try {
						T = this.#y(A.batch, L, m), this.#o?.setBatch(L, T);
					} catch (E) {
						throw this.#d(E);
					}
				}
			}
			try {
				let A;
				switch (r?.kind === "itx" && (A = r.options), T.type) {
					case "multi": {
						if (r?.kind !== "itx") {
							let E = r?.options, D = {
								maxWait: E?.maxWait ?? this.config.transactionOptions.maxWait,
								timeout: E?.timeout ?? this.config.transactionOptions.timeout,
								isolationLevel: E?.isolationLevel ?? this.config.transactionOptions.isolationLevel
							};
							A = await this.transaction("start", {}, D);
						}
						let M = [], L = !1, q;
						for (let [E, D] of T.plans.entries()) try {
							let H = await u.execute({
								plan: D,
								placeholderValues: S,
								model: t[E].modelName,
								operation: t[E].action,
								batchIndex: E,
								transaction: A,
								customFetch: n?.(globalThis.fetch),
								queryInfo: {
									type: "single",
									modelName: t[E].modelName,
									action: t[E].action,
									query: I[E]
								}
							});
							M.push({ data: { [t[E].action]: H } });
						} catch (H) {
							if (q ??= r?.kind !== "batch" && t.every((ce) => ce.action === "findUnique" || ce.action === "findUniqueOrThrow"), M.push(H), L = !0, !q) break;
						}
						return A !== void 0 && r?.kind !== "itx" && (L ? await this.transaction("rollback", {}, A) : await this.transaction("commit", {}, A)), M;
					}
					case "compacted":
						if (!t.every((q) => q.action === i && q.modelName === o)) {
							let q = t.map((D) => D.action).join(", "), E = t.map((D) => D.modelName).join(", ");
							throw new Error(`Internal error: All queries in a compacted batch must have the same action and model name, but received actions: [${q}] and model names: [${E}]. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.`);
						}
						if (o === void 0) throw new Error("Internal error: A compacted batch cannot contain raw queries. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.");
						return Ws(await u.execute({
							plan: T.plan,
							placeholderValues: S,
							model: o,
							operation: i,
							batchIndex: void 0,
							transaction: A,
							customFetch: n?.(globalThis.fetch),
							queryInfo: {
								type: "compacted",
								action: i,
								modelName: o,
								queries: I
							}
						}), T, S).map((q) => ({ data: { [i]: q } }));
				}
			} catch (A) {
				throw this.#c(A, a);
			}
		}
		async apiKey() {
			let { executor: t } = await this.#n();
			return t.apiKey();
		}
		#f(t, r, n) {
			try {
				return this.#m(() => this.#h({
					queries: [t],
					execute: () => n.compile(r)
				}));
			} catch (i) {
				throw this.#d(i);
			}
		}
		#y(t, r, n) {
			if (t.every(Pl)) return {
				type: "multi",
				plans: t.map((i) => El(i))
			};
			try {
				return this.#m(() => this.#h({
					queries: t,
					execute: () => n.compileBatch(r)
				}));
			} catch (i) {
				throw this.#d(i);
			}
		}
		#g(t) {
			switch (t) {
				case void 0: return;
				case "ReadUncommitted": return "READ UNCOMMITTED";
				case "ReadCommitted": return "READ COMMITTED";
				case "RepeatableRead": return "REPEATABLE READ";
				case "Serializable": return "SERIALIZABLE";
				case "Snapshot": return "SNAPSHOT";
				default: throw new ne.PrismaClientKnownRequestError(`Inconsistent column data: Conversion failed: Invalid isolation level \`${t}\``, {
					code: "P2023",
					clientVersion: this.config.clientVersion,
					meta: { providedIsolationLevel: t }
				});
			}
		}
		#h({ queries: t, execute: r }) {
			return this.tracingHelper.runInChildSpan({
				name: "compile",
				attributes: {
					models: t.map((n) => n.modelName).filter((n) => n !== void 0),
					actions: t.map((n) => n.action)
				}
			}, r);
		}
	};
	function bl(e, t, r) {
		return pl({
			binaryTarget: void 0,
			title: t,
			version: e.config.clientVersion,
			engineVersion: "unknown",
			database: e.config.activeProvider,
			query: r
		});
	}
	function Pl(e) {
		return e.action === "queryRaw" || e.action === "executeRaw";
	}
	function El(e) {
		let t = e.query.arguments.query, { args: r, argTypes: n } = il(e.query.arguments.parameters);
		return {
			type: e.action === "queryRaw" ? "query" : "execute",
			args: {
				type: "rawSql",
				sql: t,
				args: r,
				argTypes: n
			}
		};
	}
	function vl(e) {
		return new yr(e);
	}
	var Sl = (e) => ({ command: e });
	var Nl = require_dist();
	var Al = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
	var Pn = require_dist();
	function It(e, t) {
		try {
			return Rl(e, "fast", t);
		} catch (r) {
			if (r instanceof TypeError) return Rl(e, "slow", t);
			throw r;
		}
	}
	function Rl(e, t, r) {
		return JSON.stringify(e.map((n) => Il(n, t, r)));
	}
	function Il(e, t, r) {
		if (Array.isArray(e)) return e.map((n) => Il(n, t, r));
		if (typeof e == "bigint") return {
			prisma__type: "bigint",
			prisma__value: e.toString()
		};
		if (ct(e)) {
			if (!pt(e)) throw new Pn.PrismaClientValidationError("Provided Date object is invalid", { clientVersion: r });
			return {
				prisma__type: "date",
				prisma__value: e.toJSON()
			};
		}
		if (Pn.Decimal.isDecimal(e)) return {
			prisma__type: "decimal",
			prisma__value: e.toJSON()
		};
		if (Buffer.isBuffer(e)) return {
			prisma__type: "bytes",
			prisma__value: e.toString("base64")
		};
		if (mm(e)) return {
			prisma__type: "bytes",
			prisma__value: Buffer.from(e).toString("base64")
		};
		if (ArrayBuffer.isView(e)) {
			let { buffer: n, byteOffset: i, byteLength: o } = e;
			return {
				prisma__type: "bytes",
				prisma__value: Buffer.from(n, i, o).toString("base64")
			};
		}
		return typeof e == "object" && t === "slow" ? kl(e) : e;
	}
	function mm(e) {
		return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? !0 : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : !1;
	}
	function kl(e) {
		if (typeof e != "object" || e === null) return e;
		if (typeof e.toJSON == "function") return e.toJSON();
		if (Array.isArray(e)) return e.map(Cl);
		let t = {};
		for (let r of Object.keys(e)) t[r] = Cl(e[r]);
		return t;
	}
	function Cl(e) {
		return typeof e == "bigint" ? e.toString() : kl(e);
	}
	var fm = /^(\s*alter\s)/i;
	var Ol = K("prisma:client");
	function Gi(e, t, r, n) {
		if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && fm.exec(t)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
	}
	var zi = ({ clientMethod: e, activeProvider: t, clientVersion: r }) => (n) => {
		let i = "", o;
		if (Ur(n)) i = n.sql, o = {
			values: It(n.values, r),
			__prismaRawParameters__: !0
		};
		else if (Array.isArray(n)) {
			let [s, ...a] = n;
			i = s, o = {
				values: It(a || [], r),
				__prismaRawParameters__: !0
			};
		} else switch (t) {
			case "sqlite":
			case "mysql":
				i = n.sql, o = {
					values: It(n.values, r),
					__prismaRawParameters__: !0
				};
				break;
			case "cockroachdb":
			case "postgresql":
			case "postgres":
				i = n.text, o = {
					values: It(n.values, r),
					__prismaRawParameters__: !0
				};
				break;
			case "sqlserver":
				i = Al(n), o = {
					values: It(n.values, r),
					__prismaRawParameters__: !0
				};
				break;
			default: throw new Error(`The ${t} provider does not support ${e}`);
		}
		return o?.values ? Ol(`prisma.${e}(${i}, ${o.values})`) : Ol(`prisma.${e}(${i})`), {
			query: i,
			parameters: o
		};
	};
	var Dl = {
		requestArgsToMiddlewareArgs(e) {
			return [e.strings, ...e.values];
		},
		middlewareArgsToRequestArgs(e) {
			let [t, ...r] = e;
			return new Nl.Sql(t, r);
		}
	};
	var Ml = {
		requestArgsToMiddlewareArgs(e) {
			return [e];
		},
		middlewareArgsToRequestArgs(e) {
			return e[0];
		}
	};
	function Hi(e) {
		return function(r, n) {
			let i, o = (s = e) => {
				try {
					return s === void 0 || s?.kind === "itx" ? i ??= Fl(r(s)) : Fl(r(s));
				} catch (a) {
					return Promise.reject(a);
				}
			};
			return {
				get spec() {
					return n;
				},
				then(s, a) {
					return o().then(s, a);
				},
				catch(s) {
					return o().catch(s);
				},
				finally(s) {
					return o().finally(s);
				},
				requestTransaction(s) {
					let a = o(s);
					return a.requestTransaction ? a.requestTransaction(s) : a;
				},
				[Symbol.toStringTag]: "PrismaPromise"
			};
		};
	}
	function Fl(e) {
		return typeof e.then == "function" ? e : Promise.resolve(e);
	}
	var ym = {
		name: "@prisma/instrumentation-contract",
		version: "7.10.1",
		description: "Shared types and utilities for Prisma instrumentation",
		main: "dist/index.js",
		module: "dist/index.mjs",
		types: "dist/index.d.ts",
		exports: { ".": {
			require: {
				types: "./dist/index.d.ts",
				default: "./dist/index.js"
			},
			import: {
				types: "./dist/index.d.mts",
				default: "./dist/index.mjs"
			}
		} },
		license: "Apache-2.0",
		homepage: "https://www.prisma.io",
		repository: {
			type: "git",
			url: "https://github.com/prisma/orm.git",
			directory: "packages/instrumentation-contract"
		},
		bugs: "https://github.com/prisma/prisma/issues",
		scripts: {
			dev: "DEV=true tsx helpers/build.ts",
			build: "tsx helpers/build.ts",
			prepublishOnly: "pnpm run build",
			test: "vitest run"
		},
		files: ["dist"],
		sideEffects: !1,
		devDependencies: { "@opentelemetry/api": "1.9.0" },
		peerDependencies: { "@opentelemetry/api": "^1.8" }
	}.version.split(".")[0];
	var hm = "PRISMA_INSTRUMENTATION";
	var wm = `V${ym}_PRISMA_INSTRUMENTATION`;
	var $l = globalThis;
	function Ll() {
		let e = $l[wm];
		return e?.helper ? e.helper : $l[hm]?.helper;
	}
	var xm = {
		isEnabled() {
			return !1;
		},
		getTraceParent() {
			return "00-10-10-00";
		},
		dispatchEngineSpans(e, t, r) {
			for (let n of t) r(n);
		},
		getActiveContext() {},
		runInChildSpan(e, t) {
			return t();
		}
	};
	var Wi = class {
		isEnabled() {
			return this.getTracingHelper().isEnabled();
		}
		getTraceParent(t) {
			return this.getTracingHelper().getTraceParent(t);
		}
		dispatchEngineSpans(t, r, n) {
			return this.getTracingHelper().dispatchEngineSpans(t, r, n);
		}
		getActiveContext() {
			return this.getTracingHelper().getActiveContext();
		}
		runInChildSpan(t, r) {
			return this.getTracingHelper().runInChildSpan(t, r);
		}
		getTracingHelper() {
			return Ll() ?? xm;
		}
	};
	function Vl() {
		return new Wi();
	}
	function ql(e, t = () => {}) {
		let r, n = new Promise((i) => r = i);
		return { then(i) {
			return --e === 0 && r(t()), i?.(n);
		} };
	}
	function Ul(e) {
		return typeof e == "string" ? e : e.reduce((t, r) => {
			let n = typeof r == "string" ? r : r.level;
			return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
		}, void 0);
	}
	var Ql = require_dist();
	function Zi(e) {
		if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
		let t = [];
		return e.modelName && t.push(e.modelName), e.query.arguments && t.push(Ki(e.query.arguments)), t.push(Ki(e.query.selection)), t.join("");
	}
	function Ki(e) {
		return `(${Object.keys(e).sort().map((r) => {
			let n = e[r];
			return typeof n == "object" && n !== null ? `(${r} ${Ki(n)})` : r;
		}).join(" ")})`;
	}
	var bm = {
		aggregate: !1,
		aggregateRaw: !1,
		createMany: !0,
		createManyAndReturn: !0,
		createOne: !0,
		deleteMany: !0,
		deleteOne: !0,
		executeRaw: !0,
		findFirst: !1,
		findFirstOrThrow: !1,
		findMany: !1,
		findRaw: !1,
		findUnique: !1,
		findUniqueOrThrow: !1,
		groupBy: !1,
		queryRaw: !1,
		runCommandRaw: !0,
		updateMany: !0,
		updateManyAndReturn: !0,
		updateOne: !0,
		upsertOne: !0
	};
	function Xi(e) {
		return bm[e];
	}
	var En = class {
		constructor(t) {
			this.options = t;
			this.batches = {};
		}
		batches;
		tickActive = !1;
		request(t) {
			let r = this.options.batchBy(t);
			return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = !0, process.nextTick(() => {
				this.dispatchBatches(), this.tickActive = !1;
			}))), new Promise((n, i) => {
				this.batches[r].push({
					request: t,
					resolve: n,
					reject: i
				});
			})) : this.options.singleLoader(t);
		}
		dispatchBatches() {
			for (let t in this.batches) {
				let r = this.batches[t];
				delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
					n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
				}).catch((n) => {
					r[0].reject(n);
				}) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
					if (n instanceof Error) for (let i = 0; i < r.length; i++) r[i].reject(n);
					else for (let i = 0; i < r.length; i++) {
						let o = n[i];
						o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
					}
				}).catch((n) => {
					for (let i = 0; i < r.length; i++) r[i].reject(n);
				}));
			}
		}
		get [Symbol.toStringTag]() {
			return "DataLoader";
		}
	};
	var jl = require_dist();
	function st(e, t) {
		if (t === null) return t;
		switch (e) {
			case "bigint": return BigInt(t);
			case "bytes": return new Uint8Array(Buffer.from(t, "base64"));
			case "decimal": return new jl.Decimal(t);
			case "datetime":
			case "date": return new Date(t);
			case "time": return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
			case "bigint-array": return t.map((r) => st("bigint", r));
			case "bytes-array": return t.map((r) => st("bytes", r));
			case "decimal-array": return t.map((r) => st("decimal", r));
			case "datetime-array": return t.map((r) => st("datetime", r));
			case "date-array": return t.map((r) => st("date", r));
			case "time-array": return t.map((r) => st("time", r));
			default: return t;
		}
	}
	function Tn(e) {
		let t = [], r = Pm(e);
		for (let n = 0; n < e.rows.length; n++) {
			let i = e.rows[n], o = { ...r };
			for (let s = 0; s < i.length; s++) o[e.columns[s]] = st(e.types[s], i[s]);
			t.push(o);
		}
		return t;
	}
	function Pm(e) {
		let t = {};
		for (let r = 0; r < e.columns.length; r++) t[e.columns[r]] = null;
		return t;
	}
	function Bl(e, t) {
		let { schema: r, name: n } = Em(t), i = Object.entries(e.models).filter(([o, s]) => (s.dbName ?? o) === n);
		if (i.length <= 1) return i[0]?.[0];
		if (r !== void 0) {
			let o = i.filter(([, s]) => s.schema === r);
			if (o.length === 1) return o[0][0];
		}
	}
	function Em(e) {
		let t = e.lastIndexOf(".");
		return t === -1 ? {
			schema: void 0,
			name: e
		} : {
			schema: e.slice(0, t),
			name: e.slice(t + 1)
		};
	}
	var Tm = K("prisma:client:request_handler");
	var vn = class {
		client;
		dataloader;
		logEmitter;
		constructor(t, r) {
			this.logEmitter = r, this.client = t, this.dataloader = new En({
				batchLoader: _s(async ({ requests: n, customDataProxyFetch: i }) => {
					let { transaction: o, otelParentCtx: s } = n[0], a = n.map((T) => T.protocolQuery), u = this.client._tracingHelper.getTraceParent(s), m = n.some((T) => Xi(T.protocolQuery.action));
					return (await this.client._engine.requestBatch(a, {
						traceparent: u,
						transaction: vm(o),
						containsWrite: m,
						customDataProxyFetch: i
					})).map((T, S) => {
						if (T instanceof Error) return T;
						try {
							return this.mapQueryEngineResult(n[S], T);
						} catch (I) {
							return I;
						}
					});
				}),
				singleLoader: async (n) => {
					let i = n.transaction?.kind === "itx" ? Jl(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, {
						traceparent: this.client._tracingHelper.getTraceParent(),
						interactiveTransaction: i,
						isWrite: Xi(n.protocolQuery.action),
						customDataProxyFetch: n.customDataProxyFetch
					});
					return this.mapQueryEngineResult(n, o);
				},
				batchBy: (n) => {
					if (n.transaction?.kind === "itx") {
						let i = Zi(n.protocolQuery);
						return `itx-${n.transaction.id}${i ? `-${i}` : ""}`;
					}
					return n.transaction?.id ? `transaction-${n.transaction.id}` : Zi(n.protocolQuery);
				},
				batchOrder(n, i) {
					return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
				}
			});
		}
		async request(t) {
			try {
				return await this.dataloader.request(t);
			} catch (r) {
				let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
				this.handleAndLogRequestError({
					error: r,
					clientMethod: n,
					callsite: i,
					transaction: o,
					args: s,
					modelName: a,
					globalOmit: t.globalOmit
				});
			}
		}
		mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
			let i = n?.data, o = this.unpack(i, t, r);
			return process.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
		}
		handleAndLogRequestError(t) {
			try {
				this.handleRequestError(t);
			} catch (r) {
				throw this.logEmitter && this.logEmitter.emit("error", {
					message: r.message,
					target: t.clientMethod,
					timestamp: /* @__PURE__ */ new Date()
				}), r;
			}
		}
		handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
			if (Tm(t), Sm(t, i)) throw t;
			if (t instanceof _.PrismaClientKnownRequestError && Am(t)) Fr({
				args: o,
				errors: [Gl(t.meta)],
				callsite: n,
				errorFormat: this.client._errorFormat,
				originalMethod: r,
				clientVersion: this.client._clientVersion,
				globalOmit: a
			});
			let u = t.message;
			if (n && (u = Rr({
				callsite: n,
				originalMethod: r,
				isPanic: t.isPanic,
				showColors: this.client._errorFormat === "pretty",
				message: u
			})), u = this.sanitizeMessage(u), t.code) {
				let m = this.resolveErrorMeta(t.meta, t.code, s);
				throw new _.PrismaClientKnownRequestError(u, {
					code: t.code,
					clientVersion: this.client._clientVersion,
					meta: m,
					batchRequestIdx: t.batchRequestIdx
				});
			} else {
				if (t.isPanic) throw new _.PrismaClientRustPanicError(u, this.client._clientVersion);
				if (t instanceof _.PrismaClientUnknownRequestError) throw new _.PrismaClientUnknownRequestError(u, {
					clientVersion: this.client._clientVersion,
					batchRequestIdx: t.batchRequestIdx
				});
				if (t instanceof _.PrismaClientInitializationError) throw new _.PrismaClientInitializationError(u, this.client._clientVersion);
				if (t instanceof _.PrismaClientRustPanicError) throw new _.PrismaClientRustPanicError(u, this.client._clientVersion);
			}
			throw t.clientVersion = this.client._clientVersion, t;
		}
		resolveErrorMeta(t, r, n) {
			if (r !== "P2002" || typeof t?.table != "string") return n ? {
				modelName: n,
				...t
			} : t;
			let i = { ...t };
			delete i.table;
			let o = Bl(this.client._runtimeDataModel, t.table) ?? (typeof i.modelName == "string" ? i.modelName : n);
			return o !== void 0 ? {
				...i,
				modelName: o
			} : i;
		}
		sanitizeMessage(t) {
			return this.client._errorFormat && this.client._errorFormat !== "pretty" ? ut(t) : t;
		}
		unpack(t, r, n) {
			if (!t || (t.data && (t = t.data), !t)) return t;
			let i = Object.keys(t)[0], o = Object.values(t)[0], a = Wn(o, Rm(r)), u = i === "queryRaw" ? Tn(a) : Ae(a);
			return n ? n(u) : u;
		}
		get [Symbol.toStringTag]() {
			return "RequestHandler";
		}
	};
	function vm(e) {
		if (e) {
			if (e.kind === "batch") return {
				kind: "batch",
				options: {
					isolationLevel: e.isolationLevel,
					maxWait: e.maxWait,
					timeout: e.timeout
				}
			};
			if (e.kind === "itx") return {
				kind: "itx",
				options: Jl(e)
			};
			$e(e, "Unknown transaction kind");
		}
	}
	function Jl(e) {
		return {
			id: e.id,
			payload: e.payload
		};
	}
	function Sm(e, t) {
		return (0, Ql.hasBatchIndex)(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
	}
	function Am(e) {
		return e.code === "P2009" || e.code === "P2012";
	}
	function Gl(e) {
		if (e.kind === "Union") return {
			kind: "Union",
			errors: e.errors.map(Gl)
		};
		if (Array.isArray(e.selectionPath)) {
			let [, ...t] = e.selectionPath;
			return {
				...e,
				selectionPath: t
			};
		}
		return e;
	}
	function Rm(e) {
		let t = [];
		for (let r = 1; r < e.length; r += 2) t.push(e[r]);
		return t;
	}
	var Yi = mn;
	var Zl = Pe(qn());
	var j = class extends Error {
		constructor(t) {
			super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
		}
		get [Symbol.toStringTag]() {
			return "PrismaClientConstructorValidationError";
		}
	};
	Bt(j, "PrismaClientConstructorValidationError");
	var zl = [
		"errorFormat",
		"adapter",
		"accelerateUrl",
		"log",
		"transactionOptions",
		"omit",
		"comments",
		"queryPlanCacheMaxSize",
		"__internal"
	];
	var Hl = [
		"pretty",
		"colorless",
		"minimal"
	];
	var Wl = [
		"info",
		"query",
		"warn",
		"error"
	];
	var Cm = {
		adapter: () => {},
		accelerateUrl: (e) => {
			if (e !== void 0) {
				if (typeof e != "string") throw new j(`Invalid value ${JSON.stringify(e)} for "accelerateUrl" provided to PrismaClient constructor.`);
				if (e.trim().length === 0) throw new j("\"accelerateUrl\" provided to PrismaClient constructor must be a non-empty string.");
			}
		},
		errorFormat: (e) => {
			if (e) {
				if (typeof e != "string") throw new j(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
				if (!Hl.includes(e)) throw new j(`Invalid errorFormat ${e} provided to PrismaClient constructor.${hr(e, Hl)}`);
			}
		},
		log: (e) => {
			if (!e) return;
			if (!Array.isArray(e)) throw new j(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
			function t(r) {
				if (typeof r == "string" && !Wl.includes(r)) throw new j(`Invalid log level "${r}" provided to PrismaClient constructor.${hr(r, Wl)}`);
			}
			for (let r of e) {
				t(r);
				let n = {
					level: t,
					emit: (i) => {
						let o = ["stdout", "event"];
						if (!o.includes(i)) {
							let s = hr(i, o);
							throw new j(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
						}
					}
				};
				if (r && typeof r == "object") for (let [i, o] of Object.entries(r)) if (n[i]) n[i](o);
				else throw new j(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
			}
		},
		transactionOptions: (e) => {
			if (!e) return;
			let t = e.maxWait;
			if (t != null && t <= 0) throw new j(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
			let r = e.timeout;
			if (r != null && r <= 0) throw new j(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
		},
		omit: (e, t) => {
			if (typeof e != "object") throw new j("\"omit\" option is expected to be an object.");
			if (e === null) throw new j("\"omit\" option can not be `null`");
			let r = [];
			for (let [n, i] of Object.entries(e)) {
				let o = Om(n, t.runtimeDataModel);
				if (!o) {
					r.push({
						kind: "UnknownModel",
						modelKey: n
					});
					continue;
				}
				for (let [s, a] of Object.entries(i)) {
					let u = o.fields.find((m) => m.name === s);
					if (!u) {
						r.push({
							kind: "UnknownField",
							modelKey: n,
							fieldName: s
						});
						continue;
					}
					if (u.relationName) {
						r.push({
							kind: "RelationInOmit",
							modelKey: n,
							fieldName: s
						});
						continue;
					}
					typeof a != "boolean" && r.push({
						kind: "InvalidFieldValue",
						modelKey: n,
						fieldName: s
					});
				}
			}
			if (r.length > 0) throw new j(Nm(e, r));
		},
		queryPlanCacheMaxSize: (e) => {
			if (e !== void 0) {
				if (typeof e != "number") throw new j(`Invalid value ${JSON.stringify(e)} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Expected a number.`);
				if (!Number.isInteger(e)) throw new j(`Invalid value ${e} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Expected an integer.`);
				if (e < 0) throw new j(`Invalid value ${e} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Cache size needs to be greater or equal to 0.`);
			}
		},
		comments: (e) => {
			if (e !== void 0) {
				if (!Array.isArray(e)) throw new j(`Invalid value ${JSON.stringify(e)} for "comments" provided to PrismaClient constructor. Expected an array of SQL commenter plugins.`);
				for (let t = 0; t < e.length; t++) if (typeof e[t] != "function") throw new j(`Invalid value at index ${t} for "comments" provided to PrismaClient constructor. Each plugin must be a function.`);
			}
		},
		__internal: (e) => {
			if (!e) return;
			let t = [
				"debug",
				"engine",
				"configOverride"
			];
			if (typeof e != "object") throw new j(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
			for (let [r] of Object.entries(e)) if (!t.includes(r)) {
				let n = hr(r, t);
				throw new j(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
			}
		}
	};
	function Im(e) {
		let t = e.adapter !== void 0, r = e.accelerateUrl !== void 0;
		if (t && r) throw new j("The \"adapter\" and \"accelerateUrl\" options are mutually exclusive. Please provide only one of them.");
		if (!t && !r) throw new j(`PrismaClient requires a driver adapter to connect to your database, but none was provided.

Pass a driver adapter to the PrismaClient constructor, for example:

  import { PrismaPg } from '@prisma/adapter-pg'
  import { PrismaClient } from './generated/prisma/client'

  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter })

Learn more about driver adapters: https://pris.ly/d/driver-adapters

If you use Prisma Accelerate instead of connecting to your database directly, pass \`accelerateUrl\` to the PrismaClient constructor instead of \`adapter\`.`);
	}
	function Xl(e, t) {
		for (let [r, n] of Object.entries(e)) {
			if (!zl.includes(r)) throw new j(`Unknown property ${r} provided to PrismaClient constructor.${hr(r, zl)}`);
			Cm[r](n, t);
		}
		Im(e);
	}
	function hr(e, t) {
		if (t.length === 0 || typeof e != "string") return "";
		let r = km(e, t);
		return r ? ` Did you mean "${r}"?` : "";
	}
	function km(e, t) {
		if (t.length === 0) return null;
		let r = t.map((i) => ({
			value: i,
			distance: (0, Zl.default)(e, i)
		}));
		r.sort((i, o) => i.distance < o.distance ? -1 : 1);
		let n = r[0];
		return n.distance < 3 ? n.value : null;
	}
	function Om(e, t) {
		return Kl(t.models, e) ?? Kl(t.types, e);
	}
	function Kl(e, t) {
		let r = Object.keys(e).find((n) => qe(n) === t);
		if (r) return e[r];
	}
	function Nm(e, t) {
		let r = bt(e);
		for (let o of t) switch (o.kind) {
			case "UnknownModel":
				r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
				break;
			case "UnknownField":
				r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
				break;
			case "RelationInOmit":
				r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Relations are already excluded by default and can not be specified in \"omit\".");
				break;
			case "InvalidFieldValue": r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
		}
		let { message: n, args: i } = Mr(r, "colorless");
		return `Error validating "omit" option:

${i}

${n}`;
	}
	var Yl = require_dist();
	function eu(e) {
		return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
			let n = new Array(e.length), i = null, o = !1, s = 0, a = () => {
				o || (s++, s === e.length && (o = !0, i ? r(i) : t(n)));
			}, u = (m) => {
				o || (o = !0, r(m));
			};
			for (let m = 0; m < e.length; m++) e[m].then((P) => {
				n[m] = P, a();
			}, (P) => {
				if (!(0, Yl.hasBatchIndex)(P)) {
					u(P);
					return;
				}
				P.batchRequestIdx === m ? u(P) : (i || (i = P), a());
			});
		});
	}
	var kt = K("prisma:client");
	typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
	var Dm = {
		requestArgsToMiddlewareArgs: (e) => e,
		middlewareArgsToRequestArgs: (e) => e
	};
	var su = Symbol.for("prisma.client.transaction.scope_context");
	function tu(e) {
		let r = e[su];
		if (r === void 0) return { kind: "top-level" };
		if (Mm(r)) return r;
		throw new Error("Internal error: inconsistent transaction scope context.");
	}
	function Mm(e) {
		if (typeof e != "object" || e === null) return !1;
		let t = e;
		return t.kind === "nested" && typeof t.txId == "string" && typeof t.scopeId == "string" && Fm(t.scopeState);
	}
	function Fm(e) {
		return typeof e != "object" || e === null ? !1 : Array.isArray(e.stack);
	}
	function _m() {
		return typeof globalThis.crypto?.randomUUID == "function" ? globalThis.crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
	}
	var $m = {
		id: 0,
		nextId() {
			return ++this.id;
		}
	};
	function au(e) {
		class t {
			_originalClient = this;
			_runtimeDataModel;
			_requestHandler;
			_connectionPromise;
			_disconnectionPromise;
			_engineConfig;
			_accelerateEngineConfig;
			_clientVersion;
			_errorFormat;
			_tracingHelper;
			_previewFeatures;
			_activeProvider;
			_globalOmit;
			_extensions;
			_engine;
			_appliedParent;
			_createPrismaPromise = Hi();
			constructor(n) {
				if (!n) throw new _.PrismaClientInitializationError(`PrismaClient was instantiated without any options. A driver adapter is required to connect to your database.

Pass a driver adapter to the PrismaClient constructor, for example:

  import { PrismaPg } from '@prisma/adapter-pg'
  import { PrismaClient } from './generated/prisma/client'

  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter })

Learn more about driver adapters: https://pris.ly/d/driver-adapters

If you use Prisma Accelerate instead of connecting to your database directly, pass \`accelerateUrl\` to the PrismaClient constructor instead of \`adapter\`.`, Yi);
				e = n.__internal?.configOverride?.(e) ?? e, Xl(n, e);
				let i = new ou.EventEmitter().on("error", () => {});
				this._extensions = Pt.empty(), this._previewFeatures = e.previewFeatures, this._clientVersion = e.clientVersion ?? Yi, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Vl();
				let o;
				if (n.adapter) {
					o = n.adapter;
					let s = e.activeProvider === "postgresql" || e.activeProvider === "cockroachdb" ? "postgres" : e.activeProvider;
					if (o.provider !== s) throw new _.PrismaClientInitializationError(`The Driver Adapter \`${o.adapterName}\`, based on \`${o.provider}\`, is not compatible with the provider \`${s}\` specified in the Prisma schema.`, this._clientVersion);
				}
				try {
					let s = n ?? {}, u = (s.__internal ?? {}).debug === !0;
					if (u && K.enable("prisma:client"), s.errorFormat ? this._errorFormat = s.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = {
						enableDebugLogs: u,
						logLevel: s.log && Ul(s.log),
						logQueries: s.log && !!(typeof s.log == "string" ? s.log === "query" : s.log.find((m) => typeof m == "string" ? m === "query" : m.level === "query")),
						compilerWasm: e.compilerWasm,
						clientVersion: e.clientVersion,
						previewFeatures: this._previewFeatures,
						activeProvider: e.activeProvider,
						inlineSchema: e.inlineSchema,
						tracingHelper: this._tracingHelper,
						transactionOptions: {
							maxWait: s.transactionOptions?.maxWait ?? 2e3,
							timeout: s.transactionOptions?.timeout ?? 5e3,
							isolationLevel: s.transactionOptions?.isolationLevel
						},
						logEmitter: i,
						adapter: o,
						accelerateUrl: s.accelerateUrl,
						sqlCommenters: s.comments,
						parameterizationSchema: e.parameterizationSchema,
						runtimeDataModel: e.runtimeDataModel,
						queryPlanCacheMaxSize: n.queryPlanCacheMaxSize
					}, this._accelerateEngineConfig = Object.create(this._engineConfig), this._accelerateEngineConfig.accelerateUtils = { resolveDatasourceUrl: () => {
						if (s.accelerateUrl) return s.accelerateUrl;
						throw new _.PrismaClientInitializationError(`\`accelerateUrl\` is required when using \`@prisma/extension-accelerate\`:

new PrismaClient({
  accelerateUrl: "prisma://...",
}).$extends(withAccelerate())
`, e.clientVersion);
					} }, kt("clientVersion", e.clientVersion), this._engine = vl(this._engineConfig), this._requestHandler = new vn(this, i), s.log) for (let m of s.log) {
						let P = typeof m == "string" ? m : m.emit === "stdout" ? m.level : null;
						P && this.$on(P, (T) => {
							Ut.log(`${Ut.tags[P] ?? ""}`, T.message || T.query);
						});
					}
				} catch (s) {
					throw s.clientVersion = this._clientVersion, s;
				}
				return this._appliedParent = Yt(this);
			}
			get [Symbol.toStringTag]() {
				return "PrismaClient";
			}
			$on(n, i) {
				return n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this;
			}
			$connect() {
				try {
					return this._engine.start();
				} catch (n) {
					throw n.clientVersion = this._clientVersion, n;
				}
			}
			async $disconnect() {
				try {
					await this._engine.stop();
				} catch (n) {
					throw n.clientVersion = this._clientVersion, n;
				} finally {
					yo();
				}
			}
			$executeRawInternal(n, i, o, s) {
				let a = this._activeProvider;
				return this._request({
					action: "executeRaw",
					args: o,
					transaction: n,
					clientMethod: i,
					argsMapper: zi({
						clientMethod: i,
						activeProvider: a,
						clientVersion: this._clientVersion
					}),
					callsite: je(this._errorFormat),
					dataPath: [],
					middlewareArgsMapper: s
				});
			}
			$executeRaw(n, ...i) {
				return this._createPrismaPromise((o) => {
					if (n.raw !== void 0 || n.sql !== void 0) {
						let [s, a] = ru(n, i);
						return Gi(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
					}
					throw new _.PrismaClientValidationError("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
				});
			}
			$executeRawUnsafe(n, ...i) {
				return this._createPrismaPromise((o) => (Gi(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
			}
			$runCommandRaw(n) {
				if (e.activeProvider !== "mongodb") throw new _.PrismaClientValidationError(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
				return this._createPrismaPromise((i) => this._request({
					args: n,
					clientMethod: "$runCommandRaw",
					dataPath: [],
					action: "runCommandRaw",
					argsMapper: Sl,
					callsite: je(this._errorFormat),
					transaction: i
				}));
			}
			async $queryRawInternal(n, i, o, s) {
				let a = this._activeProvider;
				return this._request({
					action: "queryRaw",
					args: o,
					transaction: n,
					clientMethod: i,
					argsMapper: zi({
						clientMethod: i,
						activeProvider: a,
						clientVersion: this._clientVersion
					}),
					callsite: je(this._errorFormat),
					dataPath: [],
					middlewareArgsMapper: s
				});
			}
			$queryRaw(n, ...i) {
				return this._createPrismaPromise((o) => {
					if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...ru(n, i));
					throw new _.PrismaClientValidationError("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
				});
			}
			$queryRawTyped(n) {
				return this._createPrismaPromise((i) => {
					if (!this._hasPreviewFlag("typedSql")) throw new _.PrismaClientValidationError("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
					return this.$queryRawInternal(i, "$queryRawTyped", n);
				});
			}
			$queryRawUnsafe(n, ...i) {
				return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
			}
			_transactionWithArray({ promises: n, options: i }) {
				let o = $m.nextId(), s = ql(n.length);
				return eu(n.map((u, m) => {
					if (u?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
					let P = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, T = {
						kind: "batch",
						id: o,
						index: m,
						isolationLevel: P,
						maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait,
						timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout,
						lock: s
					};
					return u.requestTransaction?.(T) ?? u;
				}));
			}
			async _transactionWithCallback({ callback: n, options: i = {} }) {
				let o = tu(this), s = o.kind === "nested", a = s ? o.scopeState : { stack: [] }, u = a.stack, m = _m();
				if (s && u.at(-1) !== o.scopeId) throw new Error("Concurrent nested transactions are not supported");
				u.push(m);
				let P = { traceparent: this._tracingHelper.getTraceParent() }, T = {
					maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait,
					timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout,
					isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel,
					newTxId: s ? o.txId : void 0
				}, S;
				try {
					S = await this._engine.transaction("start", P, T);
				} catch (A) {
					throw u.at(-1) === m && u.pop(), A;
				}
				let I;
				try {
					let A = {
						kind: "itx",
						...S
					};
					if (I = await n(this._createItxClient(A, m, a)), s) {
						if (u.at(-1) !== m) throw new Error("Nested transactions must be closed in reverse order of creation.");
					} else if (u.length !== 1) throw new Error("Cannot close transaction while a nested transaction is still active.");
					await this._engine.transaction("commit", P, S);
				} catch (A) {
					let L = u.at(-1) !== m ? Math.max(1, u.length) : 1;
					for (let q = 0; q < L; q++) await this._engine.transaction("rollback", P, S).catch((E) => {
						kt("rollback attempt %d/%d failed: %O", q + 1, L, E);
					});
					throw A;
				} finally {
					u.at(-1) === m ? u.pop() : u.length = 0;
				}
				return I;
			}
			_createItxClient(n, i, o) {
				let s = {
					kind: "nested",
					txId: n.id,
					scopeId: i,
					scopeState: o
				};
				return ve(Yt(ve(As(this), [
					ae("_appliedParent", () => this._appliedParent._createItxClient(n, i, o)),
					ae("_createPrismaPromise", () => Hi(n)),
					ae(su, () => s)
				])), [Et(Os)]);
			}
			$transaction(n, i) {
				let o;
				typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = () => {
					throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
				} : e.activeProvider === "mongodb" && tu(this).kind === "nested" ? o = () => {
					throw new _.PrismaClientValidationError(`The ${e.activeProvider} provider does not support nested transactions`, { clientVersion: this._clientVersion });
				} : o = () => this._transactionWithCallback({
					callback: n,
					options: i
				}) : o = () => this._transactionWithArray({
					promises: n,
					options: i
				});
				return this._tracingHelper.runInChildSpan({
					name: "transaction",
					attributes: { method: "$transaction" }
				}, o);
			}
			_request(n) {
				n.otelParentCtx = this._tracingHelper.getActiveContext();
				let i = n.middlewareArgsMapper ?? Dm, o = {
					args: i.requestArgsToMiddlewareArgs(n.args),
					dataPath: n.dataPath,
					runInTransaction: !!n.transaction,
					action: n.action,
					model: n.model
				}, s = { operation: {
					name: "operation",
					attributes: {
						method: o.action,
						model: o.model,
						name: o.model ? `${o.model}.${o.action}` : o.action
					}
				} }, a = async (u) => {
					let { runInTransaction: m, args: P, ...T } = u, S = {
						...n,
						...T
					};
					P && (S.args = i.middlewareArgsToRequestArgs(P)), n.transaction !== void 0 && m === !1 && delete S.transaction;
					let I = await Fs(this, S);
					if (!S.model) return I;
					let A = qs({
						dataPath: S.dataPath,
						modelName: S.model,
						args: S.args,
						runtimeDataModel: this._runtimeDataModel
					});
					return ks({
						result: I,
						modelName: A.modelName,
						args: A.args,
						extensions: this._extensions,
						runtimeDataModel: this._runtimeDataModel,
						globalOmit: this._globalOmit
					});
				};
				return this._tracingHelper.runInChildSpan(s.operation, () => new iu.AsyncResource("prisma-client-request").runInAsyncScope(() => a(o)));
			}
			async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: u, argsMapper: m, transaction: P, unpacker: T, otelParentCtx: S, customDataProxyFetch: I }) {
				try {
					n = m ? m(n) : n;
					let M = this._tracingHelper.runInChildSpan({ name: "serialize" }, () => Vr({
						modelName: u,
						runtimeDataModel: this._runtimeDataModel,
						action: a,
						args: n,
						clientMethod: i,
						callsite: s,
						extensions: this._extensions,
						errorFormat: this._errorFormat,
						clientVersion: this._clientVersion,
						previewFeatures: this._previewFeatures,
						globalOmit: this._globalOmit
					}));
					return K.enabled("prisma:client") && (kt("Prisma Client call:"), kt(`prisma.${i}(${gs(n)})`), kt("Generated request:"), kt(JSON.stringify(M, null, 2) + `
`)), P?.kind === "batch" && await P.lock, this._requestHandler.request({
						protocolQuery: M,
						modelName: u,
						action: a,
						clientMethod: i,
						dataPath: o,
						callsite: s,
						args: n,
						extensions: this._extensions,
						transaction: P,
						unpacker: T,
						otelParentCtx: S,
						otelChildCtx: this._tracingHelper.getActiveContext(),
						globalOmit: this._globalOmit,
						customDataProxyFetch: I
					});
				} catch (A) {
					throw A.clientVersion = this._clientVersion, A;
				}
			}
			_hasPreviewFlag(n) {
				return !!this._engineConfig.previewFeatures?.includes(n);
			}
			$extends = Rs;
		}
		return t;
	}
	function ru(e, t) {
		return Lm(e) ? [new nu.Sql(e, t), Dl] : [e, Ml];
	}
	function Lm(e) {
		return Array.isArray(e) && Array.isArray(e.raw);
	}
	var Vm = /* @__PURE__ */ new Set([
		"toJSON",
		"$$typeof",
		"asymmetricMatch",
		Symbol.iterator,
		Symbol.toStringTag,
		Symbol.isConcatSpreadable,
		Symbol.toPrimitive
	]);
	function lu(e) {
		return new Proxy(e, { get(t, r) {
			if (r in t) return t[r];
			if (!Vm.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
		} });
	}
	var qm = () => globalThis.process?.release?.name === "node";
	var Um = () => !!globalThis.Bun || !!globalThis.process?.versions?.bun;
	var jm = () => !!globalThis.Deno;
	var Bm = () => typeof globalThis.Netlify == "object";
	var Qm = () => typeof globalThis.EdgeRuntime == "object";
	var Jm = () => globalThis.navigator?.userAgent === "Cloudflare-Workers";
	function Gm() {
		return [
			[Bm, "netlify"],
			[Qm, "edge-light"],
			[Jm, "workerd"],
			[jm, "deno"],
			[Um, "bun"],
			[qm, "node"]
		].flatMap((r) => r[0]() ? [r[1]] : []).at(0) ?? "";
	}
	var zm = {
		node: "Node.js",
		workerd: "Cloudflare Workers",
		deno: "Deno and Deno Deploy",
		netlify: "Netlify Edge Functions",
		"edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)"
	};
	function uu() {
		let e = Gm();
		return {
			id: e,
			prettyName: zm[e] || e,
			isEdge: [
				"workerd",
				"deno",
				"netlify",
				"edge-light"
			].includes(e)
		};
	}
	var _ = require_dist();
	var Fe = require_dist();
	var ee = require_dist();
	var cu = require_dist();
	0 && (module.exports = {
		AnyNull,
		DMMF,
		DbNull,
		Debug,
		Decimal,
		Extensions,
		JsonNull,
		NullTypes,
		ObjectEnumValue,
		PrismaClientInitializationError,
		PrismaClientKnownRequestError,
		PrismaClientRustPanicError,
		PrismaClientUnknownRequestError,
		PrismaClientValidationError,
		Public,
		Sql,
		createParam,
		defineDmmfProperty,
		deserializeJsonObject,
		deserializeRawResult,
		dmmfToRuntimeDataModel,
		empty,
		getPrismaClient,
		getRuntime,
		isAnyNull,
		isDbNull,
		isJsonNull,
		isObjectEnumValue,
		join,
		makeStrictEnum,
		makeTypedQueryFactory,
		raw,
		serializeJsonQuery,
		skip,
		sqltag,
		warnOnce
	});
})))(), 1);
var config = {
	"previewFeatures": [],
	"clientVersion": "7.10.1",
	"engineVersion": "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8",
	"activeProvider": "sqlite",
	"inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"sqlite\"\n}\n\nmodel Customer {\n  id        String   @id\n  name      String\n  phone     String\n  email     String?\n  dob       String?\n  gender    String?\n  address   String?\n  notes     String?\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // A customer can have multiple eye examinations.\n  eyeExaminations EyeExamination[]\n  prescriptions   Prescription[]\n\n  @@index([name])\n  @@index([phone])\n}\n\nmodel EyeExamination {\n  id         String @id\n  customerId String\n\n  // Examination details\n  examinationDate DateTime @default(now())\n  examinedBy      String?\n  chiefComplaints String?\n\n  // Visual acuity - Right Eye (OD)\n  unaidedVisionRight   String?\n  correctedVisionRight String?\n  pinholeVisionRight   String?\n  finalVisionRight     String?\n\n  // Visual acuity - Left Eye (OS)\n  unaidedVisionLeft   String?\n  correctedVisionLeft String?\n  pinholeVisionLeft   String?\n  finalVisionLeft     String?\n\n  // Refraction - Right Eye (OD)\n  sphRight  Float?\n  cylRight  Float?\n  axisRight Int?\n  addRight  Float?\n\n  // Refraction - Left Eye (OS)\n  sphLeft  Float?\n  cylLeft  Float?\n  axisLeft Int?\n  addLeft  Float?\n\n  // Additional measurements\n  pdDistance      Float?\n  pdNear          Float?\n  iopRight        Float?\n  iopLeft         Float?\n  nearVisionRight String?\n  nearVisionLeft  String?\n\n  // Clinical notes\n  examinationFindings String?\n  recommendations     String?\n  followUpDate        DateTime?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Customer relationship\n  customer Customer @relation(fields: [customerId], references: [id], onDelete: Restrict)\n\n  prescriptions Prescription[]\n\n  @@index([customerId])\n  @@index([examinationDate])\n}\n\nmodel Prescription {\n  id         String @id\n  customerId String\n\n  // IN_HOUSE or EXTERNAL\n  source String\n\n  // Optional eye examination link\n  examinationId String?\n\n  // Doctor / Examiner details\n  doctorName String?\n  clinicName String?\n\n  // Prescription dates\n  prescriptionDate DateTime  @default(now())\n  expiryDate       DateTime?\n\n  // Right Eye (OD)\n  sphRight  Float?\n  cylRight  Float?\n  axisRight Int?\n  addRight  Float?\n\n  // Left Eye (OS)\n  sphLeft  Float?\n  cylLeft  Float?\n  axisLeft Int?\n  addLeft  Float?\n\n  // Pupillary Distance\n  pdDistance Float?\n  pdNear     Float?\n\n  // Notes\n  notes String?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relationships\n  customer    Customer        @relation(fields: [customerId], references: [id], onDelete: Restrict)\n  examination EyeExamination? @relation(fields: [examinationId], references: [id], onDelete: SetNull)\n\n  @@index([customerId])\n  @@index([examinationId])\n  @@index([prescriptionDate])\n}\n",
	"runtimeDataModel": {
		"models": {},
		"enums": {},
		"types": {}
	},
	"parameterizationSchema": {
		"strings": [],
		"graph": ""
	}
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Customer\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dob\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"gender\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"address\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"notes\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"eyeExaminations\",\"kind\":\"object\",\"type\":\"EyeExamination\",\"relationName\":\"CustomerToEyeExamination\"},{\"name\":\"prescriptions\",\"kind\":\"object\",\"type\":\"Prescription\",\"relationName\":\"CustomerToPrescription\"}],\"dbName\":null,\"schema\":null},\"EyeExamination\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"customerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"examinationDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"examinedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"chiefComplaints\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"unaidedVisionRight\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"correctedVisionRight\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"pinholeVisionRight\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"finalVisionRight\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"unaidedVisionLeft\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"correctedVisionLeft\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"pinholeVisionLeft\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"finalVisionLeft\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sphRight\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"cylRight\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"axisRight\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"addRight\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"sphLeft\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"cylLeft\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"axisLeft\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"addLeft\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"pdDistance\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"pdNear\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"iopRight\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"iopLeft\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"nearVisionRight\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nearVisionLeft\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"examinationFindings\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"recommendations\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"followUpDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"customer\",\"kind\":\"object\",\"type\":\"Customer\",\"relationName\":\"CustomerToEyeExamination\"},{\"name\":\"prescriptions\",\"kind\":\"object\",\"type\":\"Prescription\",\"relationName\":\"EyeExaminationToPrescription\"}],\"dbName\":null,\"schema\":null},\"Prescription\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"customerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"source\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"examinationId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"doctorName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"clinicName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"prescriptionDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"expiryDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"sphRight\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"cylRight\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"axisRight\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"addRight\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"sphLeft\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"cylLeft\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"axisLeft\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"addLeft\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"pdDistance\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"pdNear\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"notes\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"customer\",\"kind\":\"object\",\"type\":\"Customer\",\"relationName\":\"CustomerToPrescription\"},{\"name\":\"examination\",\"kind\":\"object\",\"type\":\"EyeExamination\",\"relationName\":\"EyeExaminationToPrescription\"}],\"dbName\":null,\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
	strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"customer\",\"examination\",\"prescriptions\",\"_count\",\"eyeExaminations\",\"Customer.findUnique\",\"Customer.findUniqueOrThrow\",\"Customer.findFirst\",\"Customer.findFirstOrThrow\",\"Customer.findMany\",\"data\",\"Customer.createOne\",\"Customer.createMany\",\"Customer.createManyAndReturn\",\"Customer.updateOne\",\"Customer.updateMany\",\"Customer.updateManyAndReturn\",\"create\",\"update\",\"Customer.upsertOne\",\"Customer.deleteOne\",\"Customer.deleteMany\",\"having\",\"_min\",\"_max\",\"Customer.groupBy\",\"Customer.aggregate\",\"EyeExamination.findUnique\",\"EyeExamination.findUniqueOrThrow\",\"EyeExamination.findFirst\",\"EyeExamination.findFirstOrThrow\",\"EyeExamination.findMany\",\"EyeExamination.createOne\",\"EyeExamination.createMany\",\"EyeExamination.createManyAndReturn\",\"EyeExamination.updateOne\",\"EyeExamination.updateMany\",\"EyeExamination.updateManyAndReturn\",\"EyeExamination.upsertOne\",\"EyeExamination.deleteOne\",\"EyeExamination.deleteMany\",\"_avg\",\"_sum\",\"EyeExamination.groupBy\",\"EyeExamination.aggregate\",\"Prescription.findUnique\",\"Prescription.findUniqueOrThrow\",\"Prescription.findFirst\",\"Prescription.findFirstOrThrow\",\"Prescription.findMany\",\"Prescription.createOne\",\"Prescription.createMany\",\"Prescription.createManyAndReturn\",\"Prescription.updateOne\",\"Prescription.updateMany\",\"Prescription.updateManyAndReturn\",\"Prescription.upsertOne\",\"Prescription.deleteOne\",\"Prescription.deleteMany\",\"Prescription.groupBy\",\"Prescription.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"customerId\",\"source\",\"examinationId\",\"doctorName\",\"clinicName\",\"prescriptionDate\",\"expiryDate\",\"sphRight\",\"cylRight\",\"axisRight\",\"addRight\",\"sphLeft\",\"cylLeft\",\"axisLeft\",\"addLeft\",\"pdDistance\",\"pdNear\",\"notes\",\"createdAt\",\"updatedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"examinationDate\",\"examinedBy\",\"chiefComplaints\",\"unaidedVisionRight\",\"correctedVisionRight\",\"pinholeVisionRight\",\"finalVisionRight\",\"unaidedVisionLeft\",\"correctedVisionLeft\",\"pinholeVisionLeft\",\"finalVisionLeft\",\"iopRight\",\"iopLeft\",\"nearVisionRight\",\"nearVisionLeft\",\"examinationFindings\",\"recommendations\",\"followUpDate\",\"name\",\"phone\",\"email\",\"dob\",\"gender\",\"address\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
	graph: "zgEfMA8FAABwACAHAABvACBAAABrADBBAAARABBCAABrADBDAQAAAAFVAQBtACFWQABuACFXQABuACF1AQBsACF2AQBsACF3AQBtACF4AQBtACF5AQBtACF6AQBtACEBAAAAAQAgJQMAAHUAIAUAAHAAIEAAAHcAMEEAAAMAEEIAAHcAMEMBAGwAIUQBAGwAIUsIAHMAIUwIAHMAIU0CAHQAIU4IAHMAIU8IAHMAIVAIAHMAIVECAHQAIVIIAHMAIVMIAHMAIVQIAHMAIVZAAG4AIVdAAG4AIWNAAG4AIWQBAG0AIWUBAG0AIWYBAG0AIWcBAG0AIWgBAG0AIWkBAG0AIWoBAG0AIWsBAG0AIWwBAG0AIW0BAG0AIW4IAHMAIW8IAHMAIXABAG0AIXEBAG0AIXIBAG0AIXMBAG0AIXRAAHIAIR0DAAC7AQAgBQAAugEAIEsAAHgAIEwAAHgAIE0AAHgAIE4AAHgAIE8AAHgAIFAAAHgAIFEAAHgAIFIAAHgAIFMAAHgAIFQAAHgAIGQAAHgAIGUAAHgAIGYAAHgAIGcAAHgAIGgAAHgAIGkAAHgAIGoAAHgAIGsAAHgAIGwAAHgAIG0AAHgAIG4AAHgAIG8AAHgAIHAAAHgAIHEAAHgAIHIAAHgAIHMAAHgAIHQAAHgAICUDAAB1ACAFAABwACBAAAB3ADBBAAADABBCAAB3ADBDAQAAAAFEAQBsACFLCABzACFMCABzACFNAgB0ACFOCABzACFPCABzACFQCABzACFRAgB0ACFSCABzACFTCABzACFUCABzACFWQABuACFXQABuACFjQABuACFkAQBtACFlAQBtACFmAQBtACFnAQBtACFoAQBtACFpAQBtACFqAQBtACFrAQBtACFsAQBtACFtAQBtACFuCABzACFvCABzACFwAQBtACFxAQBtACFyAQBtACFzAQBtACF0QAByACEDAAAAAwAgAQAABAAwAgAABQAgGgMAAHUAIAQAAHYAIEAAAHEAMEEAAAcAEEIAAHEAMEMBAGwAIUQBAGwAIUUBAGwAIUYBAG0AIUcBAG0AIUgBAG0AIUlAAG4AIUpAAHIAIUsIAHMAIUwIAHMAIU0CAHQAIU4IAHMAIU8IAHMAIVAIAHMAIVECAHQAIVIIAHMAIVMIAHMAIVQIAHMAIVUBAG0AIVZAAG4AIVdAAG4AIREDAAC7AQAgBAAAvAEAIEYAAHgAIEcAAHgAIEgAAHgAIEoAAHgAIEsAAHgAIEwAAHgAIE0AAHgAIE4AAHgAIE8AAHgAIFAAAHgAIFEAAHgAIFIAAHgAIFMAAHgAIFQAAHgAIFUAAHgAIBoDAAB1ACAEAAB2ACBAAABxADBBAAAHABBCAABxADBDAQAAAAFEAQBsACFFAQBsACFGAQBtACFHAQBtACFIAQBtACFJQABuACFKQAByACFLCABzACFMCABzACFNAgB0ACFOCABzACFPCABzACFQCABzACFRAgB0ACFSCABzACFTCABzACFUCABzACFVAQBtACFWQABuACFXQABuACEDAAAABwAgAQAACAAwAgAACQAgAQAAAAMAIAEAAAAHACADAAAABwAgAQAACAAwAgAACQAgAQAAAAMAIAEAAAAHACABAAAAAQAgDwUAAHAAIAcAAG8AIEAAAGsAMEEAABEAEEIAAGsAMEMBAGwAIVUBAG0AIVZAAG4AIVdAAG4AIXUBAGwAIXYBAGwAIXcBAG0AIXgBAG0AIXkBAG0AIXoBAG0AIQcFAAC6AQAgBwAAuQEAIFUAAHgAIHcAAHgAIHgAAHgAIHkAAHgAIHoAAHgAIAMAAAARACABAAASADACAAABACADAAAAEQAgAQAAEgAwAgAAAQAgAwAAABEAIAEAABIAMAIAAAEAIAwFAAC4AQAgBwAAtwEAIEMBAAAAAVUBAAAAAVZAAAAAAVdAAAAAAXUBAAAAAXYBAAAAAXcBAAAAAXgBAAAAAXkBAAAAAXoBAAAAAQENAAAWACAKQwEAAAABVQEAAAABVkAAAAABV0AAAAABdQEAAAABdgEAAAABdwEAAAABeAEAAAABeQEAAAABegEAAAABAQ0AABgAMAENAAAYADAMBQAAoQEAIAcAAKABACBDAQB-ACFVAQB_ACFWQACAAQAhV0AAgAEAIXUBAH4AIXYBAH4AIXcBAH8AIXgBAH8AIXkBAH8AIXoBAH8AIQIAAAABACANAAAbACAKQwEAfgAhVQEAfwAhVkAAgAEAIVdAAIABACF1AQB-ACF2AQB-ACF3AQB_ACF4AQB_ACF5AQB_ACF6AQB_ACECAAAAEQAgDQAAHQAgAgAAABEAIA0AAB0AIAMAAAABACAUAAAWACAVAAAbACABAAAAAQAgAQAAABEAIAgGAACdAQAgGgAAnwEAIBsAAJ4BACBVAAB4ACB3AAB4ACB4AAB4ACB5AAB4ACB6AAB4ACANQAAAagAwQQAAJAAQQgAAagAwQwEAVgAhVQEAVwAhVkAAWAAhV0AAWAAhdQEAVgAhdgEAVgAhdwEAVwAheAEAVwAheQEAVwAhegEAVwAhAwAAABEAIAEAACMAMBkAACQAIAMAAAARACABAAASADACAAABACABAAAABQAgAQAAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAICIDAACbAQAgBQAAnAEAIEMBAAAAAUQBAAAAAUsIAAAAAUwIAAAAAU0CAAAAAU4IAAAAAU8IAAAAAVAIAAAAAVECAAAAAVIIAAAAAVMIAAAAAVQIAAAAAVZAAAAAAVdAAAAAAWNAAAAAAWQBAAAAAWUBAAAAAWYBAAAAAWcBAAAAAWgBAAAAAWkBAAAAAWoBAAAAAWsBAAAAAWwBAAAAAW0BAAAAAW4IAAAAAW8IAAAAAXABAAAAAXEBAAAAAXIBAAAAAXMBAAAAAXRAAAAAAQENAAAsACAgQwEAAAABRAEAAAABSwgAAAABTAgAAAABTQIAAAABTggAAAABTwgAAAABUAgAAAABUQIAAAABUggAAAABUwgAAAABVAgAAAABVkAAAAABV0AAAAABY0AAAAABZAEAAAABZQEAAAABZgEAAAABZwEAAAABaAEAAAABaQEAAAABagEAAAABawEAAAABbAEAAAABbQEAAAABbggAAAABbwgAAAABcAEAAAABcQEAAAABcgEAAAABcwEAAAABdEAAAAABAQ0AAC4AMAENAAAuADAiAwAAjQEAIAUAAI4BACBDAQB-ACFEAQB-ACFLCACCAQAhTAgAggEAIU0CAIMBACFOCACCAQAhTwgAggEAIVAIAIIBACFRAgCDAQAhUggAggEAIVMIAIIBACFUCACCAQAhVkAAgAEAIVdAAIABACFjQACAAQAhZAEAfwAhZQEAfwAhZgEAfwAhZwEAfwAhaAEAfwAhaQEAfwAhagEAfwAhawEAfwAhbAEAfwAhbQEAfwAhbggAggEAIW8IAIIBACFwAQB_ACFxAQB_ACFyAQB_ACFzAQB_ACF0QACBAQAhAgAAAAUAIA0AADEAICBDAQB-ACFEAQB-ACFLCACCAQAhTAgAggEAIU0CAIMBACFOCACCAQAhTwgAggEAIVAIAIIBACFRAgCDAQAhUggAggEAIVMIAIIBACFUCACCAQAhVkAAgAEAIVdAAIABACFjQACAAQAhZAEAfwAhZQEAfwAhZgEAfwAhZwEAfwAhaAEAfwAhaQEAfwAhagEAfwAhawEAfwAhbAEAfwAhbQEAfwAhbggAggEAIW8IAIIBACFwAQB_ACFxAQB_ACFyAQB_ACFzAQB_ACF0QACBAQAhAgAAAAMAIA0AADMAIAIAAAADACANAAAzACADAAAABQAgFAAALAAgFQAAMQAgAQAAAAUAIAEAAAADACAgBgAAiAEAIBoAAIsBACAbAACKAQAgLAAAiQEAIC0AAIwBACBLAAB4ACBMAAB4ACBNAAB4ACBOAAB4ACBPAAB4ACBQAAB4ACBRAAB4ACBSAAB4ACBTAAB4ACBUAAB4ACBkAAB4ACBlAAB4ACBmAAB4ACBnAAB4ACBoAAB4ACBpAAB4ACBqAAB4ACBrAAB4ACBsAAB4ACBtAAB4ACBuAAB4ACBvAAB4ACBwAAB4ACBxAAB4ACByAAB4ACBzAAB4ACB0AAB4ACAjQAAAaQAwQQAAOgAQQgAAaQAwQwEAVgAhRAEAVgAhSwgAWgAhTAgAWgAhTQIAWwAhTggAWgAhTwgAWgAhUAgAWgAhUQIAWwAhUggAWgAhUwgAWgAhVAgAWgAhVkAAWAAhV0AAWAAhY0AAWAAhZAEAVwAhZQEAVwAhZgEAVwAhZwEAVwAhaAEAVwAhaQEAVwAhagEAVwAhawEAVwAhbAEAVwAhbQEAVwAhbggAWgAhbwgAWgAhcAEAVwAhcQEAVwAhcgEAVwAhcwEAVwAhdEAAWQAhAwAAAAMAIAEAADkAMBkAADoAIAMAAAADACABAAAEADACAAAFACABAAAACQAgAQAAAAkAIAMAAAAHACABAAAIADACAAAJACADAAAABwAgAQAACAAwAgAACQAgAwAAAAcAIAEAAAgAMAIAAAkAIBcDAACGAQAgBAAAhwEAIEMBAAAAAUQBAAAAAUUBAAAAAUYBAAAAAUcBAAAAAUgBAAAAAUlAAAAAAUpAAAAAAUsIAAAAAUwIAAAAAU0CAAAAAU4IAAAAAU8IAAAAAVAIAAAAAVECAAAAAVIIAAAAAVMIAAAAAVQIAAAAAVUBAAAAAVZAAAAAAVdAAAAAAQENAABCACAVQwEAAAABRAEAAAABRQEAAAABRgEAAAABRwEAAAABSAEAAAABSUAAAAABSkAAAAABSwgAAAABTAgAAAABTQIAAAABTggAAAABTwgAAAABUAgAAAABUQIAAAABUggAAAABUwgAAAABVAgAAAABVQEAAAABVkAAAAABV0AAAAABAQ0AAEQAMAENAABEADABAAAAAwAgFwMAAIQBACAEAACFAQAgQwEAfgAhRAEAfgAhRQEAfgAhRgEAfwAhRwEAfwAhSAEAfwAhSUAAgAEAIUpAAIEBACFLCACCAQAhTAgAggEAIU0CAIMBACFOCACCAQAhTwgAggEAIVAIAIIBACFRAgCDAQAhUggAggEAIVMIAIIBACFUCACCAQAhVQEAfwAhVkAAgAEAIVdAAIABACECAAAACQAgDQAASAAgFUMBAH4AIUQBAH4AIUUBAH4AIUYBAH8AIUcBAH8AIUgBAH8AIUlAAIABACFKQACBAQAhSwgAggEAIUwIAIIBACFNAgCDAQAhTggAggEAIU8IAIIBACFQCACCAQAhUQIAgwEAIVIIAIIBACFTCACCAQAhVAgAggEAIVUBAH8AIVZAAIABACFXQACAAQAhAgAAAAcAIA0AAEoAIAIAAAAHACANAABKACABAAAAAwAgAwAAAAkAIBQAAEIAIBUAAEgAIAEAAAAJACABAAAABwAgFAYAAHkAIBoAAHwAIBsAAHsAICwAAHoAIC0AAH0AIEYAAHgAIEcAAHgAIEgAAHgAIEoAAHgAIEsAAHgAIEwAAHgAIE0AAHgAIE4AAHgAIE8AAHgAIFAAAHgAIFEAAHgAIFIAAHgAIFMAAHgAIFQAAHgAIFUAAHgAIBhAAABVADBBAABSABBCAABVADBDAQBWACFEAQBWACFFAQBWACFGAQBXACFHAQBXACFIAQBXACFJQABYACFKQABZACFLCABaACFMCABaACFNAgBbACFOCABaACFPCABaACFQCABaACFRAgBbACFSCABaACFTCABaACFUCABaACFVAQBXACFWQABYACFXQABYACEDAAAABwAgAQAAUQAwGQAAUgAgAwAAAAcAIAEAAAgAMAIAAAkAIBhAAABVADBBAABSABBCAABVADBDAQBWACFEAQBWACFFAQBWACFGAQBXACFHAQBXACFIAQBXACFJQABYACFKQABZACFLCABaACFMCABaACFNAgBbACFOCABaACFPCABaACFQCABaACFRAgBbACFSCABaACFTCABaACFUCABaACFVAQBXACFWQABYACFXQABYACEOBgAAYwAgGgAAaAAgGwAAaAAgWAEAAAABWQEAAAAEWgEAAAAEWwEAAAABXAEAAAABXQEAAAABXgEAAAABXwEAZwAhYAEAAAABYQEAAAABYgEAAAABDgYAAF0AIBoAAGYAIBsAAGYAIFgBAAAAAVkBAAAABVoBAAAABVsBAAAAAVwBAAAAAV0BAAAAAV4BAAAAAV8BAGUAIWABAAAAAWEBAAAAAWIBAAAAAQsGAABjACAaAABkACAbAABkACBYQAAAAAFZQAAAAARaQAAAAARbQAAAAAFcQAAAAAFdQAAAAAFeQAAAAAFfQABiACELBgAAXQAgGgAAYQAgGwAAYQAgWEAAAAABWUAAAAAFWkAAAAAFW0AAAAABXEAAAAABXUAAAAABXkAAAAABX0AAYAAhDQYAAF0AIBoAAF4AIBsAAF4AICwAAF4AIC0AAF4AIFgIAAAAAVkIAAAABVoIAAAABVsIAAAAAVwIAAAAAV0IAAAAAV4IAAAAAV8IAF8AIQ0GAABdACAaAABdACAbAABdACAsAABeACAtAABdACBYAgAAAAFZAgAAAAVaAgAAAAVbAgAAAAFcAgAAAAFdAgAAAAFeAgAAAAFfAgBcACENBgAAXQAgGgAAXQAgGwAAXQAgLAAAXgAgLQAAXQAgWAIAAAABWQIAAAAFWgIAAAAFWwIAAAABXAIAAAABXQIAAAABXgIAAAABXwIAXAAhCFgCAAAAAVkCAAAABVoCAAAABVsCAAAAAVwCAAAAAV0CAAAAAV4CAAAAAV8CAF0AIQhYCAAAAAFZCAAAAAVaCAAAAAVbCAAAAAFcCAAAAAFdCAAAAAFeCAAAAAFfCABeACENBgAAXQAgGgAAXgAgGwAAXgAgLAAAXgAgLQAAXgAgWAgAAAABWQgAAAAFWggAAAAFWwgAAAABXAgAAAABXQgAAAABXggAAAABXwgAXwAhCwYAAF0AIBoAAGEAIBsAAGEAIFhAAAAAAVlAAAAABVpAAAAABVtAAAAAAVxAAAAAAV1AAAAAAV5AAAAAAV9AAGAAIQhYQAAAAAFZQAAAAAVaQAAAAAVbQAAAAAFcQAAAAAFdQAAAAAFeQAAAAAFfQABhACELBgAAYwAgGgAAZAAgGwAAZAAgWEAAAAABWUAAAAAEWkAAAAAEW0AAAAABXEAAAAABXUAAAAABXkAAAAABX0AAYgAhCFgCAAAAAVkCAAAABFoCAAAABFsCAAAAAVwCAAAAAV0CAAAAAV4CAAAAAV8CAGMAIQhYQAAAAAFZQAAAAARaQAAAAARbQAAAAAFcQAAAAAFdQAAAAAFeQAAAAAFfQABkACEOBgAAXQAgGgAAZgAgGwAAZgAgWAEAAAABWQEAAAAFWgEAAAAFWwEAAAABXAEAAAABXQEAAAABXgEAAAABXwEAZQAhYAEAAAABYQEAAAABYgEAAAABC1gBAAAAAVkBAAAABVoBAAAABVsBAAAAAVwBAAAAAV0BAAAAAV4BAAAAAV8BAGYAIWABAAAAAWEBAAAAAWIBAAAAAQ4GAABjACAaAABoACAbAABoACBYAQAAAAFZAQAAAARaAQAAAARbAQAAAAFcAQAAAAFdAQAAAAFeAQAAAAFfAQBnACFgAQAAAAFhAQAAAAFiAQAAAAELWAEAAAABWQEAAAAEWgEAAAAEWwEAAAABXAEAAAABXQEAAAABXgEAAAABXwEAaAAhYAEAAAABYQEAAAABYgEAAAABI0AAAGkAMEEAADoAEEIAAGkAMEMBAFYAIUQBAFYAIUsIAFoAIUwIAFoAIU0CAFsAIU4IAFoAIU8IAFoAIVAIAFoAIVECAFsAIVIIAFoAIVMIAFoAIVQIAFoAIVZAAFgAIVdAAFgAIWNAAFgAIWQBAFcAIWUBAFcAIWYBAFcAIWcBAFcAIWgBAFcAIWkBAFcAIWoBAFcAIWsBAFcAIWwBAFcAIW0BAFcAIW4IAFoAIW8IAFoAIXABAFcAIXEBAFcAIXIBAFcAIXMBAFcAIXRAAFkAIQ1AAABqADBBAAAkABBCAABqADBDAQBWACFVAQBXACFWQABYACFXQABYACF1AQBWACF2AQBWACF3AQBXACF4AQBXACF5AQBXACF6AQBXACEPBQAAcAAgBwAAbwAgQAAAawAwQQAAEQAQQgAAawAwQwEAbAAhVQEAbQAhVkAAbgAhV0AAbgAhdQEAbAAhdgEAbAAhdwEAbQAheAEAbQAheQEAbQAhegEAbQAhC1gBAAAAAVkBAAAABFoBAAAABFsBAAAAAVwBAAAAAV0BAAAAAV4BAAAAAV8BAGgAIWABAAAAAWEBAAAAAWIBAAAAAQtYAQAAAAFZAQAAAAVaAQAAAAVbAQAAAAFcAQAAAAFdAQAAAAFeAQAAAAFfAQBmACFgAQAAAAFhAQAAAAFiAQAAAAEIWEAAAAABWUAAAAAEWkAAAAAEW0AAAAABXEAAAAABXUAAAAABXkAAAAABX0AAZAAhA3sAAAMAIHwAAAMAIH0AAAMAIAN7AAAHACB8AAAHACB9AAAHACAaAwAAdQAgBAAAdgAgQAAAcQAwQQAABwAQQgAAcQAwQwEAbAAhRAEAbAAhRQEAbAAhRgEAbQAhRwEAbQAhSAEAbQAhSUAAbgAhSkAAcgAhSwgAcwAhTAgAcwAhTQIAdAAhTggAcwAhTwgAcwAhUAgAcwAhUQIAdAAhUggAcwAhUwgAcwAhVAgAcwAhVQEAbQAhVkAAbgAhV0AAbgAhCFhAAAAAAVlAAAAABVpAAAAABVtAAAAAAVxAAAAAAV1AAAAAAV5AAAAAAV9AAGEAIQhYCAAAAAFZCAAAAAVaCAAAAAVbCAAAAAFcCAAAAAFdCAAAAAFeCAAAAAFfCABeACEIWAIAAAABWQIAAAAFWgIAAAAFWwIAAAABXAIAAAABXQIAAAABXgIAAAABXwIAXQAhEQUAAHAAIAcAAG8AIEAAAGsAMEEAABEAEEIAAGsAMEMBAGwAIVUBAG0AIVZAAG4AIVdAAG4AIXUBAGwAIXYBAGwAIXcBAG0AIXgBAG0AIXkBAG0AIXoBAG0AIX4AABEAIH8AABEAICcDAAB1ACAFAABwACBAAAB3ADBBAAADABBCAAB3ADBDAQBsACFEAQBsACFLCABzACFMCABzACFNAgB0ACFOCABzACFPCABzACFQCABzACFRAgB0ACFSCABzACFTCABzACFUCABzACFWQABuACFXQABuACFjQABuACFkAQBtACFlAQBtACFmAQBtACFnAQBtACFoAQBtACFpAQBtACFqAQBtACFrAQBtACFsAQBtACFtAQBtACFuCABzACFvCABzACFwAQBtACFxAQBtACFyAQBtACFzAQBtACF0QAByACF-AAADACB_AAADACAlAwAAdQAgBQAAcAAgQAAAdwAwQQAAAwAQQgAAdwAwQwEAbAAhRAEAbAAhSwgAcwAhTAgAcwAhTQIAdAAhTggAcwAhTwgAcwAhUAgAcwAhUQIAdAAhUggAcwAhUwgAcwAhVAgAcwAhVkAAbgAhV0AAbgAhY0AAbgAhZAEAbQAhZQEAbQAhZgEAbQAhZwEAbQAhaAEAbQAhaQEAbQAhagEAbQAhawEAbQAhbAEAbQAhbQEAbQAhbggAcwAhbwgAcwAhcAEAbQAhcQEAbQAhcgEAbQAhcwEAbQAhdEAAcgAhAAAAAAAAAYMBAQAAAAEBgwEBAAAAAQGDAUAAAAABAYMBQAAAAAEFgwEIAAAAAYkBCAAAAAGKAQgAAAABiwEIAAAAAYwBCAAAAAEFgwECAAAAAYkBAgAAAAGKAQIAAAABiwECAAAAAYwBAgAAAAEFFAAAxwEAIBUAAM0BACCAAQAAyAEAIIEBAADMAQAghgEAAAEAIAcUAADFAQAgFQAAygEAIIABAADGAQAggQEAAMkBACCEAQAAAwAghQEAAAMAIIYBAAAFACADFAAAxwEAIIABAADIAQAghgEAAAEAIAMUAADFAQAggAEAAMYBACCGAQAABQAgAAAAAAAFFAAAvwEAIBUAAMMBACCAAQAAwAEAIIEBAADCAQAghgEAAAEAIAsUAACPAQAwFQAAlAEAMIABAACQAQAwgQEAAJEBADCCAQAAkgEAIIMBAACTAQAwhAEAAJMBADCFAQAAkwEAMIYBAACTAQAwhwEAAJUBADCIAQAAlgEAMBUDAACGAQAgQwEAAAABRAEAAAABRQEAAAABRwEAAAABSAEAAAABSUAAAAABSkAAAAABSwgAAAABTAgAAAABTQIAAAABTggAAAABTwgAAAABUAgAAAABUQIAAAABUggAAAABUwgAAAABVAgAAAABVQEAAAABVkAAAAABV0AAAAABAgAAAAkAIBQAAJoBACADAAAACQAgFAAAmgEAIBUAAJkBACABDQAAwQEAMBoDAAB1ACAEAAB2ACBAAABxADBBAAAHABBCAABxADBDAQAAAAFEAQBsACFFAQBsACFGAQBtACFHAQBtACFIAQBtACFJQABuACFKQAByACFLCABzACFMCABzACFNAgB0ACFOCABzACFPCABzACFQCABzACFRAgB0ACFSCABzACFTCABzACFUCABzACFVAQBtACFWQABuACFXQABuACECAAAACQAgDQAAmQEAIAIAAACXAQAgDQAAmAEAIBhAAACWAQAwQQAAlwEAEEIAAJYBADBDAQBsACFEAQBsACFFAQBsACFGAQBtACFHAQBtACFIAQBtACFJQABuACFKQAByACFLCABzACFMCABzACFNAgB0ACFOCABzACFPCABzACFQCABzACFRAgB0ACFSCABzACFTCABzACFUCABzACFVAQBtACFWQABuACFXQABuACEYQAAAlgEAMEEAAJcBABBCAACWAQAwQwEAbAAhRAEAbAAhRQEAbAAhRgEAbQAhRwEAbQAhSAEAbQAhSUAAbgAhSkAAcgAhSwgAcwAhTAgAcwAhTQIAdAAhTggAcwAhTwgAcwAhUAgAcwAhUQIAdAAhUggAcwAhUwgAcwAhVAgAcwAhVQEAbQAhVkAAbgAhV0AAbgAhFEMBAH4AIUQBAH4AIUUBAH4AIUcBAH8AIUgBAH8AIUlAAIABACFKQACBAQAhSwgAggEAIUwIAIIBACFNAgCDAQAhTggAggEAIU8IAIIBACFQCACCAQAhUQIAgwEAIVIIAIIBACFTCACCAQAhVAgAggEAIVUBAH8AIVZAAIABACFXQACAAQAhFQMAAIQBACBDAQB-ACFEAQB-ACFFAQB-ACFHAQB_ACFIAQB_ACFJQACAAQAhSkAAgQEAIUsIAIIBACFMCACCAQAhTQIAgwEAIU4IAIIBACFPCACCAQAhUAgAggEAIVECAIMBACFSCACCAQAhUwgAggEAIVQIAIIBACFVAQB_ACFWQACAAQAhV0AAgAEAIRUDAACGAQAgQwEAAAABRAEAAAABRQEAAAABRwEAAAABSAEAAAABSUAAAAABSkAAAAABSwgAAAABTAgAAAABTQIAAAABTggAAAABTwgAAAABUAgAAAABUQIAAAABUggAAAABUwgAAAABVAgAAAABVQEAAAABVkAAAAABV0AAAAABAxQAAL8BACCAAQAAwAEAIIYBAAABACAEFAAAjwEAMIABAACQAQAwggEAAJIBACCGAQAAkwEAMAAAAAsUAACrAQAwFQAAsAEAMIABAACsAQAwgQEAAK0BADCCAQAArgEAIIMBAACvAQAwhAEAAK8BADCFAQAArwEAMIYBAACvAQAwhwEAALEBADCIAQAAsgEAMAsUAACiAQAwFQAApgEAMIABAACjAQAwgQEAAKQBADCCAQAApQEAIIMBAACTAQAwhAEAAJMBADCFAQAAkwEAMIYBAACTAQAwhwEAAKcBADCIAQAAlgEAMBUEAACHAQAgQwEAAAABRQEAAAABRgEAAAABRwEAAAABSAEAAAABSUAAAAABSkAAAAABSwgAAAABTAgAAAABTQIAAAABTggAAAABTwgAAAABUAgAAAABUQIAAAABUggAAAABUwgAAAABVAgAAAABVQEAAAABVkAAAAABV0AAAAABAgAAAAkAIBQAAKoBACADAAAACQAgFAAAqgEAIBUAAKkBACABDQAAvgEAMAIAAAAJACANAACpAQAgAgAAAJcBACANAACoAQAgFEMBAH4AIUUBAH4AIUYBAH8AIUcBAH8AIUgBAH8AIUlAAIABACFKQACBAQAhSwgAggEAIUwIAIIBACFNAgCDAQAhTggAggEAIU8IAIIBACFQCACCAQAhUQIAgwEAIVIIAIIBACFTCACCAQAhVAgAggEAIVUBAH8AIVZAAIABACFXQACAAQAhFQQAAIUBACBDAQB-ACFFAQB-ACFGAQB_ACFHAQB_ACFIAQB_ACFJQACAAQAhSkAAgQEAIUsIAIIBACFMCACCAQAhTQIAgwEAIU4IAIIBACFPCACCAQAhUAgAggEAIVECAIMBACFSCACCAQAhUwgAggEAIVQIAIIBACFVAQB_ACFWQACAAQAhV0AAgAEAIRUEAACHAQAgQwEAAAABRQEAAAABRgEAAAABRwEAAAABSAEAAAABSUAAAAABSkAAAAABSwgAAAABTAgAAAABTQIAAAABTggAAAABTwgAAAABUAgAAAABUQIAAAABUggAAAABUwgAAAABVAgAAAABVQEAAAABVkAAAAABV0AAAAABIAUAAJwBACBDAQAAAAFLCAAAAAFMCAAAAAFNAgAAAAFOCAAAAAFPCAAAAAFQCAAAAAFRAgAAAAFSCAAAAAFTCAAAAAFUCAAAAAFWQAAAAAFXQAAAAAFjQAAAAAFkAQAAAAFlAQAAAAFmAQAAAAFnAQAAAAFoAQAAAAFpAQAAAAFqAQAAAAFrAQAAAAFsAQAAAAFtAQAAAAFuCAAAAAFvCAAAAAFwAQAAAAFxAQAAAAFyAQAAAAFzAQAAAAF0QAAAAAECAAAABQAgFAAAtgEAIAMAAAAFACAUAAC2AQAgFQAAtQEAIAENAAC9AQAwJQMAAHUAIAUAAHAAIEAAAHcAMEEAAAMAEEIAAHcAMEMBAAAAAUQBAGwAIUsIAHMAIUwIAHMAIU0CAHQAIU4IAHMAIU8IAHMAIVAIAHMAIVECAHQAIVIIAHMAIVMIAHMAIVQIAHMAIVZAAG4AIVdAAG4AIWNAAG4AIWQBAG0AIWUBAG0AIWYBAG0AIWcBAG0AIWgBAG0AIWkBAG0AIWoBAG0AIWsBAG0AIWwBAG0AIW0BAG0AIW4IAHMAIW8IAHMAIXABAG0AIXEBAG0AIXIBAG0AIXMBAG0AIXRAAHIAIQIAAAAFACANAAC1AQAgAgAAALMBACANAAC0AQAgI0AAALIBADBBAACzAQAQQgAAsgEAMEMBAGwAIUQBAGwAIUsIAHMAIUwIAHMAIU0CAHQAIU4IAHMAIU8IAHMAIVAIAHMAIVECAHQAIVIIAHMAIVMIAHMAIVQIAHMAIVZAAG4AIVdAAG4AIWNAAG4AIWQBAG0AIWUBAG0AIWYBAG0AIWcBAG0AIWgBAG0AIWkBAG0AIWoBAG0AIWsBAG0AIWwBAG0AIW0BAG0AIW4IAHMAIW8IAHMAIXABAG0AIXEBAG0AIXIBAG0AIXMBAG0AIXRAAHIAISNAAACyAQAwQQAAswEAEEIAALIBADBDAQBsACFEAQBsACFLCABzACFMCABzACFNAgB0ACFOCABzACFPCABzACFQCABzACFRAgB0ACFSCABzACFTCABzACFUCABzACFWQABuACFXQABuACFjQABuACFkAQBtACFlAQBtACFmAQBtACFnAQBtACFoAQBtACFpAQBtACFqAQBtACFrAQBtACFsAQBtACFtAQBtACFuCABzACFvCABzACFwAQBtACFxAQBtACFyAQBtACFzAQBtACF0QAByACEfQwEAfgAhSwgAggEAIUwIAIIBACFNAgCDAQAhTggAggEAIU8IAIIBACFQCACCAQAhUQIAgwEAIVIIAIIBACFTCACCAQAhVAgAggEAIVZAAIABACFXQACAAQAhY0AAgAEAIWQBAH8AIWUBAH8AIWYBAH8AIWcBAH8AIWgBAH8AIWkBAH8AIWoBAH8AIWsBAH8AIWwBAH8AIW0BAH8AIW4IAIIBACFvCACCAQAhcAEAfwAhcQEAfwAhcgEAfwAhcwEAfwAhdEAAgQEAISAFAACOAQAgQwEAfgAhSwgAggEAIUwIAIIBACFNAgCDAQAhTggAggEAIU8IAIIBACFQCACCAQAhUQIAgwEAIVIIAIIBACFTCACCAQAhVAgAggEAIVZAAIABACFXQACAAQAhY0AAgAEAIWQBAH8AIWUBAH8AIWYBAH8AIWcBAH8AIWgBAH8AIWkBAH8AIWoBAH8AIWsBAH8AIWwBAH8AIW0BAH8AIW4IAIIBACFvCACCAQAhcAEAfwAhcQEAfwAhcgEAfwAhcwEAfwAhdEAAgQEAISAFAACcAQAgQwEAAAABSwgAAAABTAgAAAABTQIAAAABTggAAAABTwgAAAABUAgAAAABUQIAAAABUggAAAABUwgAAAABVAgAAAABVkAAAAABV0AAAAABY0AAAAABZAEAAAABZQEAAAABZgEAAAABZwEAAAABaAEAAAABaQEAAAABagEAAAABawEAAAABbAEAAAABbQEAAAABbggAAAABbwgAAAABcAEAAAABcQEAAAABcgEAAAABcwEAAAABdEAAAAABBBQAAKsBADCAAQAArAEAMIIBAACuAQAghgEAAK8BADAEFAAAogEAMIABAACjAQAwggEAAKUBACCGAQAAkwEAMAAABwUAALoBACAHAAC5AQAgVQAAeAAgdwAAeAAgeAAAeAAgeQAAeAAgegAAeAAgHQMAALsBACAFAAC6AQAgSwAAeAAgTAAAeAAgTQAAeAAgTgAAeAAgTwAAeAAgUAAAeAAgUQAAeAAgUgAAeAAgUwAAeAAgVAAAeAAgZAAAeAAgZQAAeAAgZgAAeAAgZwAAeAAgaAAAeAAgaQAAeAAgagAAeAAgawAAeAAgbAAAeAAgbQAAeAAgbgAAeAAgbwAAeAAgcAAAeAAgcQAAeAAgcgAAeAAgcwAAeAAgdAAAeAAgH0MBAAAAAUsIAAAAAUwIAAAAAU0CAAAAAU4IAAAAAU8IAAAAAVAIAAAAAVECAAAAAVIIAAAAAVMIAAAAAVQIAAAAAVZAAAAAAVdAAAAAAWNAAAAAAWQBAAAAAWUBAAAAAWYBAAAAAWcBAAAAAWgBAAAAAWkBAAAAAWoBAAAAAWsBAAAAAWwBAAAAAW0BAAAAAW4IAAAAAW8IAAAAAXABAAAAAXEBAAAAAXIBAAAAAXMBAAAAAXRAAAAAARRDAQAAAAFFAQAAAAFGAQAAAAFHAQAAAAFIAQAAAAFJQAAAAAFKQAAAAAFLCAAAAAFMCAAAAAFNAgAAAAFOCAAAAAFPCAAAAAFQCAAAAAFRAgAAAAFSCAAAAAFTCAAAAAFUCAAAAAFVAQAAAAFWQAAAAAFXQAAAAAELBQAAuAEAIEMBAAAAAVUBAAAAAVZAAAAAAVdAAAAAAXUBAAAAAXYBAAAAAXcBAAAAAXgBAAAAAXkBAAAAAXoBAAAAAQIAAAABACAUAAC_AQAgFEMBAAAAAUQBAAAAAUUBAAAAAUcBAAAAAUgBAAAAAUlAAAAAAUpAAAAAAUsIAAAAAUwIAAAAAU0CAAAAAU4IAAAAAU8IAAAAAVAIAAAAAVECAAAAAVIIAAAAAVMIAAAAAVQIAAAAAVUBAAAAAVZAAAAAAVdAAAAAAQMAAAARACAUAAC_AQAgFQAAxAEAIA0AAAARACAFAAChAQAgDQAAxAEAIEMBAH4AIVUBAH8AIVZAAIABACFXQACAAQAhdQEAfgAhdgEAfgAhdwEAfwAheAEAfwAheQEAfwAhegEAfwAhCwUAAKEBACBDAQB-ACFVAQB_ACFWQACAAQAhV0AAgAEAIXUBAH4AIXYBAH4AIXcBAH8AIXgBAH8AIXkBAH8AIXoBAH8AISEDAACbAQAgQwEAAAABRAEAAAABSwgAAAABTAgAAAABTQIAAAABTggAAAABTwgAAAABUAgAAAABUQIAAAABUggAAAABUwgAAAABVAgAAAABVkAAAAABV0AAAAABY0AAAAABZAEAAAABZQEAAAABZgEAAAABZwEAAAABaAEAAAABaQEAAAABagEAAAABawEAAAABbAEAAAABbQEAAAABbggAAAABbwgAAAABcAEAAAABcQEAAAABcgEAAAABcwEAAAABdEAAAAABAgAAAAUAIBQAAMUBACALBwAAtwEAIEMBAAAAAVUBAAAAAVZAAAAAAVdAAAAAAXUBAAAAAXYBAAAAAXcBAAAAAXgBAAAAAXkBAAAAAXoBAAAAAQIAAAABACAUAADHAQAgAwAAAAMAIBQAAMUBACAVAADLAQAgIwAAAAMAIAMAAI0BACANAADLAQAgQwEAfgAhRAEAfgAhSwgAggEAIUwIAIIBACFNAgCDAQAhTggAggEAIU8IAIIBACFQCACCAQAhUQIAgwEAIVIIAIIBACFTCACCAQAhVAgAggEAIVZAAIABACFXQACAAQAhY0AAgAEAIWQBAH8AIWUBAH8AIWYBAH8AIWcBAH8AIWgBAH8AIWkBAH8AIWoBAH8AIWsBAH8AIWwBAH8AIW0BAH8AIW4IAIIBACFvCACCAQAhcAEAfwAhcQEAfwAhcgEAfwAhcwEAfwAhdEAAgQEAISEDAACNAQAgQwEAfgAhRAEAfgAhSwgAggEAIUwIAIIBACFNAgCDAQAhTggAggEAIU8IAIIBACFQCACCAQAhUQIAgwEAIVIIAIIBACFTCACCAQAhVAgAggEAIVZAAIABACFXQACAAQAhY0AAgAEAIWQBAH8AIWUBAH8AIWYBAH8AIWcBAH8AIWgBAH8AIWkBAH8AIWoBAH8AIWsBAH8AIWwBAH8AIW0BAH8AIW4IAIIBACFvCACCAQAhcAEAfwAhcQEAfwAhcgEAfwAhcwEAfwAhdEAAgQEAIQMAAAARACAUAADHAQAgFQAAzgEAIA0AAAARACAHAACgAQAgDQAAzgEAIEMBAH4AIVUBAH8AIVZAAIABACFXQACAAQAhdQEAfgAhdgEAfgAhdwEAfwAheAEAfwAheQEAfwAhegEAfwAhCwcAAKABACBDAQB-ACFVAQB_ACFWQACAAQAhV0AAgAEAIXUBAH4AIXYBAH4AIXcBAH8AIXgBAH8AIXkBAH8AIXoBAH8AIQMFDQMGAAUHBgIDAwABBQoDBgAEAgMAAQQLAgEFDAACBQ8ABw4AAAAAAwYAChoACxsADAAAAAMGAAoaAAsbAAwBAwABAQMAAQUGABEaABQbABUsABItABMAAAAAAAUGABEaABQbABUsABItABMCAwABBEcCAgMAAQRNAgUGABoaAB0bAB4sABstABwAAAAAAAUGABoaAB0bAB4sABstABwIAgEJEAEKEwELFAEMFQEOFwEPGQYQGgcRHAESHgYTHwgWIAEXIQEYIgYcJQkdJg0eJwIfKAIgKQIhKgIiKwIjLQIkLwYlMA4mMgInNAYoNQ8pNgIqNwIrOAYuOxAvPBYwPQMxPgMyPwMzQAM0QQM1QwM2RQY3Rhc4SQM5SwY6TBg7TgM8TwM9UAY-Uxk_VB8"
};
async function decodeBase64AsWasm(wasmBase64) {
	const { Buffer } = await import("node:buffer");
	const wasmArray = Buffer.from(wasmBase64, "base64");
	return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
	getRuntime: async () => await import("./query_compiler_fast_bg.sqlite-Db85_PVT.js"),
	getQueryCompilerWasmModule: async () => {
		const { wasm } = await import("./query_compiler_fast_bg.sqlite.wasm-base64-BGh56NkZ.js");
		return await decodeBase64AsWasm(wasm);
	},
	importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
	return import_client.getPrismaClient(config);
}
import_client.Extensions.getExtensionContext;
import_client.NullTypes.DbNull, import_client.NullTypes.JsonNull, import_client.NullTypes.AnyNull;
import_client.makeStrictEnum({ Serializable: "Serializable" });
import_client.Extensions.defineExtension;
// generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
/**
* ## Prisma Client
* 
* Type-safe database client for TypeScript
* @example
* ```
* const prisma = new PrismaClient({
*   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
* })
* // Fetch zero or more Customers
* const customers = await prisma.customer.findMany()
* ```
* 
* Read more in our [docs](https://pris.ly/d/client).
*/
var PrismaClient = getPrismaClientClass();
// electron/database/examination.handlers.ts
function convertDate$1(value) {
	if (value === void 0) return void 0;
	if (value === null || value === "") return null;
	return value instanceof Date ? value : new Date(value);
}
function registerExaminationHandlers(ipcMain, prisma) {
	ipcMain.handle("examinations:getByCustomer", async (_event, customerId) => {
		return prisma.eyeExamination.findMany({
			where: { customerId },
			orderBy: [{ examinationDate: "desc" }, { createdAt: "desc" }]
		});
	});
	ipcMain.handle("examinations:getById", async (_event, id) => {
		return prisma.eyeExamination.findUnique({ where: { id } });
	});
	ipcMain.handle("examinations:create", async (_event, data) => {
		const { examinationDate, followUpDate, ...fields } = data;
		return prisma.eyeExamination.create({ data: {
			...fields,
			examinationDate: convertDate$1(examinationDate) ?? /* @__PURE__ */ new Date(),
			followUpDate: convertDate$1(followUpDate) ?? null
		} });
	});
	ipcMain.handle("examinations:update", async (_event, data) => {
		const { id, examinationDate, followUpDate, ...fields } = data;
		return prisma.eyeExamination.update({
			where: { id },
			data: {
				...fields,
				...examinationDate !== void 0 && { examinationDate: convertDate$1(examinationDate) ?? /* @__PURE__ */ new Date() },
				...followUpDate !== void 0 && { followUpDate: convertDate$1(followUpDate) }
			}
		});
	});
}
// electron/database/prescription.handlers.ts
function convertDate(value) {
	if (value === void 0) return void 0;
	if (value === null || value === "") return null;
	return value instanceof Date ? value : new Date(value);
}
function registerPrescriptionHandlers(ipcMain, prisma) {
	ipcMain.handle("prescriptions:getByCustomer", async (_event, customerId) => {
		return prisma.prescription.findMany({
			where: { customerId },
			orderBy: [{ prescriptionDate: "desc" }, { createdAt: "desc" }],
			include: { examination: true }
		});
	});
	ipcMain.handle("prescriptions:getById", async (_event, id) => {
		return prisma.prescription.findUnique({
			where: { id },
			include: {
				examination: true,
				customer: true
			}
		});
	});
	ipcMain.handle("prescriptions:create", async (_event, data) => {
		const { prescriptionDate, expiryDate, ...fields } = data;
		return prisma.prescription.create({ data: {
			...fields,
			prescriptionDate: convertDate(prescriptionDate) ?? /* @__PURE__ */ new Date(),
			expiryDate: convertDate(expiryDate) ?? null
		} });
	});
	ipcMain.handle("prescriptions:update", async (_event, data) => {
		const { id, prescriptionDate, expiryDate, ...fields } = data;
		return prisma.prescription.update({
			where: { id },
			data: {
				...fields,
				...prescriptionDate !== void 0 && { prescriptionDate: convertDate(prescriptionDate) ?? /* @__PURE__ */ new Date() },
				...expiryDate !== void 0 && { expiryDate: convertDate(expiryDate) }
			}
		});
	});
	ipcMain.handle("prescriptions:delete", async (_event, id) => {
		return prisma.prescription.delete({ where: { id } });
	});
}
// electron/main.ts
var databasePath = resolve(process.cwd(), "dev.db").replace(/\\/g, "/");
var prisma = new PrismaClient({ adapter: new PrismaBetterSqlite3({ url: `file:${databasePath}` }) });
function createWindow() {
	const window = new BrowserWindow({
		width: 1400,
		height: 900,
		minWidth: 1e3,
		minHeight: 650,
		webPreferences: {
			preload: join$1(import.meta.dirname, "preload.mjs"),
			contextIsolation: true,
			nodeIntegration: false,
			sandbox: false
		}
	});
	if (app.isPackaged) window.loadFile(join$1(app.getAppPath(), "dist", "index.html"));
	else {
		const devServerUrl = process.env.VITE_DEV_SERVER_URL;
		if (devServerUrl) window.loadURL(devServerUrl);
		else window.loadFile(join$1(app.getAppPath(), "dist", "index.html"));
	}
}
ipcMain.handle("customers:getAll", async () => {
	try {
		console.log("Starting Prisma findMany...");
		const result = await prisma.customer.findMany({ orderBy: { createdAt: "desc" } });
		console.log("Prisma query successful:", result);
		return result;
	} catch (error) {
		console.error("FULL PRISMA ERROR:", error);
		console.error("ERROR STACK:", error instanceof Error ? error.stack : error);
		throw error;
	}
});
ipcMain.handle("customers:create", async (_event, data) => {
	return prisma.customer.create({ data: {
		id: data.id,
		name: data.name,
		phone: data.phone,
		email: data.email || null,
		dob: data.dob || null,
		gender: data.gender || null,
		address: data.address || null,
		notes: data.notes || null
	} });
});
ipcMain.handle("customers:update", async (_event, data) => {
	return prisma.customer.update({
		where: { id: data.id },
		data: {
			name: data.name,
			phone: data.phone,
			email: data.email || null,
			dob: data.dob || null,
			gender: data.gender || null,
			address: data.address || null,
			notes: data.notes || null
		}
	});
});
ipcMain.handle("customers:delete", async (_event, id) => {
	return prisma.customer.delete({ where: { id } });
});
registerExaminationHandlers(ipcMain, prisma);
registerPrescriptionHandlers(ipcMain, prisma);
app.whenReady().then(() => {
	createWindow();
	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
app.on("before-quit", async () => {
	await prisma.$disconnect();
});
export {};
