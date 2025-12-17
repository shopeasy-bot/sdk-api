//#region src/api.ts
var ApiClient = class {
	constructor(options) {
		this.options = options;
	}
	get headers() {
		return {
			"Content-Type": "application/json",
			...this.options.token && { Authorization: `Bearer ${this.options.token}` }
		};
	}
	async request(path, options) {
		const response = await fetch(`${this.options.baseUrl}${path}`, {
			...options,
			headers: {
				...this.headers,
				...options?.headers
			}
		});
		if (!response.ok) {
			const error = await response.json().catch(() => null);
			throw new Error(error?.error ?? response.statusText);
		}
		return response.json();
	}
	get(path) {
		return this.request(path);
	}
	post(path, body) {
		return this.request(path, {
			method: "POST",
			body: JSON.stringify(body)
		});
	}
	patch(path, body) {
		return this.request(path, {
			method: "PATCH",
			body: JSON.stringify(body)
		});
	}
	delete(path) {
		return this.request(path, { method: "DELETE" });
	}
};

//#endregion
//#region src/services/product.service.ts
var ProductsService = class {
	constructor(api) {
		this.api = api;
	}
	getById(guildId, id) {
		return this.api.get(`/guilds/${guildId}/products/${id}`);
	}
	create(guildId, payload) {
		return this.api.post(`/guilds/${guildId}/products`, payload);
	}
	update(guildId, id, payload) {
		return this.api.patch(`/guilds/${guildId}/products/${id}`, payload);
	}
	delete(guildId, id) {
		return this.api.delete(`/guilds/${guildId}/products/${id}`);
	}
};

//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
		return typeof o$1;
	} : function(o$1) {
		return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
	}, _typeof(o);
}

//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}

//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}

//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}

//#endregion
//#region src/index.ts
var ShopEasyApi = class {
	constructor(options) {
		_defineProperty(this, "products", void 0);
		_defineProperty(this, "api", void 0);
		this.api = new ApiClient(options);
		this.products = new ProductsService(this.api);
	}
};

//#endregion
export { ShopEasyApi };