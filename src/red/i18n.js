/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = (function() {

    const fs = require("fs");
    const path = require("path");

    const localePath = path.join(__dirname, '../../locales/messages.json');
    const data = fs.readFileSync(localePath);
    const locale = JSON.parse(data);

    return {
        init: function(RED) {
            RED["_"] = function(arg) {
                if (arg) {
                    const parts = arg.split(".");
                    let root = locale;
                    for (let part of parts) {
                        root = root[part];
                    }
                    return root;
                }
                return "";
            }
        }
    }
})();
