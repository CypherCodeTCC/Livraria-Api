"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const supabase = (0, supabase_js_1.createClient)(process.env.supabaseURL, process.env.supabaseKEY);
exports.default = supabase;
//# sourceMappingURL=supabase.js.map